import type { NextPage } from 'next'
import { memo, useRef } from 'react'
import { OwnerType } from 'types'
import styles from './search.module.scss'
import { useOwners, OwnerContextType } from 'store'

// interface Props {
// 	memoSetSearch: () => OwnerType[]
// }
//NextPage<Props>

export const SearchForm: NextPage = () => {
  console.log('SearchForm ran')
  const { searchOwners } = useOwners() as OwnerContextType
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit: React.FormEventHandler = async (event): Promise<void> => {
    event.preventDefault()
    if (inputRef.current) {
      const bool = searchOwners(inputRef.current.value)
      console.log('bool', bool)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Search Anything</label>
        <input type="text" name="text" id="text" required ref={inputRef} />
      </div>
    </form>
  )
}
