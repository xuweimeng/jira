import React from "react";
import type { UsersProps, ProjectsProps } from "./data.d";
import { Table } from "antd";
import dayjs from 'dayjs'

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
      title: "部门",
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "负责人",
      dataIndex: "personId",
      key: "personId",
      render: (value: number) => {
        console.log(list);
        
        const name = users.find((user) => user.id === value)?.name;
        return <span>{name}</span>;
      },
    },
    {
      title: "创建时间",
      dataIndex: "created",
      key: "created",
      render: (value: number) => {
        
        return <span>{value && dayjs(value).format('YYYY-MM-DD hh:mm:ss')}</span>;
      },
    },
  ];
  return (
    <Table dataSource={list} columns={columns} rowKey={(record) => record.id} />
  );
};

export default List;
