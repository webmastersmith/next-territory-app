import type { NextPage } from 'next'
import styles from './cardBody.module.scss'
import { GoogleMapSvg } from 'icons'
import { Exemption } from 'types'
import classes from 'styles/tooltip.module.scss'

type BodyData = {
  svg: React.SVGProps<SVGSVGElement>
  label: string
  text: string | Exemption[]
  checkmark: React.SVGProps<SVGSVGElement> | string
}
interface Props {
  bodyData: BodyData
}

export const Exemptions: NextPage<Props> = ({ bodyData }) => {
  const { svg, label, text } = bodyData
  const exemptName: string[] = []

  const exemptText: string[] = []
  if (Array.isArray(text)) {
    text.forEach(({ name, description }) => {
      exemptName.push(name)
      exemptText.push(`${name}: ${description}\n`)
    })
  }

  return (
    <>
      {svg}
      <div className={styles.info}>
        <div className={styles.tooltip}>
          <p className={styles.label}>{label}</p>

          <div className={classes.tooltip}>
            <span className={classes.tooltipText}>
              {`EXEMPTION CODES:\n${exemptText.join('')}`}
            </span>
            <span
              className={
                styles[exemptName.join(', ') === 'EMPTY' ? 'grey' : 'green']
              }
            >
              {exemptName.join(', ')}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
