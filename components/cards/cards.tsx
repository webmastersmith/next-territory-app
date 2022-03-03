import type { NextPage } from 'next'
import { OwnerType } from 'types'
import { Card } from 'components'
import styles from './cards.module.scss'

interface Props {
  owners: OwnerType[]
}

export const Cards: NextPage<Props> = ({ owners }) => {
  return (
    <div className={styles.container}>
      {owners &&
        owners.map((owner, i) => {
          return <Card owner={owner} key={owner._id} i={i} />
        })}
    </div>
  )
}
