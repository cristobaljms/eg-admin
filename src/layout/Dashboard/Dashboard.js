import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./Dashboard.scss";
import { Main } from "../../components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <Router>
        <Navbar />
        <Sidebar />
        <Main />
      </Router>
    </div>
  );
}

export default Dashboard;
