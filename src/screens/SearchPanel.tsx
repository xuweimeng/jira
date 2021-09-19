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
      <input
        placeholder="请输入姓名"
        onChange={(e) => {
          setParams({
            ...params,
            name: e.target.value,
          });
        }}
      />
      <select
        onChange={(e) => {
          setParams({
            ...params,
            // @ts-ignore
            personId: e.target.value,
          });
        }}
      >
        <option value="">负责人</option>
        {users.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchPanel;
