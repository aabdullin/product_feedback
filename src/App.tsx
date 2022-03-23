import React, {createContext, useContext} from 'react';
import './css/App.css';
import Header from "./components/Header"
import ProductFeedbackList from './components/ProductList';
import { useProductFeedback  } from './components/ProductFeedbackContext'
import TagsBoard from './components/TagsBoard';


function App() {
  const { items } = useProductFeedback();

  return (
    <>
      <div className='left-column'>
        <TagsBoard items={items}/>
      </div>
      <div className='right-column'>
        <div className='header'>
          <Header/>
        </div>
          <ProductFeedbackList items={items}/>
      </div>
    </>
  );
}


export default App;
