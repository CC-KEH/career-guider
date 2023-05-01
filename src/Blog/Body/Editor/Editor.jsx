import React from 'react';
import styles from './Editor.module.css'
  function BlogEditor(props) {
    const handleSubmit= (e) => {
      e.preventDefault();
    }
  
    return (
      <form onSubmit={e => {handleSubmit(e)}}>
        <label>Title </label>
        <br />
        <input 
          name='Title' 
          type='text'
          style={{width: "400px",height:"50px",border:"none"}}
        />
        <br/>
        <br/> 
        <br/>   
        <label>Body</label>
        <br />
        <input 
          name='Write your blog here' 
          type='text' 
          style={{width: "800px",height: "600px"}}
        />
        <br />
        <label>Date</label>
        <br />
        <input
          name='dt' 
          type='date'
        />
        <br/>
        <input 
          className='submitButton'
          type='submit' 
          value='Log Chore' 
          style={{width: "370px"}}
        />
      </form>
    )
  }

  export default BlogEditor;