import React, {useState} from "react";
import { StyleForm } from "./styles";
import { Input } from "../Input/index.jsx"
import { Button } from "../Button/index.jsx"
import { CreateOne } from "../../services/Api";

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
                    titulo={"Nome"} 
                    name={"name"} 
                    type={"text"} 
                    placeholder={"exemplo=> Marlon"} 
                    onChange={handleInputChange} 
                    value={formValues.name || ""}
                    required
                />
                <Input 
                    titulo={"Data de nascimento"} 
                    mask={"99/99/9999"} 
                    name={"birthday"} 
                    type={"text"} 
                    placeholder={"exemplo=> 12/03/2001"} 
                    onChange={handleInputChange} 
                    value={formValues.birthday || ""}
                    required
                />
                <Input 
                    titulo={"Numero de celular"} 
                    mask={"(99) 99999-9999"} 
                    name={"cell_phone_number"} 
                    type={"text"} 
                    placeholder={"exemplo=> (61) 98756-4321"} 
                    onChange={handleInputChange} 
                    value={formValues.cell_phone_number || ""}
                    required
                />
                <Input 
                    titulo={"Cpf"} 
                    mask={"999.999.999-99"} 
                    name={"cpf"} type={"text"} 
                    placeholder={"exemplo=> 187.014.123-70"} 
                    onChange={handleInputChange} 
                    value={formValues.cpf || ""}
                    required
                />
                <Input
                    titulo={"Email"}
                    name={"email"} 
                    type={"email"} 
                    placeholder={"exemplo=> exemplo@exemplo.com"} 
                    onChange={handleInputChange} value={formValues.email || ""}
                    required
                />
                <Input
                    titulo={"Senha"}
                    name={"password"} 
                    type={"password"} 
                    placeholder={"password"} 
                    onChange={handleInputChange} 
                    value={formValues.password || ""}
                    required
                />
                <Input
                    display={"none"}
                    link={"https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473"}
                    type={"radio"}
                    name={"plan_id"}
                    value={1}
                    onChange={handleInputChange}
                    required
                />
                <Input
                    display={"none"}
                    link={"https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473"}
                    type={"radio"}
                    name={"plan_id"}
                    value={2}
                    onChange={handleInputChange}
                />
                <Input
                    display={"none"}
                    link={"https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473"}
                    type={"radio"}
                    name={"plan_id"}
                    value={3}
                    onChange={handleInputChange}
                />
                <Input
                    display={"none"}
                    link={"https://media.discordapp.net/attachments/1013933622576828507/1020143214793076778/aorfa2.jpg?width=315&height=473"}
                    type={"radio"}
                    name={"plan_id"}
                    value={4}
                    onChange={handleInputChange}
                />
            </div>
            <Button text={"Enviar"} type={"submit"}/>
        </StyleForm>
    )
    
}