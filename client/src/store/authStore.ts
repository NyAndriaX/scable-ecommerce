import { create } from "zustand";
import {devtools} from "zustand/middleware"
import { User } from "@/types/interface";
import { getItem, setItem } from "@/utils/storage";
import { StorageEnum } from "@/types/enum";

interface AuthStore{
  token:string | null;
  user:User | null;
  isLoading:boolean;
  error:string | null;
  actions :{
    setUserToken:(token:string) => void;
    setUserInfo:(user:User) => void;
  }
}

const useAuthStore = create<AuthStore>()(devtools((set) => ({
  token: getItem<string | null>(StorageEnum.Token),
  user: getItem<User | null>(StorageEnum.User),
  isLoading:false,
  error:null,
  actions: {
    setUserToken:(token:string) => {
      set({token:token});
      setItem(StorageEnum.Token,token);
    },
    setUserInfo:(user:User) => {
      set({user:user});
      setItem(StorageEnum.User,user)
    }
  }
})));

export const useAuthActions = () => useAuthStore((state) => state.actions) 