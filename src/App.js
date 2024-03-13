
import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import Home from  './Component/Home';
import Create from './Component/Create';
import List from './Component/List';
import Update from './Component/Update';
import Gallary from './Component/Gallary';
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar bg="dark" expand="lg" variant="light">
        <Container>
        <header className="fixed top-0 left-0 w-full h-16 md:h-20 leading-1 bg-yellow-750 text-white flex justify-between items-center px-8 md:px-10% shadow-md z-10">
          <h1 className="text-3xl md:text-[2rem] ">SaffronTwist</h1></header>


        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-avbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="#Home"><Link to="/">Home</Link></Nav.Link>
             <Nav.Link href="#Create"><Link to="./Create">Create</Link></Nav.Link>
             <Nav.Link href="#List"><Link to="./List">List</Link></Nav.Link>
             <Nav.Link href="#Update"><Link to="./Update">Update</Link></Nav.Link>

             <Nav.Link href="#Gallary"><Link to="./Gallary">Gallary</Link></Nav.Link>
           </Nav>
        </Navbar.Collapse>
          </Container>
          </Navbar>


          <Routes>
            <Route path="/" exact={true} element={<Home/>}></Route>
            <Route path="/Create" element={<Create/>}></Route>
            <Route path="/List" element={<List/>}></Route>
            <Route path="/Update" element={<Update/>}></Route>
            <Route path="/Gallary" element={<Gallary/>}></Route>
          </Routes>
            </BrowserRouter>

    </div>
  );
}

export default App;
