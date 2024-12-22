import { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
	const [token, setToken] = useState<string>("")
	const [user, setUser, removeUser] = useLocalStorage("user", null)

	useEffect(() => {
		if (user) {
			setIsAuthenticated(true)
		}
	}, [user])

	const login = (authData) => {
		setIsAuthenticated(true)
		setUser(authData.user)
		setToken(authData.token)
	}

	const logout = () => {
		removeUser()
		setIsAuthenticated(false)
		setToken("")
	}

	return { isAuthenticated, user, login, logout, token }
}