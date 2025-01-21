import useBackOnClose from "@/hooks/useBackOnClose";
import {
  Box,
  BoxProps,
  ButtonProps,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
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
import { MAIN_BUTTON_SIZE } from "@/constant/sizes";
import { PRIMARY_COLOR_PALETTE } from "@/constant/paletteConfig";

interface Props {
  id: string;
  title: string;
  description: string;
  confirmLabel: string;
  confirmCallback: () => void;
  confirmButtonProps?: ButtonProps;
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
  confirmButtonProps,
  children,
  boxProps,
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
            <BButton
              size={MAIN_BUTTON_SIZE}
              onClick={confirmCallback}
              colorPalette={PRIMARY_COLOR_PALETTE}
              {...confirmButtonProps}
            >
              {confirmLabel}
            </BButton>
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default ConfirmationDisclosure;
