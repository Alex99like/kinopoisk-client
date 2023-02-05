import {IAuthResponse, ITokens} from "@/app/store/user/user.interface";
import Cookies from 'js-cookie'

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken)
  Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data: IAuthResponse) => {
  localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
}