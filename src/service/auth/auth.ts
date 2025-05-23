import { fetchHandler } from "@/lib/api-utils";
import { RegisterPayload, LoginPayload } from "@/types/payload";
import { ApiResponse } from "@/types/index.d";

const AUTH_API = {
  REGISTER: "register",
  LOGIN: "login",
} as const;

export const authService = {
  register: (data: RegisterPayload) =>
    fetchHandler<ApiResponse>(AUTH_API.REGISTER, "POST", data),
  login: (data: LoginPayload) =>
    fetchHandler<ApiResponse>(AUTH_API.LOGIN, "POST", data),
};
