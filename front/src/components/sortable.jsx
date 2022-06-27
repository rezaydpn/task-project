import { set } from 'mongoose';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

export default function Sortable() {
  const [state, setState] = useState([
    { id: 1, name: 'shrek' },
    { id: 2, name: 'fiona' },
    { id: 3, name: 'dad' },
    { id: 4, name: 'fiadadona' },
    { id: 5, name: 'dada' },
  ]);

  const tableData = (row, index) => (
    <tr style={{ cursor: 'move' }} key={row.id}>
      <td
        style={{
          padding: '5px',
          border: '1px solid gray',
          marginBottom: '10px',
          display: 'block',
        }}
      >
        {row.name} id: {row.id}
      </td>
    </tr>
  );
  const handleClick = () => {
    console.log(state)
  };
  return (
    <>
      <table>
        <ReactSortable
          swap
          tag="tbody"
          list={state}
          setList={setState}
          animation={400}
          group="example"
          onSort={(item) => {
            console.log(item.newIndex);
          }}
          // onEnd={(evt) => {
          //   console.log(evt);
          // }}
          store={{
            // get: function (sortable) {
            //   // var order = localStorage.getItem(sortable.options.group.name);
            //   // return order ? order.split("|") : [];
            // },
            set: function (sortable) {
              var order = sortable.toArray();
              console.log(order);
              // localStorage.setItem(sortable.options.group.name, order.join("|"));
            },
          }}
        >
          {state.map(tableData)}
        </ReactSortable>
      </table>
      <button onClick={handleClick}>click</button>
    </>
  );
}
