import NAVS from "@/constant/navs";
import { IMAGES_PATH } from "@/constant/path";
import useCallBackOnNavigate from "@/hooks/useCallBackOnNavigate";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import {
  Box,
  HStack,
  Icon,
  Image,
  Separator,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { IconBell, IconSettings } from "@tabler/icons-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import BButton from "../ui-custom/BButton";
import CContainer from "../ui-custom/CContainer";
import FloatCounter from "../ui-custom/FloatCounter";
import Heading5 from "../ui-custom/Heading5";
import { Avatar } from "../ui/avatar";
import { ColorModeButton } from "../ui/color-mode";

interface Props {
  label?: string;
  children?: any;
  activePath?: string;
}
const NavContainer = ({ label, children, activePath }: Props) => {
  // States, Refs
  const containerRef = useRef<HTMLDivElement>(null);

  // Utils
  useCallBackOnNavigate(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  });
  const iss = useIsSmScreenWidth();

  // Component
  const NavList = () => {
    return (
      <>
        {NAVS.map((nav: any, i) => {
          const active = activePath === nav.path;

          return (
            <Link key={i} to={nav.link}>
              <BButton
                iconButton
                unclicky
                variant={"ghost"}
                color={active ? "fg" : "fg.muted"}
                position={"relative"}
              >
                {active && (
                  <Box
                    w={"12px"}
                    h={"2px"}
                    bg={"p.500"}
                    position={"absolute"}
                    bottom={0}
                  />
                )}

                <FloatCounter
                  circleProps={{ h: "18px", fontSize: "xs", mt: 1, mr: 1 }}
                  display={"none"}
                >
                  2
                </FloatCounter>

                <Icon fontSize={"lg"} flexShrink={0} {...nav?.iconProps}>
                  <nav.icon strokeWidth={1.5} />
                </Icon>
              </BButton>
            </Link>
          );
        })}
      </>
    );
  };
  const NavList2 = () => {
    return (
      <>
        <BButton
          iconButton
          unclicky
          variant={"ghost"}
          color={activePath === "/settings" ? "fg" : "fg.muted"}
        >
          <Icon fontSize={"lg"} flexShrink={0}>
            <IconSettings strokeWidth={1.5} />
          </Icon>
        </BButton>

        {!iss && <Separator w={"full"} mb={2} />}

        <Avatar
          name="Jolitos Kurniawan"
          cursor={"pointer"}
          size={iss ? "2xs" : "xs"}
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
          overflowY={"auto"}
          overflowX={"hidden"}
          className="scrollY"
          bg={"body"}
          borderRight={"1px solid"}
          borderColor={"border.muted"}
        >
          <Image
            src={`${IMAGES_PATH}/logo_graphic.png`}
            h={"24px"}
            objectFit={"contain"}
            mt={1}
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
        fRef={containerRef}
        position={"relative"}
        flex={1}
        overflowY={"auto"}
        overflowX={"clip"}
        className="scrollY"
        bg={"bgContent"}
      >
        <HStack
          justify={"space-between"}
          p={2}
          pl={4}
          borderColor={"d2"}
          position={"sticky"}
          top={0}
          bg={"bgContent"}
          zIndex={2}
          mb={1}
        >
          <Heading5 fontWeight={"bold"} truncate>
            {label}
          </Heading5>

          <HStack flexShrink={0}>
            <ColorModeButton fontSize={"1.1rem"} />

            <BButton iconButton unclicky variant={"ghost"}>
              <FloatCounter>2</FloatCounter>

              <Icon>
                <IconBell stroke={1.5} />
              </Icon>
            </BButton>
          </HStack>
        </HStack>

        {children}
      </CContainer>

      {/* Sm screen nav */}
      {iss && (
        <HStack
          h={"75px"}
          justify={"space-around"}
          pt={1}
          pb={6}
          px={4}
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
