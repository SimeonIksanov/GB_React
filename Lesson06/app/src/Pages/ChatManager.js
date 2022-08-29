function ChatManager({chats, setChats})
{
    const removeChat = (event)=>
    {
        let chatid = event.target.id
        let newChats = {...chats}
        delete newChats[chatid]
        setChats(newChats)
    }

    const addChat = (event) =>
    {
        let nextId = Object.keys(chats).length>0 ? (Math.max.apply(null, Object.keys(chats))+1) : 1
        setChats({...chats, [nextId]:{"name": `Chat${nextId}`, "messages":[]}})
    }

    return (
        <div>
            {Object.keys(chats).map((id, index)=>
                (
                    <button id={id} key={id} onClick={removeChat}>
                        Remove chat {chats[id].name}
                    </button>
                )
            )}
            <div>
                <button onClick={addChat}>add one</button>
            </div>
        </div>
    )
}

export default ChatManager;