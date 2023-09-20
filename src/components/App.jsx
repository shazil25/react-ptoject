import Navbar from '../Navbar';
import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Homepage';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Notfound from './Notfound';

function App() {



  return (
    <Router>
  <div className="App">
    <Navbar />
    <div className="content">
      <Routes>
        <Route exact path="/" element={<Home/>} >
    </Route>
    <Route path="/create" element={<Create />} >
    </Route>
    <Route path="/blogs/:id" element={<BlogDetails />} >
    </Route>
    <Route path="*" element={  <Notfound />}>
    

    </Route>
    </Routes>
    </div>
    </div>
    </Router>)
 }

export default App;

