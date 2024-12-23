import { Box, Drawer as ChakraDrawer, Portal } from "@chakra-ui/react";
import { forwardRef } from "react";
import { CloseButton } from "./close-button";
import CContainer from "../ui-custom/CContainer";
import back from "@/utils/back";

interface DrawerContentProps extends ChakraDrawer.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  offset?: ChakraDrawer.ContentProps["padding"];
  backdrop?: boolean;
}

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  function DrawerContent(props, ref) {
    const {
      children,
      portalled = true,
      portalRef,
      offset,
      backdrop = true,
      ...rest
    } = props;
    return (
      <Portal disabled={!portalled} container={portalRef}>
        {backdrop && (
          <ChakraDrawer.Backdrop
            bg={"var(--divider)"}
            backdropFilter={"blur(5px)"}
            zIndex={5}
          />
        )}
        <ChakraDrawer.Positioner padding={offset}>
          <ChakraDrawer.Content
            ref={ref}
            zIndex={6}
            h={"100%"}
            onClick={back}
            bg={"transparent"}
            justifyContent={"end"}
            shadow={"none"}
            {...rest}
          >
            <CContainer
              bg={"body"}
              justify={"end"}
              maxH={"calc(100dvh) !important"}
              onClick={(e) => {
                e.stopPropagation();
              }}
              position={"relative"}
              borderRadius={"6px 6px 0 0"}
            >
              <Box
                w={"40px"}
                h={"4px"}
                borderRadius={"full"}
                bg={"var(--divider2)"}
                mx={"auto"}
                mt={"6px"}
              />
              {children}
            </CContainer>
          </ChakraDrawer.Content>
        </ChakraDrawer.Positioner>
      </Portal>
    );
  }
);

export const DrawerCloseTrigger = forwardRef<
  HTMLButtonElement,
  ChakraDrawer.CloseTriggerProps
>(function DrawerCloseTrigger(props, ref) {
  return (
    <ChakraDrawer.CloseTrigger
      position="absolute"
      top="2"
      insetEnd="2"
      {...props}
      asChild
    >
      <CloseButton size="sm" ref={ref} />
    </ChakraDrawer.CloseTrigger>
  );
});

export const DrawerTrigger = ChakraDrawer.Trigger;
export const DrawerRoot = ChakraDrawer.Root;
export const DrawerFooter = ChakraDrawer.Footer;
export const DrawerHeader = ChakraDrawer.Header;
export const DrawerBody = ChakraDrawer.Body;
export const DrawerBackdrop = ChakraDrawer.Backdrop;
export const DrawerDescription = ChakraDrawer.Description;
export const DrawerTitle = ChakraDrawer.Title;
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger;
