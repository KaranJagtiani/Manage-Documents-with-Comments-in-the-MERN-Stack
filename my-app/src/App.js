import React from "react";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Document from "./views/Document";
import DocumentsList from "./views/DocumentsList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/document" component={Document} />
        <Route exact path="/documents" component={DocumentsList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
