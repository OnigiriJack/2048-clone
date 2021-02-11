import { useEffect, useRef } from 'react';

export default function useKey(key: any, cb: any) {
    const callbackref = useRef(cb)
    useEffect(() => {
        callbackref.current = cb;
        console.log(callbackref)
    }, [])
    useEffect(() => {
        function handle(e: any) {
            if (e.code === key) {
                console.log("calling function")
                callbackref.current(e)
            }
        }
        document.addEventListener("keypress", handle);
        return () => document.removeEventListener("keypress", handle)
    }, [key])
}


// https://www.youtube.com/watch?v=YxsfJoKJZ50 Thank you Bhargav