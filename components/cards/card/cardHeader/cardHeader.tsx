import type { NextPage } from 'next'
import Image from 'next/image'
import { OwnerType } from 'types'
import styles from './cardHeader.module.scss'

interface Props {
  owner: OwnerType
  i: number
}

export const CardHeader: NextPage<Props> = ({ owner, i }) => {
  const {
    coordinates: coords,
    physicalAddress,
    physicalCity,
    physicalState,
    physicalZip,
    thumbnail,
  } = owner

  return (
    <a
      href={
        coords?.lat
          ? `https://www.google.com/maps/search/${coords.lat},${coords.lng}`
          : `https://www.google.com/maps/search/${physicalAddress.replace(
              /\s/g,
              '+'
            )}+${physicalCity}+${physicalState}+${physicalZip}`
      }
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.outerImageWrapper}>
        <div
          className={styles.innerImageWrapper}
          style={{ position: 'relative', width: '100%', height: '400px' }}
        >
          {thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <Image
              src={`/images/${thumbnail}.jpeg`}
              alt={`image of ${physicalAddress}`}
              layout="fill"
              priority={i > 1 ? false : true}
            />
          ) : (
            <div className={styles.noImage}>image not available</div>
          )}
        </div>
      </div>
    </a>
  )
}
