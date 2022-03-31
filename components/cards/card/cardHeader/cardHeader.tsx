import type { NextPage } from 'next'
import { OwnerType } from 'types'
import styles from './cardHeader.module.scss'
import { TrashCanSvg } from 'icons'
import { LazyImg } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, deleteOwner, setLoading } from 'store'

interface Props {
  owner: OwnerType
  i: number
}

export const CardHeader: NextPage<Props> = ({ owner, i }) => {
  let basePath = '/next-territory-app'
  if (process.env.NEXT_PUBLIC_BUILD_TYPE === 'local') {
    basePath = ''
  }
  const { loading } = useSelector((state: RootState) => state.ownerReducer)
  const dispatch = useDispatch()

  const {
    coordinates: coords,
    physicalAddress,
    physicalCity,
    physicalState,
    physicalZip,
    thumbnail,
    landId,
  } = owner

  return (
    <div
      className={`${styles.outerImageWrapper} ${
        loading ? 'cursorWait' : 'cursorDefault'
      }`}
    >
      <TrashCanSvg
        className={styles.trash}
        onClick={() => dispatch(deleteOwner(landId))}
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
        >
          {thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <LazyImg
              src={`${basePath}/images/${thumbnail}.jpeg`}
              alt={`image of ${physicalAddress}`}
              loading={i < 2 ? 'eager' : 'lazy'}
            />
          ) : (
            <div className={styles.noImage}>image not available</div>
          )}
        </div>
      </a>
    </div>
  )
}
