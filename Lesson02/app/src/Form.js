import {useState} from "react";

function Form({setMessageList})
{
    const [post, setPost] = useState({author:"", message:"", sender:'human'})
    
    const saveMessage = (e)=>
    {
        if (post.author === "" || post.message ==="") {return}
        setMessageList(prev => [...prev, post])
        setPost({author:"", message:"", sender:''})
    }

    const changeAuthor = (e)=>
        setPost(prev => ({...prev, author:e.target.value}))

    const changeMessage = (e)=>
        setPost(prev => ({...prev, message:e.target.value}))

    return (
        <div className="Form">
            <label >Автор</label>
            <input onChange={changeAuthor} value={post.author}type="text"></input>
            <label >Сообщение</label>
            <input onChange={changeMessage} value={post.message}type="text"></input>
            <button onClick={saveMessage}>send</button>
        </div>
      );
}

export default Form;