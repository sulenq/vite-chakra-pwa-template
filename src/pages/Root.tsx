import LoginForm from "@/components/form/LoginForm";
import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import DatePickerInput from "@/components/ui-custom/DatePickerInput";
import DateRangePickerInput from "@/components/ui-custom/DateRangePickerInput";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
  DisclosureTrigger,
} from "@/components/ui-custom/Disclosure";
import DisclosureHeaderContent from "@/components/ui-custom/DisclosureHeaderContent";
import Forbidden from "@/components/ui-custom/Forbidden";
import Heading1 from "@/components/ui-custom/Heading1";
import Heading2 from "@/components/ui-custom/Heading2";
import Heading3 from "@/components/ui-custom/Heading3";
import Heading4 from "@/components/ui-custom/Heading4";
import Heading5 from "@/components/ui-custom/Heading5";
import Heading6 from "@/components/ui-custom/Heading6";
import NoData from "@/components/ui-custom/NoData";
import NotFound from "@/components/ui-custom/NotFound";
import NumberInput from "@/components/ui-custom/NumberInput";
import Retry from "@/components/ui-custom/Retry";
import SelectInput from "@/components/ui-custom/SelectInput";
import StringInput from "@/components/ui-custom/StringInput";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Alert } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardLabel,
  ClipboardRoot,
} from "@/components/ui/clipboard";
import { ColorModeButton } from "@/components/ui/color-mode";
import { InputGroup } from "@/components/ui/input-group";
import {
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from "@/components/ui/menu";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tooltip } from "@/components/ui/tooltip";
import { Interface__Select } from "@/constant/interfaces";
import { optionsAgama } from "@/constant/selectOptions";
import { responsiveSpacing, responsiveSpacingReverse } from "@/constant/sizes";
import useBackOnClose from "@/hooks/useBackOnClose";
import back from "@/utils/back";
import {
  Box,
  Center,
  Circle,
  Float,
  HStack,
  Icon,
  IconButton,
  Image,
  Menu,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Alarm,
  Bell,
  CheckCircle,
  ClockClockwise,
  PencilSimpleLine,
  SlidersHorizontal,
  Trash,
} from "@phosphor-icons/react";
import { useFormik } from "formik";
import * as yup from "yup";

const CenterContainer = ({ children, ...props }: any) => {
  return (
    <Center
      p={4}
      borderRadius={8}
      border={"1px solid"}
      borderColor={"border"}
      bg={"body"}
      {...props}
    >
      {children}
    </Center>
  );
};

const DisclosureDemo = () => {
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(`disclosure-1`, open, onOpen, onClose);

  return (
    <DisclosureRoot open={open}>
      <DisclosureTrigger>
        <BButton onClick={onOpen}>Buka Disclosure</BButton>
      </DisclosureTrigger>

      <DisclosureContent>
        <DisclosureHeader>
          <DisclosureHeaderContent title="Header 1" />
        </DisclosureHeader>

        <DisclosureBody pb={5}>
          <p>
            Dislosure andalan kami, kamu bisa back untuk menutupnya, ga seperti
            library komponen lain hehe.
          </p>
        </DisclosureBody>

        <DisclosureFooter>
          <BButton variant={"surface"} onClick={back}>
            Mehh B aja
          </BButton>

          <DisclosureDemo2 />
        </DisclosureFooter>
      </DisclosureContent>
    </DisclosureRoot>
  );
};
const DisclosureDemo2 = () => {
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose(`disclosure-2`, open, onOpen, onClose);

  return (
    <DisclosureRoot open={open} size={"cover"}>
      <DisclosureTrigger>
        <BButton onClick={onOpen}>Buka nested disclosure</BButton>
      </DisclosureTrigger>

      <DisclosureContent>
        <DisclosureHeader>
          <DisclosureHeaderContent title="Header 2" />
        </DisclosureHeader>

        <DisclosureBody pb={5}>
          <p>Disclosure 2</p>
        </DisclosureBody>

        <DisclosureFooter>
          <BButton variant={"surface"} onClick={back}>
            Mehh B aja
          </BButton>

          <BButton
            onClick={() => {
              back();
              back();
            }}
          >
            Tutup 2 Disclosure sekaligus (2x back)
          </BButton>
        </DisclosureFooter>
      </DisclosureContent>
    </DisclosureRoot>
  );
};

