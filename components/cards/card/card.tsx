import type { NextPage } from 'next'
import { OwnerType } from 'types'
import { CardBody, CardFooter, CardHeader } from 'components'
import styles from './card.module.scss'

interface Props {
  owner: OwnerType
}

export const Card: NextPage<Props> = ({ owner }) => {
  return (
    <div className={styles.container}>
      <CardHeader owner={owner} />
      <div className={styles.cardBodyWrapper}>
        <CardBody owner={owner} />
        <CardFooter owner={owner} />
      </div>
    </div>
  )
}
