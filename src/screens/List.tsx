import React from "react";
import type { UsersProps, ProjectsProps } from "./data.d";
import { Table } from "antd";

const List: React.FC<{ list: ProjectsProps[]; users: UsersProps[] }> = ({
  list,
  users,
}) => {
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      sorter: (a: { name: string }, b: { name: string }) =>
        a.name.localeCompare(b.name),
    },
    {
      title: "负责人",
      dataIndex: "personId",
      key: "personId",
      render: (value: number) => {
        const name = users.find((user) => user.id === value)?.name;
        return <span>{name}</span>;
      },
    },
  ];
  return (
    <Table dataSource={list} columns={columns} rowKey={(record) => record.id} />
  );
};

export default List;
