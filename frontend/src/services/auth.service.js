import axios from "axios";

const API_URL = "http://localhost:8080/user/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signIn", {
        email,
        password
      })/*
      .then(response => {
        if (response.data.accessToken) {
          console.log("User Details"+JSON.stringify(response.data))
        //let user=response.data;
        localStorage.setItem("user", JSON.stringify(response.data));
       /* if(user!==null && user.role=="ADMIN")
        {
          this.props.history.push('/admin');
        }
          //localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });*/
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signUp", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    console.log(JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
