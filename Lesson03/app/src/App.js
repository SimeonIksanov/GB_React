import './App.css';
import Form from './Form'
import Message from './Message'
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
      <div className='Messages'>
        {messageList.map((item,index)=><Message author={item.author} message={item.message} sender={item.sender}/>)}        
      </div>
      <Form setMessageList={setMessageList}/>
    </div>
  );
}

export default App;
