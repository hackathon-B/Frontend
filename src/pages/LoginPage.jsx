import React from 'react';
import callApi from '../api.js';

function LoginPage() {
    return (
        <>
            <h1 className='text-blue-500'>hogehoge</h1>
            <div className="flex flex-col">
                <label　for="email">Email</label>
                <input id="email" type="email" placeholder="Email" />
            </div>
            <div className="flex flex-row">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Password" />
            </div>
            <div>
                <button type="submit"> Login </button>
            </div>
        </>
    );
};

export default LoginPage;

async function login(email,password){
    try {
        const response = await callApi(post,login,[email,password])
    } catch(error){
        console.error(error)
    }
}