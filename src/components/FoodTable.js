import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'name',
    text: 'Food Name'
  }];

const FoodTable = ({ foods }) => {
      return (
        <BootstrapTable keyField='name' data={ foods } columns={ columns }/>
      );
  }

  export default FoodTable;