import { useState } from "react";
import Button from "./components/Button";
import DismissingAlert from "./components/DismissingAlert";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
  };
  return (
    <div>
      <Button onClick={handleClick}>Hello World</Button>
      {showAlert && (
        <DismissingAlert onClose={() => setShowAlert(false)}></DismissingAlert>
      )}
    </div>
  );
}
export default App;
