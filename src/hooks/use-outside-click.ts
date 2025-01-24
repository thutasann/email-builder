import { useEffect, useRef } from 'react'

// ✔ create outside click custom hook
const useOutsideClick = (callback: () => void, whitelist: (HTMLElement | null)[] = []) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clickOutsideHandler = (event: MouseEvent | TouchEvent) => {
      if (ref.current) {
        const target = event.target as Node
        let isOutside = !ref.current.contains(target)
        if (isOutside && whitelist.length > 0) {
          whitelist.forEach((element) => {
            if (target.isEqualNode(element)) isOutside = false
          })
        }
        if (isOutside) callback()
      }
    }

    document.addEventListener('mouseup', clickOutsideHandler)
    document.addEventListener('touchend', clickOutsideHandler)

    return () => {
      document.removeEventListener('mouseup', clickOutsideHandler)
      document.removeEventListener('touchend', clickOutsideHandler)
    }
  }, [callback, whitelist])

  return ref
}

export default useOutsideClick
