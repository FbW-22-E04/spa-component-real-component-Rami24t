import React from "react";
import ReactDOM from "react-dom/client";
import BootstrapCard from "./components/bootstrap-card/BootstrapCard";

//create your function here

//remember to use ReactDOM.render to include the component into the website

const root = ReactDOM.createRoot(document.getElementById('myDiv'));
root.render(<BootstrapCard />);


// ReactDOM.render(<BootstrapCard />, document.getElementById('myDiv'));