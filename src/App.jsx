import React from 'react'
import { Button } from './components/Button/index.jsx'
// import { Input } from './components/Input/index.jsx'
import {
  GetAll, 
  GetOne, 
  CreateOne, 
  CreateMany, 
  UpdatePut, 
  UpdatePatch, 
  DeleteOne, 
  DeleteMany
  //DeleteMany
      } 
from './services/Api.jsx'


export const App = () => {

  const usuario1 = {
    "name": "Isabella",
    "age": 24,
    "birthday": "2012-12-12",
    "cell_phone_number": "(61) 99999-9999",
    "cpf": "999.999.999-99",
    "email": "isabella@guerreira.com.br",
    "password": "cadeosmeninos",
    "amount_points": 12345,
    "plan_id": 1
  }

  const usuario2 = {
    "name": "Baiano",
    "age": 3,
    "birthday": "2022-11-09",
    "cell_phone_number": "(61) 99999-9999",
    "cpf": "989.989.989-98",
    "email": "baiano@acordavelho.com.br",
    "password": "baianogostadedormir",
    "amount_points": 10,
    "plan_id": 3
  }

  const atualizacaoParcial = {
    "age": 10,
    "birthday": "1000-10-10"
  }

  const atualizacaoTotal = {
    "name": "Baiano12345",
    "age": 9999,
    "birthday": "2011-11-11",
    "cell_phone_number": "(99) 91111-1111",
    "cpf": "982.982.982-92",
    "email": "baiano@acordavelhoseusafdo.com",
    "password": "baianogostadedormirparacaramba",
    "amount_points": 2,
    "plan_id": 1
  }

  return (
    <>
      <Button
        text={"Busca TODOS os usuarios"}
        onClick={async () => {
          const temp1 = await GetAll("users")
          console.log(temp1)
        }
      }
      />

      <Button 
        text={"Busca UM usuario"}
        onClick={ async () =>{
          const temp2 = await GetOne("users", 8)
          console.log( temp2 )
        }
      } 
      />

      <Button
        text={"Cria UM usuario"}
        onClick={async () => await CreateOne("users", usuario1)}
      />

      <Button
        text={"Cria VARIOS usuarios"}
        onClick={async () => await CreateMany("users", [usuario1,usuario2])}
      />

      <Button
        text={"Deleta UM usuario"}
        onClick={async () => await DeleteOne("users", "7")}
      />

      <Button
        text={"Deleta VARIOS usuarios"}
        onClick={async () => await DeleteMany("users", "7-8")}
      />

      <Button
        text={"Atualiza ALGUNS atributos do usuario"}
        onClick={async () => await UpdatePatch("users", 7, atualizacaoParcial)}
      />

      <Button
        text={"Atualiza TODOS atributos do usuario"}
        onClick={async () => await UpdatePut("users", 8, atualizacaoTotal)}
      />

    </>
  )
}
