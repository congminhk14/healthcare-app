import { IUser } from '@/types/session';

// Demo users for testing
export const demoUsers: IUser[] = [
  {
    id: '1',
    username: 'doctor@healthcare.jp',
    password: 'password123',
    name: 'Doctor'
  },
  {
    id: '2',
    username: 'nurse@healthcare.jp',
    password: 'password123',
    name: 'Nurse'
  }
];

export function findUser(username: string, password: string): IUser | undefined {
  return demoUsers.find(user => 
    user.username === username && user.password === password
  );
}

