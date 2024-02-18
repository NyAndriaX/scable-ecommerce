import { AuthApi } from "@/types/enum";
import { LoginInput,User } from "@/types/interface";
import { _get,_post,_delete,_put } from "@/api/apiClient";

const login =(data:LoginInput) => _post<User>(AuthApi.Login,data)

export {
  login
}