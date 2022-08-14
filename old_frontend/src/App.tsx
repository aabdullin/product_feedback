// import React, {createContext, useContext} from 'react';
import "./css/App.css";
import Header from "./components/Header";
import ProductFeedbackList from "./components/ProductList";
import AddProductFeedback from "./components/AddProductFeedback";
import ProductFeedbackViewPage from "./components/ViewPageProductFeedback";
import DeleteProductFeedback from "./components/DeleteProductFeedback";
import { useProductFeedback } from "./components/ProductFeedbackContext";
import TagsBoard from "./components/TagsBoard";
import FrontendMentorBoard from "./components/FrontendMentorBoard";
import { Redirect, Switch, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";

function ListOfFeedbacks() {
  const { items } = useProductFeedback();
  return (
    <Grid container>
      <Grid item xs={3}>
        <FrontendMentorBoard />
        <TagsBoard items={items} />
      </Grid>
      <Grid item xs={9}>
        <div className="form">
          <Header />
          <ProductFeedbackList items={items} />
        </div>
      </Grid>
    </Grid>
  );
}

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/list" />} />
        <Route path="/list">
          <ListOfFeedbacks />
        </Route>
        <Route path="/add">
          <AddProductFeedback />
        </Route>
        <Route path="/view/:id">
          <ProductFeedbackViewPage />
        </Route>
        <Route path="/delete/:id">
          <DeleteProductFeedback />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
