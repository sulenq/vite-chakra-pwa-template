import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import useScreen from "@/hooks/useScreen";
import back from "@/utils/back";
import {
  DialogActionTriggerProps,
  DialogBackdropProps,
  DialogBodyProps,
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogFooterProps,
  DialogHeaderProps,
  DrawerActionTriggerProps,
  DrawerBackdropProps,
  DrawerBodyProps,
  DrawerCloseTriggerProps,
  DrawerContentProps,
  DrawerFooterProps,
  DrawerHeaderProps,
  HStack,
} from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
} from "../ui/dialog";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "../ui/drawer";
import CContainer from "./CContainer";

const DisclosureRoot = ({ children, ...props }: any) => {
  const { sw } = useScreen(0);

  const iss = sw < 768;

  return iss ? (
    <DrawerRoot placement={"bottom"} {...props}>
      {children}
    </DrawerRoot>
  ) : (
    <DialogRoot placement={"center"} {...props}>
      {children}
    </DialogRoot>
  );
  // return (
  //   <DialogRoot>
  //     <DrawerRoot>{children}</DrawerRoot>
  //   </DialogRoot>
  // );
};

type DisclosureBackdropProps = {} & (DrawerBackdropProps | DialogBackdropProps);
const DisclosureBackdrop = ({ ...props }: DisclosureBackdropProps) => {
  const iss = useIsSmScreenWidth();

  return iss ? (
    <DrawerBackdrop {...(props as DrawerBackdropProps)} />
  ) : (
    <DialogBackdrop {...(props as DialogBackdropProps)} />
  );
};

const DisclosureTrigger = ({ children }: any) => {
  const iss = useIsSmScreenWidth();

  return iss ? (
    <DrawerTrigger asChild>{children}</DrawerTrigger>
  ) : (
    <DialogTrigger asChild>{children}</DialogTrigger>
  );
};

type DisclosureContentProps = {
  children: React.ReactNode;
} & (DrawerContentProps | DialogContentProps);
const DisclosureContent = ({ children, ...props }: DisclosureContentProps) => {
  const iss = useIsSmScreenWidth();

  return iss ? (
    <DrawerContent {...(props as DrawerContentProps)}>{children}</DrawerContent>
  ) : (
    <DialogContent {...(props as DialogContentProps)}>{children}</DialogContent>
  );
};

type DisclosureHeaderProps = {
  children: React.ReactNode;
} & (DrawerHeaderProps | DialogHeaderProps);
const DisclosureHeader = ({ children, ...props }: DisclosureHeaderProps) => {
  const iss = useIsSmScreenWidth();

  return iss ? (
    <DrawerHeader px={5} pt={3} {...(props as DrawerHeaderProps)}>
      {children}
    </DrawerHeader>
  ) : (
    <DialogHeader p={4} ml={1} {...(props as DialogHeaderProps)}>
      {children}
    </DialogHeader>
  );
};

type DisclosureBodyProps = {
  children: React.ReactNode;
} & (DrawerBodyProps | DialogBodyProps);
const DisclosureBody = ({ children, ...props }: DisclosureBodyProps) => {
  const iss = useIsSmScreenWidth();

  return iss ? (
    <DrawerBody px={4} py={0} {...(props as DrawerHeaderProps)}>
      {children}
    </DrawerBody>
  ) : (
    <DialogBody
      px={4}
      pt={0}
      pb={"20px !important"}
      {...(props as DialogBodyProps)}
    >
      {children}
    </DialogBody>
  );
};

type DisclosureFooterProps = {
  children: React.ReactNode;
} & (DrawerFooterProps | DialogFooterProps);
const DisclosureFooter = ({ children, ...props }: DisclosureFooterProps) => {
  const iss = useIsSmScreenWidth();

  return iss ? (
    <DrawerFooter px={4} pt={4} pb={6} {...(props as DrawerHeaderProps)}>
      <CContainer align={"stretch"} gap={2}>
        {children}
      </CContainer>
    </DrawerFooter>
  ) : (
    <DialogFooter
      p={4}
      borderTop={"1px solid var(--d2)"}
      // bg={"var(--d1)"}
      {...(props as DialogFooterProps)}
    >
      <HStack w={"full"} justify={"end"}>
        {children}
      </HStack>
    </DialogFooter>
  );
};

type DisclosureActionTriggerProps = {} & (
  | DrawerActionTriggerProps
  | DialogActionTriggerProps
);
const DisclosureActionTrigger = ({
  children,
  ...props
}: DisclosureActionTriggerProps) => {
  const iss = useIsSmScreenWidth();

  return iss ? (
    <DrawerActionTrigger
      onClick={back}
      {...(props as DrawerActionTriggerProps)}
    >
      {children}
    </DrawerActionTrigger>
  ) : (
    <DialogActionTrigger
      onClick={back}
      {...(props as DialogActionTriggerProps)}
    >
      {children}
    </DialogActionTrigger>
  );
};

type DisclosureCloseTriggerProps = {} & (
  | DrawerCloseTriggerProps
  | DialogCloseTriggerProps
);
const DisclosureCloseTrigger = ({
  children,
  ...props
}: DisclosureCloseTriggerProps) => {
  const iss = useIsSmScreenWidth();

  return iss ? (
    <DrawerCloseTrigger
      mt={"2px"}
      mr={"-6px"}
      onClick={back}
      {...(props as DrawerCloseTriggerProps)}
    >
      {children}
    </DrawerCloseTrigger>
  ) : (
    <DialogCloseTrigger
      mr={"-2px"}
      mt={"-2px"}
      onClick={back}
      {...(props as DialogCloseTriggerProps)}
    >
      {children}
    </DialogCloseTrigger>
  );
};

export {
  DisclosureActionTrigger,
  DisclosureBackdrop,
  DisclosureBody,
  DisclosureCloseTrigger,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
  DisclosureTrigger,
};
