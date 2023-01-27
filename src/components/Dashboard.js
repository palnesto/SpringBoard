import React, { Component } from "react";
import logo from "../assets/palnesto_logo.png";
import invoice from "../assets/invoice.pdf";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    company: "SpringBoard",
    paymentDate: "25/1/2023",
    expiryDate: "25/1/2024",
  };
  render() {
    const { company, paymentDate, expiryDate } = this.state;
    return (
      <>
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
            <Link to="/">
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
                Logout
              </button>
            </Link>
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
            <h1 style={{ marginLeft: "1%", fontSize: "30px" }}>
              Palnesto Hosting Solutions
            </h1>
          </div>
          <div
            style={{
              color: "#595959",
              boxShadow: "0px 4px 16px rgba(105, 105, 105, 0.25)",
              height: "60vh",
              width: "75vw",
            }}
          >
            <form onSubmit={this.submitForm}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderColor: "#BFBFBF",
                  borderRadius: "5px",
                  borderStyle: "solid",
                  margin: "1%",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                }}
              >
                <p style={{ fontWeight: 700 }}>Name of the company</p>
                <p>{company}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderColor: "#BFBFBF",
                  borderRadius: "5px",
                  borderStyle: "solid",
                  margin: "1%",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                }}
              >
                <p style={{ fontWeight: 700 }}>Payment Date</p>
                <p>{paymentDate}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderColor: "#BFBFBF",
                  borderRadius: "5px",
                  borderStyle: "solid",
                  margin: "1%",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                }}
              >
                <p style={{ fontWeight: 700 }}>Expiry Date</p>
                <p>{expiryDate}</p>
              </div>
              <div style={{ textAlign: "center", marginTop: "10%" }}>
                <a
                  href={invoice}
                  download="invoice"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "#FEC400",
                    color: "#ffffff",
                    borderStyle: "none",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                    fontSize: "1em",
                    textDecoration: "none",
                  }}
                >
                  Download Invoice
                </a>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
