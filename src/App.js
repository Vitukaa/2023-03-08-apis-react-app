import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ActivityPage from "./pages/ActivityPage";
import BitcoinPage from "./pages/BitcoinPage";
import ChuckNorrisPage from "./pages/ChuckNorrisPage";
import DogsPage from "./pages/DogsPage";

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path='/' element={
            <ul>
              <li>
                <Link to='/chuck-norris'>Chuck Norris</Link>
              </li>
              <li>
                <Link to='/bitcoin-rate'>Bitcoin</Link>
              </li>
              <li>
                <Link to='/dogs'>Dogs</Link>
              </li>
              <li>
                <Link to='/activity'>Activities</Link>
              </li>
            </ul>
          }>
          </Route>
          <Route  path='/chuck-norris' element={<ChuckNorrisPage />}></Route>
          <Route  path='/bitcoin-rate' element={<BitcoinPage />}></Route>
          <Route  path='/dogs/:breed' element={<DogsPage />}></Route>
          <Route  path='/dogs' element={<DogsPage />}></Route>
          <Route  path='/activity/:category' element={<ActivityPage/>}></Route>
          <Route  path='/activity' element={<ActivityPage/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
