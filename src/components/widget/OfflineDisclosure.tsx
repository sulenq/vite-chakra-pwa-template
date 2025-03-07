import useOffline from "@/context/useOffilne";
import { useThemeConfig } from "@/context/useThemeConfig";
import useBackOnClose from "@/hooks/useBackOnClose";
import useLang from "@/context/useLang";
import back from "@/utils/back";
import { Icon, useDisclosure } from "@chakra-ui/react";
import { IconAccessPointOff } from "@tabler/icons-react";
import { useEffect } from "react";
import BackButton from "../ui-custom/BackButton";
import BButton from "../ui-custom/BButton";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "../ui-custom/Disclosure";
import DisclosureHeaderContent from "../ui-custom/DisclosureHeaderContent";
import { EmptyState } from "../ui/empty-state";
import { offline_disclosure } from "@/locales/_master";

const OfflineDisclosure = () => {
  // Context
  const { offline } = useOffline();
  const { themeConfig } = useThemeConfig();
  const { lang } = useLang();

  // Utils
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(``, open, onOpen, onClose);

  useEffect(() => {
    if (offline) onOpen();
    if (!offline && open) back();
  }, [offline]);

  return (
    <DisclosureRoot open={open} lazyLoad size={"xs"}>
      <DisclosureContent>
        <DisclosureHeader>
          <DisclosureHeaderContent title={``} />
        </DisclosureHeader>

        <DisclosureBody>
          <EmptyState
            icon={
              <Icon>
                <IconAccessPointOff />
              </Icon>
            }
            title={offline_disclosure.title[lang]}
            description={offline_disclosure.description[lang]}
            maxW={"500px"}
          />
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
