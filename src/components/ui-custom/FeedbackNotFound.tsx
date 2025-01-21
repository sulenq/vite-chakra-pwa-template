import { Icon, StackProps } from "@chakra-ui/react";
import { IconSearch } from "@tabler/icons-react";
import { EmptyState } from "../ui/empty-state";
import CContainer from "./CContainer";

interface Props extends StackProps {
  title?: string;
  description?: string;
  children?: any;
}

export default function FeedbackNotFound({
  title = "Data tidak ditemukan",
  description = "Cobalah untuk menyesuaikan pencarian.",
  children,
  ...props
}: Props) {
  return (
    <CContainer w={"fit"} m={"auto"} {...props}>
      <EmptyState
        icon={
          <Icon>
            <IconSearch stroke={2} />
          </Icon>
        }
        title={title}
        description={description}
        maxW={"500px"}
      >
        {children}
      </EmptyState>
    </CContainer>
  );
}
