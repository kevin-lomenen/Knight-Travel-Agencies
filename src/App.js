import "./App.css";
import { Route, Routes} from "react-router-dom";
import SearchBus from "./components/SearchBus";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Introduction />}/>
        <Route path="/searchbus" element={ <SearchBus  />}/>
      </Routes>
      </div>
  );
}

export default App;