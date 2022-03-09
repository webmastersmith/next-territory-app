import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Card, uid } from 'components'
import styles from './cards.module.scss'
import { useOwners, OwnerContextType } from 'store'
import { motion, AnimatePresence } from 'framer-motion'

export const Cards: NextPage = () => {
  const { owners, setOwners, deleted, setDeleted, search, searchMode } =
    useOwners() as OwnerContextType

  // on initial load, if local storage exist update state. Or create localStorage.
  useEffect(() => {
    // console.log('cards useEffect only on mount ran')

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
    <AnimatePresence exitBeforeEnter>
      {searchMode ? (
        <motion.div
          className={styles.container}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
          key={uid()}
        >
          {search.map((owner, i) => {
            return <Card owner={owner} key={owner._id} i={i} />
          })}
        </motion.div>
      ) : (
        <motion.div
          className={styles.container}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
          key={uid()}
        >
          {owners.map((owner, i) => {
            return <Card owner={owner} key={owner._id} i={i} />
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
