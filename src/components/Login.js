import React, { Component } from "react";
import logo from "../assets/palnesto_logo.png";
import { Navigate } from "react-router-dom";
class Login extends Component {
  state = {
    email: "",
    password: "",
    error: false,
    errorMsg: "Invalid email or password",
    isCredentialsValid: false,
  };
  submitForm = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email === "springboardschool1@gmail.com" && password === "Palspring@456") {
      this.setState({
        isCredentialsValid: true,
      });
    } else {
      this.setState((prevState) => ({
        error: !prevState.error,
      }));
      this.setState({ errorMsg: "Invalid email or password" });
    }
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  render() {
    const { email, password, errorMsg, error, isCredentialsValid } = this.state;
    return (
      <>
        {isCredentialsValid && <Navigate to="/dashboard" replace={true} />}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ height: "15%", width: "15%" }}>
            <img src={logo} alt="palnesto-logo" />
          </div>
          <div>
            <button
              style={{
                color: "#ffffff",
                textDecoration: "none",
                height: "50%",
                marginRight: "50px",
                marginTop: "20px",
                backgroundColor: "#FA5D04",
                borderRadius: "10px",
                borderStyle: "none",
              }}
            >
              Contact Manager - 8886911466
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            marginLeft: "10%",
          }}
        >
          <div>
            <h1 style={{ marginLeft: "10%", fontSize: "30px" }}>
              Palnesto Hosting Solutions
            </h1>
          </div>
          <div
            style={{
              color: "#595959",
              boxShadow: "0px 4px 16px rgba(105, 105, 105, 0.25)",
              height: "50%",
              width: "75%",
              paddingBottom: "2%",
            }}
          >
            <form onSubmit={this.submitForm}>
              <h6 style={{ marginLeft: "10%", fontSize: "30px" }}>Login</h6>
              <div>
                <label
                  htmlFor="email"
                  style={{ fontSize: "30px", marginLeft: "10%" }}
                >
                  Email
                </label>
                <br />
                <input
                  value={email}
                  onChange={this.onChangeEmail}
                  id="email"
                  type="email"
                  placeholder="abc@gmail.com"
                  style={{
                    marginLeft: "10%",
                    marginBottom: "5%",
                    borderColor: "#929292",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    width: "60%",
                    padding: "1.5%",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  style={{ marginLeft: "10%", fontSize: "30px" }}
                >
                  Password
                </label>
                <br />
                <input
                  value={password}
                  onChange={this.onChangePassword}
                  id="password"
                  type="password"
                  style={{
                    marginLeft: "10%",
                    marginBottom: "5%",
                    borderColor: "#929292",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "12px",
                    width: "60%",
                    padding: "1.5%",
                  }}
                />
              </div>
              <div>
                <button
                  style={{
                    marginLeft: "10%",
                    paddingLeft: "14%",
                    paddingRight: "14%",
                    borderRadius: "12px",
                    backgroundColor: "#FEC400",
                    color: "#ffffff",
                    borderStyle: "none",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                    fontSize: "1em",
                  }}
                >
                  Login
                </button>
                {error && (
                  <p
                    style={{
                      marginLeft: "10%",
                      color: "red",
                      fontSize: "15px",
                    }}
                  >
                    *{errorMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
