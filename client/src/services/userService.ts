import { UserApi } from '@/types/enum';
import { ChangeEmailType, ForgotPasswordType, User } from '@/types/interface';
import { _get, _post, _delete, _put } from '@/api/apiClient';

const updateUser = (id: string, data: Partial<User>) =>
  _put<User>(`${UserApi.UpdateUser}/${id}`, data);
const updatePassword = (id: string, data: ForgotPasswordType) =>
  _put(`${UserApi.updatePassword}/${id}`, data);
const updateEmail = (id: string, data: ChangeEmailType) =>
  _put(`${UserApi.updateEmail}/${id}`, data);

export { updateUser, updatePassword, updateEmail };
