import type { NextPage } from 'next'
import { OwnerType } from 'types'
//import styles from './cardBody.module.scss'

interface Props {
  owner: OwnerType
}
//NextPage<Props>

export const CardBody: NextPage<Props> = ({ owner }) => {
  return <div>CardBody</div>
}
