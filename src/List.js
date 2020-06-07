import React from 'react';

const List = props => 
(
  <ul>
    {
      //console.log(props)
      //render json data
      //props.items.map((item) => <li key={item.id}>{item.todo}</li>)
      //just normal way
      //onClick={props.onDelete}
      //className={props.active ? 'done': null} onClick={props.toggleClass}
      props.items.map((item, index) => (
        <li key={index} onClick={props.class}  >
          {item}
          <button onClick={props.onDelete} value={item} style={{marginLeft: "20px"}}>Delete</button>
        </li>)
      ) 
    }
  </ul>
);

export default List;