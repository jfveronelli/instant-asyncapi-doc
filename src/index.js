import React from "react";
import ReactDOM from "react-dom";
import AsyncApiComponent from "@kyma-project/asyncapi-react";
import "@kyma-project/asyncapi-react/lib/styles/fiori.css";
import "./index.css"

const container = document.getElementById("api-container");
const schema = {url: container.getAttribute("data-url")};
const App = () => <AsyncApiComponent schema={schema}/>;

ReactDOM.render(<App />, container);
