import type { NextPage } from 'next'
import { OwnerType } from 'types'
import {
  PersonSvg,
  DeedSvg,
  MailingAddressSvg,
  PhysicalAddressSvg,
} from 'icons'
import styles from './cardBody.module.scss'

interface Props {
  owner: OwnerType
}
//NextPage<Props>

export const CardBody: NextPage<Props> = ({ owner }) => {
  return (
    <div className={styles.cardBodyWrapper}>
      <PersonSvg />
      <DeedSvg />
      <PhysicalAddressSvg />
      <MailingAddressSvg />
    </div>
  )
}
