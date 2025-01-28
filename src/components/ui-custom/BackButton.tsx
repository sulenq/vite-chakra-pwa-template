import { MAIN_BUTTON_SIZE } from "@/constant/sizes";
import useBackOnDefaultPage from "@/hooks/useBackOnDefaultPage";
import back from "@/utils/back";
import { ButtonProps, Icon } from "@chakra-ui/react";
import { IconChevronLeft } from "@tabler/icons-react";
import BButton from "./BButton";
import { useNavigate } from "react-router-dom";

interface Props extends ButtonProps {
  children?: any;
  iconButton?: boolean;
  backPath?: string;
}

const BackButton = ({
  children,
  iconButton = false,
  backPath,
  ...props
}: Props) => {
  const navigate = useNavigate();
  const handleBackOnDefaultPage = useBackOnDefaultPage();

  function handleBack() {
    if (backPath) {
      navigate(backPath);
    } else {
      back();
      handleBackOnDefaultPage();
    }
  }

  if (iconButton)
    return (
      <BButton
        iconButton
        variant={"ghost"}
        borderRadius={"full"}
        onClick={handleBack}
        size={"xs"}
        {...props}
      >
        <Icon fontSize={"lg"}>
          <IconChevronLeft />
        </Icon>
      </BButton>
    );

  return (
    <BButton
      size={MAIN_BUTTON_SIZE}
      variant={"outline"}
      onClick={handleBack}
      {...props}
    >
      {children || "Cancel"}
    </BButton>
  );
};

export default BackButton;
