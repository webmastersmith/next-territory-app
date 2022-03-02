import type { NextPage } from 'next'
import { OwnerType } from 'types'
import { CardBody, CardFooter, CardHeader } from 'components'
//import styles from './card.module.scss'

interface Props {
  owner: OwnerType
}

export const Card: NextPage<Props> = ({ owner }) => {
  return (
    <div>
      <CardHeader owner={owner} />
      <CardBody owner={owner} />
      <CardFooter owner={owner} />
    </div>
  )
}
