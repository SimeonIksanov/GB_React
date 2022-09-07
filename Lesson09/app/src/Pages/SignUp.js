import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { signUpThunk } from '../Store/userAuthSlice';

export default function SignUp()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const dispatch = useDispatch();

    const doSignUp = () => {
        dispatch(signUpThunk({email, password}));
        console.log('doSignUp');
    }

    const handleChangeEmail = (event) => { setEmail(event.target.value) }
    const handleChangePassword = (event) => { setPassword(event.target.value) }
    const handleChangePassword2 = (event) => { setPassword2(event.target.value) }
    const handleButtonClick = ()=> {email !== '' && password !== '' && password === password2 && doSignUp() }
    
    return (
        <div style={{color:'#aaa', display: 'flex', flexDirection: 'column', width: '100', alignItems: 'center', height:'100'}}>
            <h1>Register</h1>
            <label htmlFor='email'> Email </label>
            <input
                id="email"
                type = "text"
                value = {email}
                onChange = {handleChangeEmail}
            />

            <label htmlFor='pass'> Password </label>
            <input
                id="pass"
                type = "password"
                value = {password}
                onChange = {handleChangePassword}
            />

            <label htmlFor='pass2'> Repeate Password </label>
            <input
                id="pass2"
                type = "password"
                value = {password2}
                onChange = {handleChangePassword2}
                style={(password !== password2) ? {color:'#ff8833'}:{color:'#000'}}
            />
            <button onClick={handleButtonClick} style={{width:'147px', marginTop:'10px'}}>Go</button>
        </div>
    )
}