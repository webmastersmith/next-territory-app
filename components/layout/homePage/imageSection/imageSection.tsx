import type { NextPage } from 'next'
// import Image from 'next/image'
import Image from 'components/image'
import styles from './imageSection.module.scss'
import coffeeLetter from './coffeeLetter.jpg'
import letter from './letter.jpg'
import girl from './girl.jpg'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const ImageSection: NextPage = () => {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgWrapper}>
        <Image
          src={coffeeLetter}
          alt="letter writing"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
          className={styles.img}
        />
        <p className={styles.imgText}>Love More</p>
      </div>

      <div className={styles.imgWrapper}>
        <Image
          src={letter}
          alt="letter writing"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
          className={styles.img}
        />
        <p className={styles.imgText}>Write More</p>
      </div>

      <div className={styles.imgWrapper}>
        <Image
          src={girl}
          alt="letter writing"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
          className={styles.img}
        />
        <p className={styles.imgText}>Enjoy More</p>
      </div>
    </div>
  )
}
