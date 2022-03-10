import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './hero.module.scss'
import { HomeWorkIcon } from 'icons'
import animation from 'styles/float.module.css'

export const Hero: NextPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <HomeWorkIcon className={styles.mainIcon} />
        <h1>Lufkin Central Territory App</h1>
      </div>

      <div className={`${styles.heroDiv} ${animation.float}`}>
        <Image
          src="/heroCard.png"
          alt="territory card"
          width={315}
          height={481}
          priority
          className={styles.heroImg}
        />
      </div>
    </header>
  )
}
