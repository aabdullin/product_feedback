// import React, {createContext, useContext} from 'react'; 
import './css/App.css';
import Header from "./components/Header"
import ProductFeedbackList from './components/ProductList';
import AddUserFeedback from './components/AddUserFeedback';
import { useProductFeedback  } from './components/ProductFeedbackContext'
import TagsBoard from './components/TagsBoard';
import {
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Grid from '@mui/material/Grid';

function ViewFeedback() {
  const { items } = useProductFeedback();
  return (
    <Grid container>
      <Grid item xs={3}>
        <TagsBoard items={items}/>
      </Grid>
      <Grid item xs={9}>
      <div className=".form">
        <Header/>
        <ProductFeedbackList items={items}/>
      </div>
     </Grid>
    </Grid>
    
  );
}



function App() {
  return (
    <div className='app'>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/list" />} />
          <Route path="/list">
            <ViewFeedback/>
          </Route>
          <Route path="/add">
            <AddUserFeedback/>
          </Route>
          <Route path="/items/:id">
            Item Details
          </Route>
        </Switch>
    </div>
  );
}


export default App;
