import axios from 'axios';

const EXAM_API_BASE_URL = 'http://localhost:8080/test';

class ApiService {

    fetchTestByCategory(mcqCategory) {
        return axios.get(EXAM_API_BASE_URL + '/' + mcqCategory);
    }

    // fetchExamById(id) {
    //     return axios.get(EXAM_API_BASE_URL + '/' + id);
    // }

    // deleteExam(id) {
    //     return axios.delete(EXAM_API_BASE_URL + '/' + id);
    // }

    submitTest(test) {
        return axios.post(EXAM_API_BASE_URL + '')
     }

    // editExam(id) {
    //     return axios.put(EXAM_API_BASE_URL + '/' +  id);
    // }

}

export default new ApiService();