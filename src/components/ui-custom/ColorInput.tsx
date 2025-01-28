import { HStack, parseColor } from "@chakra-ui/react";
import {
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropper,
  ColorPickerInput,
  ColorPickerLabel,
  ColorPickerRoot,
  ColorPickerSliders,
  ColorPickerTrigger,
} from "../ui/color-picker";
import { INPUT_BORDER_COLOR_FOCUS } from "@/constant/paletteConfig";

const ColorInput = ({
  name,
  onChangeSetter,
  inputValue,
  placeholder = "Pilih warna",
  invalid,
  label,
  ...props
}: any) => {
  return (
    <ColorPickerRoot
      defaultValue={parseColor(inputValue)}
      maxW="140px"
      onValueChangeEnd={(e) => onChangeSetter(e.value)}
      {...props}
    >
      {label && <ColorPickerLabel>{label}</ColorPickerLabel>}
      <ColorPickerControl>
        <ColorPickerInput _focus={{ borderColor: INPUT_BORDER_COLOR_FOCUS }} />
        <ColorPickerTrigger cursor={"pointer"} />
      </ColorPickerControl>

      <ColorPickerContent>
        <ColorPickerArea />
        <HStack>
          <ColorPickerEyeDropper />
          <ColorPickerSliders />
        </HStack>
      </ColorPickerContent>
    </ColorPickerRoot>
  );
};

export default ColorInput;
