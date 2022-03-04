import type { NextPage } from 'next'
import { useState } from 'react'
import { OwnerType } from 'types'
import styles from './cardFooter.module.scss'
import classes from 'styles/button.module.scss'
import { DownArrowSvg, UpArrowSvg, HomeSvg, MapSvg } from 'icons'
import tools from 'styles/tooltip.module.scss'
import { ShowProperty } from 'components'

interface Props {
  owner: OwnerType
}

export const CardFooter: NextPage<Props> = ({ owner }) => {
  const [show, setShow] = useState(false)
  const { urlOwnerDetails, urlLandMap } = owner

  return (
    <div className={styles.buttonGrid}>
      <button
        className={`${classes.showButton} ${styles.showButton}`}
        onClick={() => setShow(!show)}
      >
        {show ? 'Show Less' : 'Show More'}
        {show ? (
          <UpArrowSvg className={styles.arrow} />
        ) : (
          <DownArrowSvg className={styles.arrow} />
        )}
      </button>

      {/* show property content */}
      <div className={styles.showContent}>
        {show && <ShowProperty owner={owner} />}
      </div>

      {/* Home Button */}
      <div className={`${styles.homeButton}`}>
        <div className={`${tools.tooltipButtons}`}>
          <a href={urlOwnerDetails} target="_blank" rel="noreferrer">
            <button className={`${classes.homeButton}`}>
              <HomeSvg />
            </button>
          </a>
          <span className={tools.tooltipText}>Property Details</span>
        </div>
      </div>

      {/* MapButton */}
      <div className={`${styles.mapButton}`}>
        <div className={`${tools.tooltipButtons}`}>
          <a href={urlLandMap} target="_blank" rel="noreferrer">
            <button className={`${classes.mapButton} ${styles.mapButton}`}>
              <MapSvg />
            </button>
          </a>
          <span className={tools.tooltipText}>Map Details</span>
        </div>
      </div>
    </div>
  )
}
