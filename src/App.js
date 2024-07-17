import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Home2 from './Pages/home2';
import Home3 from './Pages/home3';
import Layout from './Pages/Layout';
import Login from './Login';
import Endpage from './Pages/endpage';
import Success from './success';
import Signup from './signup';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/next1" element={<Home2 />} />
            <Route path="/next2" element={<Home3 />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success" element={<Success />} />
            <Route path="/endpage" element={<Endpage />} />~

          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
