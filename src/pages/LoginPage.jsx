import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { callApi } from '../common/api.js';

function LoginPage() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");



    async function login(email,password){
        try {
            const response = await callApi('POST', `${BASE_URL}${API_URLS.LOGIN}`, {
                email,
                password,
              });
            return response; //トークン受け取る
        } catch(error){
            console.error(error)
        }
    }

    return (
        <>
            <div className="flex flex-col">
                <label　htmlfor="email">Email</label>
                <input id="email" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-row">
                <label htmlfor="password">Password</label>
                <input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>
                <button type="submit"　onclick={() => login(email,password)}> Login </button>
            </div>
        </>
    );
};

export default LoginPage;

