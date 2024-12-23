import { useColorModeValue } from "@/components/ui/color-mode";
import navs from "@/constant/navs";
import { useLang } from "@/hooks/useLang";
import useScreen from "@/hooks/useScreen";
import { Box, BoxProps, Button, HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkLightColor } from "../../constant/colors";
import Container from "./Container";
import NavDrawer from "./NavDrawer";

type Props = {
  activeNavIndex?: number;
} & BoxProps;
const TopNav = ({ activeNavIndex, ...props }: Props) => {
  const darkLightColor = useDarkLightColor();

  const { sw } = useScreen();
  const { lang } = useLang();
  const { pathname } = useLocation();

  const [scrollYPos, setScrollYPos] = useState<number>(window.scrollY);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [navTop, setNavTop] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setTrigger(currentScrollY <= 10);

    if (currentScrollY > scrollYPos) {
      setNavTop(-56);
    } else {
      setNavTop(0);
    }

    setScrollYPos(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYPos, pathname]);

  useEffect(() => {
    if (pathname === "/") {
      setTrigger(true);
    } else {
      setTrigger(false);
    }
  }, [pathname]);

  return (
    <Box
      id="topNav"
      w={"full"}
      zIndex={99}
      position={"fixed"}
      top={`${navTop}px`}
      left={0}
      transition={"400ms"}
      color={darkLightColor}
      animation={"flyInFromTop 1s"}
      bg={!trigger ? "#303030df" : ""}
      backdropFilter={!trigger ? "blur(5px)" : ""}
      {...props}
    >
      <Container>
        <HStack justify={"space-between"} py={2} w={"full"}>
          <HStack flexShrink={0} w={"100px"}>
            <Link to={"/"}>
              <Image
                loading={"lazy"}
                src={useColorModeValue(
                  `/assets/svgs/${
                    trigger ? "logo_dark.svg" : "logo_light.svg"
                  }`,
                  "/assets/svgs/logo_light.svg"
                )}
                h={"24px"}
                borderRadius={"0 !important"}
              />
            </Link>
          </HStack>

          {sw > 900 ? (
            <HStack gap={5}>
              {navs?.map((nav, i) => {
                return (
                  <Link to={nav.link}>
                    <Button
                      key={i}
                      flexShrink={0}
                      className="btn-clear"
                      borderRadius={0}
                      h={"32px !important"}
                      border={"none"}
                      borderBottom={"2px solid"}
                      borderColor={
                        activeNavIndex === i ? "p.500" : "transparent"
                      }
                      _hover={{
                        color: "p.500",
                      }}
                      transition={"200ms"}
                      color={!trigger ? "white" : "current"}
                      fontWeight={"500 !important"}
                      fontSize={"1rem !important"}
                    >
                      {nav.label[lang]}
                    </Button>
                  </Link>
                );
              })}
            </HStack>
          ) : (
            ""
          )}

          <HStack flexShrink={0} w={[null, null, "100px"]} justify={"flex-end"}>
            <NavDrawer
              activeNavIndex={activeNavIndex}
              aria-label="Drawer Navs"
              color={!trigger ? "white" : "current"}
            />

            {/* <ColorModeButton
              ml={0}
              borderRadius={"full"}
              color={!trigger ? "white" : "current"}
              className="btn"
              size={"md"}
            />

            <LangSwitcher
              borderRadius={"full"}
              color={!trigger ? "white" : "current"}
            />

            {sw <= 900 && (
              <NavDrawer
                activeNavIndex={activeNavIndex}
                aria-label="Drawer Navs"
                // color={trigger ? "white" : darkLightColor}
                borderRadius={"full"}
                color={"white"}
              />
            )} */}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default TopNav;
