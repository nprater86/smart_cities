import axios from "axios";

const API_URL = "http://localhost:8080/api/users/";

class AuthService {
    login(loginRequest) {
        return axios
            .post(API_URL + "login", loginRequest)
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(signUpRequest) {
        return axios.post(API_URL + "register", signUpRequest);
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();