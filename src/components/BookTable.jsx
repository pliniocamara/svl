import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

export default function BookTable() {
    const products = [
        {
            id: 1,
            name: 'Produto 1',
            price: 10,
        }
    ]

    const columns = [{
        dataField: 'id',
        text: 'Product ID'
    }, {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];

  return (
    <BootstrapTable keyField='id' data={ products } columns={ columns } />
  )
}
