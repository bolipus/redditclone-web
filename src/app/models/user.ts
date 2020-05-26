import { Role } from './role';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  alias: string;
  fullName: string;
  enabled: boolean;
  roles: Role[];
}

