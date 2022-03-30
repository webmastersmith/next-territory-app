import type { NextPage } from 'next'
import styles from './hero.module.scss'
import { HomeWorkIcon } from 'icons'
import animation from 'styles/float.module.css'

export const Hero: NextPage = () => {
  let basePath = '/next-territory-app'
  if (process.env.NEXT_PUBLIC_BUILD_TYPE === 'local') {
    basePath = ''
  }

  return (
    <header className={styles.header}>
      <HomeWorkIcon className={styles.mainIcon} />

      <h1 className={styles.title}>Lufkin Address Helper</h1>

      {/* <div className={styles.bgImg}>
        <Image
          src={pen}
          alt="letter writing"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
          className={styles.img}
        />
      </div> */}

      <picture className={styles.picture}>
        <source
          type="image/avif"
          media="(max-width: 375px)"
          srcSet={`${basePath}/pen/pen-375w281h.avif 375w, ${basePath}/pen/pen-750w562h.avif 750w, ${basePath}/pen/pen-1125w843h.avif 1125w`}
        />

        <source
          type="image/webp"
          media="(max-width: 375px)"
          srcSet={`${basePath}/pen/pen-375w281h.webp 375w, ${basePath}/pen/pen-750w562h.webp 750w, ${basePath}/pen/pen-1125w843h.webp 1125w`}
        />

        <source
          type="image/jpg"
          media="(max-width: 375px)"
          srcSet={`${basePath}/pen/pen-375w281h.jpg 375w, ${basePath}/pen/pen-750w562h.jpg 750w, ${basePath}/pen/pen-1125w843h.jpg 1125w`}
        />

        <source
          type="image/avif"
          media="(max-width: 768px)"
          srcSet={`${basePath}/pen/pen-768w576h.avif 768w, ${basePath}/pen/pen-1536w1152h.avif 1536w, ${basePath}/pen/pen-2304w1728h.avif 2304w`}
        />

        <source
          type="image/webp"
          media="(max-width: 768px)"
          srcSet={`${basePath}/pen/pen-768w576h.webp 768w, ${basePath}/pen/pen-1536w1152h.webp 1536w, ${basePath}/pen/pen-2304w1728h.webp 2304w`}
        />

        <source
          type="image/jpg"
          media="(max-width: 768px)"
          srcSet={`${basePath}/pen/pen-768w576h.jpg 768w, ${basePath}/pen/pen-1536w1152h.jpg 1536w, ${basePath}/pen/pen-2304w1728h.jpg 2304w`}
        />

        <source
          type="image/avif"
          media="(min-width: 769px)"
          srcSet={`${basePath}/pen/pen-1440w1080h.avif 1440w, ${basePath}/pen/pen-2880w2160h.avif 2880w, ${basePath}/pen/pen-4320w3240h.avif 4320w`}
        />

        <source
          type="image/webp"
          media="(min-width: 769px)"
          srcSet={`${basePath}/pen/pen-1440w1080h.webp 1440w, ${basePath}/pen/pen-2880w2160h.webp 2880w, ${basePath}/pen/pen-4320w3240h.webp 4320w`}
        />

        <source
          type="image/jpg"
          media="(min-width: 769px)"
          srcSet={`${basePath}/pen/pen-1440w1080h.jpg 1440w, ${basePath}/pen/pen-2880w2160h.jpg 2880w, ${basePath}/pen/pen-4320w3240h.jpg 4320w`}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/pen/pen-1440w1080h.jpg`}
          alt="pen with letter"
          className={styles.penImg}
        />
      </picture>

      <picture>
        <source
          type="image/avif"
          srcSet="/hero/heroCard-300w459h.avif 300w, /hero/heroCard-600w918h.avif 600w, /hero/heroCard-900w1377h.avif 900w"
        />

        <source
          type="image/webp"
          srcSet="/hero/heroCard-300w459h.webp 300w, /hero/heroCard-600w918h.webp 600w, /hero/heroCard-900w1377h.webp 900w"
        />

        <source
          type="image/jpg"
          srcSet="/hero/heroCard-300w459h.jpg 300w, /hero/heroCard-600w918h.jpg 600w, /hero/heroCard-900w1377h.jpg 900w"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/heroCard-300w459h.jpg"
          alt="territory card"
          className={`${styles.heroImg} ${animation.float}`}
          width={300}
          height={459}
        />
      </picture>
    </header>
  )
}
