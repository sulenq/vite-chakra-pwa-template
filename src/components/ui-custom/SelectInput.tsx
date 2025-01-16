import {
  Interface__Select,
  Interface__SelectOption,
} from "@/constant/interfaces";
import useBackOnClose from "@/hooks/useBackOnClose";
import back from "@/utils/back";
import {
  Box,
  HStack,
  Icon,
  Text,
  useDisclosure,
  useFieldContext,
} from "@chakra-ui/react";
import { ArrowClockwise, CaretDown } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { ButtonProps } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Tooltip } from "../ui/tooltip";
import BButton from "./BButton";
import CContainer from "./CContainer";
import ComponentSpinner from "./ComponentSpinner";
import {
  DisclosureBody,
  DisclosureCloseTrigger,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "./Disclosure";
import Heading6 from "./Heading6";
import NoData from "./FeedbackNoData";
import NotFound from "./FeedbackNotFound";
import SearchInput from "./SearchInput";
import { MAIN_BUTTON_SIZE } from "@/constant/sizes";

const SelectInput = ({
  id,
  onConfirm,
  inputValue,
  initialOptions,
  name,
  title,
  placeholder = "Pilih",
  invalid,
  nonNullable = false,
  multiple = false,
  size = "xs",
  fetch,
  ...props
}: Interface__Select) => {
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(id || `${name ? `-${name}` : ""}`, open, onOpen, onClose);
  const fc = useFieldContext();

  const [options, setOptions] = useState<
    Interface__SelectOption[] | undefined | null
  >(initialOptions);
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<
    Interface__SelectOption[] | undefined
  >(inputValue);
  function isSelected(item: Interface__SelectOption) {
    return selected?.some(
      (listItem) =>
        listItem.value === item.value && listItem.label === item.label
    );
  }

  useEffect(() => {
    if (fetch) {
      if (open) {
        fetch(setOptions);
      }
    }
  }, [open]);

  // Handle select all
  const [selectAll, setSelectAll] = useState<boolean>(false);
  useEffect(() => {
    if (multiple) {
      if (
        options &&
        options.length > 0 &&
        options?.length === selected?.length
      ) {
        setSelectAll(true);
      } else {
        setSelectAll(false);
      }
    }
  }, [open, options, selected]);

  // List component
  const fl = search
    ? options?.filter((option) => {
        const searchTerm = search.toLowerCase();
        return (
          option.label.toString().toLowerCase().includes(searchTerm) ||
          option.label2?.toString().toLowerCase().includes(searchTerm)
        );
      })
    : options;
  const OptionsList = ({ ...props }: ButtonProps) => {
    const handleSelect = (item: Interface__SelectOption) => {
      if (!multiple) {
        setSelected([item]);
      } else {
        if (isSelected(item)) {
          const newState = selected?.filter((fitem) => {
            return fitem.value !== item.value;
          });
          setSelected(newState);
        } else {
          const newState = selected ? [...selected, item] : [item];
          setSelected(newState);
        }
      }
    };

    return (
      <>
        {fl === undefined && <ComponentSpinner mb={2} />}

        {fl === null && <NoData mb={12} />}

        {fl && fl.length === 0 && (
          <NotFound title="Opsi tidak ditemukan" mb={5} />
        )}

        {fl && fl.length > 0 && (
          <>
            {fl?.map((item, i) => (
              <BButton
                unclicky
                key={i}
                variant={
                  isSelected(item) ? "surface" : !multiple ? "ghost" : "outline"
                }
                bg={isSelected(item) ? "d1" : ""}
                borderRadius={multiple ? "full" : ""}
                borderColor={isSelected(item) ? "ibody !important" : ""}
                justifyContent={"start"}
                onClick={() => {
                  handleSelect(item);
                }}
                {...props}
              >
                <Text truncate>{item?.label}</Text>
              </BButton>
            ))}
          </>
        )}
      </>
    );
  };

  // Handle confirm
  const confirmSelected = () => {
    let confirmable = false;
    if (!nonNullable) {
      confirmable = true;
    } else {
      if (selected) {
        confirmable = true;
      }
    }

    if (confirmable) {
      if (onConfirm) {
        if (selected) {
          onConfirm(selected);
        } else {
          onConfirm(undefined);
        }
      }
      back();
    }
  };

  return (
    <>
      <Tooltip
        content={
          inputValue && inputValue.length > 0
            ? `${inputValue && inputValue.map((item) => ` ${item.label}`)}`
            : placeholder
        }
      >
        <BButton
          w={"full"}
          unclicky
          variant={"ghost"}
          border={"1px solid"}
          borderColor={fc?.invalid || invalid ? "border.error" : "gray.muted"}
          onClick={() => {
            if (inputValue) {
              setSelected(inputValue);
            }
            onOpen();
          }}
          {...props}
        >
          <HStack w={"full"} justify={"space-between"}>
            {inputValue ? (
              <Text fontWeight={"normal"} truncate>
                {inputValue?.map((item) => item.label).join(", ")}
              </Text>
            ) : (
              <Text opacity={0.3} fontWeight={"normal"} truncate>
                {placeholder}
              </Text>
            )}

            <Icon opacity={0.3} fontSize={"sm"} maxH={"14px"}>
              <CaretDown weight="bold" />
            </Icon>
          </HStack>
        </BButton>
      </Tooltip>

      <DisclosureRoot open={open} size={size}>
        <DisclosureContent>
          <DisclosureHeader>
            <HStack justify={"space-between"}>
              <Heading6
                w={"full"}
                fontWeight={"semibold"}
                pr={"80px"}
                truncate
              >{`${title || placeholder}`}</Heading6>

              {fetch && (
                <BButton
                  unclicky
                  iconButton
                  variant={"ghost"}
                  mr={5}
                  size={"sm"}
                  borderRadius={"full"}
                  position={"absolute"}
                  right={"30px"}
                  // mb={"1px"}
                  onClick={() => {
                    setOptions(undefined);
                    fetch(setOptions);
                  }}
                  disabled={options === undefined}
                >
                  <Icon fontSize={".9rem"}>
                    <ArrowClockwise weight="bold" />
                  </Icon>
                </BButton>
              )}

              <DisclosureCloseTrigger borderRadius={"full"} top={3} right={3} />
            </HStack>
          </DisclosureHeader>

          <DisclosureBody className="scrollY" py={"0px !important"}>
            {fl && (
              <HStack>
                <SearchInput
                  onChangeSetter={(inputValue) => {
                    setSearch(inputValue);
                  }}
                  inputValue={search}
                  invalid={false}
                />
              </HStack>
            )}

            {!multiple && (
              <CContainer gap={1} py={5}>
                <OptionsList />
              </CContainer>
            )}

            {multiple && (
              <>
                {fl && (
                  <Box
                    ml={"2px"}
                    onClick={() => {
                      if (!selectAll) {
                        setSelected(options as any);
                      } else {
                        setSelected(undefined);
                      }
                    }}
                    w={"fit-content"}
                    mt={5}
                  >
                    <Checkbox
                      name="select_all"
                      onChange={(e: any) => setSelectAll(e.target.checked)}
                      checked={selectAll}
                      invalid={false}
                      size={"sm"}
                    >
                      <Text>Pilih Semua</Text>
                    </Checkbox>
                  </Box>
                )}

                <CContainer>
                  <HStack wrap={"wrap"} py={5}>
                    <OptionsList />
                  </HStack>
                </CContainer>
              </>
            )}
          </DisclosureBody>

          {fl !== undefined && fl !== null && (
            <DisclosureFooter>
              {/* <BButton w={iss ? "100%" : ""} variant={"subtle"} mr={"auto"}>
              Reload
            </BButton> */}
              <BButton
                variant={"outline"}
                onClick={() => {
                  setSelected(undefined);
                }}
                size={MAIN_BUTTON_SIZE}
              >
                Clear
              </BButton>
              <BButton onClick={confirmSelected} size={MAIN_BUTTON_SIZE}>
                Konfirmasi
              </BButton>
            </DisclosureFooter>
          )}
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default SelectInput;
