import type { NextPage } from 'next'
import styles from './showProperty.module.scss'
import { Land } from 'types'

interface Props {
  land: Land
}

export const LandBuilder: NextPage<Props> = ({ land }) => {
  const { acres, landType, marketValue, prodValue } = land
  return (
    <>
      <span className={styles.landType}>{landType}</span>
      <span className={styles.acres}>{parseFloat(acres).toFixed(2)}</span>
      <span className={styles.marketValue}>{marketValue}</span>
      <span className={styles.prodValue}>{prodValue}</span>
    </>
  )
}
