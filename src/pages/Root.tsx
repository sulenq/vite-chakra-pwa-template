import LoginForm from "@/components/form/LoginForm";
import BackButton from "@/components/ui-custom/BackButton";
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
import Forbidden from "@/components/ui-custom/FeedbackForbidden";
import NoData from "@/components/ui-custom/FeedbackNoData";
import NotFound from "@/components/ui-custom/FeedbackNotFound";
import Retry from "@/components/ui-custom/FeedbackRetry";
import FloatCounter from "@/components/ui-custom/FloatCounter";
import Heading1 from "@/components/ui-custom/Heading1";
import Heading2 from "@/components/ui-custom/Heading2";
import Heading3 from "@/components/ui-custom/Heading3";
import Heading4 from "@/components/ui-custom/Heading4";
import Heading5 from "@/components/ui-custom/Heading5";
import Heading6 from "@/components/ui-custom/Heading6";
import HScroll from "@/components/ui-custom/HScroll";
import NumberInput from "@/components/ui-custom/NumberInput";
import PasswordInput from "@/components/ui-custom/PasswordInput";
import SearchInput from "@/components/ui-custom/SearchInput";
import SelectInput from "@/components/ui-custom/SelectInput";
import StringInput from "@/components/ui-custom/StringInput";
import TableComponent from "@/components/ui-custom/TableComponent";
import TableFooterNote from "@/components/ui-custom/TableFooterNote";
import TimePickerInput from "@/components/ui-custom/TimePickerInput";
import TimeRangePickerInput from "@/components/ui-custom/TimeRangePickerInput";
import TruncatedText from "@/components/ui-custom/TruncatedText";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Alert } from "@/components/ui/alert";
import { Avatar } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardLabel,
  ClipboardRoot,
} from "@/components/ui/clipboard";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Field } from "@/components/ui/field";
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
import { Status } from "@/components/ui/status";
import { toaster } from "@/components/ui/toaster";
import { Tooltip } from "@/components/ui/tooltip";
import { Interface__Select } from "@/constant/interfaces";
import { PRIMARY_COLOR_PALETTE } from "@/constant/paletteConfig";
import { OPTIONS_RELIGION } from "@/constant/selectOptions";
import useBackOnClose from "@/hooks/useBackOnClose";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import back from "@/utils/back";
import formatDate from "@/utils/formatDate";
import formatNumber from "@/utils/formatNumber";
import formatTimeFromDateFormat from "@/utils/formatTimeFromDateFormat";
import {
  Badge,
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Menu,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  IconAdjustmentsHorizontal,
  IconAlarm,
  IconBell,
  IconCircleCheck,
  IconEdit,
  IconRestore,
  IconTrash,
} from "@tabler/icons-react";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

const CenterContainer = ({ children, ...props }: any) => {
  return (
    <Center
      p={4}
      borderRadius={8}
      border={"1px solid"}
      borderColor={"border.muted"}
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
            Dislosure responsive, jika viewport large maka render dialog modal,
            jika viewport small maka render bottom drawer, kamu bisa back untuk
            menutupnya, ga seperti library komponen lain hehe.
          </p>
        </DisclosureBody>

        <DisclosureFooter>
          <BackButton>Close</BackButton>

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
          <BackButton>Close</BackButton>

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

const SearchInputDemo = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      search: undefined as any,
    },
    validationSchema: yup.object().shape({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <SearchInput
        placeholder="Pencarian"
        onChangeSetter={(input) => {
          formik.setFieldValue("search", input);
        }}
        inputValue={formik.values.search}
      />
    </>
  );
};

const NumberInputDemo = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      number: undefined as any,
      number2: 500000,
      number3: undefined as any,
      number4: undefined as any,
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

      <NumberInput
        onChangeSetter={(inputValue) => {
          formik.setFieldValue("number3", inputValue);
        }}
        inputValue={formik.values.number3}
        placeholder={"Tanpa format, bisa dipakai untuk input tahun"}
        noFormat
      />

      <Field invalid>
        <InputGroup w={"full"} startElement={<Text>Rp</Text>}>
          <NumberInput
            placeholder="1.500"
            onChangeSetter={(inputValue) => {
              formik.setFieldValue("number4", inputValue);
            }}
            inputValue={formik.values.number4}
          />
        </InputGroup>
      </Field>
    </>
  );
};

