import { useEffect, useState } from 'react';

export const isFalsy = (value: unknown) => value === 0? false: !value;
export const cleanObject = (obj: object) => {
    const result = {...obj};
    Object.keys(result).forEach(item => {
        //@ts-ignore
        if(isFalsy(result[item])) {
            //@ts-ignore
            delete result[item]
        }
    })

    return result;
}

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
} 

export const useDebounce = (value: any, delay: any) => {
    const [deboundeValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(timeout)
    }, [value, delay])
    return deboundeValue;
}