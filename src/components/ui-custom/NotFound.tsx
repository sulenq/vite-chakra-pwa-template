import { Icon, StackProps } from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { EmptyState } from "../ui/empty-state";
import CContainer from "./CContainer";

interface Props extends StackProps {
  title?: string;
  description?: string;
  children?: any;
}

export default function NotFound({
  title = "Data tidak ditemukan",
  description = "Cobalah untuk menyesuaikan pencarian.",
  children,
  ...props
}: Props) {
  return (
    <CContainer {...props}>
      <EmptyState
        icon={
          <Icon>
            <MagnifyingGlass />
          </Icon>
        }
        title={title}
        description={description}
        maxW={"500px"}
        m={"auto"}
      >
        {children}
      </EmptyState>
    </CContainer>
  );
}
