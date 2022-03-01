import type { NextPage } from 'next'
import Image from 'next/image'
import { HomeWorkIcon } from 'components'
import styles from './navBar.module.scss'

//interface Props {
//	data: string
//}

// <span>
//   <Image
//     src="/homepageImage/lufkin_territory.jpg"
//     alt="Lufkin Central Territories"
//     width={200}
//     height={200}
//     priority
//   />
// </span>
export const NavBar: NextPage = () => {
  return (
    <div className={styles.navBar}>
      <HomeWorkIcon className={styles.homeWorkSvg} />
      <h1>Lufkin Territory Viewer</h1>
    </div>
  )
}
