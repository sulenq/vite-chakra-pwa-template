import {
  ChartLineDown,
  DesktopTower,
  DeviceMobile,
  Devices,
  Eye,
  HardDrives,
  HardHat,
  InstagramLogo,
  LineSegments,
  LinkedinLogo,
  Scales,
  Toolbox,
  WhatsappLogo,
} from "@phosphor-icons/react";

const contents = {
  headline: {
    id: "Tempat Ide Visioner Menjadi Nyata",
    en: "Where Visionary Ideas Take Shape",
  },
  tagline: "visionary engineering",
  home: {
    hero: {
      intro: {
        id: "Kami adalah ahli rekayasa visioner yang merancang solusi inovatif untuk tantangan modern, menciptakan pengalaman efisien dan berdampak jangka panjang.",
        en: "We are visionary engineers who design innovative solutions to modern challenges, creating efficient and impactful experiences that last.",
      },
      cta: {
        id: "Mari diskusi",
        en: "Let's talk",
      },
      ctaDescription: {
        id: "Anda akan diskusi dengan tim internal kami",
        en: "You'll be talking with our internal team",
      },
    },
    services: {
      title: {
        id: "Layanan oleh Exium",
        en: "Services by Exium",
      },
      intro: {
        id: "Jangan biarkan masalah teknologi menghambat bisnis Anda. Dengan solusi PWA yang fleksibel dan mudah diakses di semua perangkat, kami siap membantu Anda menjangkau lebih banyak pengguna tanpa batasan platform dan menjaga aplikasi tetap scalable seiring pertumbuhan bisnis Anda.",
        en: "Don't let technology issues hold your business back. With flexible and easily accessible PWA solutions across all devices, we're ready to help you reach more users without platform limitations and keep your app scalable as your business grows.",
      },
      services: [
        {
          icon: Devices,
          problem: { id: "Akses Terbatas ke Aplikasi Anda?", en: "" },
          solution: {
            id: "Platform-Agnostic PWA yang Mudah Dikelola",
            en: "",
          },
          description: {
            id: "Kesulitan dengan aplikasi yang hanya bisa diakses di desktop atau platform tertentu? Kami mengubah cara aplikasi Anda diakses. Dengan web app yang dapat bertransformasi menjadi PWA, Anda bisa memberikan pengalaman mulus di semua perangkat, baik desktop maupun mobile, tanpa repot mengembangkan aplikasi native terpisah. Lebih fleksibel, lebih hemat, lebih efisien.",
            en: "",
          },
          notes: [
            {
              label: { id: "PWA", en: "PWA" },
              description: {
                id: "Progressive Web App (PWA) adalah aplikasi berbasis web yang dirancang agar terlihat dan berfungsi seperti aplikasi native di perangkat mobile maupun desktop. Dengan PWA, pengguna bisa mengakses aplikasi langsung dari browser tanpa perlu mengunduhnya dari app store, tetapi tetap bisa menyimpan shortcut di layar utama, mendapatkan notifikasi, dan bahkan menggunakan aplikasi saat offline. PWA menawarkan pengalaman cepat, responsif, dan fleksibel di berbagai platform dengan biaya pengembangan yang lebih rendah dibandingkan aplikasi native.",
                en: "",
              },
            },
          ],
        },
        {
          icon: ChartLineDown,
          problem: {
            id: "Aplikasi yang Sulit Dikelola dan Ditingkatkan?",
            en: "",
          },
          solution: {
            id: "Sistem Modular yang Mudah Dipelihara dan Dikembangkan",
            en: "",
          },
          description: {
            id: "Kesulitan dengan aplikasi yang hanya bisa diakses di desktop atau platform tertentu? Kami mengubah cara aplikasi Anda diakses. Dengan web app yang dapat bertransformasi menjadi PWA, Anda bisa memberikan pengalaman mulus di semua perangkat, baik desktop maupun mobile, tanpa repot mengembangkan aplikasi native terpisah. Lebih fleksibel, lebih hemat, lebih efisien.",
            en: "",
          },
          notes: [
            {
              label: { id: "PWA", en: "PWA" },
              description: { id: "", en: "" },
            },
          ],
        },
        {
          icon: DeviceMobile,
          problem: {
            id: "Pengalaman Mobile yang Tidak Optimal?",
            en: "",
          },
          solution: {
            id: "Sistem Modular yang Mudah Dipelihara dan Dikembangkan",
            en: "",
          },
          description: {
            id: "Kesulitan dengan aplikasi yang hanya bisa diakses di desktop atau platform tertentu? Kami mengubah cara aplikasi Anda diakses. Dengan web app yang dapat bertransformasi menjadi PWA, Anda bisa memberikan pengalaman mulus di semua perangkat, baik desktop maupun mobile, tanpa repot mengembangkan aplikasi native terpisah. Lebih fleksibel, lebih hemat, lebih efisien.",
            en: "",
          },
          notes: [
            {
              label: { id: "PWA", en: "PWA" },
              description: { id: "", en: "" },
            },
          ],
        },
        {
          icon: DesktopTower,
          problem: {
            id: "Terbatas pada Platform Tertentu?",
            en: "",
          },
          solution: {
            id: "Sistem Modular yang Mudah Dipelihara dan Dikembangkan",
            en: "",
          },
          description: {
            id: "Aplikasi Anda terbatas pada platform iOS atau Android dan memerlukan biaya besar untuk maintenance? Dengan PWA, Anda bebas dari batasan platform. Solusi kami memungkinkan aplikasi diakses di semua sistem operasi dan perangkat, lebih hemat biaya, mudah di-maintain, serta menjangkau lebih banyak pengguna.",
            en: "",
          },
          notes: [
            {
              label: { id: "PWA", en: "PWA" },
              description: { id: "", en: "" },
            },
          ],
        },
      ],
      cta: {
        id: "Layanan Terperinci",
        en: "Detailed Services",
      },
    },
    works: {
      tag: { id: "Proyek", en: "Project" },
      title: { id: "Karya Terbaru", en: "Latest Works" },
      summary: {
        id: "Proyek unggulan kami mencerminkan keahlian dalam survei umum dan pemindaian ke BIM.",
        en: "Our standout projects showcase expertise in general surveys and scan-to-BIM.",
      },
      clientLabel: { id: "Klien", en: "Client" },
      locationLabel: { id: "Lokasi", en: "Location" },
      yearLabel: { id: "Tahun", en: "Year" },
      locationYearLabel: { id: "Lokasi/Tahun", en: "Location/Year" },
      cta: {
        id: "Semua Karya",
        en: "All Works",
      },
    },
    aboutUs: {
      tag: { id: "Tentang Kami", en: "About Us" },
      title: { id: "Siapa Kami?", en: "Who We Are?" },
      summary: {
        id: "Didirikan pada 2021, fokus pada inovasi teknologi di bidang 3D BIM.",
        en: "Established in 2021, focusing on technological innovations in the 3D BIM field.",
      },
      overviewTitle: { id: "Ringkasan", en: "Overview" },
      overview: {
        id: [
          "Bimtech adalah perusahaan yang bergerak di bidang layanan survey, pemetaan dan pemodelan 3D berakurasi tinggi. Kami berfokus pada penyediaan solusi teknologi inovatif untuk memenuhi kebutuhan industri yang terus berkembang. Dengan dukungan tim profesional yang berpengalaman, Bimtech menawarkan layanan andal, mulai dari akuisisi data, digitalisasi data, integrasi GNSS, Pembuatan sistem pemetaan real-time hingga pengembangan aplikasi mobile yang dapat disesuaikan.",
          "Kami mengutamakan akurasi dan efisiensi dalam setiap proyek yang kami kerjakan, sekaligus memberikan hasil optimal yang memenuhi ekspektasi dari pihak klien.",
        ],
        en: [
          "Bimtech is a company engaged in high-accuracy surveying, mapping and 3D modeling services. We focus on providing innovative technology solutions to meet the needs of the ever-growing industry. With the support of an experienced professional team, Bimtech offers reliable services, ranging from data acquisition, data digitization, GNSS integration, Real-time mapping system creation to the development of customizable mobile applications.",
          "We prioritize accuracy and efficiency in every project we work on, while providing optimal results that meet client expectations.",
        ],
      },
      visionTitle: {
        id: "Visi",
        en: "Vision",
      },
      vision: {
        id: "Menjadi penyedia solusi geospasial berstandar dunia yang menawarkan layanan lengkap dari akuisisi, digitalisasi, visualisasi hingga pengembangan aplikasi digital untuk mendukung pengelolaan informasi spasial yang efektif.",
        en: "To become a world-class geospatial solution provider offering complete services from acquisition, digitization, visualization to digital application development to support effective spatial information management.",
      },
      missionTitle: {
        id: "Misi",
        en: "Mission",
      },
      mission: {
        id: [
          "Menyediakan layanan gespasial berstandar dunia",
          "Memberikan solusi gespasial yang akurat dan inovatif, mulai dari akuisisi data hingga visualisasi.",
          "Mencapai tujuan dengan cara yang berkualitas dan aman.",
          "Komunikatif, berintegritas dan menawarkan solusi yang kompetitif.",
          "Inovatif dan peduli terhadap teknologi, meningkatkan keterampilan dan memperbarui peralatan kerja.",
        ],
        en: [
          "Providing world-class spatial services",
          "Providing accurate and innovative spatial solutions, from data acquisition to visualization.",
          "Achieving goals in a quality and safe manner.",
          "Communicative, with integrity and offering competitive solutions.",
          "Innovative and caring about technology, improving skills and updating work equipment.",
        ],
      },
      cta: {
        id: "Lebih Lanjut Tentang Kami",
        en: "Learn More About Us",
      },
    },
    footer: {
      contact: {
        id: "Kontak",
        en: "Contact",
      },
      socialMedia: {
        id: "Media Sosial",
        en: "Social Media",
      },
      copyright: {
        id: "Hak Cipta",
        en: "Copyright",
      },
    },
  },
  services: {
    title: {
      id: "Solusi Tepat untuk Setiap Tantangan!",
      en: "The Right Solutions for Every Challenge!",
    },
    summary: {
      id: "Kami hadir untuk mengubah cara Anda bekerja dengan layanan inovatif kami. Solusi yang dirancang dengan cermat dan diterapkan menggunakan keahlian geospasial untuk memberdayakan Anda saat ini dan mempertahankan aset Anda lebih lama di masa depan.",
      en: "We're here to revolutionize your workflow with our innovative services. Carefully crafted solutions, applied with geospatial expertise to empower you today and preserve your assets for a longer-lasting future.",
    },
    services: [
      {
        img: "/images/scan to bim.svg",
        heading: "Scan to BIM",
        content: {
          id: [
            "Layanan Scan to BIM kami memungkinkan Anda untuk mengubah data fisik dari lokasi proyek menjadi model 3D dengan akurasi tinggi. Teknologi ini memanfaatkan pemindaian laser dan point cloud untuk menghasilkan model digital yang mencakup setiap detail dari situs proyek.",
            "Model ini sangat berguna dalam proyek konstruksi dan renovasi karena memberikan visualisasi menyeluruh yang memudahkan perencanaan dan pelaksanaan.",
            "Dengan data BIM (Building Information Modeling) yang akurat, Anda dapat meningkatkan efisiensi, mengurangi risiko, dan memastikan proyek selesai tepat waktu dan sesuai anggaran.",
          ],
          en: [
            "Our Scan to BIM service enables you to transform physical site data into 3D models with high precision. This technology leverages laser scanning and point cloud data to create digital models that capture every detail of your project site.",
            "The resulting BIM (Building Information Modeling) is invaluable for construction and renovation projects, providing comprehensive visualizations that streamline planning and execution.",
            "With accurate BIM data, you can improve efficiency, reduce risks, and ensure your project is completed on time and within budget.",
          ],
        },
        tags: {
          id: ["Scan to BIM", "Point Cloud", "Building Information Modeling"],
          en: ["Scan to BIM", "Point Cloud", "Building Information Modeling"],
        },
      },
      {
        img: "/images/2d3d.svg",
        heading: "2D to 3D Modelling",
        content: {
          id: [
            "Layanan 2D to 3D modelling kami membantu Anda mengubah gambar 2D menjadi model 3D yang akurat dan detail. Dengan menggunakan teknologi pemodelan terkini, kami memastikan bahwa setiap elemen dalam gambar Anda dipindahkan ke model 3D dengan presisi tinggi.",
            "Pemodelan ini sangat bermanfaat dalam industri konstruksi, arsitektur, dan manufaktur, memungkinkan Anda untuk melihat gambaran nyata dari desain sebelum proses pembangunan dimulai.",
            "Dengan model 3D yang jelas, Anda dapat mengurangi potensi kesalahan dan mempercepat proses pengambilan keputusan dalam proyek Anda.",
          ],
          en: [
            "Our 2D to 3D modelling service helps you transform 2D drawings into precise and detailed 3D models. Using the latest modelling technologies, we ensure that every element in your design is transferred accurately to a 3D model.",
            "This service is beneficial for the construction, architectural, and manufacturing industries, allowing you to visualize designs before construction begins.",
            "With a clear 3D model, you can reduce potential errors and accelerate the decision-making process within your project.",
          ],
        },
        tags: {
          id: ["Pemodelan 3D", "Detail Presisi", "2D to 3D"],
          en: ["3D Modelling", "Precision Detail", "2D to 3D Conversion"],
        },
      },
      {
        img: "/images/general survey.svg",
        heading: "General Survey",
        content: {
          id: [
            "Layanan survei umum kami mencakup survei topografi, rute, eksplorasi, geodetik, industri, dan hidrografi. Dengan menggunakan peralatan survei modern dan teknologi terkini, kami memastikan hasil yang akurat untuk mendukung perencanaan dan pengambilan keputusan proyek Anda.",
            "Data survei yang akurat sangat penting dalam proyek konstruksi, infrastruktur, dan eksplorasi. Layanan ini membantu mengidentifikasi potensi risiko sejak dini dan memastikan setiap aspek proyek berjalan dengan lancar.",
            "Kami berkomitmen untuk memberikan layanan berkualitas tinggi yang sesuai dengan standar industri dan kebutuhan spesifik klien.",
          ],
          en: [
            "Our general survey services include topographic, route, exploration, geodetic, industrial, and hydrographic surveys. Using modern survey equipment and the latest technology, we ensure accurate results to support project planning and decision-making.",
            "Accurate survey data is essential for construction, infrastructure, and exploration projects. This service helps identify potential risks early and ensures smooth project execution.",
            "We are committed to delivering high-quality services that align with industry standards and the specific needs of our clients.",
          ],
        },
        tags: {
          id: ["Akurat", "Survei Topografi", "Layanan Hidrografi"],
          en: ["Accurate", "Topographic Survey", "Hydrographic Service"],
        },
      },
    ],
    threeDVisualizationModels: {
      title: { id: "Visualization Models", en: "Model Visualisasi" },
      summary: {
        id: "Model visualisasi adalah representasi multidimensi dalam proyek yang mengintegrasikan berbagai elemen seperti waktu, biaya, energi, manajemen fasilitas, hingga rencana keselamatan. Dimulai dari 3D untuk bentuk geometris hingga 8D yang mencakup keselamatan, setiap dimensi membantu pemahaman dan pengelolaan proyek secara lebih komprehensif.",
        en: "Visualization models represent multidimensional aspects of a project, integrating elements like time, cost, energy, facility management, and safety plans. Starting from 3D for geometrical shape representation to 8D focusing on safety, each dimension enhances project understanding and management comprehensively.",
      },
      models: [
        {
          title: "3D",
          content: {
            id: "Model Visualisasi 3D",
            en: "3D Visualization Model",
          },
        },
        {
          title: "4D",
          content: {
            id: "Model Visualisasi 4D (Waktu)",
            en: "4D (Time) Visualization Model",
          },
        },
        {
          title: "5D",
          content: {
            id: "Model 5D (Biaya)",
            en: "5D (Cost) Model",
          },
        },
        {
          title: "6D",
          content: {
            id: "Model 6D (Analisis Energi)",
            en: "6D (Energy Analysis) Model",
          },
        },
        {
          title: "7D",
          content: {
            id: "Model 7D (Manajemen Fasilitas)",
            en: "7D (Facility Management) Model",
          },
        },
        {
          title: "8D",
          content: {
            id: "Model 8D (Rencana Keselamatan)",
            en: "8D (Safety Plan) Model",
          },
        },
      ],
      cta: { id: "Pelajari lebih lanjut", en: "Learn more" },
    },
  },
  why3D: {
    title: { id: "Mengapa Harus Memilih 3D?", en: "Why Choose 3D?" },
    desc: {
      id: "3D memberikan berbagai keunggulan, mulai dari visualisasi yang lebih baik, perencanaan yang lebih efisien, hingga peningkatan keselamatan proyek secara keseluruhan. Dengan pendekatan ini, pengguna dapat memastikan bahwa setiap aspek proyek dapat diprediksi dengan lebih akurat dan dikelola dengan lebih efektif.",
      en: "3D offers numerous advantages, including better visualization, improved planning efficiency, and enhanced overall project safety. This approach allows users to ensure that every aspect of the project can be predicted more accurately and managed more effectively.",
    },
    benefits: [
      {
        // icon: "/icons/law.png",
        icon: Scales,
        title: { id: "Mematuhi Regulasi", en: "Complying with Regulation" },
        desc: {
          id: "Model 3D membantu memastikan proyek sesuai dengan peraturan dan standar yang berlaku.",
          en: "3D models help ensure projects comply with applicable regulations and standards.",
        },
      },
      {
        // icon: "/icons/server.png",
        icon: HardDrives,
        title: { id: "Digitalisasi Aset", en: "Digitalized Assets" },
        desc: {
          id: "Model 3D memungkinkan aset-aset penting didigitalisasi untuk manajemen yang lebih efisien.",
          en: "3D models allow essential assets to be digitized for more efficient management.",
        },
      },
      {
        // icon: "/icons/maintenance.png",
        icon: Toolbox,
        title: { id: "Untuk Pemeliharaan", en: "Maintenance Purpose" },
        desc: {
          id: "Model 3D memudahkan pemeliharaan dengan memberikan pandangan detail komponen aset.",
          en: "3D models facilitate maintenance by providing detailed views of asset components.",
        },
      },
      {
        // icon: "/icons/preview.png",
        icon: Eye,
        title: { id: "Pratinjau Cepat", en: "Quick View" },
        desc: {
          id: "Dengan 3D, pengguna dapat dengan cepat mendapatkan pratinjau visual dari proyek.",
          en: "3D allows users to quickly get a visual preview of the project.",
        },
      },
      {
        // icon: "/icons/decision-making.png",
        icon: LineSegments,
        title: { id: "Keputusan Manajemen", en: "Management Decision" },
        desc: {
          id: "Model 3D mendukung pengambilan keputusan yang lebih baik dalam manajemen proyek.",
          en: "3D models support better decision-making in project management.",
        },
      },
      {
        // icon: "/icons/healthcare.png",
        icon: HardHat,
        title: {
          id: "Kepedulian Keselamatan Kerja",
          en: "Safety Works Concern",
        },
        desc: {
          id: "3D memfasilitasi identifikasi risiko keselamatan kerja sejak tahap awal proyek.",
          en: "3D facilitates the identification of safety risks early in the project.",
        },
      },
    ],
  },
  works: {
    title: {
      id: "Karya Kami yang Berkualitas",
      en: "Our High Quality Works",
    },
    summary: {
      id: "Proyek unggulan kami seperti Metro Mall Kebayoran, The Wave and Ocea, serta Holland Village, mencerminkan keahlian kami dalam survei umum dan pemindaian ke BIM.",
      en: "Our standout projects like Metro Mall Kebayoran, The Wave and Ocea, and Holland Village highlight our expertise in general survey services and scan-to-BIM.",
    },
    works: [
      {
        name: "Metro Mall Kebayoran",
        clientName: "PT. Lorem Ipsum",
        img: "/images/metro mall kebayoran.jpg",
        location: {
          id: "Jakarta Selatan",
          en: "South Jakarta",
        },
        year: 2022,
        desc: {
          id: "Konversi gambar 2D menjadi model 3D dan referensi informasi geografi, terdiri dari mall dan hotel. Berlokasi di Jakarta Selatan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          en: "2D drawing to 3D Model and geo reference information, consist mall and hotel. Located in South Jakarta. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      },
      {
        name: "Somerset",
        clientName: "PT. Lorem Ipsum",
        img: "/images/somerset.jpg",
        location: {
          id: "Jakarta Tengah",
          en: "Central Jakarta",
        },
        year: 2023,
        desc: {
          id: "Konversi gambar 2D menjadi model 3D dan referensi informasi geografi, terdiri dari satu menara apartemen. Berlokasi di Jakarta Tengah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          en: "2D drawing to 3D Model and geo reference information, one tower of Apartment. Located in Central Jakarta. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      },
      {
        name: "The Wave and Ocea",
        clientName: "PT. Lorem Ipsum",
        img: "/images/the wave and ocea.jpg",
        location: {
          id: "Jakarta Selatan",
          en: "South Jakarta",
        },
        year: 2022,
        desc: {
          id: "Konversi gambar 2D menjadi model 3D dan referensi informasi geografi, terdiri dari tiga menara. Berlokasi di Jakarta Selatan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          en: "2D drawing to 3D Model and geo reference information, consist three towers. Located in South Jakarta. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      },
      {
        name: "Metro Tanah Abang",
        clientName: "PT. Lorem Ipsum",
        img: "/images/metro tanah abang.jpg",
        location: {
          id: "Jakarta Tengah",
          en: "Central Jakarta",
        },
        year: 2023,
        desc: {
          id: "Konversi gambar 2D menjadi model 3D dan referensi informasi geografi, terdiri dari satu menara pusat perbelanjaan dan perkantoran. Berlokasi di Jakarta Tengah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          en: "2D drawing to 3D Model and geo reference information, one tower of shopping center and office. Located in Central Jakarta. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      },
      // {
      //   name: "Drone Lidar",
      //   clientName: "PT. Lorem Ipsum",
      //   img: "/images/drone lidar.png",
      //   location: {
      //     id: "Nama Lokasi",
      //     en: "Location Name",
      //   },
      //   year: 2023,
      //   desc: {
      //     id: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      //     en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      //   },
      // },
      {
        name: "Holland Village",
        clientName: "PT. Lorem Ipsum",
        img: "/images/holland village.png",
        location: {
          id: "Jakarta Tengah",
          en: "Central Jakarta",
        },
        year: 2023,
        desc: {
          id: "Konversi gambar 2D menjadi model 3D dan referensi informasi geografi, terdiri dari empat menara dengan 47 lantai. Berlokasi di Jakarta Tengah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          en: "2D drawing to 3D Model and geo reference information, consist four towers with 47 floors. Located in Central Jakarta. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      },
    ],
  },
  aboutUs: {
    title: {
      id: "Ketahui Lebih Banyak Tentang Kami",
      en: "Get to Know More About Us",
    },
    summary: {
      id: "Kami adalah perusahaan yang mengkhususkan diri dalam survei umum dan pemindaian ke BIM. Dengan tim profesional yang berpengalaman, kami fokus pada solusi akurat dan kepuasan klien.",
      en: "We are a company specializing in general surveying and scan-to-BIM services. With an experienced professional team, we focus on accurate solutions and client satisfaction.",
    },
    history: {
      id: "PT. Bimtech Prima International berdiri pada tahun 2021 dengan tim profesional berpengalaman di bidang BIM dan pemodelan 3D.",
      en: "PT. Bimtech Prima International was established in 2021 with a professional team experienced in BIM and 3D modeling.",
    },
    overview: {
      title: { id: "Ringkasan", en: "Overview" },
      content: {
        id: [
          "Ini adalah di PT. Bimtech, kekuatan terdepan dalam industri pemodelan 3D. Mari kita jelajahi inovasi dan kreativitas terkini bersama-sama.",
          "Didirikan pada 2021, fokus pada inovasi teknologi di bidang 3D BIM. Kami adalah perusahaan yang menyediakan layanan khusus untuk berbagai industri yang berfokus pada pengukuran dan pemodelan terkini dan dengan akurasi tinggi. Didirikan pada tahun 2021, tim kami terdiri dari beberapa profesional yang memiliki pengalaman dan kemampuan panjang dalam menangani pekerjaan pemodelan.",
        ],
        en: [
          "This is PT. Bimtech's, a leading force in the 3D modeling industry. Let's explore the latest innovations and creativity together.",
          "Established in 2021, focusing on technological innovations in the 3D BIM field. We are company which supply specialized service to a range of industries that focused on up to date, high accuracy of measurement and modelling. Established in 2021, our team constructed by few professional which have long experiences and capabilities in handling modelling works",
        ],
      },
    },
    visionMission: {
      visionTitle: {
        id: "Visi Kami",
        en: "Our Vision",
      },
      vision: {
        id: "Menjadi penyedia solusi geospasial berstandar dunia yang menawarkan layanan lengkap dari akuisisi, digitalisasi, visualisasi hingga pengembangan aplikasi digital untuk mendukung pengelolaan informasi spasial yang efektif.",
        en: "To become a world-class geospatial solution provider offering complete services from acquisition, digitization, visualization to digital application development to support effective spatial information management.",
      },
      missionTitle: {
        id: "Misi Kami",
        en: "Our Mission",
      },
      mission: {
        id: [
          "Menyediakan layanan gespasial berstandar dunia",
          "Memberikan solusi gespasial yang akurat dan inovatif, mulai dari akuisisi data hingga visualisasi.",
          "Mencapai tujuan dengan cara yang berkualitas dan aman.",
          "Komunikatif, berintegritas dan menawarkan solusi yang kompetitif.",
          "Inovatif dan peduli terhadap teknologi, meningkatkan keterampilan dan memperbarui peralatan kerja.",
        ],
        en: [
          "Providing world-class spatial services",
          "Providing accurate and innovative spatial solutions, from data acquisition to visualization.",
          "Achieving goals in a quality and safe manner.",
          "Communicative, with integrity and offering competitive solutions.",
          "Innovative and caring about technology, improving skills and updating work equipment.",
        ],
      },
    },
    values: [
      {
        title: {
          id: "Akurasi Tinggi dengan Teknologi Canggih",
          en: "High Accuracy with Advanced Technology",
        },
        desc: {
          id: "Menggunakan teknologi mutakhir seperti drone, LiDAR, dan GNSS untuk memastikan data yang presisi.",
          en: "Utilizing advanced technologies like drones, LiDAR, and GNSS to ensure precise data.",
        },
      },
      {
        title: { id: "Inovasi Berkelanjutan", en: "Continuous Innovation" },
        desc: {
          id: "Terus mengembangkan teknologi geospasial, 3D modeling, dan solusi mobile untuk industri.",
          en: "Continuously advancing geospatial technology, 3D modeling, and mobile solutions for the industry.",
        },
      },
      {
        title: {
          id: "Dukungan Komprehensif untuk Klien",
          en: "Comprehensive Client Support",
        },
        desc: {
          id: "Memberikan pelatihan, pemeliharaan, dan pembaruan berkala.",
          en: "Providing training, maintenance, and regular updates.",
        },
      },
      {
        title: {
          id: "Efisiensi dan Keandalan",
          en: "Efficiency and Reliability",
        },
        desc: {
          id: "Mengoptimalkan akuisisi dan visualisasi data demi pengambilan keputusan yang cepat.",
          en: "Optimizing data acquisition and visualization for quick decision-making.",
        },
      },
      {
        title: {
          id: "Integritas dan Komunikasi Terbuka",
          en: "Integrity and Transparent Communication",
        },
        desc: {
          id: "Menjaga transparansi dan kepercayaan dengan solusi yang kompetitif.",
          en: "Maintaining transparency and trust with competitive solutions.",
        },
      },
      {
        title: {
          id: "Adaptif terhadap Perkembangan Teknologi",
          en: "Adaptability to Technological Advancements",
        },
        desc: {
          id: "Terus meningkatkan keterampilan dan memperbarui peralatan sesuai kebutuhan industri.",
          en: "Continuously enhancing skills and updating equipment to meet industry needs.",
        },
      },
    ],
    management: {
      presidentDirector: {
        id: "Direktur Utama: Naufal Ilyas Abdul Hakim",
        en: "President Director: Naufal Ilyas Abdul Hakim",
      },
      commissioner: {
        id: "Komisaris: Sidik P Ramdan",
        en: "Commissioner: Sidik P Ramdan",
      },
    },
  },
  faqs: {
    title: {
      id: "Pertanyaan yang Sering Diajukan",
      en: "Frequently Asked Questions",
    },
    summary: {
      id: "Temukan jawaban untuk pertanyaan umum tentang layanan kami, proses kerja, dan informasi penting lainnya di sini. Kami siap membantu Anda dengan semua yang Anda butuhkan.",
      en: "Find answers to common questions about our services, workflow, and other important information here. We are ready to assist you with everything you need.",
    },
    faqs: [
      {
        title: {
          id: "Lorem ipsum dolor sit amet?",
          en: "Lorem ipsum dolor sit amet?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, urna vel tempor dictum, velit eros viverra mi, nec varius lorem ipsum ut lectus. Suspendisse potenti. Phasellus et volutpat elit. Maecenas vulputate semper mi, ut malesuada mi auctor in.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, urna vel tempor dictum, velit eros viverra mi, nec varius lorem ipsum ut lectus. Suspendisse potenti. Phasellus et volutpat elit. Maecenas vulputate semper mi, ut malesuada mi auctor in.",
        },
      },
      {
        title: {
          id: "Curabitur suscipit urna vel tempor dictum?",
          en: "Curabitur suscipit urna vel tempor dictum?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, tortor nec bibendum interdum, arcu urna dapibus metus, at gravida ex mi id nulla. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Curabitur euismod fermentum urna.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, tortor nec bibendum interdum, arcu urna dapibus metus, at gravida ex mi id nulla. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Curabitur euismod fermentum urna.",
        },
      },
      {
        title: {
          id: "Morbi euismod nulla a neque cursus?",
          en: "Morbi euismod nulla a neque cursus?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod nulla a neque cursus, sed viverra augue tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod, nibh ut vulputate accumsan, dui sapien maximus eros, vitae sagittis velit eros sed mauris.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod nulla a neque cursus, sed viverra augue tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod, nibh ut vulputate accumsan, dui sapien maximus eros, vitae sagittis velit eros sed mauris.",
        },
      },
      {
        title: {
          id: "Vestibulum ante ipsum primis in faucibus?",
          en: "Vestibulum ante ipsum primis in faucibus?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Praesent tincidunt, sapien nec sollicitudin feugiat, arcu sem venenatis nisi, id interdum est nunc non tortor. Ut vitae lorem eget lacus consequat auctor. Donec blandit sollicitudin ex nec aliquet.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Praesent tincidunt, sapien nec sollicitudin feugiat, arcu sem venenatis nisi, id interdum est nunc non tortor. Ut vitae lorem eget lacus consequat auctor. Donec blandit sollicitudin ex nec aliquet.",
        },
      },
      {
        title: {
          id: "Nullam sollicitudin libero sit amet?",
          en: "Nullam sollicitudin libero sit amet?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Maecenas id tristique ligula. Ut cursus, nisl a convallis condimentum, ligula orci suscipit odio, in tempus mauris nisl vel ligula.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Maecenas id tristique ligula. Ut cursus, nisl a convallis condimentum, ligula orci suscipit odio, in tempus mauris nisl vel ligula.",
        },
      },
    ],
  },
  contact: {
    address: "Jl. Tampomas Dalam Raya No. 12, Semarang",
    email: "contact@bimtech-group.com",
    phone: "+62 857-2621-8466",
  },
  sosmeds: {
    label: { id: "Sosial Media", en: "Social Links" },
    sosmeds: [
      {
        name: "Whatsappp",
        icon: WhatsappLogo,
        number: "+6285726218466",
        link: "https://wa.me/+6285726218466",
      },
      {
        name: "Instagram",
        icon: InstagramLogo,
        link: "",
      },
      {
        name: "LinkedIn",
        icon: LinkedinLogo,
        link: "",
      },
    ],
  },
  footer: {
    cta: {
      title: {
        id: "Butuh Bantuan atau Ingin Konsultasi Lebih Lanjut?",
        en: "Need Help or Want Further Consultation?",
      },
      desc: {
        id: "Klik tombol di bawah untuk berbicara langsung dengan kami via WhatsApp. Kami siap membantu kebutuhan Anda!",
        en: "Click the button below to chat directly with us via WhatsApp. We are here to assist your needs!",
      },
      buttonLabel: {
        id: "Hubungi Kami di WhatsApp",
        en: "Contact Us on WhatsApp",
      },
    },
    contactLabel: {
      id: "Kontak",
      en: "Contant",
    },
  },
};

export default contents;
