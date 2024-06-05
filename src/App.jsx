import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Success from "./Components/Success";
import ErrorPage from "./Components/ErrorPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default App;
