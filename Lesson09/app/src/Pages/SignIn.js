import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { signInThunk } from '../Store/userAuthSlice';

export default function SignIn()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const doSignIn = () => {
        dispatch(signInThunk({email, password}));
        console.log('doSignIn');
    }

    const handleChangeEmail = (event) => { setEmail(event.target.value) }
    const handleChangePassword = (event) => { setPassword(event.target.value) }
    const handleButtonClick = ()=> {email !== '' && password !== '' && doSignIn() }
    
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

            <button onClick={handleButtonClick} style={{width:'147px', marginTop:'10px'}}>Go</button>
        </div>
    )
}