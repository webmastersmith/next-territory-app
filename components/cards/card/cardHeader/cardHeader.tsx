import type { NextPage } from 'next'
import Image from 'next/image'
import { OwnerType } from 'types'
import styles from './cardHeader.module.scss'
import { TrashCanSvg } from 'icons'
import { useOwners, OwnerContextType } from 'store'

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
    landId,
  } = owner
  const { deleteCard } = useOwners() as OwnerContextType

  return (
    <div className={styles.outerImageWrapper}>
      <TrashCanSvg
        className={styles.trash}
        onClick={() => deleteCard(owner.landId)}
      />
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
        <div
          className={styles.innerImageWrapper}
          style={{ position: 'relative', width: '100%', height: '400px' }}
        >
          {thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <Image
              src={`/images/${thumbnail}.jpeg`}
              alt={`image of ${physicalAddress}`}
              priority={i > 1 ? false : true}
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <div className={styles.noImage}>image not available</div>
          )}
        </div>
      </a>
    </div>
  )
}
