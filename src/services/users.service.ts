import { client } from '../api/fetchClient';
import { User } from '../types';

export const usersService = {
  getUsers: () => client.get<User[]>('/users'),
  createUser: (user: User) => client.post<User>('/users', user),
};
