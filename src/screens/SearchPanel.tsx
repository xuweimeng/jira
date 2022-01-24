import { Form, Input, Select } from "antd";
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
    <Form layout="inline" style={{
      marginBottom: '2rem'
    }}>
      <Form.Item>
        <Input
          placeholder="请输入项目名"
          onChange={(e) => {
            setParams({
              ...params,
              name: e.target.value,
            });
          }}
          style={{
            width: '200px'
          }}
        />
      </Form.Item>
      <Form.Item>

        <Select
          onChange={(e: number) => {
            if (!e) return;
            setParams({
              ...params,
              personId: e,
            });
          }}
          style={{
            width: '150px'
          }}
        >
          <Select.Option value="">负责人</Select.Option>
          {users.map((item) => (
            <Select.Option value={item.id} key={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default SearchPanel;
