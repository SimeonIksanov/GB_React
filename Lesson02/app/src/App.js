import './App.css';
import Form from './Form'
import { useState, useEffect } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);
  
  useEffect(
    ()=>{
      if(messageList.length>0)
      {
        let lastMessage = messageList[messageList.length-1];
        if (lastMessage.sender === 'human')
        {
          setTimeout(() => {
            setMessageList(prev=>[...prev,{author:"robot", message:`hey, ${lastMessage.author}`, sender:'robot'}]);
          }, 1500);
        }
      }
    },
    [messageList]
  );

  return (
    <div className="App">
      {messageList.map((item,index)=><div key={index}>{item.author}:{item.message}</div>)}
      {
        messageList.length > 0 && <hr/>
      }
      <Form setMessageList={setMessageList}/>
    </div>
  );
}

export default App;
