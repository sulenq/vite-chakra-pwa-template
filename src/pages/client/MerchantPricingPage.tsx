import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading3 from "@/components/ui-custom/Heading3";
import { IMAGES_PATH } from "@/constant/path";
import { useThemeConfig } from "@/context/useThemeConfig";
import { HStack, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { IconCrown } from "@tabler/icons-react";

const ProductList = () => {
  // Context
  const { themeConfig } = useThemeConfig();

  // States, Refs
  const data = [
    {
      id: 1,
      name: "HRIS",
      description:
        "Tempor non commodo tempor ex deserunt. Anim ipsum nostrud ad sunt. Minim reprehenderit aliquip laboris sit est ipsum. Nisi est officia quis cillum laboris tempor mollit nulla exercitation voluptate.",
      thumbnail: `${IMAGES_PATH}/hris.png`,
    },
  ];

  return (
    <SimpleGrid columns={[1, 2, 3, null, 4]}>
      {data.map((item: any, i: number) => {
        return (
          <CContainer
            key={i}
            flex={"1 1 350px"}
            bg={"body"}
            borderRadius={themeConfig.radii.container}
            border={"1px solid {colors.border.subtle}"}
          >
            <CContainer pt={4}>
              <Image src={item.thumbnail} />
            </CContainer>

            <CContainer gap={2} p={4}>
              <Text fontSize={"lg"} fontWeight={"bold"}>
                {item.name}
              </Text>
              <Text>{item.description}</Text>

              <BButton mt={2} variant={"outline"}>
                Detail
              </BButton>
              <BButton colorPalette={themeConfig.colorPalette}>
                Dapatkan {item.name}
              </BButton>
            </CContainer>
          </CContainer>
        );
      })}
    </SimpleGrid>
  );
};
const MerchantPricingPage = () => {
  return (
    <CContainer>
      <HStack mt={4} mb={2} justify={"center"} wrap={"wrap"} mx={"auto"}>
        <Icon color={"orange.400"} transform={"rotate(16deg)"} mb={1} ml={-4}>
          <IconCrown size={36} />
        </Icon>
        <Heading3 fontWeight={"bold"} textAlign={"center"}>
          Pricing
        </Heading3>
      </HStack>
      <Text textAlign={"center"} maxW={"600px"} mx={"auto"} mb={8}>
        Temukan solusi SaaS terbaik untuk bisnis Anda. Saat ini, kami masih
        menyediakan HRIS, tetapi segera hadir lebih banyak pilihan untuk
        kebutuhan Anda.
      </Text>

      <CContainer p={4}>
        <ProductList />
      </CContainer>
    </CContainer>
  );
};

export default MerchantPricingPage;
