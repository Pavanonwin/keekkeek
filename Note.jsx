import React, {useState} from 'react';

const Note = (props) => {

    const [show,setShow]= useState(false);
    const [note,setNote]= useState({ title: ' ' , content: ' '}); 

    const onEvent = (e) => {
        const value = e.target.value;
        const name= e.target.name;

        setNote( (preVal) => {
            return {...preVal, [name]:value
            };

        }
        );   
}


    return ( 
   <>
    <div className='note'>
        <form>
            { show? <input type='text' placeholder='Title' autoComplete='off' value={note.title} name='title'  onChange={onEvent} /> : null}
            <br/>
            
            <textarea columns='' rows='' placeholder='Write a Note...' value={note.content} name='content' onChange={onEvent} onClick={ () => { setShow(true);} } />

            
        </form>

        {show?  <button className='button1' onClick={ () => {props.Clicked (note)}}> ➕ </button>: null }
    </div>




   </>

    );

}

export default Note;