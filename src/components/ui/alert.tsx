import { Alert as ChakraAlert, Icon } from "@chakra-ui/react";
import { CloseButton } from "./close-button";
import { forwardRef } from "react";
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from "@phosphor-icons/react";

export interface AlertProps extends Omit<ChakraAlert.RootProps, "title"> {
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  title?: React.ReactNode;
  icon?: React.ReactElement;
  closable?: boolean;
  onClose?: () => void;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  const {
    title,
    children,
    icon,
    closable,
    onClose,
    startElement,
    endElement,
    ...rest
  } = props;

  let PresetIcon;
  switch (rest?.status) {
    case "success":
      PresetIcon = CheckCircle;
      break;
    case "error":
      PresetIcon = Warning;
      break;
    case "warning":
      PresetIcon = WarningCircle;
      break;
    default:
      PresetIcon = Info;
  }

  return (
    <ChakraAlert.Root ref={ref} variant={"surface"} {...rest}>
      {startElement || (
        <ChakraAlert.Indicator>
          {icon || (
            <Icon>
              <PresetIcon />
            </Icon>
          )}
        </ChakraAlert.Indicator>
      )}
      {children ? (
        <ChakraAlert.Content>
          <ChakraAlert.Title>{title}</ChakraAlert.Title>
          <ChakraAlert.Description>{children}</ChakraAlert.Description>
        </ChakraAlert.Content>
      ) : (
        <ChakraAlert.Title flex="1">{title}</ChakraAlert.Title>
      )}
      {endElement}
      {closable && (
        <CloseButton
          size="sm"
          pos="relative"
          top="-2"
          insetEnd="-2"
          alignSelf="flex-start"
          onClick={onClose}
        />
      )}
    </ChakraAlert.Root>
  );
});
