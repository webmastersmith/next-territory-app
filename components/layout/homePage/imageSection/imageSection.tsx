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
        <picture>
          <source
            type="image/avif"
            sizes="(max-width: 424px) 290px"
            srcSet="/coffeeLetter/coffeeLetter-290w218h.avif 290w, /coffeeLetter/coffeeLetter-580w436h.avif 580w, /coffeeLetter/coffeeLetter-870w654h.avif 870w"
          />

          <source
            type="image/webp"
            sizes="(max-width: 424px) 290px"
            srcSet="/coffeeLetter/coffeeLetter-290w218h.webp 290w, /coffeeLetter/coffeeLetter-580w436h.webp 580w, /coffeeLetter/coffeeLetter-870w654h.webp 870w"
          />

          <source
            type="image/jpg"
            sizes="(max-width: 424px) 290px"
            srcSet="/coffeeLetter/coffeeLetter-290w218h.jpg 290w, /coffeeLetter/coffeeLetter-580w436h.jpg 580w, /coffeeLetter/coffeeLetter-870w654h.jpg 870w"
          />

          <source
            type="image/avif"
            sizes="(max-width: 768px) 400px"
            srcSet="/coffeeLetter/coffeeLetter-400w300h.avif 400w, /coffeeLetter/coffeeLetter-800w600h.avif 800w, /coffeeLetter/coffeeLetter-1200w900h.avif 1200w"
          />

          <source
            type="image/webp"
            sizes="(max-width: 768px) 400px"
            srcSet="/coffeeLetter/coffeeLetter-400w300h.webp 400w, /coffeeLetter/coffeeLetter-800w600h.webp 800w, /coffeeLetter/coffeeLetter-1200w900h.webp 1200w"
          />

          <source
            type="image/jpg"
            sizes="(max-width: 768px) 400px"
            srcSet="/coffeeLetter/coffeeLetter-400w300h.jpg 400w, /coffeeLetter/coffeeLetter-800w600h.jpg 800w, /coffeeLetter/coffeeLetter-1200w900h.jpg 1200w"
          />

          <source
            type="image/avif"
            sizes="(min-width: 769px) 245px"
            srcSet="/coffeeLetter/coffeeLetter-245w184h.avif 245w, /coffeeLetter/coffeeLetter-490w368h.avif 490w, /coffeeLetter/coffeeLetter-735w552h.avif 735w"
          />

          <source
            type="image/webp"
            sizes="(min-width: 769px) 245px"
            srcSet="/coffeeLetter/coffeeLetter-245w184h.webp 245w, /coffeeLetter/coffeeLetter-490w368h.webp 490w, /coffeeLetter/coffeeLetter-735w552h.webp 735w"
          />

          <source
            type="image/jpg"
            sizes="(min-width: 769px) 245px"
            srcSet="/coffeeLetter/coffeeLetter-245w184h.jpg 245w, /coffeeLetter/coffeeLetter-490w368h.jpg 490w, /coffeeLetter/coffeeLetter-735w552h.jpg 735w"
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/coffeeLetter/coffeeLetter-400w600h.jpg"
            alt="image of coffee with man writing letter"
            className={styles.coffeeLetterImg}
          />
        </picture>
        <p className={styles.imgText}>Love More</p>
      </div>

      <div className={styles.imgWrapper}>
        <picture>
          <source
            type="image/avif"
            sizes="(max-width: 424px) 290px"
            srcSet="/letter/letter-290w435h.avif 290w, /letter/letter-580w870h.avif 580w, /letter/letter-870w1305h.avif 870w"
          />

          <source
            type="image/webp"
            sizes="(max-width: 424px) 290px"
            srcSet="/letter/letter-290w435h.webp 290w, /letter/letter-580w870h.webp 580w, /letter/letter-870w1305h.webp 870w"
          />

          <source
            type="image/jpg"
            sizes="(max-width: 424px) 290px"
            srcSet="/letter/letter-290w435h.jpg 290w, /letter/letter-580w870h.jpg 580w, /letter/letter-870w1305h.jpg 870w"
          />

          <source
            type="image/avif"
            sizes="(max-width: 768px) 400px"
            srcSet="/letter/letter-400w600h.avif 400w, /letter/letter-800w1200h.avif 800w, /letter/letter-1200w1800h.avif 1200w"
          />

          <source
            type="image/webp"
            sizes="(max-width: 768px) 400px"
            srcSet="/letter/letter-400w600h.webp 400w, /letter/letter-800w1200h.webp 800w, /letter/letter-1200w1800h.webp 1200w"
          />

          <source
            type="image/jpg"
            sizes="(max-width: 768px) 400px"
            srcSet="/letter/letter-400w600h.jpg 400w, /letter/letter-800w1200h.jpg 800w, /letter/letter-1200w1800h.jpg 1200w"
          />

          <source
            type="image/avif"
            sizes="(min-width: 769px) 245px"
            srcSet="/letter/letter-245w368h.avif 245w, /letter/letter-490w736h.avif 490w, /letter/letter-735w1104h.avif 735w"
          />

          <source
            type="image/webp"
            sizes="(min-width: 769px) 245px"
            srcSet="/letter/letter-245w368h.webp 245w, /letter/letter-490w736h.webp 490w, /letter/letter-735w1104h.webp 735w"
          />

          <source
            type="image/jpg"
            sizes="(min-width: 769px) 245px"
            srcSet="/letter/letter-245w368h.jpg 245w, /letter/letter-490w736h.jpg 490w, /letter/letter-735w1104h.jpg 735w"
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/letter/letter-400w600h.jpg"
            alt="image of letter being written"
            className={styles.letterImg}
          />
        </picture>
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