const NumberInputDemo = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      number: undefined as any,
      number2: 500000,
    },
    validationSchema: yup.object().shape({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <InputGroup endElement={<Text>cm</Text>}>
        <NumberInput
          placeholder="180"
          onChangeSetter={(inputValue) => {
            formik.setFieldValue("number", inputValue);
          }}
          inputValue={formik.values.number}
        />
      </InputGroup>

      <InputGroup startElement={<Text>Rp</Text>}>
        <NumberInput
          placeholder="1.500"
          onChangeSetter={(inputValue) => {
            formik.setFieldValue("number2", inputValue);
          }}
          inputValue={formik.values.number2}
        />
      </InputGroup>
    </>
  );
};

const PromiseSelectDemo = ({ ...props }: Interface__Select) => {
  const fetch = (setOptions: any) => {
    setTimeout(() => {
      setOptions(optionsAgama);
    }, 2000);
  };

  return (
    <SelectInput
      placeholder="Promise multi select"
      multiple
      fetch={fetch}
      {...props}
    />
  );
};
const SelectInputDemo = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      select: undefined as any,
      select2: undefined as any,
      select3: undefined as any,
      select4: undefined as any,
    },
    validationSchema: yup.object().shape({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <SelectInput
        id="select_empty"
        name="select_empty"
        title="Select Kosong"
        placeholder="Select kosong"
        initialOptions={null}
        onConfirm={(inputValue) => {
          formik.setFieldValue("select", inputValue);
        }}
        inputValue={formik.values.select}
      />

      <SelectInput
        id="single_select"
        name="select"
        title="Single Select"
        placeholder="Single select"
        initialOptions={optionsAgama}
        onConfirm={(inputValue) => {
          formik.setFieldValue("select2", inputValue);
        }}
        inputValue={formik.values.select2}
      />

      <SelectInput
        id="multi_select"
        name="select2"
        title="Multi Select"
        placeholder="Multi select"
        initialOptions={optionsAgama}
        multiple
        onConfirm={(inputValue) => {
          formik.setFieldValue("select3", inputValue);
        }}
        inputValue={formik.values.select3}
      />

      <PromiseSelectDemo
        id="multi_select2"
        onConfirm={(inputValue) => {
          formik.setFieldValue("select4", inputValue);
        }}
        inputValue={formik.values.select4}
      />
    </>
  );
};

const DatePickerDemo = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      date: undefined as any,
      date2: undefined as any,
    },
    validationSchema: yup.object().shape({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <DatePickerInput
        onConfirm={(inputValue) => {
          formik.setFieldValue("date", inputValue);
        }}
        inputValue={formik.values.date}
        // nonNullable
      />
    </>
  );
};

const DateRangePickerDemo = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      date: undefined as any,
      date2: undefined as any,
    },
    validationSchema: yup.object().shape({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <DateRangePickerInput
        onConfirm={(inputValue) => {
          formik.setFieldValue("date", inputValue);
        }}
        inputValue={formik.values.date}
        // nonNullable
      />

      <DateRangePickerInput
        name="date2"
        onConfirm={(inputValue) => {
          formik.setFieldValue("date2", inputValue);
        }}
        inputValue={formik.values.date2}
        maxRange={7}
        placeholder="Dengan max rentang"
        // nonNullable
      />
    </>
  );
};

