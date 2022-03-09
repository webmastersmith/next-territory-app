import type { NextPage } from 'next'
import Image from 'next/image'
import { OwnerType } from 'types'
import styles from './cardHeader.module.scss'
import { TrashCanSvg } from 'icons'
import { useOwners, OwnerContextType } from 'store'
import { useCallback } from 'react'

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
  const { deleteCard, setLoading, loading } = useOwners() as OwnerContextType

  const handleClick = useCallback((id: string) => {
    setLoading(true)
    setTimeout(() => deleteCard(id), 0)
    setTimeout(() => setLoading(false), 0)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`${styles.outerImageWrapper} ${
        loading ? 'cursorWait' : 'cursorDefault'
      }`}
    >
      <TrashCanSvg
        className={styles.trash}
        onClick={() => handleClick(landId)}
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
          className={`${styles.innerImageWrapper} ${
            loading ? 'cursorWait' : 'cursorUnset'
          }`}
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
