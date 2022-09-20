import axios from "axios";

const api = axios.create({
    baseURL: "https://ciplus-back-end.herokuapp.com/",
});

export const GetAll = async(entidade) => {
    try{
      const requisicao = await api.get(`${entidade}/get/all`)
      return requisicao.data
    }catch(e){
      console.log(e)
    }
}
  
export const GetOne = async(entidade,id) => {
    try{
        const requisicao = await api.get(`${entidade}/get/one/${id}`)
        return requisicao.data
    }catch(e){
        console.log(e)
    }
}

export const CreateOne = async(entidade,objeto) => {
    try{
        const requisicao = await api.post(`${entidade}/create/one`, objeto)
        return requisicao.data
    }catch(e){
        console.log(e)
    }
}

export const CreateMany = async(entidade,listaObjetos) => {
    try{
        const requisicao = await api.post(`${entidade}/create/many`, listaObjetos)
        return requisicao.data
    }catch(e){
        console.log(e)
    }
}

export const UpdatePut = async(entidade,id,objeto) => {
    try{
        const requisicao = await api.put(`${entidade}/put/${id}`, objeto)
        return requisicao.data
    }catch(e){
        console.log(e)
    }
}

export const UpdatePatch = async(entidade,id,objeto) => {
    try{
        const requisicao = await api.patch(`${entidade}/patch/${id}`, objeto)
        return requisicao.data
    }catch(e){
        console.log(e)
    }
}

export const DeleteOne = async(entidade,id) => {
    try{
        const requisicao = await api.delete(`${entidade}/delete/one/${id}`)
        return requisicao.data
    }catch(e){
        console.log(e)
    }
}

export const DeleteMany = async (entidade, idsQueSeraoExcluidos) => {
    try{
        const requisicao = await api.delete(`${entidade}/delete/many/${idsQueSeraoExcluidos}`)
        return requisicao.data
    }catch(e){
        console.log(e)
    }
}
