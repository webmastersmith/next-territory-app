import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Card } from 'components'
import styles from './cards.module.scss'
import { useOwners, OwnerContextType } from 'store'

// interface Props {
//   _owners: OwnerType[]
// }

export const Cards: NextPage = () => {
  const { owners, setOwners, deleted, setDeleted, search } =
    useOwners() as OwnerContextType

  // on initial load, if local storage exist update state. Or create localStorage.
  useEffect(() => {
    console.log('cards useEffect only on mount ran')

    //does localStorage exist?
    if (!localStorage.getItem('owners')) {
      // localStorage does not exist, so add owners and deleted
      try {
        localStorage.setItem('owners', JSON.stringify(owners))
        localStorage.setItem('deleted', JSON.stringify(deleted))
      } catch (e) {
        console.log('Storage Problem: ', e)
      }
    } else {
      // localStorage exist, so update owners and deleted.
      setOwners(JSON.parse(localStorage.getItem('owners') ?? ''))
      setDeleted(JSON.parse(localStorage.getItem('deleted') ?? ''))
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.container}>
      {!!search?.[0]
        ? !!search?.[0] &&
          search.map((owner, i) => {
            return <Card owner={owner} key={owner._id} i={i} />
          })
        : !!owners?.[0] &&
          owners.map((owner, i) => {
            return <Card owner={owner} key={owner._id} i={i} />
          })}
    </div>
  )
}
