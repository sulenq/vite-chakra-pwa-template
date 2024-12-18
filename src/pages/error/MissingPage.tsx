import BButton from "@/components/ui-custom/BButton";
import { Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MissingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <VStack h={"100vh"} gap={0}>
      <VStack p={8} flex={1} justify={"center"} gap={4} w={"full"}>
        <Text textAlign={"center"} fontSize={32} fontWeight={600}>
          404 Page Not Found
        </Text>

        <Text textAlign={"center"} mb={4} maxW={"600px"} color={"fg.muted"}>
          Halaman yang Anda cari tidak tersedia. Kemungkinan ada URL yang
          keliru.
        </Text>

        <Link to={"/"}>
          <BButton w="full">Kembali ke halaman utama</BButton>
        </Link>
      </VStack>

      <VStack w={"full"} py={4}>
        <Text
          textAlign={"center"}
          // color={"fg.inverted"}
          fontSize={"sm"}
        >
          © {currentYear} powered by{" "}
          <span style={{ fontWeight: 600 }}>Exium</span>
        </Text>
      </VStack>
    </VStack>
  );
}
