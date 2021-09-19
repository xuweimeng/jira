import React, { useEffect, useState } from 'react';
import qs from 'qs';
import List from './List';
import { cleanObject, useMount, useDebounce } from 'utils';
import SearchPanel from './SearchPanel';

import type {UsersProps, ProjectsProps, ParamsProps} from './data.d';

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectListScreen = () => {

    const [params, setParams] = useState<ParamsProps>({
        name: '',
    });
    const [list, setList] = useState<ProjectsProps[]>([]);
    const [users, setUsers] = useState<UsersProps[]>([]);

    const debounceValue = useDebounce(params, 2000);

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(params))}`).then(async res => {
            if(res.ok) {
                setList( await res.json());
            }
        })
    }, [debounceValue])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if(res.ok) {
                setUsers( await res.json());
            }
        })
    })


    return (
        <div>
            <SearchPanel params={params} users={users} setParams={setParams} />
            <List list={list} users={users} />
        </div>
    )
}

export default ProjectListScreen;