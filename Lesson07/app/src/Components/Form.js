import '../Assets/Styles/Form.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form({ post, saveMessage, textFieldRef, changeAuthor , changeMessage})
{
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