function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items in the list</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
