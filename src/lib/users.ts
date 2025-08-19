import { IUser } from '@/types/session';

// account test login
export const demoUsers: IUser[] = [
  {
    id: '1',
    username: 'demo@gmail.com',
    password: 'password123',
    name: 'Demo Account'
  },
];

export function findUser(username: string, password: string): IUser | undefined {
  return demoUsers.find(user => 
    user.username === username && user.password === password
  );
}

