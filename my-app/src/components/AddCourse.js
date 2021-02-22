import React, { Fragment, useEffect, useState} from "react";
import {Form, FormGroup, Label, Input, Container, Button} from "reactstrap";
import {toast} from "react-toastify";
import axios from "axios";
import base_url from "./../api/BootApi";

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({});

    //Form handler function
    const handleForm = (e) => {
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    };

    //Creating function to post data on server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error ! Something went wrong")
            }
        );
    };

    return (
      <Fragment>
          <h1 className = "text-center my-3" >Fill Course Details</h1>
          <Form className = "mx-5" onSubmit = {handleForm}>
              <FormGroup>
                  <Label for = "userId">Course Id</Label>
                  <Input type = "text"
                    placeholder = "Enter course id here"
                    name = "userId"
                    id = "userId"
                    onChange = {(e) => {
                        setCourse({...course, id:e.target.value});
                    }}/>
              </FormGroup>
              <FormGroup>
                  <Label for = "title">Course Title</Label>
                  <Input type = "text" 
                    placeholder = "Enter title here" 
                    name = "title" 
                    id = "title"
                    onChange = {(e) => {
                        setCourse({...course, title:e.target.value});
                    }}/>
              </FormGroup>
              <FormGroup>
                  <Label for = "description">Course Description</Label>
                  <Input type = "textarea" 
                    placeholder = "Enter description here" 
                    name = "description" 
                    id = "description"
                    style = {{height : 150}}
                    onChange = {(e) => {
                        setCourse({...course, description:e.target.value});
                    }}/>
              </FormGroup>
              <Container className = "text-center">
                  <Button type = "submit" color = "success">Add Course</Button>
                  <Button type = "reset" color = "warning ml-2">Clear</Button>
              </Container>
          </Form>
      </Fragment>  
    );
};

export default AddCourse;