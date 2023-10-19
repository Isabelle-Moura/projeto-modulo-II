import { AxiosResponse } from 'axios'
import api from '../api'

const token = localStorage.getItem('token')

// GET request
export const getNotifications = async (type: string) => {
    try {
      const response: AxiosResponse<NotificationAPI> = await api.get(`/notifications?type=${type}`, {
        headers: { Authorization: token }
      })
      return response.data.content
    } catch (error) {
      console.error('Ocorreu um erro na requisição de GET', error)
    }
  }
// POST request
// GET COUNTER request
// GET ID request
// PUT request
// DELETE request