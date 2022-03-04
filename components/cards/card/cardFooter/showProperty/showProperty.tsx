import type { NextPage } from 'next'
import styles from './showProperty.module.scss'
import { OwnerType } from 'types'
import { ImprovementBuilder } from './improvement'
import { LandBuilder } from './land'
import { uid } from 'components'

interface Props {
  owner: OwnerType
}

export const ShowProperty: NextPage<Props> = ({ owner }) => {
  const { improvements, lands, ownerProperty, landId } = owner
  // get price
  const [property] = ownerProperty.filter((prop) => landId === prop.propertyId)
  const { price } = property

  return (
    <div className={styles.showPropertyContainer}>
      {/* Logic remove -margin if no land listed */}
      <h2
        className={styles[improvements[0]?.livingArea ? 'h2Improvements' : 't']}
      >
        IMPROVEMENTS
      </h2>
      <div className={styles.improvementGrid}>
        {improvements[0]?.livingArea ? (
          improvements.map((improve) => {
            return <ImprovementBuilder improve={improve} key={uid()} />
          })
        ) : (
          <p>No improvements to land listed.</p>
        )}
      </div>

      {/* lands */}
      <h2>LAND</h2>
      <div className={styles.landGrid}>
        {lands[0]?.landType && (
          <>
            <span className={styles.landHeader}>Type</span>
            <span className={styles.landHeader}>Acres</span>
            <span className={styles.landHeader}>Market Value</span>
            <span className={styles.landHeader}>Production Value</span>
          </>
        )}
        {lands[0]?.landType ? (
          lands.map((land) => {
            return <LandBuilder land={land} key={uid()} />
          })
        ) : (
          <p>No land listed.</p>
        )}
      </div>

      {/* Total Tax Value */}
      <h2 className={styles.h2Price}>
        TOTAL TAX VALUE: <span className={styles.price}>{price}</span>
      </h2>
    </div>
  )
}
