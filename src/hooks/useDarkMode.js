import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useDarkMode(keyValue) {
    const [someValue, setSomeValue] = useLocalStorage(keyValue)

    useEffect(() => {
        someValue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
        console.log(someValue)
        console.log(keyValue)
    },[someValue])

    const setValue = value => {
        setSomeValue(value)
    }

    return [someValue, setValue]
}