import { ButtonProps } from "@chakra-ui/react";
import BButton from "./BButton";
import back from "@/utils/back";
import useBackOnDefaultPage from "@/hooks/useBackOnDefaultPage";
import { MAIN_BUTTON_SIZE } from "@/constant/sizes";

interface Props extends ButtonProps {
  children?: any;
}

const BackButton = ({ children }: Props) => {
  const handleBackOnDefaultPage = useBackOnDefaultPage();

  function handleBack() {
    back();
    handleBackOnDefaultPage();
  }
  return (
    <BButton size={MAIN_BUTTON_SIZE} variant={"outline"} onClick={handleBack}>
      {children || "Cancel"}
    </BButton>
  );
};

export default BackButton;
