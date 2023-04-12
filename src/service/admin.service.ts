import { getUsersUrl } from '@/config/api.config'
import axios from '../api/interseptor'


export const AdminService = {
	async getCountUsers() {
		return axios.get<number>(getUsersUrl('/count'))
	},
}