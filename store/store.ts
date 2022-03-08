import {
  useState,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from 'react'
import { OwnerType } from 'types'

export const ThemeContext = createContext<OwnerContextType | null>(null)

export type OwnerContextType = {
  owners: OwnerType[]
  setOwners: (owners: OwnerType[]) => void
  deleted: OwnerType[]
  setDeleted: (owners: OwnerType[]) => void
  search: OwnerType[]
  setSearch: (owners: OwnerType[]) => void
  searchMode: boolean
  setSearchMode: (bool: boolean) => void
  loading: boolean
  setLoading: (bool: boolean) => void
  deleteCard: (id: string) => void
  searchOwners: (word: string) => boolean
  sortNums: (number?: string) => void
}

export const useOwnersContext = (initOwners: OwnerType[] = []) => {
  // console.log('store -Main fn useOwnersContext ran')
  const [owners, setOwners] = useState<OwnerType[]>(initOwners)
  const [deleted, setDeleted] = useState<OwnerType[]>([])
  const [search, setSearch] = useState<OwnerType[]>([])
  const [searchMode, setSearchMode] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  // add functions here and to OwnerContext type.

  const fixLocalStorage = useCallback(
    (owners: OwnerType[], deleted: OwnerType[]) => {
      try {
        localStorage.setItem('owners', JSON.stringify(owners))
        localStorage.setItem('deleted', JSON.stringify(deleted))
      } catch (e) {
        console.log('Storage Problem: ', e)
      }
    },
    []
  )

  const searchOwners = useCallback(
    (word: string = '') => {
      // console.log('store -searchOwners fn ran')
      const text = word.trim()
      if (text === '') {
        setSearch([])
        setLoading(false)
        setSearchMode(false)
        return false
      }
      setLoading(true)
      // filter against search text.
      const searchOwners = owners.filter((owner) => {
        const {
          name,
          ownerId,
          landId,
          deed,
          physicalAddress,
          physicalCity,
          physicalState,
          physicalZip,
          mailingAddress,
          mailingCity,
          mailingState,
          mailingZip,
          exemptions,
          phoneNumbers,
        } = owner
        const p = `${physicalAddress} ${physicalCity} ${physicalState} ${physicalZip}`
        const m = `${mailingAddress} ${mailingCity} ${mailingState} ${mailingZip}`
        const phoneAddress = phoneNumbers
          .map((person) => {
            const { name, contacts } = person
            const personContact = contacts.map((contact) => {
              const { phoneNumber, address } = contact
              return phoneNumber + ' ' + address
            })
            return [name, ...personContact].join(' ')
          })
          .join(' ')
        const all = `${name} ${deed} ${ownerId} ${landId} ${exemptions.join(
          ' '
        )} ${p} ${m} ${phoneAddress}`
          .replaceAll(/[,-.()]/g, '')
          .replaceAll('  ', ' ')
          .toLowerCase()
        return all.includes(text.toLowerCase())
      })
      // return what was found.
      setSearch(searchOwners)
      setLoading(false)
      setSearchMode(true)
      return true
    },
    [owners]
  )

  const deleteCard = useCallback(
    (id: string) => {
      // console.log('store -deleteCard ran')
      const deletedOwner = owners.filter((owner) => id === owner.landId)
      const filteredOwners = owners.filter((owner) => id !== owner.landId)
      // if card is deleted in 'searchMode' card in search array is removed.
      // this will not effect the 'deleted' array, because the card is removed from
      // the owners array and added to deleted array.
      const filteredSearch = search.filter((owner) => id !== owner.landId)
      const _deleted = [...deletedOwner, ...deleted]
      setOwners(filteredOwners)
      setDeleted(_deleted)
      setSearch(filteredSearch)
      fixLocalStorage(filteredOwners, _deleted)
    },
    [deleted, owners, fixLocalStorage, search]
  )

  const sortNums = useCallback(
    (number: string = '') => {
      if (!!number) {
        // console.log('sort ran')
        const sortedOwners = owners.sort((objA, objB) => {
          const a = +objA.landId
          const b = +objB.landId
          return a - b
        })
        setOwners([...sortedOwners])

        if (!!search.length) {
          const sortedSearch = search.sort((objA, objB) => {
            const a = +objA.landId
            const b = +objB.landId
            return a - b
          })
          setSearch([...sortedSearch])
        }

        // must be alphabet sort
      } else {
        const sortedOwners = owners.sort((objA, objB) => {
          const a = objA.name
          const b = objB.name
          return a > b ? 1 : b > a ? -1 : 0
        })
        setOwners([...sortedOwners])

        if (!!search.length) {
          const sortedSearch = search.sort((objA, objB) => {
            const a = objA.name
            const b = objB.name
            return a > b ? 1 : b > a ? -1 : 0
          })
          setSearch([...sortedSearch])
        }
      }
    },
    [owners, search]
  )

  const ownersContext = useMemo(() => {
    // console.log('store -useMemo ownersContext object ran')
    return {
      owners,
      setOwners,
      deleted,
      setDeleted,
      deleteCard,
      loading,
      setLoading,
      search,
      setSearch,
      searchOwners,
      searchMode,
      setSearchMode,
      sortNums,
    }
  }, [
    owners,
    deleted,
    deleteCard,
    loading,
    search,
    searchOwners,
    searchMode,
    sortNums,
  ])

  return ownersContext
}

export function useOwners() {
  return useContext(ThemeContext)
}
