import NAVS from "@/constant/navs";
import { useThemeConfig } from "@/context/useThemeConfig";
import useCallBackOnNavigate from "@/hooks/useCallBackOnNavigate";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import {
  Box,
  BoxProps,
  Center,
  HStack,
  Icon,
  Image,
  Separator,
  Stack,
  StackProps,
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
import { Tooltip } from "../ui/tooltip";

interface Interface__NavItemContainer extends StackProps {
  active?: boolean;
}
interface Props {
  label?: string;
  children?: any;
  activePath?: string;
}
const NavContainer = ({ label, children, activePath }: Props) => {
  // Context
  const { themeConfig } = useThemeConfig();

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
  const NavItemContainer = ({
    children,
    active,
    ...props
  }: Interface__NavItemContainer) => {
    return (
      <VStack
        gap={0}
        w={"40px"}
        h={"40px"}
        justify={"center"}
        position={"relative"}
        color={active ? "fg" : "fg.muted"}
        {...props}
      >
        {active && <ActiveNavIndicator />}

        {children}
      </VStack>
    );
  };
  const ActiveNavIndicator = ({ ...props }: BoxProps) => {
    return (
      <Box
        w={"12px"}
        h={"2px"}
        bg={"p.500"}
        position={"absolute"}
        bottom={"-2px"}
        {...props}
      />
    );
  };
  const NavList = () => {
    return (
      <>
        {NAVS.map((nav: any, i) => {
          return (
            <Link key={i} to={nav.path}>
              <Tooltip
                content={nav.label}
                positioning={{ placement: "right" }}
                contentProps={{ ml: 2 }}
              >
                <NavItemContainer active={activePath === nav.path}>
                  <FloatCounter
                    circleProps={{ h: "18px", fontSize: "xs", mt: 1, mr: 1 }}
                    display={"none"}
                  >
                    2
                  </FloatCounter>

                  <Icon {...nav?.iconProps}>
                    <nav.icon strokeWidth={1.5} size={iss ? 28 : 20} />
                  </Icon>
                </NavItemContainer>
              </Tooltip>
            </Link>
          );
        })}
      </>
    );
  };
  const NavList2 = () => {
    return (
      <>
        <Link to={"/settings"}>
          <Tooltip
            content={"Pengaturan"}
            positioning={{ placement: "right" }}
            contentProps={{ ml: 2 }}
          >
            <NavItemContainer active={activePath === "/settings"}>
              <Icon>
                <IconSettings strokeWidth={1.5} size={iss ? 28 : 20} />
              </Icon>
            </NavItemContainer>
          </Tooltip>
        </Link>

        {!iss && <Separator w={"full"} mb={2} />}

        <Link to={"/profile"}>
          <Center
            w={"40px"}
            h={"40px"}
            borderRadius={"full"}
            // border={activePath === "/profile" ? "1px solid" : ""}
            borderColor={themeConfig.primaryColor}
            position={"relative"}
          >
            {activePath === "/profile" && <ActiveNavIndicator />}

            <Avatar name="Jolitos Kurniawan" cursor={"pointer"} size={"xs"} />
          </Center>
        </Link>
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
          px={2}
          py={4}
          overflowY={"auto"}
          overflowX={"hidden"}
          className="scrollY"
          bg={"body"}
          borderRight={"1px solid"}
          borderColor={"border.muted"}
        >
          <Link to={"/"}>
            <Image
              src={themeConfig.logo}
              w={"20px"}
              objectFit={"contain"}
              mb={4}
              mt={"2px"}
            />
          </Link>

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
          position={"sticky"}
          top={0}
          zIndex={2}
          mb={1}
          // bg={"body"}
          // borderBottom={"1px solid"}
          // borderColor={"border.muted"}
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
