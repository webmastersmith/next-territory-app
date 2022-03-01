import type { NextPage } from 'next'
import { HomeWorkIcon } from 'components'
import styles from './navBar.module.scss'

//interface Props {
//	data: string
//}

export const NavBar: NextPage = () => {
  return (
    <div className={styles.navBar}>
      <HomeWorkIcon className={styles.homeWorkSvg} />
      Lufkin Territory Viewer
    </div>
  )
}
