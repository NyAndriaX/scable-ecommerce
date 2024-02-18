import { create } from "zustand";
import {devtools} from "zustand/middleware"
import { User,LoginInput } from "@/types/interface";
import { getItem } from "@/utils/storage";
import { StorageEnum } from "@/types/enum";
import * as authService from "../services/authService"
import { toast } from "react-toastify";

interface AuthStore{
  token:string | null;
  user:User | null;
  isLoading:boolean;
  error:string | null;
  actions :{
    login : (data:LoginInput) => void;
  }
}

const useAuthStore = create<AuthStore>()(devtools((set) => ({
  token: getItem<string | null>(StorageEnum.Token),
  user: getItem<User | null>(StorageEnum.User),
  isLoading:false,
  error:null,
  actions: {
    login: async (data: LoginInput) => {
      try {
        const res = await authService.login(data);
        console.log(res)
      } catch (e:any) {
        toast.error(e.response?.data.message)
      }

    }
  }
})));

export const useAuthActions = () => useAuthStore((state) => state.actions) 