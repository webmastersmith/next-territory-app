import type { NextPage } from 'next'
import styles from './cardBody.module.scss'
import { Exemption } from 'types'

type BodyData = {
  svg: React.SVGProps<SVGSVGElement>
  label: string
  text: string | Exemption[]
  checkmark: React.SVGProps<SVGSVGElement> | string
}
interface Props {
  bodyData: BodyData
}

export const OwnerDeed: NextPage<Props> = ({ bodyData }) => {
  const { svg, label, text, checkmark } = bodyData
  if (label.includes('Owner')) {
    return (
      <>
        {svg}
        <div className={styles.info}>
          <p className={styles.label}>{label}</p>
          <p>{text}</p>
        </div>
        <p>{''}</p>
      </>
    )
  } else {
    // Deed
    return (
      <>
        {svg}
        <div className={styles.info}>
          <p className={styles.label}>{label}</p>
          <p>{text}</p>
        </div>
        <p>{checkmark}</p>
      </>
    )
  }
}
