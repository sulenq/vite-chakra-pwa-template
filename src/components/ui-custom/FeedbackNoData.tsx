import { Icon, StackProps } from "@chakra-ui/react";
import { IconDatabaseOff } from "@tabler/icons-react";
import { EmptyState } from "../ui/empty-state";
import CContainer from "./CContainer";

interface Props extends StackProps {
  title?: string;
  description?: string;
}

export default function FeedbackNoData({
  title = "Tidak ada data",
  description = "Cobalah untuk memperbarui data.",
  ...props
}: Props) {
  return (
    <CContainer {...props}>
      <EmptyState
        icon={
          <Icon>
            <IconDatabaseOff stroke={2} />
          </Icon>
        }
        title={title}
        description={description}
        maxW={"500px"}
        m={"auto"}
      />
    </CContainer>
  );
}
