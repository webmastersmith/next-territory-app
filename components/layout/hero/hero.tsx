import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './hero.module.scss'
import { HomeWorkIcon } from 'icons'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const Hero: NextPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <HomeWorkIcon className={styles.mainIcon} />
      </div>
      <Image
        src="/heroCard.png"
        alt="territory card"
        width={375}
        height={573}
      />
    </header>
  )
}
