import { User } from "./user";

export interface ApiDataSuccess {
    message: string;
    user: User
}

export interface ApiData {
    error?: {message: string};
    success?: ApiDataSuccess
}