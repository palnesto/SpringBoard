import React, { Component } from "react";
import logo from "../assets/palnesto_logo.png";
import invoice from '../assets/invoice.pdf';
class Dashboard extends Component {
  state = {
    company: "SpringBoard",
    paymentDate: "25/1/2022",
    expiryDate: "25/1/2023",
  };

  render() {
    const { company, paymentDate, expiryDate } = this.state;
    return (
      <>
        <div>
          <img
            src={logo}
            alt="palnesto-logo"
            style={{height:"5%",width:"5%"}}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <div
            style={{
              color: "#595959",
              boxShadow: "0px 4px 16px rgba(105, 105, 105, 0.25)",
              height:"60vh",
              width:"75vw"

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
                  margin:"1%",
                  paddingLeft:"2%",
                  paddingRight:"2%"
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
                  margin:"1%",
                  paddingLeft:"2%",
                  paddingRight:"2%"
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
                  margin:"1%",
                  paddingLeft:"2%",
                  paddingRight:"2%"
                }}
              >
                <p style={{ fontWeight: 700 }}>Expiry Date</p>
                <p>{expiryDate}</p>
              </div>
              <div style={{textAlign:"center", marginTop:"10%"}}>
                  <a href={invoice} download="invoice" target="_blank" rel="noreferrer"
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#FEC400",
                      color: "#ffffff",
                      borderStyle: "none",
                      paddingLeft:"5%",
                      paddingRight:"5%",
                      paddingTop:"1%",
                      paddingBottom:"1%",
                      fontSize:"1em",
                      textDecoration:"none"
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
