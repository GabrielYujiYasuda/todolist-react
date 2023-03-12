import React from "react";

export const TodoRowItem: React.FC<{
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;
  deleteTodo: Function;
}> = (props) => {
  return (
    <tr onClick={() => props.deleteTodo(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <th>{props.rowDescription}</th>
      <th>{props.rowAssigned}</th>
    </tr>
  );
};
