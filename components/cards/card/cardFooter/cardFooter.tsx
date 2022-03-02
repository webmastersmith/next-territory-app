import type { NextPage } from 'next'
import { OwnerType } from 'types'
//import styles from './cardFooter.module.scss'

interface Props {
  owner: OwnerType
}

export const CardFooter: NextPage<Props> = ({ owner }) => {
  return <div>CardFooter</div>
}
