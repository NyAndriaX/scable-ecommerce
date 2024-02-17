import { create } from "zustand";
// import { useMutation } from "@tanstack/react-query";
// import { useCallback } from "react";
import { getItem,removeItem,setItem } from "@/utils/storage";
import { StorageEnum } from "@/types/enum";
import { UserInfo, UserToken } from "@/types/entity";
// import { useNavigate } from "react-router-dom";
// import { LoginReq } from "@/services/authServices";
// import * as authService from "@/services/authServices";
import axios,{ AxiosResponse } from "axios";

type AuthStore = {
  userInfo : Partial<UserInfo>;
  userToken:UserToken | null;
  actions:{
    setUserInfo:(userInfo:UserInfo) => void;
    setUserToken:(token:UserToken) => void;
    clearUserInfoAndToken:() => void;
  }
};

const useAuthStore = create<AuthStore>((set) => ({
  userInfo: getItem<UserInfo>(StorageEnum.User) || {},
  userToken: getItem<UserToken>(StorageEnum.Token) || null,
  actions: {
    setUserInfo: (userInfo) => {
      set({ userInfo });
      setItem(StorageEnum.User, userInfo);
    },
    setUserToken: (userToken) => {
      set({ userToken });
      setItem(StorageEnum.Token, userToken);
    },
    clearUserInfoAndToken() {
      set({ userInfo: {}, userToken: null });
      removeItem(StorageEnum.User);
      removeItem(StorageEnum.Token);
    },
  },
}));

export const useUserInfo = () => useAuthStore((state) => state.userInfo);
export const useUserToken = () => useAuthStore((state) => state.userToken);
export const useUserActions = () => useAuthStore((state) => state.actions);

interface UpdateUserData {
  userId: string;
  newData: {
    name: string;
    email: string;
  };
}

// Fonction de mise à jour de l'utilisateur
const updateUser = async (userData: UpdateUserData): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axios.put(`/api/users/${userData.userId}`, userData.newData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update user');
  }
};

export const useLogin = () => {
  // const navigate = useNavigate();
  // const { setUserToken, setUserInfo } = useUserActions();
  
  // const {mutate,data:updateUserMutation} = useMutation(updateUser);
  // const loginMutation = useMutation(authService.login);

};
