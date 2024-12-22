function useLocalStorage<T>(key: string, initialValue: T): [T, (newValue: T) => void, () => void] {
	// Get value from localStorage or use the initial value
	const getStoredValue = (): T => {
		if (typeof window === 'undefined' || !window.localStorage) {
			return initialValue // Fallback if localStorage is not available
		}
		const storedValue = localStorage.getItem(key)
		if (storedValue === undefined || storedValue === '') {
			return initialValue
		}
		try {
			return storedValue ? JSON.parse(storedValue) : initialValue
		} catch {
			return initialValue
		}
	}

	// Set new value in localStorage
	const setStoredValue = (newValue: T): void => {
		if (typeof window !== 'undefined' && window.localStorage) {
			const valueToStore = typeof newValue === 'object' ? JSON.stringify(newValue) : newValue
			localStorage.setItem(key, valueToStore as string) // Store the value as a string
			window.location.reload() // Trigger page reload to reflect changes
		}
	}

	// Remove value from localStorage
	const removeStoredValue = (): void => {
		if (typeof window !== 'undefined' && window.localStorage) {
			localStorage.removeItem(key)
			window.location.reload()
		}
	}

	// Return getter, setter, and remove function
	return [getStoredValue(), setStoredValue, removeStoredValue]
}

export default useLocalStorage
