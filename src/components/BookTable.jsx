import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default function BookTable() {

    const [comments, setComments] = useState([]);

    const columns = [{
        dataField: 'id',
        text: '#'
    }, {
        dataField: 'name',
        text: 'Título'
    }, {
        dataField: 'email',
        text: 'E-mail do Usuário'
    }, {
        dataField: 'body',
        text: 'Comentário'
    }];

    const getComments = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setComments(data));
    };

    useEffect(() => {
        getComments();
    }, []);

  return (
    <BootstrapTable keyField='id' data={ comments } columns={ columns } pagination={ paginationFactory() } />
  )
}
