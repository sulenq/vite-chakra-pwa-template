import { HStack } from "@chakra-ui/react";
import Heading6 from "./Heading6";
import { DisclosureCloseTrigger } from "./Disclosure";

type Props = {
  title?: string;
  withCloseButton?: boolean;
};
const DisclosureHeaderContent = ({ title, withCloseButton = true }: Props) => {
  return (
    <HStack justify={"space-between"}>
      <Heading6 fontWeight={"semibold"}>{title}</Heading6>

      {withCloseButton && (
        <DisclosureCloseTrigger borderRadius={"full"} top={3} right={3} />
      )}
    </HStack>
  );
};

export default DisclosureHeaderContent;
