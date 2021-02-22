import React from "react";
import {ListGroup} from "reactstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";

const Menu = () => {
    return (
        <ListGroup>
            <Link className = "list-group-item list-group-item-action" to = "/">
                Home
            </Link>
            <Link className = "list-group-item list-group-item-action" to = "/add-course">
                Add Course
            </Link>
            <Link className = "list-group-item list-group-item-action" to = "/view-courses">
                View Courses
            </Link>
            <Link className = "list-group-item list-group-item-action" to = "#">
                About
            </Link>
            <Link className = "list-group-item list-group-item-action" to = "#">
                Contact Us
            </Link>
        </ListGroup>
    );
}

export default Menu;