import {BrowserRouter, Routes, Route} from "react-router-dom";
import StateList from "./components/StateList";
import AddState from "./components/AddState";
import EditState from "./components/EditState";

function App() {
  return (
    <BrowserRouter>
      <div className={"container"}>
        <Routes>
          <Route path={"/"} element={<StateList/>}/>
          <Route path={"/add"} element={<AddState/>}/>
          <Route path={"/edit/:id"} element={<EditState/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
