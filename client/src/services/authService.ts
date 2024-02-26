import { AuthApi } from '@/types/enum';
import {
  LoginInput,
  RegisterInput,
  LoginOutput,
  RegisterOutput,
} from '@/types/interface';
import { _get, _post, _delete, _put } from '@/api/apiClient';

const login = (data: LoginInput) => _post<LoginOutput>(AuthApi.Login, data);
const register = (data: RegisterInput) =>
  _post<RegisterOutput>(AuthApi.Register, data);

export { login, register };
