import { fetchHandler } from "@/lib/api-utils";
import { ApiResponse } from "@/types/index.d";
import { RegisterSchema, LoginSchema } from "@/schemas/auth";

const AUTH_API = {
  REGISTER: "register",
  LOGIN: "login",
} as const;

export const authService = {
  register: (data: RegisterSchema) =>
    fetchHandler<ApiResponse>(AUTH_API.REGISTER, "POST", data),
  login: (data: LoginSchema) =>
    fetchHandler<ApiResponse>(AUTH_API.LOGIN, "POST", data),
};
