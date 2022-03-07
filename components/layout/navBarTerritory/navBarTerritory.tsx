import type { NextPage } from 'next'
import styles from './navBarTerritory.module.scss'
import { useOwners, OwnerContextType } from 'store'
import { CircleSvg } from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const NavBarTerritory: NextPage = () => {
  const { owners, searchMode, search } = useOwners() as OwnerContextType
  return (
    <header>
      <h1>Territory {owners?.[0]?.territoryNumber}</h1>
      <div className={styles.circleContainer}>
        <CircleSvg className={styles.circleSvg}></CircleSvg>
        {searchMode ? (
          <span className={styles.circleSvgText}>{search.length}</span>
        ) : (
          <span className={styles.circleSvgText}>{owners.length}</span>
        )}
      </div>
    </header>
  )
}
