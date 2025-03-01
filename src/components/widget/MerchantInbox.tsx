import { Icon } from "@chakra-ui/react";
import { IconInbox } from "@tabler/icons-react";
import BButton from "../ui-custom/BButton";
import FloatCounter from "../ui-custom/FloatCounter";
import { DisclosureRoot } from "../ui-custom/Disclosure";

const MerchantInbox = () => {
  return (
    <>
      <BButton iconButton unclicky variant={"ghost"}>
        <FloatCounter circleProps={{ mt: "18px", mr: "18px" }}>2</FloatCounter>

        <Icon>
          <IconInbox stroke={1.5} />
        </Icon>
      </BButton>

      <DisclosureRoot></DisclosureRoot>
    </>
  );
};

export default MerchantInbox;
