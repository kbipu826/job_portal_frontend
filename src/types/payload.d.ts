export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
    phone: string;
    user_type_id: string;

}

export interface LoginPayload {
    login: string;
    password: string;
}


