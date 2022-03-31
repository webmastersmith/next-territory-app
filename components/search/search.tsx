import type { NextPage } from 'next'
import { useRef, useCallback, useEffect } from 'react'
import styles from './search.module.scss'
import { X2Svg } from 'icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, searchOwners, clearSearchMode } from 'store'

export const SearchForm: NextPage = () => {
  const dispatch = useDispatch()

  const { searchMode, loading } = useSelector(
    (state: RootState) => state.ownerReducer
  )

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit: React.FormEventHandler = async (event): Promise<void> => {
    event.preventDefault()
    if (inputRef.current) {
      dispatch(searchOwners(inputRef.current.value))
    }
  }
  const resetSearchInput = useCallback(() => {
    dispatch(clearSearchMode())
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.blur()
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef.current?.value])

  // for the escape key listener -------------------------------------------------
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // console.log('search -esc key fn ran')
        //Do whatever when esc is pressed
        resetSearchInput()
      }
    },
    [resetSearchInput]
  )

  //watch for event listener to be added, and prevent duplicate event listeners.
  const listenerRef = useRef(false)
  useEffect(() => {
    // console.log('search -useEffect ran')
    // only add listener if not already existing.
    if (!listenerRef.current) {
      // console.log('search -Event listener added')
      window.addEventListener('keydown', escFunction, false)
      listenerRef.current = true
    }
    //component unmounted? remove listener
    return () => {
      window.removeEventListener('keydown', escFunction, false)
      listenerRef.current = false
    }
  }, [escFunction])
  // end esc key listener. ------------------------------------------------------

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.searchForm} ${
        loading ? 'cursorWait' : 'cursorDefault'
      }`}
    >
      <div className={styles.searchInputDiv}>
        <input
          type="text"
          name="text"
          id="text"
          required
          ref={inputRef}
          placeholder="Search"
        />
        <X2Svg
          className={styles[searchMode ? 'xSvg' : 'hidden']}
          onClick={resetSearchInput}
        />
      </div>
    </form>
  )
}
