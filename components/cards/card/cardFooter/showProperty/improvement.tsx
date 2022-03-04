import type { NextPage } from 'next'
import styles from './improvements.module.scss'
import { Improvement } from 'types'

interface Props {
  improvement: Improvement
}
//NextPage<Props>

export const ImprovementBuilder: NextPage<Props> = ({ improvement }) => {
  // <ImprovementBlock key={idx}>
  //   <div className="header">
  //     <span className="improvement">{improvement}</span>
  //     <span className="living-area">{livingArea}</span>
  //     <span className="value">{value}</span>
  //   </div>
  //   {details[0]?.description &&
  //     details.map((detail) => {
  //       const { description, yearBuild, sqft } = detail
  //       return (
  //         <div class="details">
  //           <span className="description">{description}</span>
  //           <span className="year-build">Year Built: {yearBuild}</span>
  //           <span className="sqft">Sqft: {sqft}</span>
  //         </div>
  //       )
  //     })}
  // </ImprovementBlock>
  return <div>Improvements</div>
}
