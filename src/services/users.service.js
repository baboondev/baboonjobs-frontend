import axios from 'axios'

const usersMicroServiceUrl = 'https://baboonjobs-ms-users.herokuapp.com/auth'

export const UserService = {
  signIn: async (email, password) => {
    const { data } = await axios.post(`${usersMicroServiceUrl}/signin`, {
      email,
      password,
    })
    return data
  },
  signUp: async (user, role = 'admin') => {
    const { data } = await axios.post(`${usersMicroServiceUrl}/signup`, user, {
      params: { role },
    })
    return data
  },
  getUserById: async (id) => {
    const { data } = await axios.get(`${usersMicroServiceUrl}/user/${id}`)
    return data
  },
}
