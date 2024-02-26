import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { User } from '@/types/interface';
import { getItem, removeItem, setItem } from '@/utils/storage';
import { StorageEnum } from '@/types/enum';

interface UserStore {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
  actions: {
    setUserToken: (token: string) => void;
    setUserInfo: (user: User) => void;
    clearUserAndToken: () => void;
  };
}

const useUserStore = create<UserStore>()(
  devtools((set) => ({
    token: getItem<string | null>(StorageEnum.Token),
    user: getItem<User | null>(StorageEnum.User),
    isLoading: false,
    error: null,
    actions: {
      setUserToken: (token: string) => {
        set({ token });
        setItem(StorageEnum.Token, token);
      },
      setUserInfo: (user: User) => {
        set({ user });
        setItem(StorageEnum.User, user);
      },
      clearUserAndToken: () => {
        set({ user: null, token: null }), removeItem(StorageEnum.User);
        removeItem(StorageEnum.Token);
      },
    },
  }))
);

export const useUserInfo = () => useUserStore((state) => state.user);
export const useUserToken = () => useUserStore((state) => state.token);
export const useUserActions = () => useUserStore((state) => state.actions);
