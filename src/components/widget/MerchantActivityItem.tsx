import { useThemeConfig } from "@/context/useThemeConfig";
import { ACTIVITY_TYPES } from "@/static/activityTypes";
import useBackOnClose from "@/hooks/useBackOnClose";
import formatDate from "@/utils/formatDate";
import { makeTime } from "@/utils/time";
import getTzOffsetMs from "@/utils/getTzOffsetMs";
import userTimeZone from "@/utils/userTimeZone";
import {
  HStack,
  StackProps,
  Text,
  TextProps,
  useDisclosure,
} from "@chakra-ui/react";
import BackButton from "../ui-custom/BackButton";
import CContainer from "../ui-custom/CContainer";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "../ui-custom/Disclosure";
import DisclosureHeaderContent from "../ui-custom/DisclosureHeaderContent";

const ActivityDetailItemContainer = ({ children, ...props }: StackProps) => {
  return (
    <HStack
      align={"start"}
      py={2}
      borderBottom={"1px solid {colors.gray.subtle}"}
      {...props}
    >
      {children}
    </HStack>
  );
};

const ActivityDetailItemLabel = ({ children, ...props }: TextProps) => {
  return (
    <Text w={"50%"} flex={"1 1 150px"} {...props}>
      {children}
    </Text>
  );
};

const MerchantActivityItem = ({ item }: any) => {
  // Contexts
  const { themeConfig } = useThemeConfig();

  // States, Refs
  const data: any = {
    id: 1,
    activity_type: "subscription_purchase",
    metadata: [],
    created_at: "2025-01-25T10:00:00Z",
  };

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
          <Text truncate>
            <b>{ACTIVITY_TYPES[item.activity_type].title}</b>,{" "}
            {ACTIVITY_TYPES[item.activity_type].description}
          </Text>
        </HStack>
        <Text fontSize={"xs"} color={"fg.subtle"}>
          {formatDate(
            new Date(
              new Date(item.created_at).getTime() +
                getTzOffsetMs(userTimeZone().key)
            )
          )}{" "}
          {makeTime(item.created_at)}
        </Text>
      </CContainer>

      <DisclosureRoot open={open} size={"sm"} lazyLoad>
        <DisclosureContent>
          <DisclosureHeader>
            <DisclosureHeaderContent title={`Detail Aktivitas`} />
          </DisclosureHeader>

          <DisclosureBody pb={"4 !important"}>
            <CContainer>
              <Text mb={4}>
                <b>{ACTIVITY_TYPES[item.activity_type].title}</b>,{" "}
                {ACTIVITY_TYPES[item.activity_type].description}
              </Text>

              <CContainer>
                <ActivityDetailItemContainer>
                  <ActivityDetailItemLabel>Tanggal</ActivityDetailItemLabel>
                  <ActivityDetailItemLabel>
                    {formatDate(item.created_at)}
                  </ActivityDetailItemLabel>
                </ActivityDetailItemContainer>

                <ActivityDetailItemContainer
                  borderBottom={data.metadata.length === 0 ? "none" : ""}
                >
                  <ActivityDetailItemLabel>Waktu</ActivityDetailItemLabel>
                  <ActivityDetailItemLabel>
                    {makeTime(item.created_at)}
                  </ActivityDetailItemLabel>
                </ActivityDetailItemContainer>

                {data.metadata.map((item: any, i: number) => {
                  return (
                    <ActivityDetailItemContainer key={i}>
                      <ActivityDetailItemLabel>
                        {item.label}
                      </ActivityDetailItemLabel>
                      <ActivityDetailItemLabel>
                        {item.value}
                      </ActivityDetailItemLabel>
                    </ActivityDetailItemContainer>
                  );
                })}
              </CContainer>
            </CContainer>
          </DisclosureBody>

          <DisclosureFooter>
            <BackButton />
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default MerchantActivityItem;
