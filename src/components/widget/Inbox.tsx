import useBackOnClose from "@/hooks/useBackOnClose";
import { Icon, useDisclosure } from "@chakra-ui/react";
import { IconInbox } from "@tabler/icons-react";
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
import FloatCounter from "../ui-custom/FloatCounter";

const Inbox = () => {
  // Utils
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(`merchant-inbox`, open, onOpen, onClose);

  return (
    <>
      <BButton iconButton unclicky variant={"ghost"} onClick={onOpen}>
        <FloatCounter circleProps={{ mt: "18px", mr: "18px" }}>2</FloatCounter>

        <Icon>
          <IconInbox stroke={1.5} />
        </Icon>
      </BButton>

      <DisclosureRoot open={open} size={"xs"}>
        <DisclosureContent>
          <DisclosureHeader>
            <DisclosureHeaderContent title="Inbox" />
          </DisclosureHeader>

          <DisclosureBody>List</DisclosureBody>

          <DisclosureFooter>
            <BackButton />
            <BButton colorPalette={"red"}>Delete dibaca</BButton>
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default Inbox;
