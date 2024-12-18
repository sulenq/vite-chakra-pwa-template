import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
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
  const iss = useIsSmScreenWidth();

  return iss ? (
    <DrawerRoot placement={"bottom"} {...props}>
      {children}
    </DrawerRoot>
  ) : (
    <DialogRoot placement={"center"} {...props}>
      {children}
    </DialogRoot>
  );
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
    <DrawerHeader pt={4} {...(props as DrawerHeaderProps)}>
      {children}
    </DrawerHeader>
  ) : (
    <DialogHeader p={5} {...(props as DialogHeaderProps)}>
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
    <DrawerBody {...(props as DrawerHeaderProps)}>{children}</DrawerBody>
  ) : (
    <DialogBody px={5} pb={"20px !important"} {...(props as DialogBodyProps)}>
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
    <DrawerFooter {...(props as DrawerHeaderProps)}>
      <CContainer align={"stretch"} gap={2}>
        {children}
      </CContainer>
    </DrawerFooter>
  ) : (
    <DialogFooter
      p={5}
      borderTop={"1px solid var(--divider2)"}
      // bg={"var(--divider)"}
      {...(props as DialogFooterProps)}
    >
      <HStack w={"100%"} justify={"end"}>
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
      mt={"6px"}
      onClick={back}
      {...(props as DrawerCloseTriggerProps)}
    >
      {children}
    </DrawerCloseTrigger>
  ) : (
    <DialogCloseTrigger onClick={back} {...(props as DialogCloseTriggerProps)}>
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
