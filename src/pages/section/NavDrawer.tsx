import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading2 from "@/components/ui-custom/Heading2";
import LangSwitcher from "@/components/ui-custom/LangSwitcher";
import { ColorModeButton } from "@/components/ui/color-mode";
import contents from "@/constant/contents";
import back from "@/utils/back";
import {
  Box,
  HStack,
  Icon,
  IconButtonProps,
  Portal,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { X } from "@phosphor-icons/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import navs from "../../constant/navs";
import useBackOnClose from "../../hooks/useBackOnClose";
import { useLang } from "../../hooks/useLang";
import Container from "./Container";

interface Props extends IconButtonProps {
  activeNavIndex?: number;
}

export default function NavDrawer({ activeNavIndex, ...props }: Props) {
  // SX

  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose("nav-drawer", open, onOpen, onClose);
  const { lang } = useLang();
  const navigate = useNavigate();

  // Effect untuk mengatur scroll body
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <BButton
        zIndex={99}
        onClick={onOpen}
        className="btn"
        fontSize={"1rem !important"}
        {...props}
      >
        Menu
        <CContainer gap={"6px"}>
          <Box w={"20px"} h={"2px"} bg={props?.color} />
          <Box w={"20px"} h={"2px"} bg={props?.color} />
        </CContainer>
      </BButton>

      <Portal>
        <CContainer
          position={"fixed"}
          top={open ? "0" : "-100dvh"}
          left={0}
          zIndex={99}
          bg={"#303030df"}
          color={"white"}
          backdropFilter={"blur(5px)"}
          transition={"200ms"}
          minH={"100dvh"}
          overflow={"auto"}
        >
          <Container>
            <HStack justify={"space-between"} h={"56px"}>
              <HStack>
                <ColorModeButton
                  color={"white"}
                  borderRadius={"full"}
                  className="btn"
                  size={"lg"}
                />

                <LangSwitcher
                  color={"white"}
                  borderRadius={"full"}
                  size={"lg"}
                  fontSize={"1rem !important"}
                />
              </HStack>

              <BButton
                className="btn"
                fontSize={"1rem !important"}
                onClick={(e) => {
                  e.stopPropagation();
                  back();
                }}
                {...props}
              >
                Close
                <Icon fontSize={"lg"} className="custom-icon">
                  <X />
                </Icon>
              </BButton>
            </HStack>
          </Container>

          {/* Body */}
          <CContainer align={"center"} justify={"center"} gap={4} p={5}>
            {navs.map((nav, i) => (
              <Heading2
                key={i}
                fontWeight={"500 !important"}
                cursor={"pointer"}
                onClick={() => {
                  navigate(nav.link);
                }}
                transition={"200ms"}
                _hover={{ color: "p.500" }}
                borderBottom={"2px solid"}
                borderColor={activeNavIndex === i ? "p.500" : "transparent"}
              >
                {nav.label[lang]}
              </Heading2>
            ))}
          </CContainer>

          <CContainer flex={0} p={5}>
            <HStack wrap={"wrap"} justify={"center"} gapX={4}>
              {contents.sosmeds.sosmeds.map((item, i) => {
                const disabled = i > 0;

                return (
                  <Link
                    to={!disabled ? item.link : ""}
                    target={!disabled ? "_blank" : undefined}
                  >
                    <BButton
                      key={i}
                      mt={1}
                      className="btn-clear"
                      color={"white"}
                      disabled={disabled}
                      opacity={0.5}
                      ml={[0, null, "auto"]}
                      fontWeight={400}
                      cursor={disabled ? "not-allowed" : "pointer"} // Ubah cursor jika disabled
                    >
                      {item.name}
                    </BButton>
                  </Link>
                );
              })}
            </HStack>

            <Text
              mt={5}
              textAlign={"center"}
              opacity={0.5}
              className="initDrawerContent"
            >
              Copyright {new Date().getFullYear()} © Bimtech. All right
              reserved.
            </Text>
          </CContainer>
        </CContainer>
      </Portal>
    </>
  );
}
