import type { NextPage } from 'next'
import styles from './imageSection.module.scss'

export const ImageSection: NextPage = () => {
  let basePath = '/next-territory-app'
  if (process.env.NODE_ENV === 'development') {
    basePath = ''
  }

  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgWrapper}>
        <picture>
          <source
            type="image/avif"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-290w218h.avif 290w, ${basePath}/coffeeLetter/coffeeLetter-580w436h.avif 580w, ${basePath}/coffeeLetter/coffeeLetter-870w654h.avif 870w`}
          />

          <source
            type="image/webp"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-290w218h.webp 290w, ${basePath}/coffeeLetter/coffeeLetter-580w436h.webp 580w, ${basePath}/coffeeLetter/coffeeLetter-870w654h.webp 870w`}
          />

          <source
            type="image/jpg"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-290w218h.jpg 290w, ${basePath}/coffeeLetter/coffeeLetter-580w436h.jpg 580w, ${basePath}/coffeeLetter/coffeeLetter-870w654h.jpg 870w`}
          />

          <source
            type="image/avif"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-400w300h.avif 400w, ${basePath}/coffeeLetter/coffeeLetter-800w600h.avif 800w, ${basePath}/coffeeLetter/coffeeLetter-1200w900h.avif 1200w`}
          />

          <source
            type="image/webp"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-400w300h.webp 400w, ${basePath}/coffeeLetter/coffeeLetter-800w600h.webp 800w, ${basePath}/coffeeLetter/coffeeLetter-1200w900h.webp 1200w`}
          />

          <source
            type="image/jpg"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-400w300h.jpg 400w, ${basePath}/coffeeLetter/coffeeLetter-800w600h.jpg 800w, ${basePath}/coffeeLetter/coffeeLetter-1200w900h.jpg 1200w`}
          />

          <source
            type="image/avif"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-245w184h.avif 245w, ${basePath}/coffeeLetter/coffeeLetter-490w368h.avif 490w, ${basePath}/coffeeLetter/coffeeLetter-735w552h.avif 735w`}
          />

          <source
            type="image/webp"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-245w184h.webp 245w, ${basePath}/coffeeLetter/coffeeLetter-490w368h.webp 490w, ${basePath}/coffeeLetter/coffeeLetter-735w552h.webp 735w`}
          />

          <source
            type="image/jpg"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/coffeeLetter/coffeeLetter-245w184h.jpg 245w, ${basePath}/coffeeLetter/coffeeLetter-490w368h.jpg 490w, ${basePath}/coffeeLetter/coffeeLetter-735w552h.jpg 735w`}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/coffeeLetter/coffeeLetter-400w600h.jpg`}
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
            alt="image of letter being written"
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
            srcSet={`${basePath}/girl/girl-290w421h.avif 290w, ${basePath}/girl/girl-580w842h.avif 580w, ${basePath}/girl/girl-870w1263h.avif 870w`}
          />

          <source
            type="image/webp"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/girl/girl-290w421h.webp 290w, ${basePath}/girl/girl-580w842h.webp 580w, ${basePath}/girl/girl-870w1263h.webp 870w`}
          />

          <source
            type="image/jpg"
            sizes="(max-width: 424px) 290px"
            srcSet={`${basePath}/girl/girl-290w421h.jpg 290w, ${basePath}/girl/girl-580w842h.jpg 580w, ${basePath}/girl/girl-870w1263h.jpg 870w`}
          />

          <source
            type="image/avif"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/girl/girl-400w581h.avif 400w, ${basePath}/girl/girl-800w1162h.avif 800w, ${basePath}/girl/girl-1200w1743h.avif 1200w`}
          />

          <source
            type="image/webp"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/girl/girl-400w581h.webp 400w, ${basePath}/girl/girl-800w1162h.webp 800w, ${basePath}/girl/girl-1200w1743h.webp 1200w`}
          />

          <source
            type="image/jpg"
            sizes="(max-width: 768px) 400px"
            srcSet={`${basePath}/girl/girl-400w581h.jpg 400w, ${basePath}/girl/girl-800w1162h.jpg 800w, ${basePath}/girl/girl-1200w1743h.jpg 1200w`}
          />

          <source
            type="image/avif"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/girl/girl-245w356h.avif 245w, ${basePath}/girl/girl-490w712h.avif 490w, ${basePath}/girl/girl-735w1068h.avif 735w`}
          />

          <source
            type="image/webp"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/girl/girl-245w356h.webp 245w, ${basePath}/girl/girl-490w712h.webp 490w, ${basePath}/girl/girl-735w1068h.webp 735w`}
          />

          <source
            type="image/jpg"
            sizes="(min-width: 769px) 245px"
            srcSet={`${basePath}/girl/girl-245w356h.jpg 245w, ${basePath}/girl/girl-490w712h.jpg 490w, ${basePath}/girl/girl-735w1068h.jpg 735w`}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/girl/girl-400w600h.jpg`}
            alt="image of girl writing letter"
            className={styles.girlImg}
          />
        </picture>
        <p className={styles.imgText}>Enjoy More</p>
      </div>
    </div>
  )
}
