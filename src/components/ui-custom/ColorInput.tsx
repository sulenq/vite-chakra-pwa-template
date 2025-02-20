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
import { INPUT_FOCUS_BORDER_COLOR } from "@/constant/themeConfig";
import rgbaToHex from "@/utils/rgbaToHex";

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
      onValueChange={(e) => {
        onChangeSetter(rgbaToHex(e.value));
      }}
      {...props}
    >
      {label && <ColorPickerLabel>{label}</ColorPickerLabel>}
      <ColorPickerControl>
        <ColorPickerInput _focus={{ borderColor: INPUT_FOCUS_BORDER_COLOR }} />
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
