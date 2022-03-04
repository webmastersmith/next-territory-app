import type { NextPage } from 'next'
import styles from './showProperty.module.scss'
import { Improvement } from 'types'

interface Props {
  improve: Improvement
}
//NextPage<Props>

export const ImprovementBuilder: NextPage<Props> = ({ improve }) => {
  const { improvement, details, livingArea, value } = improve

  return (
    <>
      <span className={styles.improvement}>{improvement}</span>
      <span className={styles.livingArea}>{livingArea}</span>
      <span className={styles.value}>{value}</span>
      {details.map((detail) => {
        const { description, sqft, yearBuild } = detail
        return (
          <>
            <span className={styles.description}>{description}</span>
            <span className={styles.yearBuild}>Year Built: {yearBuild}</span>
            <span className={styles.sqft}>Sqft: {sqft}</span>
          </>
        )
      })}
    </>
  )
}
