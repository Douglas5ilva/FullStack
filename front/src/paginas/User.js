import React, { useState } from "react";

export default function User() {

    const [text, setText] = useState('')

    const [name, setName] = useState('')
    const [about, setAbout] = useState('')

    const [erro, setErro] = useState('')

    function add() {
        const token = localStorage.getItem('token')

        if (name === '') {
            setErro('Preencha os Campos')
            setText('')

        } else {

            if (token) {
                setText(
                    <>
                        <div style={{padding: '20px', width: '80%', margin: 'auto', background: 'black'}}>
                            <h2> Ola {name}, é um brazer ter você aqui. </h2>
                            <p>
                                {name} tudo bem? espero que sim, bom eu me chamo Douglas estou na área de tecnologia a 4 anos atuando como Desenvolvedor Web, Já tenho experiência com Front-end, atualmente estou estudando bastante Back-end, minha meta e ser um Full Stack, ja tive oportunidades de trabalhar no front-end com React Js, isso me deu mais experiência na área, mas ainda me falte experiência proficional no Back-end, pois só trabalhei proficionalmente com Reack Js, com Back-end fiz alguns <a href="https://github.com/Douglas5ilva/"> projetos </a> pra mostrar que posso resolver os desafios que forem propostos.
                            </p>

                            <p>
                                Atualmente meu diferencial são tecnologias que estou aprendendo como:<br />
                                Doker<br />
                                Kubernets<br />
                                Redis<br />
                                Kafka<br />
                                React Native<br />
                                Vue Js<br />
                            </p>
                            <p>
                                Estou estudando bastante para suprir as necessidades do mercado e para ter um destaque na área.
                            </p>
                            <h3>{name} se ficou interessado Let’s work together</h3>
                            <button style={{paddingBottom: '5px', background: '#02E1F7'}}> <a href="https://douglas1.vercel.app/contato.html"> <strong>contato</strong> </a> </button>
                        </div>

                    </>
                )


                 localStorage.removeItem('token')
            }
            if (!token) {
                setErro('Voce não esta logado')
            }

        }


    }

    return (
        <>

            <section>
                <h2>BEM VINDO</h2>
                <h3>{erro}</h3>
                <input title='text' name='name' value={name} placeholder='Nome' onChange={(e) => { setName(e.target.value) }} /> <br />
                <textarea title='text' name='about' value={about} placeholder='Me Fale Sobre Você' onChange={(e) => { setAbout(e.target.value) }} /> <br />
                <button onClick={add}>verificar</button>
                <br />
                <div className="div">
                    {text}
                </div>
            </section>

        </>
    )
}