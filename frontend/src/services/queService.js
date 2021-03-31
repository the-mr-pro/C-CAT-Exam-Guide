import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api";

class queService {
  fetchQue() {
    return axios.get(USER_API_BASE_URL + "/mcq");
  }

  fetchQueById(queId) {
    return axios.get(USER_API_BASE_URL + "/mcq/" + queId);
  }

  deleteQue(queId) {
    return axios.delete(USER_API_BASE_URL + "/mcq/" + queId);
  }

  addQue(question) {
    return axios.post(USER_API_BASE_URL + "/mcq", question);
  }

  editQue(question) {
    return axios.put(USER_API_BASE_URL + "/mcq/" + question.QuestionID, question);
  }
}

export default new queService();
