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
  deleteCard: (id: string) => void
}

export const useOwnersContext = (initOwners: OwnerType[]) => {
  console.log('store -useOwnersContext ran')

  const [owners, setOwners] = useState<OwnerType[]>(initOwners)
  const [deleted, setDeleted] = useState<OwnerType[]>([])
  // add functions here and to OwnerContext type.

  const fixLocalStorage = (owners: OwnerType[], deleted: OwnerType[]) => {
    try {
      localStorage.setItem('owners', JSON.stringify(owners))
      localStorage.setItem('deleted', JSON.stringify(deleted))
    } catch (e) {
      console.log('Storage Problem: ', e)
    }
  }
  const deleteCard = useCallback(
    (id: string) => {
      console.log('store -deleteCard ran')
      const [deletedOwner] = owners.filter((owner) => id === owner.landId)
      const filteredOwners = owners.filter((owner) => id !== owner.landId)
      const _deleted = [deletedOwner, ...deleted]
      setOwners(filteredOwners)
      setDeleted(_deleted)
      fixLocalStorage(filteredOwners, _deleted)
    },
    [deleted, owners]
  )

  const ownersContext = useMemo(() => {
    console.log('store -useMemo ran')
    return { owners, setOwners, deleted, setDeleted, deleteCard }
  }, [owners, setOwners, deleted, setDeleted, deleteCard])
  return ownersContext
}

export function useOwners() {
  return useContext(ThemeContext)
}
