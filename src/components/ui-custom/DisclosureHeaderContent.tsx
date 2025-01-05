import useBackOnDefaultPage from "@/hooks/useBackOnDefaultPage";
import { HStack } from "@chakra-ui/react";
import { DisclosureCloseTrigger } from "./Disclosure";
import Heading6 from "./Heading6";

type Props = {
  title?: string;
  withCloseButton?: boolean;
  content?: any;
};
const DisclosureHeaderContent = ({
  title,
  withCloseButton = true,
  content,
}: Props) => {
  const handleBackOnDefaultPage = useBackOnDefaultPage();

  return (
    <HStack justify={"space-between"}>
      {content ? content : <Heading6 fontWeight={"semibold"}>{title}</Heading6>}

      {withCloseButton && (
        <DisclosureCloseTrigger
          borderRadius={"full"}
          top={3}
          right={3}
          onClick={handleBackOnDefaultPage}
        />
      )}
    </HStack>
  );
};

export default DisclosureHeaderContent;
