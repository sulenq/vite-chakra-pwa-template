import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureHeader,
  DisclosureRoot,
} from "@/components/ui-custom/Disclosure";
import DisclosureHeaderContent from "@/components/ui-custom/DisclosureHeaderContent";
import Heading3 from "@/components/ui-custom/Heading3";
import HScroll from "@/components/ui-custom/HScroll";
import { Rating } from "@/components/ui/rating";
import { IMAGES_PATH } from "@/constant/path";
import { useThemeConfig } from "@/context/useThemeConfig";
import useBackOnClose from "@/hooks/useBackOnClose";
import {
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  IconCaretLeftFilled,
  IconCaretRightFilled,
  IconCrown,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }: any) => {
  // Context
  const { themeConfig } = useThemeConfig();

  // States, Refs
  const data = {
    id: 1,
    name: "HRIS",
    description:
      "Cupidatat tempor consectetur consequat irure non consequat aute minim ut officia excepteur. Ut officia labore irure mollit dolore exercitation culpa incididunt. Quis velit laborum nisi fugiat in anim cillum fugiat. Non mollit et anim est Lorem sint enim qui labore labore ullamco cupidatat excepteur. Laborum culpa pariatur minim esse sint aliqua sint fugiat ex veniam. Nulla sint est sunt enim nostrud laboris proident amet.",
    thumbnail: `${IMAGES_PATH}/hris.png`,
  };

  // Utils
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(`product-detail-${product.id}`, open, onOpen, onClose);

  return (
    <>
      <CContainer
        flex={"1 1 350px"}
        bg={"body"}
        borderRadius={themeConfig.radii.container}
        border={"1px solid {colors.border.subtle}"}
      >
        <CContainer pt={4}>
          <Image src={product.thumbnail} />
        </CContainer>

        <CContainer gap={2} p={4}>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            {product.name}
          </Text>
          <Text>{product.description}</Text>

          <BButton mt={2} variant={"outline"} onClick={onOpen}>
            Detail
          </BButton>
          <BButton colorPalette={themeConfig.colorPalette}>
            Dapatkan {product.name}
          </BButton>
        </CContainer>
      </CContainer>

      <DisclosureRoot open={open} size={"xl"} lazyLoad>
        <DisclosureContent>
          <DisclosureHeader>
            <DisclosureHeaderContent title={``} />
          </DisclosureHeader>

          <DisclosureBody px={0}>
            <SimpleGrid columns={[1, null, 2]} p={[0, null, 4]}>
              <CContainer px={[0, null, 4]}>
                <Image src={data.thumbnail} mb={4} />
                <HScroll mt={4} gap={4}>
                  <Image w={"100px"} src={data.thumbnail} />
                  <Image w={"100px"} src={data.thumbnail} />
                  <Image w={"100px"} src={data.thumbnail} />
                  <Image w={"100px"} src={data.thumbnail} />
                  <Image w={"100px"} src={data.thumbnail} />
                </HScroll>

                <HStack ml={"auto"} mt={4} px={4}>
                  <BButton
                    iconButton
                    size={"2xs"}
                    borderRadius={"full"}
                    variant={"subtle"}
                  >
                    <IconCaretLeftFilled />
                  </BButton>

                  <BButton
                    iconButton
                    size={"2xs"}
                    borderRadius={"full"}
                    variant={"subtle"}
                  >
                    <IconCaretRightFilled />
                  </BButton>
                </HStack>
              </CContainer>

              <CContainer px={4} gap={2} mt={[8, null, 0]} pt={2}>
                <Text fontSize={"3xl"} fontWeight={"bold"} mb={4}>
                  {data.name}
                </Text>
                <Text>{data.description}</Text>

                <HStack mt={"auto"} pt={4}>
                  <Rating value={4.5} />
                  <Link to={"/reviews"}>
                    <Text textDecor={"underline !important"}>23 reviews</Text>
                  </Link>
                </HStack>

                <Text mt={4} color={"fg.muted"}>
                  Mulai dari
                </Text>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  IDR 500.000
                </Text>

                <BButton mt={4}>Website</BButton>
              </CContainer>
            </SimpleGrid>
          </DisclosureBody>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};
const ProductList = () => {
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
        return <ProductItem key={i} product={item} />;
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
