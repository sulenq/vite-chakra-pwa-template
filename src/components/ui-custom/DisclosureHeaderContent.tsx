import useBackOnDefaultPage from "@/hooks/useBackOnDefaultPage";
import { HStack } from "@chakra-ui/react";
import { DisclosureCloseTrigger } from "./Disclosure";
import Heading6 from "./Heading6";
import back from "@/utils/back";

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

  function handleBack() {
    back();
    handleBackOnDefaultPage();
  }

  return (
    <HStack justify={"space-between"}>
      {content ? content : <Heading6 fontWeight={"semibold"}>{title}</Heading6>}

      {withCloseButton && (
        <DisclosureCloseTrigger
          borderRadius={"full"}
          top={"14px"}
          right={"14px"}
          onClick={handleBack}
        />
      )}
    </HStack>
  );
};

export default DisclosureHeaderContent;
