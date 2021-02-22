
import './App.css';
import {Button, Container, Row, Col} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";
import Home from "./components/Home";
import Header from "./components/Header";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Menu from "./components/Menu";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {

  // const btnHandle = () => {
  //   toast("This is my first message");
  //   toast.success("Done", {position: "top-center"});
  // };
  return (
    <div>
      <Router>
      <Container>
        <ToastContainer />
        <Header />
        <Row>
          <Col md = {4}>
            <Menu />
          </Col>
          <Col md = {8}>
            <Route path = "/" component  = {Home} exact />
            <Route path = "/add-course" component = {AddCourse} exact />
            <Route path = "/view-courses" component = {AllCourses} exact />
          </Col>
        </Row>
      </Container>
      </Router>
      {/* <Header />
      <Home />
      <AllCourses />
      <AddCourse /> */}
      {/* <ToastContainer />
      <h1>Simple Application</h1>
      <Button color = "primary" outline onClick = {btnHandle}>Click Me</Button> */}
       {/* <div>
       <Header name = "ABC" title = "First Card"/>
       <hr />
       <h1>This is my App heading</h1>
       <p>This is my App paragraph</p>
       <hr />
       <Header name = "XYZ" title = "Second Card"/>
       </div> */}
  
    </div>
  );
}

export default App;
