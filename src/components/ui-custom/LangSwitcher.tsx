import { Button, ButtonProps } from "@chakra-ui/react";
import { useLang } from "../../hooks/useLang";
import { Tooltip } from "../ui/tooltip";

interface Props extends ButtonProps {}

export default function LangSwitcher({ ...props }: Props) {
  const { lang, toggleLang } = useLang();

  return (
    <Tooltip content={""}>
      <Button
        className={"btn"}
        onClick={toggleLang}
        px={"4px !important"}
        {...props}
      >
        {lang === "en" ? "ID" : "EN"}
      </Button>
    </Tooltip>
  );
}
