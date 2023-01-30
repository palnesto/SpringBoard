import React, { Component } from "react";
import logo from "../assets/palnesto_logo.png";
import { Navigate } from "react-router-dom";
import './Login.css';
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
          <div>
            <img src={logo} alt="palnesto-logo" className="logo-container" />
          </div>
          <div>
          <button
              style={{
                color: "#ffffff",
                textDecoration: "none",
                height: "60%",
                margin:"10px",
                borderRadius: "8px",
                backgroundColor: "#FA5D04",
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
            marginTop:"3%"
          }}
        ><h1 style={{ fontSize: "150%",textAlign:"center" }}>Palnesto Hosting Solutions</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
            className="card-containers"
              style={{
                display:"flex",
                color: "#595959",
                boxShadow: "0px 4px 16px rgba(105, 105, 105, 0.25)",
                
              }}
            >
              <form onSubmit={this.submitForm}>
                <h1 className="login-title"
                >
                  Login
                </h1>
                <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"flex-start"}}>
                  <label
                    htmlFor="email"
                    className="sub-title"
                  >
                    Email
                  </label>
                  <div>
                    <input
                    size="25"
                    value={email}
                    onChange={this.onChangeEmail}
                    id="email"
                    type="email"
                    placeholder="abc@gmail.com"
                    className="input-field"
                    style={{
                      marginBottom: "10%",
                      borderColor: "#929292",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      marginTop:"2%",
                      width:"100%",
                      color:"#BABABA",
                    }}
                  />
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"flex-start"}}>
                  <label
                    htmlFor="password"
                    className="sub-title"
                  >
                    Password
                  </label>
                  <div>
                    <input
                    size="25"
                    value={password}
                    onChange={this.onChangePassword}
                    id="password"
                    type="password"
                    className="input-field"
                    style={{
                      marginBottom: "10%",
                      borderColor: "#929292",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      marginTop:"2%",
                      width:"100%"
                    }}
                  />
                  </div>
                  
                </div>
                <div >
                  <button className="login-button"
                    style={{
                      backgroundColor: "#FEC400",
                      color: "#ffffff",
                      borderStyle: "none",
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
