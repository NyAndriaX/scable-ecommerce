import { Request, Response } from "express";
import { handleError } from "../utils/request";
import { handleRegister } from "./handler";
import validation from "./validation";

export const register = async (req:Request,res:Response) => {
  try{
    const request = validation.validateRegister(req);
    const {email,...data} = request;
    const user = await handleRegister(email,data)
    res.send({id:user.id})
  }catch(e){
    handleError(res,e)
  }
} 

export const login = async (req:Request,res:Response) => {
  try{
    const request = validation.validateLoginRequest(req);
    console.log(request)
  }catch(e){
    handleError(res,e)
  }
}