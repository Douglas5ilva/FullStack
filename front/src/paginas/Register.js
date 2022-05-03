import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'


export default function Register(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errr, setErrr] = useState('verificar')
    const [erro, setErro] = useState('')


    async function add(){
        await Axios.post("https://backp.vercel.app/user/register", {name, email, password}).then(res=>{
            if(res){
                setErrr(<Link to='/login'>Entrar</Link>)
            }
        }).catch(err=>{
            if(err){
                console.log(err)
                setErro('Email ja Cadastrado')
            }
        })
    }


    return(
        <>
            <section>
                <h2>Register</h2>
                <h3>{erro}</h3>
                
                <input title='text' name='name' value={name} placeholder='Nome' onChange={(e)=>{setName(e.target.value)}} /> <br/>
                <input title='text' name='email' value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} /> <br/>
                <input title='text' name='password' value={password} placeholder='Senha' onChange={(e)=>{setPassword(e.target.value)}} /> <br/>
                <button onClick={add}>{errr}</button>
            </section>
        </>
    )
}