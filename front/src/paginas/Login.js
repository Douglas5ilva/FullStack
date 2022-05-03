import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'


export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errr, setErrr] = useState('verificar')
    const [erro, setErro] = useState('')



    async function add(){
        await Axios.post("https://backp.vercel.app/user/login", {email, password}).then(res=>{
            localStorage.setItem('token',res.data)
            if(res){
                setErrr(<Link to='/user'>Entrar</Link>)
            }
        }).catch(err=>{
            if(err){
                setErro('Senha ou email invallido')
            }
        })
    }


    return(
        <>
        
            <section>
                <h2>Login</h2>
                <h3>{erro}</h3>
                <input title='text' name='email' value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} /> <br/>
                <input title='text' name='password' value={password} placeholder='Senha' onChange={(e)=>{setPassword(e.target.value)}} /> <br/>
                <button onClick={add}>{errr}</button>
            </section>
        
        </>
    )
}