import React, {useState} from 'react';
import Note from './Note';
import CreateNote from './CreateNote';
import Header from './Header';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

   const [item,setItem]= useState([]);

   const sendNoteEvent = (note) => {
     setItem((preVal) => {
       return [...preVal,note];
     });

   }


   const onDelete = (id) => {
     setItem( (preVal) => {
       return preVal.filter( (currVal,index) => {
         return index!==id
       })
     })

   }

  return (

    <>
   <div className='background'>
    <Header/>
    <Note Clicked={sendNoteEvent}/>
    <div className='row'>
    {
      item.map((val,index) => {
        return  <CreateNote key={index} id={index} title={val.title} content={val.content} delete={onDelete}/>
      })

    }
    </div>
    
    <Footer/>

    </div>
    
    </>
  );
}

export default App;
