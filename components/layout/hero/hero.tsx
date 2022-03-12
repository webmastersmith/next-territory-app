import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './hero.module.scss'
import { HomeWorkIcon } from 'icons'
import animation from 'styles/float.module.css'
import headerCard from './heroCard.png'
import pen from './pen.jpg'

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

      {/* <div className={`${styles.heroImgWrapper} ${animation.float}`}>
        <Image
          src={headerCard}
          alt="territory card"
          width={300}
          height={459}
          priority
          className={styles.heroImg}
        />
      </div> */}

      <picture className={styles.heroImg}>
        <source
          type="image/avif"
          srcSet="/hero/heroCard.png-300w459h.avif 300w, /hero/heroCard.png-600w918h.avif 600w, /hero/heroCard.png-900w1377h.avif 900w"
        />

        <source
          type="image/webp"
          srcSet="/hero/heroCard.png-300w459h.webp 300w, /hero/heroCard.png-600w918h.webp 600w, /hero/heroCard.png-900w1377h.webp 900w"
        />

        <source
          type="image/jpg"
          srcSet="/hero/heroCard.png-300w459h.jpg 300w, /hero/heroCard.png-600w918h.jpg 600w, /hero/heroCard.png-900w1377h.jpg 900w"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/_heroCard.png"
          alt="territory card"
          width={300}
          height={459}
        />
      </picture>
    </header>
  )
}
