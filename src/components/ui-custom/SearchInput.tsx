import { Center, Icon, IconButton, InputProps } from "@chakra-ui/react";
import { IconSearch, IconX } from "@tabler/icons-react";
import { Dispatch, useCallback, useEffect, useState } from "react";
import { InputGroup } from "../ui/input-group";
import { Tooltip } from "../ui/tooltip";
import StringInput from "./StringInput";

interface Props {
  inputValue?: string;
  onChangeSetter?: Dispatch<string>;
  name?: string;
  placeholder?: string;
  tooltipLabel?: string;
  inputRef?: any;
  inputProps?: InputProps;
  icon?: any;
  invalid?: boolean;
  noIcon?: boolean;
}

export default function SearchInput({
  inputRef,
  name,
  inputValue,
  onChangeSetter,
  tooltipLabel,
  placeholder = "Search...",
  inputProps,
  icon,
  invalid = false,
  noIcon = false,
}: Props) {
  const [searchLocal, setSearchLocal] = useState<string>(inputValue || "");

  const handleOnChange = useCallback(
    (value: string) => {
      if (value !== inputValue) {
        if (onChangeSetter) onChangeSetter(value);
      }
    },
    [onChangeSetter, inputValue]
  );

  // Handle debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      handleOnChange(searchLocal);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchLocal, handleOnChange]);

  // Sync searchLocal with inputValue prop when it changes
  useEffect(() => {
    setSearchLocal(inputValue || "");
  }, [inputValue]);

  return (
    <Tooltip content={tooltipLabel || placeholder}>
      <InputGroup
        w={"full"}
        startElement={
          !noIcon && <Icon w={"20px"}>{icon || <IconSearch />}</Icon>
        }
      >
        <>
          <StringInput
            pl={10}
            name={name}
            fRef={inputRef ? inputRef : null}
            placeholder={placeholder}
            pr={"40px"}
            onChangeSetter={(input) => {
              setSearchLocal(input as string);
            }}
            inputValue={searchLocal}
            boxShadow={"none !important"}
            borderColor={invalid ? "border.error" : "gray.muted"}
            {...inputProps}
          />

          {searchLocal && (
            <Center
              flexShrink={0}
              zIndex={3}
              position={"absolute"}
              h={"100%"}
              right={0}
            >
              <IconButton
                aria-label="Clear Search"
                onClick={() => {
                  if (onChangeSetter) onChangeSetter("");
                }}
                colorScheme="error"
                variant={"plain"}
                borderRadius={"full"}
                size={inputProps?.size === "sm" ? "xs" : "md"}
                color={"fg.error"}
              >
                <Icon>
                  <IconX />
                </Icon>
              </IconButton>
            </Center>
          )}
        </>
      </InputGroup>
    </Tooltip>
  );
}
