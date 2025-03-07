import { NAVS } from "@/constant/navs";
import useLang from "@/context/useLang";
import { useThemeConfig } from "@/context/useThemeConfig";
import useCallBackOnNavigate from "@/hooks/useCallBackOnNavigate";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import getValueByKey from "@/utils/getValueByKey";
import {
  Box,
  BoxProps,
  HStack,
  Icon,
  Stack,
  StackProps,
  VStack,
} from "@chakra-ui/react";
import { IconSettings } from "@tabler/icons-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import CContainer from "../ui-custom/CContainer";
import FloatCounter from "../ui-custom/FloatCounter";
import Heading6 from "../ui-custom/Heading6";
import Logo from "../ui-custom/Logo";
import { ColorModeButton } from "../ui/color-mode";
import { Tooltip } from "../ui/tooltip";
import MerchantInbox from "./Inbox";

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
  const { l } = useLang();

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
        _hover={{ bg: "bg.muted" }}
        borderRadius={6}
        transition={"200ms"}
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
        bg={themeConfig.primaryColor}
        position={"absolute"}
        bottom={0}
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
                content={getValueByKey(l, nav.labelKey)}
                positioning={{ placement: "right" }}
                contentProps={{ ml: 2 }}
              >
                <NavItemContainer active={activePath === nav.path}>
                  <FloatCounter
                    circleProps={{
                      h: "18px",
                      fontSize: "xs",
                      mt: "18px",
                      mr: "18px",
                    }}
                    display={"none"}
                  >
                    2
                  </FloatCounter>

                  <Icon {...nav?.iconProps}>
                    <nav.icon strokeWidth={1.5} size={iss ? 24 : 20} />
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
            content={l.navs.settings}
            positioning={{ placement: "right" }}
            contentProps={{ ml: 2 }}
          >
            <NavItemContainer active={activePath === "/settings"}>
              <Icon>
                <IconSettings strokeWidth={1.5} size={iss ? 24 : 20} />
              </Icon>
            </NavItemContainer>
          </Tooltip>
        </Link>

        {/* {!iss && <Separator w={"full"} mb={2} />}

        <Link to={"/profile"}>
          <Center
            w={"40px"}
            h={"40px"}
            borderRadius={"full"}
            borderColor={themeConfig.primaryColor}
            position={"relative"}
          >
            {activePath === "/profile" && <ActiveNavIndicator />}

            <Avatar
              name="Jolitos Kurniawan"
              cursor={"pointer"}
              size={"xs"}
              w={"28px"}
              h={"28px"}
            />
          </Center>
        </Link> */}
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
          pt={5}
          pb={4}
          overflowY={"auto"}
          overflowX={"hidden"}
          className="scrollY"
          bg={"body"}
          borderRight={"1px solid"}
          borderColor={"border.muted"}
        >
          <Link to={"/"}>
            <Logo size={16} color={themeConfig.primaryColorHex} />
          </Link>

          <VStack justify={"center"} flex={1}>
            <NavList />
          </VStack>

          <VStack mt={"auto"}>
            <NavList2 />
          </VStack>
        </VStack>
      )}

      {/* Content */}
      <CContainer
        fRef={containerRef}
        position={"relative"}
        flex={1}
        overflowY={"auto"}
        overflowX={"clip"}
        bg={"bgContent"}
      >
        <HStack
          justify={"space-between"}
          p={2}
          px={4}
          position={"sticky"}
          top={0}
          zIndex={2}
          // bg={"bgContent"}
          bg={"body"}
          mb={4}
          borderBottom={"1px solid {colors.border.subtle}"}
        >
          <Heading6 fontWeight={"bold"} truncate>
            {label}
          </Heading6>

          <HStack flexShrink={0} gap={1}>
            <ColorModeButton fontSize={"1.1rem"} />

            <MerchantInbox />
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
