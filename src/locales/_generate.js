import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Path ke master translation
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MASTER_PATH = path.join(__dirname, "_master.js");

// Load _master.js sebagai CommonJS
const MASTER = await import(`file://${MASTER_PATH}`).then(
  (m) => m.default || m
);

// Pastikan objek tidak kosong
if (!Object.keys(MASTER).length) {
  console.error("❌ No objects found in _master.js");
  process.exit(1);
}

// Ambil daftar bahasa dari objek pertama
const languages = Object.keys(Object.values(MASTER)[0].title);

languages.forEach((lang) => {
  const translations = {};

  Object.entries(MASTER).forEach(([key, value]) => {
    translations[key] = Object.fromEntries(
      Object.entries(value).map(([subKey, subValue]) => [
        subKey,
        subValue[lang],
      ])
    );
  });

  const content = `const translations = ${JSON.stringify(
    translations,
    null,
    2
  )};\n\nexport default translations;`;

  fs.writeFileSync(path.join(__dirname, `${lang}.ts`), content);
  console.log(`✅ Generated ${lang}.ts`);
});

console.log("✅ All translations generated!");
