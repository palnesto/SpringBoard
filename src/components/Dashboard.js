import React, { Component } from "react";
import logo from "../assets/palnesto_logo.png";
import invoice from "../assets/invoice.pdf";
import { Link } from "react-router-dom";
import './Dashboard.css';
class Dashboard extends Component {
  state = {
    company: "Springboard School",
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
          <div>
            <img src={logo} alt="palnesto-logo" className="logo-container"/>
          </div>
          <div style={{display:"flex"}}>
            <button
              style={{
                color: "#ffffff",
                textDecoration: "none",
                height: "40%",
                margin:"10px",
                borderRadius: "8px",
                backgroundColor: "#FA5D04",
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
                  margin:"8px",
                  height: "50%",
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
            alignItems: "center",
            marginTop:"5%"
          }}
        >
          <div>
            <h1 style={{fontSize: "130%" }}>
              Palnesto Hosting Solutions
            </h1>
          </div>
          <div className="card-container"
            style={{
              color: "#595959",
              boxShadow: "0px 4px 16px rgba(105, 105, 105, 0.25)",
            }}
          >
            <form onSubmit={this.submitForm}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderColor: "#BFBFBF",
                  borderRadius: "5px",
                  borderStyle: "solid",
                  marginBottom: "5%",
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
                  justifyContent: "space-between",
                  borderColor: "#BFBFBF",
                  borderRadius: "5px",
                  borderStyle: "solid",
                  marginBottom: "5%",
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
                  justifyContent: "space-between",
                  borderColor: "#BFBFBF",
                  borderRadius: "5px",
                  borderStyle: "solid",
                  marginBottom: "5%",
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
                    paddingLeft: "25%",
                    paddingRight: "25%",
                    paddingTop: "2%",
                    paddingBottom: "2%",
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
