import '../Assets/Styles/MessageList.css';

function MessageList({messages})
{
    return (
        <div className='Message'>
            {messages.map((item, index) => {
                return (<div key={index}>
                <span className='author'>{item.author}</span>
                <span className='textMessage'>{item.text}</span>
                </div>)
            })}
        </div>
        
      );
}

export default MessageList;