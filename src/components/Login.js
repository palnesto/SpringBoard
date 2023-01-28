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
    if (
      email === "springboardschool1@gmail.com" &&
      password === "Palspring@456"
    ) {
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
      <div>
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
                height: "40%",
                marginTop: "5%",
                marginRight: "5%",
                backgroundColor: "#FA5D04",
                borderRadius: "8px",
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
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "130%" }}>Palnesto Hosting Solutions</h1>
            <div
              style={{
                display:"flex",
                justifyContent:"center",
                color: "#595959",
                boxShadow: "0px 4px 16px rgba(105, 105, 105, 0.25)",
                paddingLeft: "4%",
                paddingTop:"4%",
                paddingRight:"6%",
                paddingBottom:"4%",
              }}
            >
              <form onSubmit={this.submitForm}>
                <h1
                  style={{
                    fontSize: "130%",
                  }}
                >
                  Login
                </h1>
                <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"flex-start"}}>
                  <label
                    htmlFor="email"
                    style={{ fontSize: "100%"}}
                  >
                    Email
                  </label>
                  <div>
                    <input
                    value={email}
                    onChange={this.onChangeEmail}
                    id="email"
                    type="email"
                    placeholder="abc@gmail.com"
                    style={{
                      marginBottom: "10%",
                      borderColor: "#929292",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderRadius: "8px",
                      padding: "1.5%",
                      paddingLeft:"5px",
                      width:"100%"
                    }}
                  />
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"flex-start"}}>
                  <label
                    htmlFor="password"
                    style={{fontSize: "100%" }}
                  >
                    Password
                  </label>
                  <div>
                    <input
                    value={password}
                    onChange={this.onChangePassword}
                    id="password"
                    type="password"
                    style={{
                      marginBottom: "10%",
                      borderColor: "#929292",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderRadius: "8px",
                      padding: "1.5%",
                      paddingLeft:"5px",
                      width:"100%"
                    }}
                  />
                  </div>
                  
                </div>
                <div style={{ marginBottom: "5%", textAlign: "center" }}>
                  <button
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#FEC400",
                      color: "#ffffff",
                      borderStyle: "none",
                      paddingLeft: "40%",
                      paddingRight: "40%",
                      paddingTop: "5%",
                      paddingBottom: "5%",
                      width:"100%"
                    }}
                  >
                    Login
                  </button>
                  {error && (
                    <p
                      style={{
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
        </div>
      </div>
    );
  }
}

export default Login;
