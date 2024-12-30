import { Interface__TableComponent } from "@/constant/interfaces";
import { Table } from "@chakra-ui/react";
import CContainer from "./CContainer";

const TableComponent = ({
  ths,
  tds,
  rowClick,
  originalData,
  columnsConfig,
  rowOptions,
  batchOptions,
  initialSortOrder,
  initialSortColumnIndex,
  trBodyProps,
  ...props
}: Interface__TableComponent) => {
  return (
    <CContainer w={"fuil"} {...props}>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader />
          </Table.Row>
        </Table.Header>
      </Table.Root>
    </CContainer>
  );
};

export default TableComponent;
