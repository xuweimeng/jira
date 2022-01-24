import React, { useEffect, useState } from "react";
import qs from "qs";
import List from "./List";
import { cleanObject, useMount, useDebounce } from "utils";
import SearchPanel from "./SearchPanel";
import {useHttp} from 'utils/http';

import type { UsersProps, ProjectsProps, ParamsProps } from "./data.d";
import styled from "@emotion/styled";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectListScreen = () => {
  const [params, setParams] = useState<ParamsProps>({
    name: "",
  });
  const [list, setList] = useState<ProjectsProps[]>([]);
  const [users, setUsers] = useState<UsersProps[]>([]);
  const client = useHttp()
  const debounceValue = useDebounce(params, 2000);

  useEffect(() => {
    client('projects', cleanObject(params)).then(setList)
  }, [debounceValue]);

  useMount(() => {
    client('users', cleanObject(params)).then(setUsers)
  });

  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel params={params} users={users} setParams={setParams} />
      <List list={list} users={users} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`

export default ProjectListScreen;
