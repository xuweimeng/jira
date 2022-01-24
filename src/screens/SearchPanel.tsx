import { Input, Select } from "antd";
import React from "react";
import type { UsersProps, ParamsProps } from "./data.d";
interface SearchPanelProps {
  params: ParamsProps;
  users: UsersProps[];
  setParams: (str: ParamsProps) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({
  users,
  params,
  setParams,
}) => {
  return (
    <form>
      <Input
        placeholder="请输入姓名"
        onChange={(e) => {
          setParams({
            ...params,
            name: e.target.value,
          });
        }}
      />
      <Select
        onChange={(e: number) => {
          if (!e) return;
          setParams({
            ...params,
            personId: e,
          });
        }}
      >
        <Select.Option value="">负责人</Select.Option>
        {users.map((item) => (
          <Select.Option value={item.id} key={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
    </form>
  );
};

export default SearchPanel;
