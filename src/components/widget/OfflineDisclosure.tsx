import useOffline from "@/context/useOffilne";
import useBackOnClose from "@/hooks/useBackOnClose";
import back from "@/utils/back";
import { Icon, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { IconAccessPointOff } from "@tabler/icons-react";
import { useEffect } from "react";
import BackButton from "../ui-custom/BackButton";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "../ui-custom/Disclosure";
import DisclosureHeaderContent from "../ui-custom/DisclosureHeaderContent";
import BButton from "../ui-custom/BButton";
import { useThemeConfig } from "@/context/useThemeConfig";

const OfflineDisclosure = () => {
  // Context
  const { offline } = useOffline();
  const { themeConfig } = useThemeConfig();

  // Utils
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(``, open, onOpen, onClose);

  useEffect(() => {
    if (offline) onOpen();
    if (!offline) back();
  }, [offline]);

  return (
    <DisclosureRoot open={open} lazyLoad size={"xs"}>
      <DisclosureContent>
        <DisclosureHeader>
          <DisclosureHeaderContent title={``} />
        </DisclosureHeader>

        <DisclosureBody>
          <VStack gap={4}>
            <Icon color={"fg.subtle"}>
              <IconAccessPointOff size={36} />
            </Icon>
            <Text textAlign={"center"} fontSize={"lg"} fontWeight={"bold"}>
              Koneksi Terputus
            </Text>
            <Text textAlign={"center"}>
              Sepertinya Anda sedang offline. Periksa koneksi internet Anda dan
              coba lagi.
            </Text>
          </VStack>
        </DisclosureBody>

        <DisclosureFooter>
          <BackButton>Close</BackButton>
          <BButton
            colorPalette={themeConfig.colorPalette}
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </BButton>
        </DisclosureFooter>
      </DisclosureContent>
    </DisclosureRoot>
  );
};

export default OfflineDisclosure;
