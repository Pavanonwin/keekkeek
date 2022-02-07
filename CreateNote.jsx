import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CreateNote = (props) => {
    return ( 
        <>
          
            <div className='note'>
                <div className='eachArrayDiv'>

                <h3>{props.title}</h3>
                <p>{props.content} </p>
                <button onClick={()=> {
                    props.delete(props.id)
                }} className='deleteButton'>➖</button>

                </div>

            </div>
            
        



        </>

    );

}

export default CreateNote;