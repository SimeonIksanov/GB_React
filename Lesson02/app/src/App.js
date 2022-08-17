import './App.css';
import Form from './Form'
import { useState } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);
  
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
