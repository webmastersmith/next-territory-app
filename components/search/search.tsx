import type { NextPage } from 'next'
import { useRef, useCallback, useEffect, FormEvent } from 'react'
// import { OwnerType } from 'types'
import styles from './search.module.scss'
import { useOwners, OwnerContextType } from 'store'
import { X2Svg } from 'icons'

// interface Props {
// 	memoSetSearch: () => OwnerType[]
// }
//NextPage<Props>

export const SearchForm: NextPage = () => {
  // console.log('search -memo SearchForm ran')
  const {
    searchOwners,
    search,
    searchMode,
    setSearchMode,
    setSearch,
    loading,
    setLoading,
  } = useOwners() as OwnerContextType
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit: React.FormEventHandler = async (event): Promise<void> => {
    event.preventDefault()
    if (inputRef.current) {
      setSearchMode(true)
      const bool = searchOwners(inputRef.current.value)
      // console.log('search -handleSubmit return value:', bool)
    }
  }
  const resetSearchInput = useCallback(() => {
    // only run if change needed
    if (searchMode || !!search?.[0]) {
      // console.log('search - resetSearchInput ran')
      setSearchMode(false)
      setTimeout(() => setSearch([]), 0)
    }
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.blur()
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchMode, search, inputRef])

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
