import {
  delete_all_inbox_button_label,
  delete_all_inbox_disclosure,
} from "@/locales/master";
import useBackOnClose from "@/hooks/useBackOnClose";
import useLang from "@/hooks/useLang";
import { Icon, useDisclosure } from "@chakra-ui/react";
import { IconInbox } from "@tabler/icons-react";
import BackButton from "../ui-custom/BackButton";
import BButton from "../ui-custom/BButton";
import ConfirmationDisclosure from "../ui-custom/ConfirmationDisclosure";
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
  // Context
  const { lang } = useLang();

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
            <ConfirmationDisclosure
              id="loggingout"
              title={delete_all_inbox_disclosure.title[lang]}
              description={delete_all_inbox_disclosure.description[lang]}
              confirmLabel="Delete"
              confirmButtonProps={{ colorPalette: "red" }}
              confirmCallback={() => {}}
            >
              <BButton colorPalette={"red"} variant={"surface"}>
                {delete_all_inbox_button_label[lang]}
              </BButton>
            </ConfirmationDisclosure>
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default Inbox;
