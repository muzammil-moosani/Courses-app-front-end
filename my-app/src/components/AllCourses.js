import {React, useState, useEffect} from "react";
import Course from "./Course";
import base_url from "./../api/BootApi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {

    useEffect(() => {
        document.title = "View Courses";
        GetAllCoursesFromServer();
    },[]);

    //Function to call the server
    const GetAllCoursesFromServer  = () =>{
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
                console.log(response.data);
                setCourses(response.data);
                toast.success("Courses has been loaded", {position: "bottom-center"});
            },
            (error) => {
                //error
                console.log(error);
                toast.error("Something went wrong", {position: "bottom-center"});
            }
        );
    }

    const [courses, setCourses] = useState([
        // {title: "Java Course", description: "This is the java course for beginners"},
        // {title: "Reactjs Course", description: "This is the react course for beginners"},
        // {title: "Spring Boot Course", description: "This is the spring boot course for beginners"},
        // {title: "Angular Course", description: "This is the Angular course for beginners"}
    ]);

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id !=id));
    }

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses available:</p>

            {
                courses.length > 0 ? courses.map((item) => <Course key = {item.id} course = {item} update = {updateCourses}/>): "No Courses"
            }

        </div>
    );

}

export default AllCourses;