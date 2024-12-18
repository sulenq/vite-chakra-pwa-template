import { Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import { X } from "@phosphor-icons/react";
import { iconSize } from "../../constant/sizes";
import back from "@/utils/back";

interface Props extends IconButtonProps {
  disableBackOnClose?: boolean;
  onClose?: () => void;
}

export default function BackOnCloseButton({
  disableBackOnClose,
  onClose,
  ...props
}: Props) {
  return (
    <IconButton
      borderRadius={"full"}
      className="btn"
      onClick={(e) => {
        e.stopPropagation();
        !disableBackOnClose && back();
        onClose && onClose();
      }}
      {...props}
    >
      <Icon fontSize={iconSize} className="custom-icon">
        <X />
      </Icon>
    </IconButton>
  );
}
