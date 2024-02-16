import { PrismaClient } from "@prisma/client";

let ctx:Context;
let env = '';

export type Context = {
  prisma:PrismaClient
}

export const createContext = ():Context =>{
  return {
    prisma:new PrismaClient()
  }
}

export const getContext = (): Context => {
  const environment:string = process.env.NODE_ENV ?? 'test';
  if(env === environment && ctx !== null){
    return ctx;
  }else if(environment === 'test'){
    console.log('test to production')
  }else{
    ctx = createContext()
  }
  env = environment;

  return ctx
} 