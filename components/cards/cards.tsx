import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Card } from 'components'
import styles from './cards.module.scss'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import { setOwners } from 'store/ownerSlice'
import { OwnerType } from 'types'

type Props = {
  initOwners: OwnerType[]
}
export const Cards: NextPage<Props> = ({ initOwners }) => {
  const dispatch = useDispatch()

  const { owners, searchMode, search } = useSelector(
    (state: RootState) => state.ownerReducer
  )

  // on initial load, if local storage exist update state. Or create localStorage.
  useEffect(() => {
    // console.log('cards useEffect only on mount ran')
    //localStorage does not exist.
    if (!localStorage.getItem('owners')) {
      dispatch(setOwners(initOwners))
    } else {
      // localStorage exist, so update owners.
      dispatch(setOwners(JSON.parse(localStorage.getItem('owners') ?? '')))
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={searchMode}
          addEndListener={(node: any, done: any) =>
            node.addEventListener('transitionend', done, false)
          }
          // classNames="left"
          classNames={{
            appear: styles.leftAppear,
            appearActive: styles.leftAppearActive,
            enter: styles.leftEnter,
            enterActive: styles.leftEnterActive,
            exit: styles.leftExit,
            exitActive: styles.leftExitActive,
          }}
          appear={true}
        >
          <div className={styles.titleContainer}>
            {searchMode ? (
              <h3 className={styles.title}>
                Search Mode: {search.length} Territor
                {search.length > 1 ? 'ies' : 'y'}
              </h3>
            ) : (
              <h3 className={styles.title}> </h3>
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransition>
        <CSSTransition
          key={searchMode}
          addEndListener={(node: any, done: any) =>
            node.addEventListener('transitionend', done, false)
          }
          // classNames="left"
          classNames={{
            appear: styles.leftAppear,
            appearActive: styles.leftAppearActive,
            enter: styles.leftEnter,
            enterActive: styles.leftEnterActive,
            exit: styles.leftExit,
            exitActive: styles.leftExitActive,
          }}
          appear={true}
        >
          <div className={styles.container}>
            {(searchMode ? search : owners).map((owner, i) => {
              return <Card owner={owner} key={owner._id} i={i} />
            })}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}
