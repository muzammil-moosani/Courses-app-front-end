 import React from "react";
 import {Jumbotron, Container, Button} from "reactstrap";

 const Home = () => {
     return (
         <div>
             <Jumbotron className = "text-center">
                 <h1>Courses Application</h1>
                 <p>
                     This Application displays all courses, add new courses,
                      updates existing courses, deletes courses.
                 </p>
                 <Container>
                 <Button outline color = "primary">
                     Start here -&gt;
                 </Button>
                 </Container>
             </Jumbotron>
         </div>
     );
 }

 export default Home;