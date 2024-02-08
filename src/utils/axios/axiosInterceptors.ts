import axios from "axios";
import { getUserAsyncStorage } from "./helpers";
import { ValidateResponseError } from "./errorValidations";
import { store } from "../../Redux/store";

export const initInterceptors = () => {

    axios.interceptors.request.use(
        async (config) => {
            const user = await getUserAsyncStorage();
            const token = user ? user.access_token : null;
           //  console.log(token, '11')
            if (token) config.headers.Authorization = `Bearer ${token}`;
             config.headers = {  ...config.headers };
             return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const user = await getUserAsyncStorage();
            const token = user ? user.access_token : null;
            if (ValidateResponseError(error.response, token)) {
                store.dispatch(setCredential({}));
            }

            return Promise.reject(error);
        }
    );
}