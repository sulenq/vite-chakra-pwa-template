import { useThemeConfig } from "@/context/useThemeConfig";
import useBackOnClose from "@/hooks/useBackOnClose";
import { HStack, Text, useDisclosure } from "@chakra-ui/react";
import CContainer from "../ui-custom/CContainer";
import { ACTIVITY_TYPES } from "@/constant/parameters/activityTypes";
import formatDate from "@/utils/formatDate";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "../ui-custom/Disclosure";
import DisclosureHeaderContent from "../ui-custom/DisclosureHeaderContent";
import BackButton from "../ui-custom/BackButton";

const MerchantActivityItem = ({ item }: any) => {
  // Context
  const { themeConfig } = useThemeConfig();

  // Utils
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(`merchant-acivity-detail-${item.id}`, open, onOpen, onClose);

  return (
    <>
      <CContainer
        _hover={{ bg: "bg.muted" }}
        p={2}
        px={3}
        borderRadius={themeConfig.radii.component}
        transition={"200ms"}
        cursor={"pointer"}
        onClick={onOpen}
      >
        <HStack>
          <Text>
            <b>{ACTIVITY_TYPES[item.activity_type].title}</b>,{" "}
            {ACTIVITY_TYPES[item.activity_type].description}
          </Text>
        </HStack>
        <Text fontSize={"xs"} color={"fg.subtle"}>
          {formatDate(item.created_at, "dmy-hm")}
        </Text>
      </CContainer>

      <DisclosureRoot open={open} lazyLoad>
        <DisclosureContent>
          <DisclosureHeader>
            <DisclosureHeaderContent title={``} />
          </DisclosureHeader>

          <DisclosureBody>Detail</DisclosureBody>

          <DisclosureFooter>
            <BackButton>Close</BackButton>
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default MerchantActivityItem;
