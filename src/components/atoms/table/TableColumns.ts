import { Column } from "react-table";

type ColumnType = {
  actions: string;
  meeting_title: string;
  created_by: string;
  status: string;
};

export interface AllUsersType{
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phoneNumber",
  },
] as Column<AllUsersType>[];

