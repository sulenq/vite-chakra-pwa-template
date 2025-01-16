import { SVGS_PATH } from "@/constant/path";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import {
  HStack,
  Icon,
  Image,
  Separator,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { BellSimple, GearSix } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Avatar } from "../ui/avatar";
import { ColorModeButton } from "../ui/color-mode";
import BButton from "./BButton";
import CContainer from "./CContainer";
import FloatCounter from "./FloatCounter";
import Heading5 from "./Heading5";
import NAVS from "@/constant/navs";

interface Props {
  label?: string;
  children?: any;
  activeNavIndex?: number;
}
const NavContainer = ({ label, children, activeNavIndex }: Props) => {
  const iss = useIsSmScreenWidth();

  const NavList = () => {
    return (
      <>
        {NAVS.map((nav: any, i) => (
          <Link key={i} to={nav.link}>
            <BButton
              iconButton
              unclicky
              variant={"ghost"}
              color={activeNavIndex === i ? "fg" : "fg.muted"}
            >
              <FloatCounter
                circleProps={{ h: "18px", fontSize: "xs", mt: 1, mr: 1 }}
                display={"none"}
              >
                2
              </FloatCounter>

              <Icon fontSize={"lg"} flexShrink={0} {...nav?.iconProps}>
                <nav.icon weight={activeNavIndex === i ? "fill" : "regular"} />
              </Icon>
            </BButton>
          </Link>
        ))}
      </>
    );
  };

  const NavList2 = () => {
    return (
      <>
        <BButton iconButton unclicky variant={"ghost"}>
          <Icon fontSize={"lg"} flexShrink={0}>
            <GearSix />
          </Icon>
        </BButton>

        {!iss && <Separator mb={2} />}

        <Avatar
          name="Jolitos Kurniawan"
          cursor={"pointer"}
          size={iss ? "xs" : "md"}
          // borderRadius={6}
        />
      </>
    );
  };

  return (
    <Stack flexDir={iss ? "column" : "row"} h={"100dvh"} gap={0}>
      {/* Lg screen nav */}
      {!iss && (
        <VStack
          w={"fit"}
          align={"center"}
          px={3}
          py={4}
          borderColor={"d2"}
          overflowY={"auto"}
          overflowX={"hidden"}
          className="scrollY"
          // bg={"bg.subtle"}
          // borderRight={"1px solid"}
        >
          <Image
            src={`${SVGS_PATH}/logo-color.svg`}
            h={"28px"}
            objectFit={"contain"}
            mb={4}
          />

          <VStack justify={"center"} flex={1}>
            <NavList />
          </VStack>

          <VStack mt={"auto"}>
            <NavList2 />
          </VStack>
        </VStack>
      )}

      <CContainer
        position={"relative"}
        flex={1}
        overflowY={"auto"}
        overflowX={"clip"}
        className="scrollY"
        bg={"bg.subtle"}
      >
        <HStack
          justify={"space-between"}
          px={5}
          py={2}
          borderColor={"d2"}
          position={"sticky"}
          top={0}
          bg={"bg.subtle"}
          zIndex={2}
          mb={1}
          // borderBottom={"1px solid"}
          // bg={"body"}
        >
          <Heading5 fontWeight={"bold"} truncate>
            {label}
          </Heading5>

          <HStack flexShrink={0}>
            <ColorModeButton size={"md"} fontSize={"1.1rem"} />

            <BButton iconButton unclicky variant={"ghost"}>
              <FloatCounter
                circleProps={{
                  h: "18px",
                  fontSize: "xs",
                  mt: "18px",
                  mr: "18px",
                }}
                // display={"none"}
              >
                2
              </FloatCounter>

              <Icon fontSize={"lg"}>
                <BellSimple />
              </Icon>
            </BButton>
          </HStack>
        </HStack>

        {children}
      </CContainer>

      {/* Sm screen nav */}
      {iss && (
        <HStack
          justify={"space-around"}
          pt={1}
          pb={4}
          pl={2}
          pr={4}
          borderTop={"1px solid"}
          borderColor={"d2"}
          overflowX={"auto"}
          flexShrink={0}
          position={"sticky"}
          bottom={0}
        >
          <NavList />

          <NavList2 />
        </HStack>
      )}
    </Stack>
  );
};

export default NavContainer;
