import { Box, BoxProps, Icon, IconButton, InputProps } from "@chakra-ui/react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";
import { useColorModeValue } from "../ui/color-mode";
import StringInput from "./StringInput";

interface Props extends InputProps {
  name: string;
  onChangeSetter: (inputValue: string | undefined) => void;
  inputValue: string | undefined;
  isError?: boolean;
  placeholder?: string;
  boxProps?: BoxProps;
}

export default function PasswordInput({
  name,
  onChangeSetter,
  inputValue,
  isError,
  placeholder,
  boxProps,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Box w={"full"} position={"relative"} {...boxProps}>
      <StringInput
        name={name}
        placeholder={placeholder || "*******"}
        onChangeSetter={(inputValue) => {
          onChangeSetter(inputValue);
        }}
        inputValue={inputValue}
        type={showPassword ? "text" : "password"}
        pr={"40px !important"}
        {...props}
      />

      <IconButton
        aria-label="show password button"
        bg={"transparent"}
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        position={"absolute"}
        right={0}
        top={0}
        zIndex={2}
        onClick={() => {
          setShowPassword((ps) => !ps);
        }}
      >
        <Icon
          fontSize={"lg"}
          color={useColorModeValue("black", "white")}
          opacity={0.4}
        >
          {showPassword ? <EyeSlash /> : <Eye />}
        </Icon>
      </IconButton>
    </Box>
  );
}
