import type { NextPage } from 'next'
import { OwnerType } from 'types'
import {
  PersonSvg,
  DeedSvg,
  MailingAddressSvg,
  PhysicalAddressSvg,
  ExemptionSvg,
} from 'icons'
import styles from './cardBody.module.scss'

interface Props {
  owner: OwnerType
}
//NextPage<Props>

export const CardBody: NextPage<Props> = ({ owner }) => {
  const {
    landId,
    name,
    deed,
    nameDeedSame,
    physicalAddress,
    physicalCity,
    physicalState,
    physicalZip,
    mailingAddress,
    mailingCity,
    mailingState,
    mailingZip,
  } = owner
  return (
    <div className={styles.cardBodyWrapper}>
      <p>{landId}</p>
      <div className={styles.svgGrid}>
        <PersonSvg />
        <div className={styles.info}>
          <p className={styles.label}>Owner Name</p>
          <p>{name}</p>
        </div>
        <p>{''}</p>

        <DeedSvg />
        <div className={styles.info}>
          <p className={styles.label}>Deed</p>
          <p>{deed}</p>
        </div>
        <p>{''}</p>

        <PhysicalAddressSvg />
        <div className={styles.info}>
          <p className={styles.label}>Physical Address</p>
          <p>{`${physicalAddress} ${physicalCity} ${physicalState} ${physicalZip}`}</p>
        </div>
        <p>{''}</p>

        <MailingAddressSvg />
        <div className={styles.info}>
          <p className={styles.label}>Mailing Address</p>
          <p>{`${mailingAddress} ${mailingCity} ${mailingState} ${mailingZip}`}</p>
        </div>
        <p>{''}</p>

        <ExemptionSvg />
        <div className={styles.info}>
          <p className={styles.label}>Tax Exemptions</p>
          <p>{name}</p>
        </div>
        <p>{''}</p>
      </div>
    </div>
  )
}
