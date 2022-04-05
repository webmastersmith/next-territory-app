import type { NextPage } from 'next'
import styles from './imageSection.module.scss'

export const ImageSection: NextPage = () => {
  let basePath = '/next-territory-app'
  if (process.env.NEXT_PUBLIC_BUILD_TYPE === 'local') {
    basePath = ''
  }

  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgWrapper}>
        <picture>
          <source
            type="image/avif"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-290w435h.avif 290w, ${basePath}/coffeeLetter/coffeeLetter-580w870h.avif 580w, ${basePath}/coffeeLetter/coffeeLetter-870w1305h.avif 870w`}
          />

          <source
            type="image/webp"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-290w435h.webp 290w, ${basePath}/coffeeLetter/coffeeLetter-580w870h.webp 580w, ${basePath}/coffeeLetter/coffeeLetter-870w1305h.webp 870w`}
          />

          <source
            type="image/jpg"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-290w435h.jpg 290w, ${basePath}/coffeeLetter/coffeeLetter-580w870h.jpg 580w, ${basePath}/coffeeLetter/coffeeLetter-870w1305h.jpg 870w`}
          />

          <source
            type="image/avif"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-400w600h.avif 400w, ${basePath}/coffeeLetter/coffeeLetter-800w1200h.avif 800w, ${basePath}/coffeeLetter/coffeeLetter-1200w1800h.avif 1200w`}
          />

          <source
            type="image/webp"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-400w600h.webp 400w, ${basePath}/coffeeLetter/coffeeLetter-800w1200h.webp 800w, ${basePath}/coffeeLetter/coffeeLetter-1200w1800h.webp 1200w`}
          />

          <source
            type="image/jpg"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-400w600h.jpg 400w, ${basePath}/coffeeLetter/coffeeLetter-800w1200h.jpg 800w, ${basePath}/coffeeLetter/coffeeLetter-1200w1800h.jpg 1200w`}
          />

          <source
            type="image/avif"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-245w368h.avif 245w, ${basePath}/coffeeLetter/coffeeLetter-490w736h.avif 490w, ${basePath}/coffeeLetter/coffeeLetter-735w1104h.avif 735w`}
          />

          <source
            type="image/webp"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-245w368h.webp 245w, ${basePath}/coffeeLetter/coffeeLetter-490w736h.webp 490w, ${basePath}/coffeeLetter/coffeeLetter-735w1104h.webp 735w`}
          />

          <source
            type="image/jpg"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-245w368h.jpg 245w, ${basePath}/coffeeLetter/coffeeLetter-490w736h.jpg 490w, ${basePath}/coffeeLetter/coffeeLetter-735w1104h.jpg 735w`}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/coffeeLetter/coffeeLetter-400w600h.jpg`}
            alt="image of man writing letter"
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
            srcSet={`${basePath}/letter/letter-290w435h.avif 290w, ${basePath}/letter/letter-580w870h.avif 580w, ${basePath}/letter/letter-870w1305h.avif 870w`}
          />

          <source
            type="image/webp"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/letter/letter-290w435h.webp 290w, ${basePath}/letter/letter-580w870h.webp 580w, ${basePath}/letter/letter-870w1305h.webp 870w`}
          />

          <source
            type="image/jpg"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/letter/letter-290w435h.jpg 290w, ${basePath}/letter/letter-580w870h.jpg 580w, ${basePath}/letter/letter-870w1305h.jpg 870w`}
          />

          <source
            type="image/avif"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/letter/letter-400w600h.avif 400w, ${basePath}/letter/letter-800w1200h.avif 800w, ${basePath}/letter/letter-1200w1800h.avif 1200w`}
          />

          <source
            type="image/webp"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/letter/letter-400w600h.webp 400w, ${basePath}/letter/letter-800w1200h.webp 800w, ${basePath}/letter/letter-1200w1800h.webp 1200w`}
          />

          <source
            type="image/jpg"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/letter/letter-400w600h.jpg 400w, ${basePath}/letter/letter-800w1200h.jpg 800w, ${basePath}/letter/letter-1200w1800h.jpg 1200w`}
          />

          <source
            type="image/avif"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/letter/letter-245w368h.avif 245w, ${basePath}/letter/letter-490w736h.avif 490w, ${basePath}/letter/letter-735w1104h.avif 735w`}
          />

          <source
            type="image/webp"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/letter/letter-245w368h.webp 245w, ${basePath}/letter/letter-490w736h.webp 490w, ${basePath}/letter/letter-735w1104h.webp 735w`}
          />

          <source
            type="image/jpg"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/letter/letter-245w368h.jpg 245w, ${basePath}/letter/letter-490w736h.jpg 490w, ${basePath}/letter/letter-735w1104h.jpg 735w`}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/letter/letter-400w600h.jpg`}
            alt="image of pen and letter"
            className={styles.letterImg}
          />
        </picture>
        <p className={styles.imgText}>Write More</p>
      </div>

      <div className={styles.imgWrapper}>
        <picture>
          <source
            type="image/avif"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/girl/girl-290w433h.avif 290w, ${basePath}/girl/girl-580w866h.avif 580w, ${basePath}/girl/girl-870w1299h.avif 870w`}
          />

          <source
            type="image/webp"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/girl/girl-290w433h.webp 290w, ${basePath}/girl/girl-580w866h.webp 580w, ${basePath}/girl/girl-870w1299h.webp 870w`}
          />

          <source
            type="image/jpg"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/girl/girl-290w433h.jpg 290w, ${basePath}/girl/girl-580w866h.jpg 580w, ${basePath}/girl/girl-870w1299h.jpg 870w`}
          />

          <source
            type="image/avif"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/girl/girl-400w597h.avif 400w, ${basePath}/girl/girl-800w1194h.avif 800w, ${basePath}/girl/girl-1200w1791h.avif 1200w`}
          />

          <source
            type="image/webp"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/girl/girl-400w597h.webp 400w, ${basePath}/girl/girl-800w1194h.webp 800w, ${basePath}/girl/girl-1200w1791h.webp 1200w`}
          />

          <source
            type="image/jpg"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/girl/girl-400w597h.jpg 400w, ${basePath}/girl/girl-800w1194h.jpg 800w, ${basePath}/girl/girl-1200w1791h.jpg 1200w`}
          />

          <source
            type="image/avif"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/girl/girl-245w366h.avif 245w, ${basePath}/girl/girl-490w732h.avif 490w, ${basePath}/girl/girl-735w1098h.avif 735w`}
          />

          <source
            type="image/webp"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/girl/girl-245w366h.webp 245w, ${basePath}/girl/girl-490w732h.webp 490w, ${basePath}/girl/girl-735w1098h.webp 735w`}
          />

          <source
            type="image/jpg"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/girl/girl-245w366h.jpg 245w, ${basePath}/girl/girl-490w732h.jpg 490w, ${basePath}/girl/girl-735w1098h.jpg 735w`}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/girl/girl-400w600h.jpg`}
            alt="girl writing letter in quiet spot"
            className={styles.girlImg}
          />
        </picture>

        <p className={styles.imgText}>Enjoy More</p>
      </div>
    </div>
  )
}
