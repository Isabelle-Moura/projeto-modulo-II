import api from '../api'

const token = localStorage.getItem('token')

export const getRegisterUsers = async () => {
  try {
    const users = await api.get(`/users?page=0&size=5`, {
      headers: { Authorization: token }
    })
    return users.data
  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}

export const getCounterTotalUsers = async () => {
  try {
    const totalAllUsers = await api.get(`/users/count`, {
      headers: { Authorization: token }
    })
    return totalAllUsers.data
  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}

export const getUserData = async () => {
  try {
    const response = await api.get(`/users`, {
      headers: { Authorization: token }
    })
    const userData = response.data.content
    return userData
  } catch (error) {
    console.error('Ocorreu um erro ao buscar os dados do usuário:', error)
  }
}