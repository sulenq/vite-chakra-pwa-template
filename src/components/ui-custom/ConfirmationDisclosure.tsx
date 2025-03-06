import { useThemeConfig } from "@/context/useThemeConfig";
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
  const { themeConfig } = useThemeConfig();

  return (
    <>
      <Box onClick={disabled ? undefined : onOpen} {...boxProps}>
        {children}
      </Box>

      <DisclosureRoot open={open} size={"xs"}>
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
              onClick={confirmCallback}
              colorPalette={themeConfig.colorPalette}
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
