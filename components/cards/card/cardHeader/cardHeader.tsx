import type { NextPage } from 'next'
import { OwnerType } from 'types'
//import styles from './cardHeader.module.scss'

interface Props {
  owner: OwnerType
}
//NextPage<Props>

export const CardHeader: NextPage<Props> = ({ owner }) => {
  return <div>CardHeader</div>
}
