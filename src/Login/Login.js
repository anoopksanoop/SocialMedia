import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Login.css";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6} style={{ marginTop: "30px" }}>
          <Form
            style={{
              color: "white",
              background: "#0b0b0be8",
              padding: "10%",
              borderRadius: "20px",
              backgroundColor: "#212529",
            }}
            method="post"
          >
            <h1 className="login">LOGIN</h1>
            <h8 className="login" style={{ color: "gray" }}>
              please enter your login and password
            </h8>
            <br />
            <br />
            <Form.Group className="control" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" id="email" />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" id="password" />
              {/* <Form.Control.Feedback type="invalid">
                
              </Form.Control.Feedback> */}
            </Form.Group>
            <br />
            <Link
              className="login"
              style={{ color: "#afacac" }}
              to={"/ForgetPassword"}
            >
              Forget password
            </Link>
            <br />
            <div className="login">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
            <br />
            <br />
            <span style={{ color: "#afacac" }} className="login">
              Don't have an account?
              <Link to="/SiginUp">Sigin Up</Link>
            </span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
