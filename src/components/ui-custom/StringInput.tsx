import {
  Box,
  BoxProps,
  Input as ChakraInput,
  InputProps,
  useFieldContext,
} from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { useRef } from "react";
import { useColorMode } from "../ui/color-mode";
import { FOCUS_BORDER } from "@/constant/paletteConfig";

interface Props extends InputProps {
  fRef?: any;
  name?: string;
  onChangeSetter?: (inputValue: string | undefined) => void;
  inputValue?: string | undefined;
  placeholder?: string;
  boxProps?: BoxProps;
  invalid?: boolean;
}

export default function StringInput({
  fRef,
  name,
  onChangeSetter,
  inputValue,
  placeholder = "",
  boxProps,
  invalid,
  ...props
}: Props) {
  // SX
  const { colorMode } = useColorMode();
  const darkLightColorManual = colorMode === "light" ? "#fff" : "var(--dark)";
  const fc = useFieldContext();

  // Track first render
  const isFirstRender = useRef(true);

  // Utils
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeSetter) {
      onChangeSetter(e.target.value);
    }
    if (isFirstRender.current) isFirstRender.current = false;
  };

  return (
    <>
      <Global
        styles={css`
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px ${darkLightColorManual} inset !important;
            box-shadow: 0 0 0 30px ${darkLightColorManual} inset !important;
          }
        `}
      />

      <Box position={"relative"} w={"full"} overflow={"visible"} {...boxProps}>
        <ChakraInput
          ref={fRef}
          name={name}
          onChange={handleChange}
          value={inputValue}
          placeholder={placeholder}
          borderColor={fc?.invalid || invalid ? "border.error" : "gray.muted"}
          fontWeight={"medium"}
          _focus={{ borderColor: FOCUS_BORDER }}
          autoComplete="off"
          {...props}
        />
      </Box>
    </>
  );
}
