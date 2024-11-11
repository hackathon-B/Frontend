import { useState } from 'react';
import { callApi } from '../api.js';

function LoginPage() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");



    async function login(email,password){
        try {
            const response = await callApi(post,login,[email,password])
            //トークンを受け取ってstateに保存
        } catch(error){
            console.error(error)
        }
    }

    return (
        <>
            <div className="flex flex-col">
                <label　for="email">Email</label>
                <input id="email" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-row">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>
                <button type="submit"　onclick={login(email,password)}> Login </button>
            </div>
        </>
    );
};

export default LoginPage;

