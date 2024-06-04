import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Success from "./Components/Success";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </>
  );
}

export default App;
