import React, { useEffect, useMemo, useRef, useState } from "react";
import * as mantineReactTable from "mantine-react-table";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Person, makeData } from "../faker";

const TView = () => {
  const columns = useMemo<mantineReactTable.MRT_ColumnDef<Person>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150
      },
      {
        accessorKey: "middleName",
        header: "Middle Name",
        size: 150
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150
      },
      {
        accessorKey: "email",
        header: "Email Address",
        size: 300
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone Number",
        size: 250
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 300
      },
      {
        accessorKey: "zipCode",
        header: "Zip Code"
      },
      {
        accessorKey: "city",
        header: "City",
        size: 220
      },
      {
        accessorKey: "state",
        header: "State"
      },
      {
        accessorKey: "country",
        header: "Country",
        size: 350
      },
      {
        accessorKey: "petName",
        header: "Pet Name"
      },
      {
        accessorKey: "age",
        header: "Age"
      },
      {
        accessorKey: "salary",
        header: "Salary"
      },
      {
        accessorKey: "dateOfBirth",
        header: "Date of Birth"
      },
      {
        accessorKey: "dateOfJoining",
        header: "Date of Joining"
      },
      {
        accessorKey: "isActive",
        header: "Is Active"
      }
    ],
    []
    //end
  );

  //optionally access the underlying virtualizer instance
  const rowVirtualizerInstanceRef = useRef<
    mantineReactTable.MRT_Virtualizer<HTMLDivElement, HTMLTableRowElement>
  >(null);

  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState<mantineReactTable.MRT_SortingState>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      setData(makeData(10_000));
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    rowVirtualizerInstanceRef.current?.scrollToIndex(0);
  }, [sorting]);

  return (
    <mantineReactTable.MantineReactTable
      columns={columns}
      data={data} //10,000 rows
      enableBottomToolbar={false}
      enableColumnResizing
      enableColumnVirtualization
      enableGlobalFilterModes
      enablePagination={false}
      enablePinning
      enableRowNumbers
      enableRowVirtualization
      mantineTableContainerProps={{ sx: { maxHeight: "600px" } }}
      onSortingChange={setSorting}
      state={{ isLoading, sorting }}
      rowVirtualizerInstanceRef={rowVirtualizerInstanceRef} //optional
      rowVirtualizerProps={{ overscan: 5 }} //optionally customize the row virtualizer
      columnVirtualizerProps={{ overscan: 2 }} //optionally customize the column virtualizer
    />
  );
};

export default TView;
