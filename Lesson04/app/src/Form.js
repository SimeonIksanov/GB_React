import './Form.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState , useRef, useEffect} from "react";

function Form({chats, chatId, setChats})
{
    const [post, setPost] = useState({author:"", message:"", sender:'human'})
    const textFieldRef = useRef(null);

    useEffect(
        ()=>{textFieldRef.current?.focus()},
        []
    )

    const saveMessage = (e)=>
    {
        if (post.author === "" || post.message ==="") {return}

        const newMessages = [...chats[chatId].messages, {"text":post.message, "author":post.author, "sender":"human"} ]
        const newChat = {...chats[chatId], messages: newMessages}
        const newChats = {...chats, [chatId]:newChat}
        setChats(newChats)
        setPost(prev=>({...prev, message:""}))
        textFieldRef.current?.focus()
    }

    const changeAuthor = (e)=>
        setPost(prev => ({...prev, author:e.target.value}))

    const changeMessage = (e)=>
        setPost(prev => ({...prev, message:e.target.value}))

    return (
        <div className="Form">
            <TextField
                id="outlined-name"
                label="Имя"
                value={post.author}
                onChange={changeAuthor}
                size="small"
                color="success"
            />
            <TextField
                id="outlined-name"
                label="Сообщение"
                value={post.message}
                onChange={changeMessage}
                size="small"
                inputRef={textFieldRef}
            />
            <Button onClick={saveMessage} variant="outlined" size="small">Отправить</Button>
        </div>
      );
}

export default Form;