const PromiseSelectDemo = ({ ...props }: Interface__Select) => {
  const fetch = (setOptions: any) => {
    setTimeout(() => {
      setOptions(OPTIONS_RELIGION);
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
      select1: undefined as any,
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
      />

      <SelectInput
        name="select1"
        title="Single Select"
        placeholder="Single select"
        initialOptions={OPTIONS_RELIGION}
        onConfirm={(inputValue) => {
          formik.setFieldValue("select1", inputValue);
        }}
        inputValue={formik.values.select1}
      />

      <SelectInput
        name="select2"
        title="Multi Select"
        placeholder="Multi select"
        initialOptions={OPTIONS_RELIGION}
        multiple
        onConfirm={(inputValue) => {
          formik.setFieldValue("select2", inputValue);
        }}
        inputValue={formik.values.select2}
      />

      <PromiseSelectDemo
        name="select3"
        onConfirm={(inputValue) => {
          formik.setFieldValue("select3", inputValue);
        }}
        inputValue={formik.values.select3}
      />

      <Field invalid>
        <SelectInput
          name="select4"
          title="Multi Select"
          placeholder="Multi select invalid state"
          initialOptions={OPTIONS_RELIGION}
          multiple
          onConfirm={(inputValue) => {
            formik.setFieldValue("select4", inputValue);
          }}
          inputValue={formik.values.select4}
        />
      </Field>
    </>
  );
};

const DatePickerDemo = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      date1: undefined as any,
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
        name="date1"
        onConfirm={(inputValue) => {
          formik.setFieldValue("date1", inputValue);
        }}
        inputValue={formik.values.date1}
        // nonNullable
      />

      <Field invalid>
        <DatePickerInput
          name="date2"
          onConfirm={(inputValue) => {
            formik.setFieldValue("date2", inputValue);
          }}
          inputValue={formik.values.date2}
          placeholder="Invalid state"
          // nonNullable
        />
      </Field>
    </>
  );
};

const DateRangePickerDemo = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      date1: undefined as any,
      date2: undefined as any,
      date3: undefined as any,
    },
    validationSchema: yup.object().shape({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <DateRangePickerInput
        name="date1"
        onConfirm={(inputValue) => {
          formik.setFieldValue("date1", inputValue);
        }}
        inputValue={formik.values.date1}
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

      <Field invalid>
        <DateRangePickerInput
          name="date2"
          onConfirm={(inputValue) => {
            formik.setFieldValue("date2", inputValue);
          }}
          inputValue={formik.values.date2}
          maxRange={7}
          placeholder="Invalid state"
          // nonNullable
        />
      </Field>
    </>
  );
};

const TimePickerDemo = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      time1: undefined as any,
      time2: undefined as any,
      time3: undefined as any,
    },
    validationSchema: yup.object().shape({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <TimePickerInput
        name="time1"
        onConfirm={(inputValue) => {
          formik.setFieldValue("time1", inputValue);
        }}
        inputValue={formik.values.time1}
        // nonNullable
      />

      <TimePickerInput
        name="time2"
        onConfirm={(inputValue) => {
          formik.setFieldValue("time2", inputValue);
        }}
        inputValue={formik.values.time2}
        placeholder="Dengan input detik"
        withSeconds
        // nonNullable
      />

      <Field invalid>
        <TimePickerInput
          name="time3"
          onConfirm={(inputValue) => {
            formik.setFieldValue("time3", inputValue);
          }}
          inputValue={formik.values.time3}
          placeholder="Invalid state"
          withSeconds
          // nonNullable
        />
      </Field>
    </>
  );
};

const TimeRangePickerDemo = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      time1: undefined as any,
      time2: undefined as any,
      time3: undefined as any,
    },
    validationSchema: yup.object().shape({}),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <TimeRangePickerInput
        name="time1"
        onConfirm={(inputValue) => {
          formik.setFieldValue("time1", inputValue);
        }}
        inputValue={formik.values.time1}
        // nonNullable
      />

      <TimeRangePickerInput
        name="time2"
        withSeconds
        onConfirm={(inputValue) => {
          formik.setFieldValue("time2", inputValue);
        }}
        inputValue={formik.values.time2}
        placeholder="Dengan input detik"
        // nonNullable
      />

      <TimeRangePickerInput
        name="time3"
        withSeconds
        onConfirm={(inputValue) => {
          formik.setFieldValue("time3", inputValue);
        }}
        inputValue={formik.values.time3}
        placeholder="Invalid state"
        invalid
        // nonNullable
      />
    </>
  );
};

