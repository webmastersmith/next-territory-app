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
  loading: boolean
  setLoading: (bool: boolean) => void
  deleteCard: (id: string) => void
  searchOwners: (word: string) => void
}

export const useOwnersContext = (initOwners: OwnerType[]) => {
  console.log('store -useOwnersContext ran')
  const [owners, setOwners] = useState<OwnerType[]>(initOwners)
  const [deleted, setDeleted] = useState<OwnerType[]>([])
  const [search, setSearch] = useState<OwnerType[]>([])
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
    (word: string) => {
      console.log('store -searchOwners fn ran')
      const text = word.trim()
      if (text === '') {
        setSearch([])
        setLoading(false)
        return
      }
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
      if (searchOwners.length < 1) {
        return false
      }
      setSearch(searchOwners)
      return true
    },
    [owners]
  )

  const deleteCard = useCallback(
    (id: string) => {
      console.log('store -deleteCard ran')
      const deletedOwner = owners.filter((owner) => id === owner.landId)
      const filteredOwners = owners.filter((owner) => id !== owner.landId)
      const filteredSearch = search.filter((owner) => id !== owner.landId)
      const _deleted = [...deletedOwner, ...deleted]
      setOwners(filteredOwners)
      setDeleted(_deleted)
      setSearch(filteredSearch)
      fixLocalStorage(filteredOwners, _deleted)
    },
    [deleted, owners, fixLocalStorage, search]
  )

  const ownersContext = useMemo(() => {
    console.log('store -useMemo ownersContext object ran')
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
    }
  }, [owners, deleted, deleteCard, loading, search, searchOwners])

  return ownersContext
}

export function useOwners() {
  return useContext(ThemeContext)
}
