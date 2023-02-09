import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const login = (authData) => API.post('/user/login', authData)
export const signup = (authData) => API.post('/user/signup', authData)

export const postQuestion = (questionData) => API.post('/questions/ask', questionData)
export const getQuestions = (questionsData) => API.get('/questions/get', questionsData)

export const postAnswer = (id, answerBody, userAnswred, userId) => API.patch(`/answer/post/${id}`, { answerBody, userAnswred, userId })