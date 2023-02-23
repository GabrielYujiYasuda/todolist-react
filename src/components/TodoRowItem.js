function TodoRowItem(props) {
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <th>{props.rowDescription}</th>
      <th>{props.rowAssigned}</th>
    </tr>
  );
}

export default TodoRowItem;