const TableComponentDemo = () => {
  const iss = useIsSmScreenWidth();

  const res = {
    status: 200,
    message: "Data presensi berhasil ditampilkan.",
    data: [
      {
        id: 1249,
        user: {
          id: 2911,
          nama: "BETTY NURUL HIDAYATI",
          username: "betty.hidayati",
          email_verified_at: null,
          role_id: 5,
          data_karyawan_id: 2877,
          foto_profil: null,
          data_completion_step: 0,
          status_aktif: 2,
          remember_token_expired_at: null,
          created_at: "2024-09-12T06:46:49.000000Z",
          updated_at: "2024-09-12T06:46:49.000000Z",
        },
        unit_kerja: {
          id: 48,
          nama_unit: "Personalia",
          jenis_karyawan: 1,
          deleted_at: null,
          created_at: null,
          updated_at: "2024-10-11T04:45:09.000000Z",
        },
        jadwal: {
          id: 999,
          tgl_mulai: "2025-01-02",
          tgl_selesai: "2025-01-02",
          shift: {
            id: 1521,
            nama: "P08",
            unit_kerja_id: 48,
            jam_from: "07:30:00",
            jam_to: "14:00:00",
            deleted_at: null,
            created_at: "2024-11-25T04:20:33.000000Z",
            updated_at: "2024-11-25T04:20:33.000000Z",
          },
        },
        jam_masuk: "2025-01-02 10:52:28",
        jam_keluar: null,
        durasi: null,
        kategori_presensi: {
          id: 2,
          label: "Terlambat",
          created_at: "2024-08-29T15:10:20.000000Z",
          updated_at: "2024-08-29T15:10:20.000000Z",
        },
        created_at: "2025-01-02T10:52:28.000000Z",
        updated_at: "2025-01-02T10:52:28.000000Z",
      },
      {
        id: 1248,
        user: {
          id: 2989,
          nama: "DIVAN FERNANDES LIENARDI",
          username: "divan.lienardi",
          email_verified_at: null,
          role_id: 22,
          data_karyawan_id: 2955,
          foto_profil: null,
          data_completion_step: 0,
          status_aktif: 2,
          remember_token_expired_at: null,
          created_at: "2024-09-12T06:47:12.000000Z",
          updated_at: "2024-11-18T14:35:25.000000Z",
        },
        unit_kerja: {
          id: 12,
          nama_unit: "Direksi & Manajer",
          jenis_karyawan: 0,
          deleted_at: null,
          created_at: null,
          updated_at: null,
        },
        jadwal: {
          id: null,
          tgl_mulai: null,
          tgl_selesai: null,
          shift: null,
        },
        jam_masuk: "2025-01-02 07:49:28",
        jam_keluar: null,
        durasi: null,
        kategori_presensi: {
          id: 2,
          label: "Terlambat",
          created_at: "2024-08-29T15:10:20.000000Z",
          updated_at: "2024-08-29T15:10:20.000000Z",
        },
        created_at: "2025-01-02T07:49:28.000000Z",
        updated_at: "2025-01-02T07:49:28.000000Z",
      },
      {
        id: 1247,
        user: {
          id: 2739,
          nama: "MARIA RATNA DIYAH PRASANTI",
          username: "maria.prasanti",
          email_verified_at: null,
          role_id: 5,
          data_karyawan_id: 2705,
          foto_profil: null,
          data_completion_step: 0,
          status_aktif: 2,
          remember_token_expired_at: null,
          created_at: "2024-09-12T06:41:21.000000Z",
          updated_at: "2024-09-12T06:41:21.000000Z",
        },
        unit_kerja: {
          id: 48,
          nama_unit: "Personalia",
          jenis_karyawan: 1,
          deleted_at: null,
          created_at: null,
          updated_at: "2024-10-11T04:45:09.000000Z",
        },
        jadwal: {
          id: 997,
          tgl_mulai: "2025-01-02",
          tgl_selesai: "2025-01-02",
          shift: {
            id: 1521,
            nama: "P08",
            unit_kerja_id: 48,
            jam_from: "07:30:00",
            jam_to: "14:00:00",
            deleted_at: null,
            created_at: "2024-11-25T04:20:33.000000Z",
            updated_at: "2024-11-25T04:20:33.000000Z",
          },
        },
        jam_masuk: "2025-01-02 07:30:14",
        jam_keluar: null,
        durasi: null,
        kategori_presensi: {
          id: 2,
          label: "Terlambat",
          created_at: "2024-08-29T15:10:20.000000Z",
          updated_at: "2024-08-29T15:10:20.000000Z",
        },
        created_at: "2025-01-02T07:30:14.000000Z",
        updated_at: "2025-01-02T07:30:14.000000Z",
      },
      {
        id: 1246,
        user: {
          id: 2712,
          nama: "RIVERA RATNA PENI",
          username: "rivera.peni",
          email_verified_at: null,
          role_id: 5,
          data_karyawan_id: 2678,
          foto_profil: null,
          data_completion_step: 0,
          status_aktif: 2,
          remember_token_expired_at: null,
          created_at: "2024-09-12T06:41:13.000000Z",
          updated_at: "2024-09-12T06:41:13.000000Z",
        },
        unit_kerja: {
          id: 8,
          nama_unit: "Billing Penagihan",
          jenis_karyawan: 0,
          deleted_at: null,
          created_at: null,
          updated_at: null,
        },
        jadwal: {
          id: null,
          tgl_mulai: null,
          tgl_selesai: null,
          shift: null,
        },
        jam_masuk: "2025-01-02 07:29:42",
        jam_keluar: null,
        durasi: null,
        kategori_presensi: {
          id: 1,
          label: "Tepat Waktu",
          created_at: "2024-08-29T15:10:20.000000Z",
          updated_at: "2024-08-29T15:10:20.000000Z",
        },
        created_at: "2025-01-02T07:29:42.000000Z",
        updated_at: "2025-01-02T07:29:42.000000Z",
      },
      {
        id: 1245,
        user: {
          id: 2549,
          nama: "YOHANES HANGGIR PRABOWO",
          username: "yohanes.prabowo",
          email_verified_at: null,
          role_id: 5,
          data_karyawan_id: 2515,
          foto_profil: null,
          data_completion_step: 0,
          status_aktif: 2,
          remember_token_expired_at: null,
          created_at: "2024-09-12T06:40:03.000000Z",
          updated_at: "2024-09-12T06:40:03.000000Z",
        },
        unit_kerja: {
          id: 8,
          nama_unit: "Billing Penagihan",
          jenis_karyawan: 0,
          deleted_at: null,
          created_at: null,
          updated_at: null,
        },
        jadwal: {
          id: null,
          tgl_mulai: null,
          tgl_selesai: null,
          shift: null,
        },
        jam_masuk: "2025-01-02 07:29:04",
        jam_keluar: null,
        durasi: null,
        kategori_presensi: {
          id: 1,
          label: "Tepat Waktu",
          created_at: "2024-08-29T15:10:20.000000Z",
          updated_at: "2024-08-29T15:10:20.000000Z",
        },
        created_at: "2025-01-02T07:29:04.000000Z",
        updated_at: "2025-01-02T07:29:04.000000Z",
      },
      {
        id: 1244,
        user: {
          id: 2532,
          nama: "TRI WAHYUNI",
          username: "tri.wahyuni",
          email_verified_at: null,
          role_id: 5,
          data_karyawan_id: 2498,
          foto_profil: null,
          data_completion_step: 0,
          status_aktif: 2,
          remember_token_expired_at: null,
          created_at: "2024-09-12T06:39:58.000000Z",
          updated_at: "2024-09-12T06:39:58.000000Z",
        },
        unit_kerja: {
          id: 8,
          nama_unit: "Billing Penagihan",
          jenis_karyawan: 0,
          deleted_at: null,
          created_at: null,
          updated_at: null,
        },
        jadwal: {
          id: null,
          tgl_mulai: null,
          tgl_selesai: null,
          shift: null,
        },
        jam_masuk: "2025-01-02 07:27:42",
        jam_keluar: null,
        durasi: null,
        kategori_presensi: {
          id: 1,
          label: "Tepat Waktu",
          created_at: "2024-08-29T15:10:20.000000Z",
          updated_at: "2024-08-29T15:10:20.000000Z",
        },
        created_at: "2025-01-02T07:27:42.000000Z",
        updated_at: "2025-01-02T07:27:42.000000Z",
      },
      {
        id: 1243,
        user: {
          id: 2661,
          nama: "SARI NUR KARTIKA",
          username: "sari.kartika",
          email_verified_at: null,
          role_id: 5,
          data_karyawan_id: 2627,
          foto_profil: null,
          data_completion_step: 0,
          status_aktif: 2,
          remember_token_expired_at: null,
          created_at: "2024-09-12T06:40:48.000000Z",
          updated_at: "2024-09-12T06:40:48.000000Z",
        },
        unit_kerja: {
          id: 8,
          nama_unit: "Billing Penagihan",
          jenis_karyawan: 0,
          deleted_at: null,
          created_at: null,
          updated_at: null,
        },
        jadwal: {
          id: null,
          tgl_mulai: null,
          tgl_selesai: null,
          shift: null,
        },
        jam_masuk: "2025-01-02 07:26:33",
        jam_keluar: null,
        durasi: null,
        kategori_presensi: {
          id: 1,
          label: "Tepat Waktu",
          created_at: "2024-08-29T15:10:20.000000Z",
          updated_at: "2024-08-29T15:10:20.000000Z",
        },
        created_at: "2025-01-02T07:26:33.000000Z",
        updated_at: "2025-01-02T07:26:33.000000Z",
      },
      {
        id: 1242,
        user: {
          id: 2715,
          nama: "EKO SETYO PUTRO",
          username: "eko.putro",
          email_verified_at: null,
          role_id: 5,
          data_karyawan_id: 2681,
          foto_profil: null,
          data_completion_step: 0,
          status_aktif: 2,
          remember_token_expired_at: null,
          created_at: "2024-09-12T06:41:14.000000Z",
          updated_at: "2024-09-12T06:41:14.000000Z",
        },
        unit_kerja: {
          id: 8,
          nama_unit: "Billing Penagihan",
          jenis_karyawan: 0,
          deleted_at: null,
          created_at: null,
          updated_at: null,
        },
        jadwal: {
          id: null,
          tgl_mulai: null,
          tgl_selesai: null,
          shift: null,
        },
        jam_masuk: "2025-01-02 07:25:49",
        jam_keluar: null,
        durasi: null,
        kategori_presensi: {
          id: 1,
          label: "Tepat Waktu",
          created_at: "2024-08-29T15:10:20.000000Z",
          updated_at: "2024-08-29T15:10:20.000000Z",
        },
        created_at: "2025-01-02T07:25:49.000000Z",
        updated_at: "2025-01-02T07:25:49.000000Z",
      },
      {
        id: 1241,
        user: {
          id: 2566,
          nama: "SRI UTAMI",
          username: "sri.utami",
          email_verified_at: null,
          role_id: 14,
          data_karyawan_id: 2532,
          foto_profil: null,
          data_completion_step: 0,
          status_aktif: 2,
          remember_token_expired_at: null,
          created_at: "2024-09-12T06:40:08.000000Z",
          updated_at: "2024-09-12T06:40:08.000000Z",
        },
        unit_kerja: {
          id: 8,
          nama_unit: "Billing Penagihan",
          jenis_karyawan: 0,
          deleted_at: null,
          created_at: null,
          updated_at: null,
        },
        jadwal: {
          id: null,
          tgl_mulai: null,
          tgl_selesai: null,
          shift: null,
        },
        jam_masuk: "2025-01-02 07:23:16",
        jam_keluar: null,
        durasi: null,
        kategori_presensi: {
          id: 1,
          label: "Tepat Waktu",
          created_at: "2024-08-29T15:10:20.000000Z",
          updated_at: "2024-08-29T15:10:20.000000Z",
        },
        created_at: "2025-01-02T07:23:16.000000Z",
        updated_at: "2025-01-02T07:23:16.000000Z",
      },
      {
        id: 1240,
        user: {
          id: 2504,
          nama: "WAHYU TRI ATMOJO",
          username: "wahyu.atmojo",
          email_verified_at: null,
          role_id: 22,
          data_karyawan_id: 2470,
          foto_profil: null,
          data_completion_step: 0,
          status_aktif: 2,
          remember_token_expired_at: null,
          created_at: "2024-09-12T06:39:50.000000Z",
          updated_at: "2024-09-12T06:39:50.000000Z",
        },
        unit_kerja: {
          id: 8,
          nama_unit: "Billing Penagihan",
          jenis_karyawan: 0,
          deleted_at: null,
          created_at: null,
          updated_at: null,
        },
        jadwal: {
          id: null,
          tgl_mulai: null,
          tgl_selesai: null,
          shift: null,
        },
        jam_masuk: "2025-01-02 07:17:53",
        jam_keluar: null,
        durasi: null,
        kategori_presensi: {
          id: 1,
          label: "Tepat Waktu",
          created_at: "2024-08-29T15:10:20.000000Z",
          updated_at: "2024-08-29T15:10:20.000000Z",
        },
        created_at: "2025-01-02T07:17:53.000000Z",
        updated_at: "2025-01-02T07:17:53.000000Z",
      },
    ],
    pagination: {
      links: {
        first:
          "https://apiweb.distrostudio.org/api/rski/dashboard/presensi/get-data-presensi?page=1",
        last: "https://apiweb.distrostudio.org/api/rski/dashboard/presensi/get-data-presensi?page=4",
        prev: null,
        next: "https://apiweb.distrostudio.org/api/rski/dashboard/presensi/get-data-presensi?page=2",
      },
      meta: {
        current_page: 1,
        last_page: 4,
        per_page: 10,
        total: 32,
      },
    },
  };
  const data = res.data;
  // const pagination = res.pagination;
  const ths = [
    {
      th: "Nama",
      sortable: true,
    },
    {
      th: "Jenis Jam Kerja",
      sortable: true,
      stackProps: {
        justify: "center",
      },
    },
    {
      th: "Unit Kerja",
      sortable: true,
    },
    {
      th: "Kategori",
      sortable: true,
    },
    {
      th: "Presensi Masuk",
      sortable: true,
    },
    {
      th: "Presensi keluar",
      sortable: true,
    },
  ];
  const tds = data?.map((item: any) => ({
    id: item.id,
    columnsFormat: [
      {
        value: item.user.nama,
        td: (
          <HStack>
            <Avatar
              size={"xs"}
              name={item.user.nama}
              src="https://bit.ly/sage-adebayo"
            />
            <TruncatedText
              tooltipContent={item.user.nama}
              textProps={{ maxW: "200px" }}
            >
              {item.user.nama}
            </TruncatedText>
          </HStack>
        ),
      },
      {
        value: item.unit_kerja.jenis_karyawan,
        td: (
          <Badge
            colorPalette={item.unit_kerja.jenis_karyawan ? "cyan" : "orange"}
          >
            {item.unit_kerja.jenis_karyawan ? "Shift" : "Non-Shift"}
          </Badge>
        ),
        stackProps: {
          justify: "center",
        },
      },
      {
        value: item.unit_kerja.nama_unit,
        td: item.unit_kerja.nama_unit,
      },
      {
        value: item.kategori_presensi?.label,
        td: (
          <Status value={item.kategori_presensi.id === 1 ? "success" : "error"}>
            {item.kategori_presensi?.label}
          </Status>
        ),
      },
      {
        value: item.jam_masuk,
        td: `${formatDate(
          item.jam_masuk,
          "basicShort"
        )} -  ${formatTimeFromDateFormat(item.jam_masuk)}`,
        dataType: "time" as "time",
      },
      {
        value: item.jam_masuk,
        td:
          item?.jam_masuk &&
          `${formatDate(
            item.jam_masuk,
            "basicShort"
          )} -  ${formatTimeFromDateFormat(item.jam_masuk)}`,
        dataType: "time" as "time",
      },
    ],
  }));

  const [limitControl, setLimitControl] = useState(10);
  const [pageControl, setPageControl] = useState(1);
  const [search, setSearch] = useState("");

  return (
    <>
      <HScroll px={4} pb={4}>
        <SearchInput
          onChangeSetter={(input) => {
            setSearch(input);
          }}
          inputValue={search}
        />

        <BButton colorPalette={PRIMARY_COLOR_PALETTE}>Call To Action</BButton>
      </HScroll>
      <TableComponent
        ths={ths}
        tds={tds}
        originalData={data}
        rowClick={(rowData) => {
          toaster.create({
            type: "success",
            title: `Row Clicked`,
            description: `Data id = ${rowData.id}`,
            placement: iss ? "top" : "bottom-end",
            action: {
              label: "Close",
              onClick: () => {},
            },
          });
        }}
        rowOptions={[
          {
            label: (
              <CContainer p={2}>
                <Text>Edit</Text>
              </CContainer>
            ),
            menuItemProps: {
              p: "0 !important",
            },
            callback: (rowData: any) => {
              toaster.create({
                type: "success",
                title: `Edit`,
                description: `Data id = ${rowData.id}`,
                placement: iss ? "top" : "bottom-end",
                action: {
                  label: "Close",
                  onClick: () => {},
                },
              });
            },
          },
          {
            label: "Disabled Menu",
            menuItemProps: {
              disabled: true,
            },
          },
          "divider",
          {
            label: "Delete...",
            menuItemProps: {
              color: "red.400",
            },
            confirmation: (rowData: any) => ({
              id: `${rowData.id}`,
              title: "Delete",
              description: `Aksi ini tidak bisa dibatalkan, data id ${rowData.id}`,
              confirmLabel: "Delete",
              confirmCallback: () => {
                toaster.create({
                  type: "success",
                  title: `Delete`,
                  description: `Data id = ${rowData.id}`,
                  placement: iss ? "top" : "bottom-end",
                  action: {
                    label: "Close",
                    onClick: () => {},
                  },
                });
              },
            }),
          },
        ]}
        batchOptions={[
          {
            label: "Disabled Menu",
            menuItemProps: {
              disabled: true,
            },
          },
          "divider",
          {
            label: "Delete...",
            menuItemProps: {
              color: "red.400",
            },
            confirmation: (selectedRows: number[]) => ({
              id: `${selectedRows.join("-")}`,
              title: "Delete",
              description: `Aksi ini tidak bisa dibatalkan, data ids ${selectedRows.join(
                ", "
              )}`,
              confirmLabel: "Delete",
              confirmCallback: () => {
                toaster.create({
                  type: "success",
                  title: `Delete`,
                  description: `Data ids = ${selectedRows.join(", ")}`,
                  placement: iss ? "top" : "bottom-end",
                  action: {
                    label: "Close",
                    onClick: () => {},
                  },
                });
              },
            }),
          },
        ]}
        limitControl={limitControl}
        setLimitControl={setLimitControl}
        pagination={res.pagination}
        pageControl={pageControl}
        setPageControl={setPageControl}
        footerContent={
          <TableFooterNote>Tabel footer note example</TableFooterNote>
        }
      />
    </>
  );
};

