import React from "react";
import {Card, CardBody} from "reactstrap";

function Header({name, title}) {
    return (
        <div>
            <Card className = "my-2 bg-warning">
                <CardBody>
                <h1 className = "text-center my-2">Welcome to Courses Application</h1>
                </CardBody>
            </Card>
           
            {/* <h1>This is my Header heading</h1>
            <h2>Title is {title}</h2>
            <p>This is my Header paragraph</p>
            <p>Created by {name}</p> */}
        </div>

    );
}

export default Header;