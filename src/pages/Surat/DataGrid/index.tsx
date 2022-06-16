import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import './styles.css';

const customCellStyle = (cellProps: any) => {
  const { value, rowActive, rowIndex } = cellProps;
  return {
    height: 200,
    backgroundColor: '#f00',
  };
  // return {
  //   color: rowActive
  //     ? '#e9ecf0'
  //     : value % 2 ? '#ff595e' : 'inherit',
  //   background: rowActive
  //     ? (rowIndex % 2 ? '#ef9a9a' : '#7986cb')
  //     : '#313943'
  // }
};

const columns = [
  {
    name: 'name',
    header: 'Name',
    minWidth: 50,
    defaultFlex: 2,
    cellProps: { style: { height: 20 } },
    style: { heigth: 20 },
  },
  {
    name: 'age',
    header: 'Age',
    maxWidth: 1000,
    defaultFlex: 1,
    style: { heigth: 20 },
    cellProps: { style: { height: 20 } },
  },
];

const gridStyle = { minHeight: 550 };
const dataSource = [
  { id: 1, name: 'John McQueen', age: 35 },
  { id: 2, name: 'Mary Stones', age: 25 },
  { id: 3, name: 'Robert Fil', age: 27 },
  { id: 4, name: 'Roger Robson', age: 81 },
  { id: 5, name: 'Billary Konwik', age: 18 },
  { id: 6, name: 'Bob Martin', age: 18 },
  { id: 7, name: 'Matthew Richardson', age: 54 },
  { id: 8, name: 'Ritchie Peterson', age: 54 },
  { id: 9, name: 'Bryan Martin', age: 40 },
  { id: 10, name: 'Mark Martin', age: 44 },
  { id: 11, name: 'Michelle Sebastian', age: 24 },
  { id: 12, name: 'Michelle Sullivan', age: 61 },
  { id: 13, name: 'Jordan Bike', age: 16 },
  { id: 14, name: 'Nelson Ford', age: 34 },
  { id: 15, name: 'Tim Cheap', age: 3 },
  { id: 16, name: 'Robert Carlson', age: 31 },
  { id: 17, name: 'Johny Perterson', age: 40 },
];

const DataGrid = (): JSX.Element => {
  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        dataSource={dataSource}
        style={gridStyle}
        rowClassName="datagrid-compact-row"
      />
    </div>
  );
};

export default DataGrid;
