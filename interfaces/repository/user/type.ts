import { User } from '@/domain/models/users/user';

export interface UserResponse {
  message: string;
  data: User[];
}
