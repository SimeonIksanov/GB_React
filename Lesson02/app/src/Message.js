import './Message.css';
function Message({author, message, sender})
{
    return (
        <div className='Message'>
            <span className='author'>{author}</span>
            <span className='textMessage'>{message}</span>
        </div>
      );
}

export default Message;