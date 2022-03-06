import type { NextPage } from 'next'
import { OwnerType } from 'types'
import { CardBody, CardFooter, CardHeader } from 'components'
import styles from './card.module.scss'

interface Props {
  owner: OwnerType
  i: number
}

export const Card: NextPage<Props> = ({ owner, i }) => {
  console.log('card ran')

  return (
    <div className={styles.container}>
      <CardHeader owner={owner} i={i} />
      <div className={styles.cardBodyWrapper}>
        <CardBody owner={owner} />
        <CardFooter owner={owner} />
      </div>
    </div>
  )
}
