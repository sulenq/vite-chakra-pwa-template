import useBackOnClose from "@/hooks/useBackOnClose";
import { Box, BoxProps, useDisclosure } from "@chakra-ui/react";
import BackButton from "../ui-custom/BackButton";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "../ui-custom/Disclosure";
import DisclosureHeaderContent from "../ui-custom/DisclosureHeaderContent";
import MerchantActivityItem from "./MerchantActivityItem";

const AllMerchantActivitiesDisclosure = ({ children, ...props }: BoxProps) => {
  // Utils
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose("all-merchant-activities", open, onOpen, onClose);

  // States, Refs
  const data = [
    {
      activity_type: "subscription_purchase",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "subscription_purchase",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
    {
      activity_type: "payment",
      created_at: "2025-01-25T10:00:00Z",
    },
  ];

  return (
    <>
      <Box onClick={onOpen} {...props}>
        {children}
      </Box>

      <DisclosureRoot open={open} lazyLoad scrollBehavior={"inside"}>
        <DisclosureContent>
          <DisclosureHeader>
            <DisclosureHeaderContent title={`Semua Aktivitas`} />
          </DisclosureHeader>

          <DisclosureBody px={2} pb={"2 !important"}>
            {data.map((item: any, i: number) => {
              return <MerchantActivityItem key={i} item={item} />;
            })}
          </DisclosureBody>

          <DisclosureFooter>
            <BackButton />
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default AllMerchantActivitiesDisclosure;
