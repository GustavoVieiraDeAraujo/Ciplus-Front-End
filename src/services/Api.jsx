import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/",
});

// O token fica em localStorage (lembrar de mim) ou sessionStorage (sessao atual),
// nunca nos dois ao mesmo tempo
export const getToken = () => {
    return localStorage.getItem("ciplus_token") || sessionStorage.getItem("ciplus_token");
}

api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
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

export const Login = async(email,password) => {
    try{
        const requisicao = await api.post(`users/login`, { email, password })
        return requisicao.data
    }catch(e){
        console.log(e)
    }
}

export const ResetPassword = async(email,cpf,newPassword) => {
    try{
        const requisicao = await api.post(`users/reset-password`, { email, cpf, newPassword })
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