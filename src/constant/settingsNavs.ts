import {
  IconDeviceDesktop,
  IconGavel,
  IconInfoCircle,
  IconLanguage,
  IconShieldLock,
} from "@tabler/icons-react";

const SETTINGS_NAVS = [
  {
    groupLabel: "Utama",
    list: [
      {
        icon: IconDeviceDesktop,
        labelKey: "settings_navs.display",
        path: "/settings/display",
      },
      {
        icon: IconLanguage,
        labelKey: "settings_navs.language",
        path: "/settings/language",
      },
    ],
  },
  {
    groupLabel: "Lainnya",
    list: [
      {
        icon: IconInfoCircle,
        labelKey: "settings_navs.about",
        path: "/settings/about",
      },
      {
        icon: IconGavel,
        labelKey: "settings_navs.termsOfService",
        path: "/settings/terms-of-service",
      },
      {
        icon: IconShieldLock,
        labelKey: "settings_navs.privacyPolicy",
        path: "/settings/privacy-policy",
      },
    ],
  },
];

export default SETTINGS_NAVS;