export default function Root() {
  return (
    <CContainer
      minH={"100dvh"}
      overflowX={"clip"}
      p={5}
      pt={"0 !important"}
      gap={4}
    >
      {/* Nav */}
      <HStack
        wrap={"wrap"}
        justify={"space-between"}
        py={2}
        position={"sticky"}
        top={0}
        zIndex={99}
        // color={"white"}
        // bg={"darktrans"}
        // backdropFilter={"blur(5px)"}
      >
        <HStack gap={3}>
          {/* <Image
            alt="Distro Studio Logo"
            src="/assets/images/logo_color.png"
            w={"20px"}
          /> */}

          <Text fontSize={"1.25rem"} fontWeight={"bold"}>
            Mahaooo
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

      <SimpleGrid columns={[1, 2, 3]} gap={4} maxW={"1400px"} mx={"auto"}>
        {/* Start Grid */}
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

            <CenterContainer p={8}>
              <NoData />
            </CenterContainer>

            <CenterContainer p={8}>
              <NotFound />
            </CenterContainer>

            <CenterContainer p={8}>
              <Forbidden />
            </CenterContainer>

            <CenterContainer p={8}>
              <Retry />
            </CenterContainer>
          </CContainer>

          {/* Tooltip */}
          <CContainer flex={0} gap={4}>
            <Heading6>Tooltip</Heading6>
            <CenterContainer>
              <Tooltip content={"Ciluk baa"}>
                <Text>Hover me & wait</Text>
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
                      <IconCircleCheck />
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
                          <IconCircleCheck />
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
            <Heading6>Float Counter</Heading6>
            <CenterContainer gap={4}>
              <IconButton variant={"outline"}>
                <FloatCounter>3</FloatCounter>
                <Icon>
                  <IconBell />
                </Icon>
              </IconButton>

              <BButton variant={"outline"}>
                <FloatCounter>{formatNumber(4230)}</FloatCounter>
                <Icon>
                  <IconAdjustmentsHorizontal />
                </Icon>
                Filter
              </BButton>
            </CenterContainer>
          </CContainer>
        </CContainer>

        {/* Center Grid */}
        <CContainer gap={6}>
          {/* Primary Button */}
          <CContainer flex={0} gap={4}>
            <Heading6>Picked Primary Color Button</Heading6>
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
                      <IconAlarm />
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
                        <IconAlarm />
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
                        <IconAlarm />
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
                        <IconAlarm />
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
                        <IconAlarm />
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
                      <IconEdit />
                    </Icon>
                  </MenuItem>
                  <MenuItem value="restore" justifyContent={"space-between"}>
                    Restore
                    <Icon fontSize={"md"}>
                      <IconRestore />
                    </Icon>
                  </MenuItem>
                  <MenuItem
                    value="delete"
                    color="red.400"
                    justifyContent={"space-between"}
                  >
                    Delete
                    <Icon fontSize={"md"}>
                      <IconTrash />
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

        {/* End Grid */}
        <CContainer gap={6}>
          {/* String Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>String Input</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <StringInput placeholder="example@email.com" />
                <StringInput invalid placeholder="Invalid state" />
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Password Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>Password Input</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <PasswordInput placeholder="********" />
                <PasswordInput invalid placeholder="Invalid state" />
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Search Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>Search Input</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <SearchInputDemo />
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

                <Checkbox gap="4" alignItems="start" invalid>
                  <Box lineHeight="1">Invalid state</Box>
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

          {/* Time Picker Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>Time Picker Input</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <TimePickerDemo />
              </CContainer>
            </CenterContainer>
          </CContainer>

          {/* Time Range Picker Input */}
          <CContainer flex={0} gap={4}>
            <Heading6>Time Range Picker Input</Heading6>
            <CenterContainer>
              <CContainer gap={4}>
                <TimeRangePickerDemo />
              </CContainer>
            </CenterContainer>
          </CContainer>
        </CContainer>
      </SimpleGrid>

      {/* Table Component */}
      <CContainer maxW={"1400px"} mx={"auto"}>
        <CContainer flex={0} mt={12} gap={4}>
          <Heading6>Table Component</Heading6>
          <CenterContainer flexDir={"column"} px={0}>
            <TableComponentDemo />
          </CenterContainer>
        </CContainer>
      </CContainer>

      {/* Footer */}
      <HStack wrap={"wrap"} mt={8} gap={4} justify={"space-between"}>
        <HStack pointerEvents={"none"} gap={0}>
          {/* <Image src="/assets/images/logo_color.png" w={"16px"} mr={3} /> */}
          <HStack wrap={"wrap"} gapY={0} gap={1}>
            <Text fontSize={"sm"} whiteSpace={"nowrap"}>
              Customized Chakra UI Components by{" "}
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
                Mahaooo
              </Text>
            </a>
          </HStack>
        </HStack>

        <HStack gap={1}>
          {/* <Image src="/assets/svgs/vercel.svg" h={"15px"} /> */}
          <Text>Deployed on</Text>
          <Link to={"https://vercel.com"} target="_blank">
            <Text fontWeight={"bold"}>Vercel</Text>
          </Link>
        </HStack>
      </HStack>
    </CContainer>
  );
}
