import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserStore{

}

const useUserStore = create<UserStore>()(devtools((set) =>({
  
})))