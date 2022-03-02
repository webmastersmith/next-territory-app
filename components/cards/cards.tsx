import type { NextPage } from 'next'
import { OwnerType } from 'types'
import { Card } from 'components'
//import styles from './cards.module.scss'

interface Props {
  owners: OwnerType[]
}

export const Cards: NextPage<Props> = ({ owners }) => {
  return (
    <div>
      {owners &&
        owners.map((owner) => {
          return <Card owner={owner} key={owner._id} />
        })}
    </div>
  )
}
