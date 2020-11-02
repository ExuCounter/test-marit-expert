import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import AuthAPIContext from "../../context/AuthAPIContext";
import "./Login.css";
import io from "socket.io-client";

const Login = () => {
  const { login } = useContext(AuthAPIContext);
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const loginHandler = () => {
    const data = login({ ...form }).then((data) => {
      const session = io("http://testapi.marit.expert:3003", {
        transports: ["websocket"],
        cookie: true,
      });
      console.log("data -> session", session);
    });
  };

  const formHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <h1>Authorization</h1>
      <Form>
        <Form.Group>
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="login"
            name="login"
            onChange={formHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Button</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            onChange={formHandler}
          ></Form.Control>
        </Form.Group>
        <Button onClick={loginHandler}>Submit</Button>
      </Form>
    </React.Fragment>
  );
};

export default Login;
