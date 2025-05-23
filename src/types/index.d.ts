export interface ApiResponse {
    success: boolean;
    message: string;
    data?: object | null;
    errors?: {
        [key: string]: string[];
    };
}

export interface Token {
    accessToken: string;
}

export interface UserType {
    id: number;
    name: string;
}

export interface User {
    id?: number;
    username: string;
    email: string;
    phone: string;
    user_type_id: string;
    is_active: boolean;
    last_login?: string | null;
    updated_at?: string;
    created_at?: string;
    user_type?: UserType;
}

export interface MemberDetails {
    is_Member: boolean;
    _id: number;
    email: string; 
    companyName: string | null;
    approval_status: string;
    membershipId: string | null;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    data?: {
        token: Token;
        user: User;
        user_type: string;
    } & Partial<MemberDetails> | null;
    errors?: {
        username?: string[];
        email?: string[];
        [key: string]: string[] | undefined;
    };
}

