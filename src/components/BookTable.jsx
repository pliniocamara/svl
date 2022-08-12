import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

export default function BookTable() {

    const [users, setUsers] = useState([]);

    const columns = [{
        dataField: 'id',
        text: 'ID do Usuário'
    }, {
        dataField: 'name',
        text: 'Nome do Usuário'
    }, {
        dataField: 'username',
        text: 'Login do Usuário'
    }];

    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => data.map(user => {
                const usersObject = {
                    id: user.id,
                    name: user.name,
                    username: user.username
                };
                return usersObject;
            }))
            .then(usersObject => setUsers(usersObject));
    }

    useEffect(() => {
        fetchUsers();
      }, []);

  return (
    <BootstrapTable keyField='id' data={ users } columns={ columns } />
  )
}