export default function Root() {
  return (
    <CContainer
      minH={"100dvh"}
      p={responsiveSpacing}
      pt={"0 !important"}
      gap={4}
      bgImage={"/"}
    >
      {/* Nav */}
      <HStack
        wrap={"wrap"}
        justify={"space-between"}
        px={4}
        py={2}
        mx={responsiveSpacingReverse}
        position={"sticky"}
        top={0}
        zIndex={99}
        // color={"white"}
        // bg={"darktrans"}
        // backdropFilter={"blur(5px)"}
      >
        <HStack gap={3}>
          <Image
            alt="Distro Studio Logo"
            src="/assets/images/logo_color.png"
            w={"20px"}
          />

          <Text fontSize={"1.25rem"} fontWeight={"bold"}>
            Exium
          </Text>
        </HStack>

        <HStack wrap={"wrap"}>
          <ColorModeButton
            w={"fit"}
            borderRadius={"full"}
            className="btn"
            // color={"white"}
          />
        </HStack>
      </HStack>

      <SimpleGrid columns={[1, 2, 3]} gap={4}>
        <CContainer gap={6}>
          {/* Preset Login Form */}
          <CContainer flex={0} gap={4}>
            <Heading6>Preset Login Form</Heading6>
            <CenterContainer>
              <LoginForm />
            </CenterContainer>
          </CContainer>

          {/* Feedback */}
          <CContainer flex={0} gap={4}>
            <Heading6>Feedback</Heading6>
            <CenterContainer>
              <NotFound />
            </CenterContainer>

            <CenterContainer>
              <NoData />
            </CenterContainer>

            <CenterContainer>
              <Forbidden />
            </CenterContainer>

            <CenterContainer>
              <Retry />
            </CenterContainer>
          </CContainer>

          {/* Tooltip */}
          <CContainer flex={0} gap={4}>
            <Heading6>Tooltip</Heading6>
            <CenterContainer>
              <Tooltip content={"Ciluk baa"}>
                <Text>Hover me</Text>
              </Tooltip>
            </CenterContainer>
          </CContainer>

          {/* Popover */}
          <CContainer flex={0} gap={4}>
            <Heading6>Popover</Heading6>
            <CenterContainer>
              <PopoverRoot lazyMount unmountOnExit>
                <PopoverTrigger asChild>
                  <BButton size="sm" variant="outline">
                    <Icon size={"md"} color={"green.solid"}>
                      <CheckCircle />
                    </Icon>
                    Reward Presensi
                  </BButton>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody>
                    <PopoverTitle fontWeight="medium" mb={4}>
                      <HStack>
                        <Icon size={"md"} color={"green.solid"}>
                          <CheckCircle />
                        </Icon>
                        <Text>Menapat reward presensi</Text>
                      </HStack>
                    </PopoverTitle>
                    <Text>
                      Alpha, terlambat, pulang awal tidak akan mendapat reward
                      presensi.
                    </Text>
                  </PopoverBody>
                </PopoverContent>
              </PopoverRoot>
            </CenterContainer>
          </CContainer>

          {/* Clipboard */}
          <CContainer flex={0} gap={4}>
            <Heading6>Clipboard</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <ClipboardRoot value="https://link/rahasia">
                  <ClipboardLabel>Link</ClipboardLabel>
                  <InputGroup
                    width="full"
                    endElement={<ClipboardIconButton me="-2" />}
                  >
                    <ClipboardInput />
                  </InputGroup>
                </ClipboardRoot>

                <StringInput placeholder="Coba paste disini" />
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Float */}
          <CContainer flex={0} gap={4}>
            <Heading6>Float</Heading6>
            <CenterContainer gap={4}>
              <IconButton variant={"surface"}>
                <Float>
                  <Circle size="5" bg="red" color="white">
                    3
                  </Circle>
                </Float>
                <Icon>
                  <Bell />
                </Icon>
              </IconButton>

              <BButton variant={"surface"}>
                <Float>
                  <Circle size="5" bg="red" color="white">
                    5
                  </Circle>
                </Float>
                <Icon>
                  <SlidersHorizontal />
                </Icon>
                Filter
              </BButton>
            </CenterContainer>
          </CContainer>
        </CContainer>

        <CContainer gap={6}>
          {/* Primary Button */}
          <CContainer flex={0} gap={4}>
            <Heading6>Primary Button</Heading6>
            <CenterContainer>
              <HStack wrap={"wrap"} gap={2}>
                <BButton colorPalette={"p"}>Solid</BButton>
                <BButton colorPalette={"p"} variant={"subtle"}>
                  Subtle
                </BButton>
                <BButton colorPalette={"p"} variant={"surface"}>
                  Surface
                </BButton>
                <BButton colorPalette={"p"} variant={"outline"}>
                  Outline
                </BButton>
                <BButton colorPalette={"p"} variant={"ghost"}>
                  Ghost
                </BButton>
                <BButton colorPalette={"p"} variant={"plain"}>
                  Plain
                </BButton>
              </HStack>
            </CenterContainer>
          </CContainer>

          {/* Basic Button */}
          <CContainer flex={0} gap={4}>
            <Heading6>Basic Button</Heading6>
            <CenterContainer>
              <HStack wrap={"wrap"} gap={2}>
                <BButton>Solid</BButton>
                <BButton variant={"subtle"}>Subtle</BButton>
                <BButton variant={"surface"}>Surface</BButton>
                <BButton variant={"outline"}>Outline</BButton>
                <BButton variant={"ghost"}>Ghost</BButton>
                <BButton variant={"plain"}>Plain</BButton>
              </HStack>
            </CenterContainer>
          </CContainer>

          {/* Error Button */}
          <CContainer flex={0} gap={4}>
            <Heading6>Error Button</Heading6>
            <CenterContainer>
              <HStack wrap={"wrap"} gap={2}>
                <BButton colorPalette={"red"}>Solid</BButton>
                <BButton colorPalette={"red"} variant={"subtle"}>
                  Subtle
                </BButton>
                <BButton colorPalette={"red"} variant={"surface"}>
                  Surface
                </BButton>
                <BButton colorPalette={"red"} variant={"outline"}>
                  Outline
                </BButton>
                <BButton colorPalette={"red"} variant={"ghost"}>
                  Ghost
                </BButton>
                <BButton colorPalette={"red"} variant={"plain"}>
                  Plain
                </BButton>
              </HStack>
            </CenterContainer>
          </CContainer>

          {/* Warning Button */}
          <CContainer flex={0} gap={4}>
            <Heading6>Warning Button</Heading6>
            <CenterContainer>
              <HStack wrap={"wrap"} gap={2}>
                <BButton colorPalette={"orange"}>Solid</BButton>
                <BButton colorPalette={"orange"} variant={"subtle"}>
                  Subtle
                </BButton>
                <BButton colorPalette={"orange"} variant={"surface"}>
                  Surface
                </BButton>
                <BButton colorPalette={"orange"} variant={"outline"}>
                  Outline
                </BButton>
                <BButton colorPalette={"orange"} variant={"ghost"}>
                  Ghost
                </BButton>
                <BButton colorPalette={"orange"} variant={"plain"}>
                  Plain
                </BButton>
              </HStack>
            </CenterContainer>
          </CContainer>

          {/* Heading */}
          <CContainer flex={0} gap={4}>
            <Heading6>Heading</Heading6>
            <CenterContainer>
              <CContainer>
                <Heading1>Heading 1</Heading1>
                <Heading2>Heading 2</Heading2>
                <Heading3>Heading 3</Heading3>
                <Heading4>Heading 4</Heading4>
                <Heading5>Heading 5</Heading5>
                <Heading6>Heading 6</Heading6>
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Alert */}
          <CContainer flex={0} gap={4}>
            <Heading6>Alert</Heading6>
            <CenterContainer>
              <CContainer gap="2" width="full">
                <Alert
                  variant={"surface"}
                  status="error"
                  title="Error alert variant surface"
                />
                <Alert
                  variant={"surface"}
                  status="info"
                  title="Info alert variant surface"
                />
                <Alert
                  variant={"surface"}
                  status="warning"
                  title="Warning alert variant surface"
                />
                <Alert
                  variant={"surface"}
                  status="success"
                  title="Success alert variant surface"
                />
                <Alert
                  variant={"surface"}
                  colorPalette={"p"}
                  icon={
                    <Icon>
                      <Alarm />
                    </Icon>
                  }
                  title="Custom alert dengan custom icon"
                  closable
                >
                  Deskripsi dari alert bisa panjang bisa pendek
                </Alert>
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Accordion */}
          <CContainer flex={0} gap={4}>
            <Heading6>Accordion</Heading6>
            <CenterContainer>
              <CContainer width="full" maxW="400px">
                <AccordionRoot
                  collapsible
                  defaultValue={["info"]}
                  variant={"enclosed"}
                >
                  <AccordionItem value="a">
                    <AccordionItemTrigger>
                      <Icon fontSize="lg" color="fg.subtle">
                        <Alarm />
                      </Icon>
                      Alarm
                    </AccordionItemTrigger>
                    <AccordionItemContent>
                      <Text>Wiuwiu kerja woi</Text>
                    </AccordionItemContent>
                  </AccordionItem>

                  <AccordionItem value="b">
                    <AccordionItemTrigger>
                      <Icon fontSize="lg" color="fg.subtle">
                        <Alarm />
                      </Icon>
                      Alarm
                    </AccordionItemTrigger>
                    <AccordionItemContent>
                      <Text>Wiuwiu kerja woi</Text>
                    </AccordionItemContent>
                  </AccordionItem>

                  <AccordionItem value="c">
                    <AccordionItemTrigger>
                      <Icon fontSize="lg" color="fg.subtle">
                        <Alarm />
                      </Icon>
                      Alarm
                    </AccordionItemTrigger>
                    <AccordionItemContent>
                      <Text>Wiuwiu kerja woi</Text>
                    </AccordionItemContent>
                  </AccordionItem>

                  <AccordionItem value="d">
                    <AccordionItemTrigger>
                      <Icon fontSize="lg" color="fg.subtle">
                        <Alarm />
                      </Icon>
                      Alarm
                    </AccordionItemTrigger>
                    <AccordionItemContent>
                      <Text>Wiuwiu kerja woi</Text>
                    </AccordionItemContent>
                  </AccordionItem>
                </AccordionRoot>
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Menu */}
          <CContainer flex={0} gap={4}>
            <Heading6>Menu</Heading6>
            <CenterContainer gap={2}>
              <Menu.Root>
                <MenuTrigger asChild>
                  <BButton variant="outline">Edit</BButton>
                </MenuTrigger>
                <MenuContent>
                  <MenuItemGroup title="Styles">
                    <MenuItem value="bold">Bold</MenuItem>
                    <MenuItem value="underline">Underline</MenuItem>
                  </MenuItemGroup>
                  <MenuSeparator />
                  <MenuItemGroup title="Align">
                    <MenuItem value="left">Left</MenuItem>
                    <MenuItem value="middle">Middle</MenuItem>
                    <MenuItem value="right">Right</MenuItem>
                  </MenuItemGroup>

                  <MenuRoot
                    positioning={{ placement: "right-start", gutter: 8 }}
                  >
                    <MenuTriggerItem value="open-recent">
                      Open Recent
                    </MenuTriggerItem>
                    <MenuContent>
                      <MenuItem value="panda">Panda</MenuItem>
                      <MenuItem value="ark">Ark UI</MenuItem>
                      <MenuItem value="chakra">Chakra v3</MenuItem>
                    </MenuContent>
                  </MenuRoot>
                </MenuContent>
              </Menu.Root>

              <MenuRoot>
                <MenuTrigger asChild>
                  <BButton variant="outline">Action</BButton>
                </MenuTrigger>
                <MenuContent>
                  <MenuItem value="edit" justifyContent={"space-between"}>
                    Edit
                    <Icon fontSize={"md"}>
                      <PencilSimpleLine />
                    </Icon>
                  </MenuItem>
                  <MenuItem value="restore" justifyContent={"space-between"}>
                    Restore
                    <Icon fontSize={"md"}>
                      <ClockClockwise />
                    </Icon>
                  </MenuItem>
                  <MenuItem
                    value="delete"
                    color="red.400"
                    justifyContent={"space-between"}
                  >
                    Delete
                    <Icon fontSize={"md"}>
                      <Trash />
                    </Icon>
                  </MenuItem>
                </MenuContent>
              </MenuRoot>
            </CenterContainer>
          </CContainer>

          {/* Context Menu */}
          <CContainer flex={0} gap={4}>
            <Heading6>Context Menu</Heading6>
            <CenterContainer gap={2}>
              <MenuRoot>
                <MenuContextTrigger w="full">
                  <Center
                    width="full"
                    height="40"
                    userSelect="none"
                    borderWidth="2px"
                    borderStyle="dashed"
                    rounded="lg"
                    padding="4"
                  >
                    Klik kanan atau hold (mobile) di area ini
                  </Center>
                </MenuContextTrigger>
                <MenuContent>
                  <MenuItem value="new-txt">New Text File</MenuItem>
                  <MenuItem value="new-file">New File...</MenuItem>
                  <MenuItem value="new-win">New Window</MenuItem>
                  <MenuItem value="open-file">Open File...</MenuItem>
                  <MenuItem value="export">Export</MenuItem>
                </MenuContent>
              </MenuRoot>
            </CenterContainer>
          </CContainer>

          {/* Responsive Disclosure */}
          <CContainer flex={0} gap={4}>
            <Heading6>Responsive Disclosure</Heading6>

            <CenterContainer gap={2}>
              <DisclosureDemo />
            </CenterContainer>
          </CContainer>
        </CContainer>

        <CContainer gap={6}>
          {/* String Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>String Input</Heading6>
            <CenterContainer>
              <CContainer>
                <StringInput placeholder="example@email.com" />
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Number Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>Number Input</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <NumberInputDemo />
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Checkbox Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>Checkbox Input</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <Checkbox gap="4" alignItems="start">
                  <Box lineHeight="1">Setuju dengan syarat dan ketentuan</Box>
                  <Box fontWeight="normal" color="fg.muted" mt="1">
                    Dengan klik ini, anda setuju dengan syarat dan ketentuan
                    kami.
                  </Box>
                </Checkbox>
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Select Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>Select Input</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <SelectInputDemo />
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Date Picker Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>Date Picker Input</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <DatePickerDemo />
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Date Range Picker Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>Date Range Picker Input</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <DateRangePickerDemo />
              </CContainer>
            </CenterContainer>
          </CContainer>
        </CContainer>
      </SimpleGrid>

      {/* Footer */}
      <HStack wrap={"wrap"} mt={8} gap={4} justify={"space-between"}>
        <HStack pointerEvents={"none"} gap={0}>
          <Image src="/assets/images/logo_color.png" w={"16px"} mr={3} />
          <HStack wrap={"wrap"} gapY={0} gap={1}>
            <Text fontSize={"sm"} whiteSpace={"nowrap"}>
              Beautifully Crafted by{" "}
            </Text>
            <a href="" target="_blank" rel="noreferrer">
              <Text
                fontSize={"sm"}
                pointerEvents={"auto"}
                _hover={{ color: "p.500" }}
                cursor={"pointer"}
                transition={"200ms"}
                fontWeight={700}
              >
                Exium
              </Text>
            </a>
          </HStack>
        </HStack>

        <HStack>
          {/* <Image src="/assets/svgs/vercel.svg" h={"15px"} /> */}
          <Text>
            Deployed on <b>Vercel</b>
          </Text>
        </HStack>
      </HStack>
    </CContainer>
  );
}
