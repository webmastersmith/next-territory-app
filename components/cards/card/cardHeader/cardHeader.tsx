import type { NextPage } from 'next'
import Image from 'next/image'
import { OwnerType } from 'types'
import styles from './cardHeader.module.scss'

interface Props {
  owner: OwnerType
}
//NextPage<Props>

export const CardHeader: NextPage<Props> = ({ owner }) => {
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
        <div className={styles.innerImageWrapper}>
          {thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`/images/${thumbnail}.jpeg`}
              alt={`image of ${physicalAddress}`}
            />
          ) : (
            <div className={styles.noImage}>image not available</div>
          )}
        </div>
      </div>
    </a>
  )
}
