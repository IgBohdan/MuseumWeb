import { useEffect, useState } from 'react'

// Custom Hook for authentication
export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [user, setUser] = useState(null)
	const [token, setToken] = useState(null)

	// Check for saved JWT token in localStorage
	useEffect(() => {
		const storedToken = localStorage.getItem('authToken')
		if (storedToken) {
			setToken(storedToken)
			// Optionally, decode the token here to fetch user data (you can use jwt-decode library)
			// You can also verify the token's validity by making an API request (i.e. verify JWT)
			setIsAuthenticated(true)
		}
	}, [])

	// Handle login
	const login = (data) => {
		const { token, user } = data
		setToken(token)
		setUser(user)
		setIsAuthenticated(true)
		localStorage.setItem('authToken', token)  // Store token in localStorage
	}

	// Handle logout
	const logout = () => {
		setIsAuthenticated(false)
		setUser(null)
		setToken(null)
		localStorage.removeItem('authToken')  // Remove token from localStorage
	}

	return { isAuthenticated, user, token, login, logout }
}
