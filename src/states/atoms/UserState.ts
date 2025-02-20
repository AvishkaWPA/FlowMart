import { atom } from "recoil";

export const UserState = atom({
    key:'UserState',
    default:{
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }
})