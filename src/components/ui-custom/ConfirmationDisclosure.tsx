import { Box, BoxProps, Text, useDisclosure } from "@chakra-ui/react";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "./Disclosure";
import DisclosureHeaderContent from "./DisclosureHeaderContent";
import BButton from "./BButton";
import useBackOnClose from "@/hooks/useBackOnClose";
import back from "@/utils/back";

interface Props {
  id: string;
  title: string;
  description: string;
  confirmLabel: string;
  confirmCallback: () => void;
  children?: any;
  boxProps?: BoxProps;
}

const ConfirmationDisclosure = ({
  id,
  title = "Judul",
  description = "Deskripsi",
  confirmLabel = "Label Konfirmasi",
  confirmCallback = () => {},
  boxProps,
  children,
}: Props) => {
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(`confirm-${title}-${id}`, open, onOpen, onClose);

  return (
    <>
      <Box w={"full"} onClick={onOpen} {...boxProps}>
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
            <BButton variant={"outline"} onClick={back}>
              Cancel
            </BButton>
            <BButton onClick={confirmCallback}>{confirmLabel}</BButton>
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default ConfirmationDisclosure;
