import "./App.css";
import { Route, Routes} from "react-router-dom";

import Introduction from "./components/Introduction";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Introduction />}/>
      </Routes>
      </div>
  );
}

export default App;