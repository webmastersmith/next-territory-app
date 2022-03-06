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
  console.log('search -memo SearchForm ran')
  const { searchOwners, search, searchMode, setSearchMode, setSearch } =
    useOwners() as OwnerContextType
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit: React.FormEventHandler = async (event): Promise<void> => {
    event.preventDefault()
    if (inputRef.current) {
      setSearchMode(true)
      const bool = searchOwners(inputRef.current.value)
      // console.log('search -handleSubmit return value:', bool)
    }
  }
  const resetSearchInput = () => {
    // only run if change needed
    if (searchMode || search?.[0]) {
      setSearch([])
      setSearchMode(false)
    }
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.blur()
    }
  }

  // for the escape key listener -------------------------------------------------
  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      console.log('search -esc key fn ran')
      //Do whatever when esc is pressed
      resetSearchInput()
    }
  }, [])
  //watch for event listener to be added, and prevent duplicate event listeners.
  const listenerRef = useRef(false)
  useEffect(() => {
    console.log('search -useEffect ran')
    // only add listener if not already existing.
    if (!listenerRef.current) {
      console.log('search -Event listener added')
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
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div className={styles.searchInputDiv}>
        <input
          type="text"
          name="text"
          id="text"
          required
          ref={inputRef}
          placeholder="Search"
        />
        <X2Svg className={styles.xSvg} onClick={resetSearchInput} />
      </div>
    </form>
  )
}
