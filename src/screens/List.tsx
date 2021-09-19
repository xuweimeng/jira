import React from 'react';
import type {UsersProps, ProjectsProps, ParamsProps} from './data.d';

const List:React.FC<{list: ProjectsProps[], users: UsersProps[]}> = ({list, users}) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>名称</td>
                    <td>负责人</td>
                </tr>
            </thead>
            <tbody>
               {
                   list.map(item => <tr key={item.id}>
                       <td>{item.name}</td>
                       <td>{users.find(user => user.id === item.personId)?.name}</td>
                   </tr>)
               }
            </tbody>
            
        </table>
    )
}

export default List;