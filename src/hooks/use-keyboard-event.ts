import { useCallback, useEffect } from 'react'

/** Keyboard Events Custom Hook
 * - Enter: 13
 * - Escape: 27
 * - Backspace: 8
 * - Tab: 9
 * - Shift: 16
 * - Control: 17
 * - Alt: 18
 * - Space: 32
 * - ArrowUp: 38
 * - ArrowDown: 40
 * - ArrowLeft: 37
 * - ArrowRight: 39
 *  @example
 * // Usage
 * useKeyboardEvent('Escape', () => setEmojiOpen(false))
 */
export function useKeyboardEvent(key: KeyProps, callback: () => void) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        callback()
      }
    },
    [key, callback],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}

/** Key Props */
type KeyProps =
  | 'Enter'
  | 'Escape'
  | 'Backspace'
  | 'Tab'
  | 'Shift'
  | 'Control'
  | 'Alt'
  | 'Space'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
