import useBackOnDefaultPage from "@/hooks/useBackOnDefaultPage";
import back from "@/utils/back";
import { HStack, Text } from "@chakra-ui/react";
import { DisclosureCloseTrigger } from "./Disclosure";

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
      {content ? (
        content
      ) : (
        <Text fontSize={"16px"} fontWeight={"semibold"} ml={[0, null, 1]}>
          {title}
        </Text>
      )}

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
