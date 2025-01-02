import {
  Interface__BatchOptions,
  Interface__RowOptions,
  Interface__TableComponent,
} from "@/constant/interfaces";
import formatDate from "@/utils/formatDate";
import {
  Box,
  Center,
  HStack,
  Icon,
  MenuSeparator,
  Portal,
  Table,
  Text,
} from "@chakra-ui/react";
import {
  ArrowDown,
  ArrowUp,
  DotsThreeVertical,
  ListChecks,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuTrigger,
} from "../ui/menu";
import BButton from "./BButton";
import CContainer from "./CContainer";

const RowOptions = ({
  rowData,
  rowOptions,
  tableRef,
}: Interface__RowOptions) => {
  return (
    <MenuRoot>
      <MenuTrigger
        asChild
        h={"48px"}
        w={"48px"}
        borderRadius={0}
        aria-label="row options"
        _expanded={{ bg: "d2 !important" }}
      >
        <BButton iconButton unclicky variant={"ghost"}>
          <Icon>
            <DotsThreeVertical />
          </Icon>
        </BButton>
      </MenuTrigger>

      <Portal container={tableRef}>
        <MenuContent zIndex={10} className="rowOptionsList" minW={"140px"}>
          {rowOptions?.map((option, i) => {
            return option === "divider" ? (
              <MenuSeparator key={i} />
            ) : (
              <MenuItem
                key={i}
                value={option.label}
                onClick={() => {
                  option.callback && option.callback(rowData);
                }}
                {...option.props}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </MenuContent>
      </Portal>
    </MenuRoot>
  );
};

const BatchOptions = ({
  selectedRows,
  batchOptions,
  selectAllRows,
  handleSelectAllRows,
  tableRef,
}: Interface__BatchOptions) => {
  return (
    <MenuRoot>
      <MenuTrigger
        asChild
        h={"48px"}
        w={"48px"}
        borderRadius={0}
        aria-label="row options"
        _expanded={{ bg: "d2 !important" }}
      >
        <BButton iconButton variant={"ghost"}>
          <Icon>
            <ListChecks />
          </Icon>
        </BButton>
      </MenuTrigger>

      <Portal container={tableRef}>
        <MenuContent zIndex={10} minW={"140px"}>
          <MenuItemGroup
            title={`${selectedRows.length} Terpilih`}
            fontWeight={400}
          >
            <MenuSeparator />

            <MenuItem
              value={"select all"}
              justifyContent={"space-between"}
              onClick={() => {
                handleSelectAllRows(selectAllRows);
              }}
              closeOnSelect={false}
            >
              <Text color={"p.500"} fontWeight={550}>
                Pilih Semua
              </Text>
              <Checkbox colorScheme="ap" checked={selectAllRows} />
            </MenuItem>

            <MenuSeparator />

            {batchOptions?.map((option, i) => {
              return option === "divider" ? (
                <MenuSeparator key={i} />
              ) : (
                <MenuItem
                  key={i}
                  value={option.label}
                  onClick={() => {
                    option.callback && option.callback(selectedRows);
                  }}
                  {...option.props}
                >
                  {option.label}
                </MenuItem>
              );
            })}
          </MenuItemGroup>
        </MenuContent>
      </Portal>
    </MenuRoot>
  );
};

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
  const tableHeader = columnsConfig
    ? columnsConfig.map((columnIndex) => ths[columnIndex])
    : ths;

  const tableBody = columnsConfig
    ? tds.map((data) => {
        const filteredColumns = columnsConfig.map(
          (columnIndex) => data.columnsFormat[columnIndex]
        );
        return { ...data, columnsFormat: filteredColumns };
      })
    : [...tds];

  const [originalDataState, setOriginalDataState] = useState(tds);
  const [selectAllRows, setSelectAllRows] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    sortColumnIndex: number | undefined;
    direction: "asc" | "desc";
  }>({
    sortColumnIndex: initialSortColumnIndex || undefined,
    direction: initialSortOrder || "asc",
  });

  // Column filter
  useEffect(() => {
    const newOriginalDataState = columnsConfig
      ? tds.map((data) => {
          const filteredColumns = columnsConfig.map(
            (columnIndex) => data.columnsFormat[columnIndex]
          );
          return { ...data, columnsFormat: filteredColumns };
        })
      : [...tds];
    setOriginalDataState([...newOriginalDataState]); // Save real data when first render
  }, [tds, columnsConfig]);

  // Row click
  const handleRowClick = (rowData: any) => {
    if (rowClick) {
      rowClick(rowData);
    }
  };

  // Batch options
  const handleSelectAllRows = (isChecked: boolean) => {
    setSelectAllRows(!selectAllRows);
    if (!isChecked) {
      const allIds = tds.map((row) => row.id);
      setSelectedRows(allIds);
    } else {
      setSelectedRows([]);
    }
  };
  const toggleRowSelection = (rowId: number) => {
    setSelectedRows((prevSelected) => {
      const isSelected = prevSelected.includes(rowId);

      if (isSelected) {
        setSelectAllRows(false);
        return prevSelected.filter((id) => id !== rowId);
      } else {
        if (tds.length === selectedRows.length + 1) {
          setSelectAllRows(true);
        }
        return [...prevSelected, rowId];
      }
    });
  };

  // Sort
  const requestSort = (columnIndex: number) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.sortColumnIndex === columnIndex) {
        // Jika sudah diurutkan berdasarkan kolom ini, ubah arah sorting
        if (prevConfig.direction === "asc") {
          return { sortColumnIndex: columnIndex, direction: "desc" };
        } else if (prevConfig.direction === "desc") {
          // Jika sudah desc, hilangkan sorting (reset ke initial state)
          return { sortColumnIndex: undefined, direction: "asc" };
        }
      } else {
        // Jika kolom belum diurutkan, mulai dari ascending
        return { sortColumnIndex: columnIndex, direction: "asc" };
      }
      // Pastikan selalu return objek yang valid
      return prevConfig;
    });
  };
  const sortedData = () => {
    if (
      sortConfig.sortColumnIndex !== undefined &&
      sortConfig.sortColumnIndex !== null
    ) {
      return tableBody.sort((a, b) => {
        const columnIndex = sortConfig.sortColumnIndex as number;

        const aValue = a.columnsFormat[columnIndex]?.value ?? "";
        const bValue = b.columnsFormat[columnIndex]?.value ?? "";

        type SortHandler = (
          aValue: any,
          bValue: any,
          direction: "asc" | "desc"
        ) => number;

        const sortHandlers: Record<string, SortHandler> = {
          numeric: (aValue, bValue, direction) =>
            direction === "asc"
              ? Number(aValue) - Number(bValue)
              : Number(bValue) - Number(aValue),

          date: (aValue, bValue, direction) => {
            const dateA = new Date(
              formatDate(aValue, "iso") as string
            ).getTime();
            const dateB = new Date(
              formatDate(bValue, "iso") as string
            ).getTime();
            return direction === "asc" ? dateA - dateB : dateB - dateA;
          },

          time: (aValue, bValue, direction) =>
            direction === "asc"
              ? aValue.localeCompare(bValue)
              : bValue.localeCompare(aValue),

          string: (aValue, bValue, direction) =>
            direction === "asc"
              ? String(aValue).localeCompare(String(bValue))
              : String(bValue).localeCompare(String(aValue)),
        };

        const columnType: string =
          a.columnsFormat[columnIndex]?.dataType || "string";

        const sortHandler: SortHandler =
          sortHandlers[columnType] || sortHandlers.string;

        return sortHandler(aValue, bValue, sortConfig.direction);
      });
    }
    return tds;
  };
  const renderSortIcon = (columnIndex: number) => {
    if (sortConfig.sortColumnIndex === columnIndex) {
      return (
        <>
          {sortConfig.direction === "asc" ? (
            <Icon color={"p.500"} fontSize={"sm"}>
              <ArrowUp />
            </Icon>
          ) : (
            <Icon color={"p.500"} fontSize={"sm"}>
              <ArrowDown />
            </Icon>
          )}
        </>
      );
    }
    return null;
  };

  const tableRef = useRef(null);

  const dataToMap =
    sortConfig.sortColumnIndex !== null &&
    sortConfig.sortColumnIndex !== undefined
      ? sortedData()
      : originalDataState;

  return (
    <CContainer
      minW={"full"}
      border={"1px solid"}
      borderColor={"d3"}
      overflow={"auto"}
      borderRadius={6}
      {...props}
    >
      <Table.Root
        ref={tableRef}
        w={tableHeader.length > 1 ? "full" : "fit-content"}
      >
        <Table.Header>
          <Table.Row position={"sticky"} top={0} zIndex={3}>
            {rowClick && (
              <Table.ColumnHeader
                bg={"body"}
                whiteSpace={"nowrap"}
                borderBottom={"none !important"}
                p={0}
                zIndex={15}
                position={"sticky"}
                left={0}
              >
                <Box
                  w={"2px"}
                  h={"48px"}
                  bg={"body"}
                  borderBottom={"1px solid var(--divider3)"}
                />
              </Table.ColumnHeader>
            )}

            {batchOptions && (
              <Table.Cell
                h={"48px"}
                w={"48px !important"}
                minW={"0% !important"}
                maxW={"48px !important"}
                p={0}
                position={"sticky"}
                left={0}
              >
                <Center
                  h={"48px"}
                  w={"48px"}
                  borderRight={"1px solid var(--divider3)"}
                  borderBottom={"1px solid var(--divider3)"}
                  bg={"body"}
                >
                  <BatchOptions
                    selectedRows={selectedRows}
                    batchOptions={batchOptions}
                    selectAllRows={selectAllRows}
                    handleSelectAllRows={handleSelectAllRows}
                    tableRef={tableRef}
                  />
                </Center>
              </Table.Cell>
            )}

            {tableHeader.map((tableColumnHeader, i) => (
              <Table.ColumnHeader
                key={i}
                bg={"body"}
                whiteSpace={"nowrap"}
                onClick={() => {
                  tableColumnHeader.isSortable && requestSort(i);
                }}
                cursor={tableColumnHeader?.isSortable ? "pointer" : "auto"}
                borderBottom={"none !important"}
                p={0}
                {...tableColumnHeader?.props}
              >
                <HStack
                  borderBottom={"1px solid var(--divider3)"}
                  px={4}
                  py={3}
                  gap={4}
                  h={"48px"}
                  pl={i === 0 ? 4 : ""}
                  pr={i === ths.length - 1 ? 4 : ""}
                  {...tableColumnHeader?.stackProps}
                >
                  <Text>{tableColumnHeader?.th}</Text>

                  {renderSortIcon(i)}
                </HStack>
              </Table.ColumnHeader>
            ))}

            {rowOptions && (
              <Table.ColumnHeader
                h={"48px"}
                w={"48px !important"}
                minW={"0% !important"}
                maxW={"48px !important"}
                p={0}
                position={"sticky"}
                right={0}
                borderBottom={"none !important"}
              >
                <Center
                  h={"48px"}
                  w={"48px"}
                  borderLeft={"1px solid var(--divider3)"}
                  borderBottom={"1px solid var(--divider3)"}
                  bg={"body"}
                ></Center>
              </Table.ColumnHeader>
            )}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {dataToMap?.map((row, rowIndex) => {
            return (
              <Table.Row
                key={rowIndex}
                role="group"
                transition={"200ms"}
                onClick={() => {
                  handleRowClick(row);
                }}
                cursor={rowClick ? "pointer" : "auto"}
                px={2}
                borderBottom={"1px solid var(--divider)"}
                position={"relative"}
                {...trBodyProps}
              >
                {rowClick && (
                  <Table.Cell
                    minW={"2px"}
                    maxW={"2px"}
                    w={"2px"}
                    p={0}
                    position={"sticky"}
                    left={0}
                    zIndex={1}
                  >
                    <Box
                      w={"2px"}
                      h={"48px"}
                      bg={"body"}
                      _groupHover={{ bg: "p.500" }}
                    />
                  </Table.Cell>
                )}

                {batchOptions && (
                  <Table.Cell
                    h={"48px"}
                    w={"48px !important"}
                    minW={"0% !important"}
                    maxW={"48px !important"}
                    p={0}
                    position={"sticky"}
                    left={0}
                    bg={"body"}
                    zIndex={2}
                  >
                    <Center
                      w={"48px"}
                      h={"48px"}
                      borderRight={"1px solid var(--divider3)"}
                      _groupHover={{
                        bg: "var(--divider)",
                      }}
                      _groupActive={
                        rowClick ? { bg: "var(--divider2)" } : undefined
                      }
                      transition={"200ms"}
                      cursor={"pointer"}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRowSelection(row.id);
                      }}
                    >
                      <Checkbox
                        colorScheme="ap"
                        onChange={() => {
                          toggleRowSelection(row.id);
                        }}
                        checked={selectedRows.includes(row.id)}
                      />
                    </Center>
                  </Table.Cell>
                )}

                {row.columnsFormat.map((col, colIndex) => (
                  <Table.Cell
                    key={colIndex}
                    whiteSpace={"nowrap"}
                    p={0}
                    {...col?.props}
                  >
                    <HStack
                      _groupHover={{
                        bg: "var(--divider) !important",
                      }}
                      _groupActive={
                        rowClick ? { bg: "var(--divider2)" } : undefined
                      }
                      py={3}
                      px={4}
                      h={"48px"}
                      transition={"200ms"}
                      {...col?.stackProps}
                    >
                      {typeof col?.td === "string" ||
                      typeof col?.td === "number" ? (
                        <Text>{col?.td}</Text>
                      ) : (
                        col?.td
                      )}
                    </HStack>
                  </Table.Cell>
                ))}

                {rowOptions && (
                  <Table.Cell
                    h={"48px"}
                    w={"48px !important"}
                    minW={"0% !important"}
                    maxW={"48px !important"}
                    p={0}
                    position={"sticky"}
                    right={0}
                    bg={"body"}
                    zIndex={2}
                  >
                    <Center
                      h={"48px"}
                      w={"48px"}
                      borderLeft={"1px solid var(--divider3)"}
                      _groupHover={{
                        bg: "var(--divider)",
                      }}
                      _groupActive={
                        rowClick ? { bg: "var(--divider2)" } : undefined
                      }
                      transition={"200ms"}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <RowOptions
                        rowData={row}
                        rowOptions={rowOptions}
                        tableRef={tableRef}
                      />
                    </Center>
                  </Table.Cell>
                )}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </CContainer>
  );
};

export default TableComponent;
