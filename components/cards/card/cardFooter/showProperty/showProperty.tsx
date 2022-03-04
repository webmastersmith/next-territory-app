import type { NextPage } from 'next'
import styles from './showProperty.module.scss'
import { OwnerType } from 'types'
import { ImprovementBuilder } from './improvement'

interface Props {
  owner: OwnerType
}

export const ShowProperty: NextPage<Props> = ({ owner }) => {
  const uid = () => new Date().getTime() + Math.random().toString(16).slice(2)
  const { improvements } = owner
  return (
    <div>
      <h1>This Property</h1>
      <h2>Improvements</h2>
      <div className={styles.propertyGrid}>
        {improvements[0]?.livingArea ? (
          improvements.map((improvement, idx) => (
            <ImprovementBuilder improvement={improvement} key={uid()} />
          ))
        ) : (
          <p>No improvements to land listed.</p>
        )}
      </div>
    </div>
  )
}
