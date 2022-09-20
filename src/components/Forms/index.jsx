import React, {useState} from "react";
import { StyleForm } from "./style.jsx";
import { Input } from "../Input/index.jsx"
import { Button } from "../Button/index.jsx"

// import { CreateOne } from "../../services/Api";

export const Forms = ({...props}) => {
    
    const [formValues, setFormValues] = useState({})
    
    const finishBuildingObject = (object) => {
        const date = new Date();
        const actualYear = date.getFullYear();
        const day = object["birthday"].slice(0,2);
        const month = object["birthday"].slice(3, 5);
        const year = object["birthday"].slice(6);
        object["birthday"]=`${year}-${month}-${day}`;
        object["age"] = actualYear - parseInt(year);
        object.plan_id = parseInt(object["plan_id"]);
        switch (object.plan_id){
            case 1:
                object["amount_points"] = 5
                break
            case 2:
                object["amount_points"] = 20
                break
            case 3:
                object["amount_points"] = 45
                break
            case 4:
                object["amount_points"] = 90
                break
        }
    }

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        finishBuildingObject(data);
        await CreateOne("users", data)
    }

    return(
        <StyleForm onSubmit={handleSubmit}>
            <h1>
                {props.titulo}
            </h1>
                <div>
                <Input 
                    paddingleft={"5px"}
                    height={"30px"}
                    titulo={"Nome"} 
                    background={"#444343"}
                    name={"name"} 
                    type={"text"} 
                    placeholder={"Nome completo"} 
                    onChange={handleInputChange} 
                    value={formValues.name || ""}
                    required
                />
                <Input 
                    paddingleft={"5px"}
                    background={"#444343"}
                    height={"30px"}
                    titulo={"Data de nascimento"} 
                    mask={"99/99/9999"} 
                    name={"birthday"} 
                    type={"text"} 
                    placeholder={"Data de nascimento"} 
                    onChange={handleInputChange} 
                    value={formValues.birthday || ""}
                    required
                />
                <Input 
                    paddingleft={"5px"}
                    background={"#444343"}
                    height={"30px"}
                    titulo={"Numero de celular"} 
                    mask={"(99) 99999-9999"} 
                    name={"cell_phone_number"} 
                    type={"text"} 
                    placeholder={"Telefone"} 
                    onChange={handleInputChange} 
                    value={formValues.cell_phone_number || ""}
                    required
                />
                <Input 
                    paddingleft={"5px"}
                    background={"#444343"}
                    height={"30px"}
                    titulo={"Cpf"} 
                    mask={"999.999.999-99"} 
                    name={"cpf"} type={"text"} 
                    placeholder={"CPF"} 
                    onChange={handleInputChange} 
                    value={formValues.cpf || ""}
                    required
                />
                <Input
                    paddingleft={"5px"}
                    background={"#444343"}
                    height={"30px"}
                    titulo={"Email"}
                    name={"email"} 
                    type={"email"} 
                    placeholder={"E-mail"} 
                    onChange={handleInputChange} value={formValues.email || ""}
                    required
                />
                <Input
                    paddingleft={"5px"}
                    background={"#444343"}
                    height={"30px"}
                    titulo={"Senha"}
                    name={"password"} 
                    type={"password"} 
                    placeholder={"Insira uma senha"} 
                    onChange={handleInputChange} 
                    value={formValues.password || ""}
                    required
                />
                </div>
            <Button width={"101%"} height={"40px"} text={"Enviar"} type={"submit"}/>
        </StyleForm>
    )
    
}