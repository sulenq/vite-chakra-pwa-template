import {
  IconNavigation,
  IconRuler,
  IconSquare,
  IconTransformPoint,
} from "@tabler/icons-react";

const FIELD_PROPERTIES = [
  {
    icon: IconRuler,
    label: "Detail Dimensi",
    key: "dimensionDetails",
  },
  {
    icon: IconNavigation,
    label: "Sudut Utara",
    key: "northCorner",
  },
  {
    icon: IconTransformPoint,
    label: "Poin Bidang",
    key: "fieldPoints",
  },
  {
    icon: IconSquare,
    label: "Garis Bidang",
    key: "fieldLine",
  },
];

export default FIELD_PROPERTIES;
