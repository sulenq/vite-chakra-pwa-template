import { Center, Icon, IconButton, InputProps } from "@chakra-ui/react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { Dispatch, useCallback, useEffect, useState } from "react";
import { InputGroup } from "../ui/input-group";
import { Tooltip } from "../ui/tooltip";
import StringInput from "./StringInput";

interface Props {
  inputValue: string;
  onChangeSetter: Dispatch<string>;
  name?: string;
  placeholder?: string;
  tooltipLabel?: string;
  inputRef?: any;
  inputProps?: InputProps;
  icon?: any;
}

export default function SearchComponent({
  inputRef,
  name,
  inputValue,
  onChangeSetter,
  tooltipLabel,
  placeholder = "Pencarian",
  inputProps,
  icon,
}: Props) {
  const [searchLocal, setSearchLocal] = useState(inputValue);

  const handleOnChange = useCallback(
    (value: string) => {
      if (value !== inputValue) {
        onChangeSetter(value);
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
    setSearchLocal(inputValue);
  }, [inputValue]);

  return (
    <Tooltip content={tooltipLabel || placeholder}>
      <InputGroup
        w={"100%"}
        startElement={
          <Icon fontSize={"lg"}>{icon || <MagnifyingGlass />}</Icon>
        }
      >
        <>
          <StringInput
            pl={10}
            name={name}
            fRef={inputRef ? inputRef : null}
            placeholder={placeholder}
            pr={"36px"}
            onChangeSetter={(input) => {
              setSearchLocal(input as string);
            }}
            inputValue={searchLocal}
            boxShadow={"none !important"}
            {...inputProps}
          />

          {searchLocal && (
            <Center
              flexShrink={0}
              zIndex={3}
              position={"absolute"}
              h={"100%"}
              right={1}
            >
              <IconButton
                aria-label="Clear Search"
                onClick={() => {
                  onChangeSetter("");
                }}
                colorScheme="error"
                variant={"ghost"}
                borderRadius={"full"}
                size={"xs"}
                color={"fg.error"}
              >
                <Icon fontSize={"sm"}>
                  <X weight="bold" />
                </Icon>
              </IconButton>
            </Center>
          )}
        </>
      </InputGroup>
    </Tooltip>
  );
}
