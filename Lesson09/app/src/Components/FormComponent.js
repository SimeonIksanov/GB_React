import { useEffect, useRef, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import Form from "./Form";

function FormComponent({ sendMessage }) {
    const [post, setPost] = useState({author:"", message:"", sender:'human'})
    const textFieldRef = useRef(null);
    const user = useAuth();
    useEffect(
        ()=>{textFieldRef.current?.focus()},
        []
    )

    const saveMessage = (e)=>
    {
        if (post.author === "" || post.message ==="") {return}

        sendMessage({"text":post.message, "author":post.author, "sender":user.email})
        setPost(prev=>({...prev, message:""}))
        textFieldRef.current?.focus()
    }

    const changeAuthor = (e)=>
        setPost(prev => ({...prev, author:e.target.value}))

    const changeMessage = (e)=>
        setPost(prev => ({...prev, message:e.target.value}))

    return (
        <Form
            post={post}
            setPost={setPost}
            saveMessage={saveMessage}
            textFieldRef={textFieldRef}
            changeAuthor={changeAuthor}
            changeMessage={changeMessage}
        />
    );
}

export default FormComponent;