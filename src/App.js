import "./App.css";

import { Route, Routes} from "react-router-dom";
import SearchBus from "./components/SearchBus";
import Introduction from "./components/Introduction";
import BookedTickets from "./components/BookedTickets";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/searchbus" element={ <SearchBus/>}/>
          <Route path="/" element={ <Introduction/>}/>
          <Route path="/bookedtickets" element={ <BookedTickets/>}/>
        </Routes>
    </div>
  );
}

export default App;