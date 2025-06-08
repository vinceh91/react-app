import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London"];
  let heading = "Cities";
  return (
    <div>
      <ListGroup items={items} heading={heading} />
    </div>
  );
}
export default App;
