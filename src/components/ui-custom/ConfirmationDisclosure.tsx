import useBackOnClose from "@/hooks/useBackOnClose";
import { Box, BoxProps, Text, useDisclosure } from "@chakra-ui/react";
import BackButton from "./BackButton";
import BButton from "./BButton";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "./Disclosure";
import DisclosureHeaderContent from "./DisclosureHeaderContent";

interface Props {
  id: string;
  title: string;
  description: string;
  confirmLabel: string;
  confirmCallback: () => void;
  children?: any;
  boxProps?: BoxProps;
  disabled?: boolean;
}

const ConfirmationDisclosure = ({
  id,
  title = "Judul",
  description = "Deskripsi",
  confirmLabel = "Label Konfirmasi",
  confirmCallback = () => {},
  boxProps,
  children,
  disabled = false,
}: Props) => {
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(`confirm-${title}-${id}`, open, onOpen, onClose);

  return (
    <>
      <Box w={"full"} onClick={disabled ? undefined : onOpen} {...boxProps}>
        {children}
      </Box>

      <DisclosureRoot open={open} size={"sm"}>
        <DisclosureContent>
          <DisclosureHeader>
            <DisclosureHeaderContent title={`${title}`} />
          </DisclosureHeader>

          <DisclosureBody>
            <Text>{description}</Text>
          </DisclosureBody>

          <DisclosureFooter>
            <BackButton />
            <BButton onClick={confirmCallback}>{confirmLabel}</BButton>
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default ConfirmationDisclosure;
