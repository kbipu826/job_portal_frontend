import { DefaultSession } from 'next-auth';
import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      username: string;
      email: string;
      phone: string;
      user_type_id: string;
      is_active: boolean;
      updated_at: string;
      created_at: string;
      user_type: {
        id: number;
        name: string;
      };
      token: {
        accessToken: string;
      };
    } & DefaultSession['user'];
  }

  interface User {
    id: number;
    username: string;
    email: string;
    phone: string;
    user_type_id: string;
    is_active: boolean;
    updated_at: string;
    created_at: string;
    user_type: {
      id: number;
      name: string;
    };
    token: {
      accessToken: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: number;
      username: string;
      email: string;
      phone: string;
      user_type_id: string;
      is_active: boolean;
      updated_at: string;
      created_at: string;
      user_type: {
        id: number;
        name: string;
      };
      token: {
        accessToken: string;
      };
    }
  }
}