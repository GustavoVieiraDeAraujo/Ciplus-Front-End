import React, { useState } from "react";
import { StyleMainLogin } from "./styles.jsx"
import { Input } from "../Input/index.jsx";
import { Button } from "../Button/index.jsx";
import { Login } from "../../services/Api";

import netflix from "./assets/netflix.jpg"

export const MainLogin = ()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');

    const handleLogin = async () => {
        setErro('');
        const usuario = await Login(email, password);
        if (usuario) {
            localStorage.setItem("ciplus_usuario", JSON.stringify(usuario));
            // navegacao completa (nao via react-router) para o Header recarregar e refletir o login
            window.location.href = "/";
        } else {
            setErro("E-mail ou senha inválidos");
        }
    }

    return(
        <StyleMainLogin style={{ backgroundImage: `url(${netflix})`}}>
            <div className="grid-item">
                <Input height={"40px"} background={"#444343"} width={"90%"} type={"email"} placeholder={"E-mail"} value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input height={"40px"}  background={"#444343"} width={"90%"} type={"password"} placeholder={"Insira sua senha"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="divs">
                <Input type={"radio"} />Lembrar de mim!
            </div>
            <a>Esqueceu sua senha?</a>
                {erro && <p className="erro">{erro}</p>}
                <Button borderradius={"5px"} height={"40px"} text={"Fazer Login"} width={"90%"} onClick={handleLogin} />
            </div>
        </StyleMainLogin>
    )
}
