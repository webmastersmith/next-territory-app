import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './hero.module.scss'
import { HomeWorkIcon } from 'icons'
import animation from 'styles/float.module.css'
import headerCard from './heroCard.png'
import pen from './pn.jpg'

export const Hero: NextPage = () => {
  return (
    <header className={styles.header}>
      <HomeWorkIcon className={styles.mainIcon} />

      <h1 className={styles.title}>Lufkin Central Address Helper</h1>

      <div className={styles.bgImg}>
        <Image
          src={pen}
          alt="letter writing"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
          className={styles.img}
        />
      </div>

      <div className={`${styles.heroImgWrapper} ${animation.float}`}>
        <Image
          src={headerCard}
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
