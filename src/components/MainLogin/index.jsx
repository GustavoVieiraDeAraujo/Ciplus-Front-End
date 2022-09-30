import React, { useState } from "react";
import { StyleMainLogin } from "./styles.jsx"
import { Input } from "../Input/index.jsx";
import { Button } from "../Button/index.jsx";
import { Login, ResetPassword } from "../../services/Api";

import netflix from "./assets/netflix.jpg"

export const MainLogin = ()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lembrarDeMim, setLembrarDeMim] = useState(true);
    const [erro, setErro] = useState('');

    const [mostrarReset, setMostrarReset] = useState(false);
    const [resetCpf, setResetCpf] = useState('');
    const [resetSenha, setResetSenha] = useState('');
    const [resetMensagem, setResetMensagem] = useState(null);

    const handleLogin = async () => {
        setErro('');
        const usuario = await Login(email, password);
        if (usuario) {
            const { token, ...dadosUsuario } = usuario;
            const armazenamento = lembrarDeMim ? localStorage : sessionStorage;
            armazenamento.setItem("ciplus_usuario", JSON.stringify(dadosUsuario));
            armazenamento.setItem("ciplus_token", token);
            // navegacao completa (nao via react-router) para o Header recarregar e refletir o login
            window.location.href = "/";
        } else {
            setErro("E-mail ou senha inválidos");
        }
    }

    const handleReset = async () => {
        setResetMensagem(null);
        const resultado = await ResetPassword(email, resetCpf, resetSenha);
        if (resultado) {
            setResetMensagem({ tipo: "sucesso", texto: "Senha atualizada! Já pode fazer login com a nova senha." });
        } else {
            setResetMensagem({ tipo: "erro", texto: "E-mail ou CPF não conferem com nenhum usuário cadastrado" });
        }
    }

    return(
        <StyleMainLogin style={{ backgroundImage: `url(${netflix})`}}>
            <div className="grid-item">
                <Input height={"40px"} background={"#444343"} width={"90%"} type={"email"} placeholder={"E-mail"} value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input height={"40px"}  background={"#444343"} width={"90%"} type={"password"} placeholder={"Insira sua senha"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="divs">
                <input type="checkbox" checked={lembrarDeMim} onChange={(e) => setLembrarDeMim(e.target.checked)} />Lembrar de mim!
            </div>
            <a onClick={() => setMostrarReset(!mostrarReset)}>Esqueceu sua senha?</a>
                {mostrarReset && (
                    <div className="resetSenha">
                        <input placeholder="CPF cadastrado" value={resetCpf} onChange={(e) => setResetCpf(e.target.value)} />
                        <input type="password" placeholder="Nova senha" value={resetSenha} onChange={(e) => setResetSenha(e.target.value)} />
                        <button onClick={handleReset}>Redefinir senha</button>
                        {resetMensagem && <p className={resetMensagem.tipo}>{resetMensagem.texto}</p>}
                    </div>
                )}
                {erro && <p className="erro">{erro}</p>}
                <Button borderradius={"5px"} height={"40px"} text={"Fazer Login"} width={"90%"} onClick={handleLogin} />
            </div>
        </StyleMainLogin>
    )
}
