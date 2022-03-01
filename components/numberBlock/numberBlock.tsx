import type { NextPage } from 'next'
import styles from './numberBlock.module.scss'

interface Props {
  files: string[]
}
export const NumberBlock: NextPage<Props> = ({ files }) => {
  const color = [
    'glossyButtonBlue',
    'glossyButtonGold',
    'glossyButtonGreen',
    'glossyButtonRed',
  ]
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        {!!files.length &&
          files.map((file) => {
            const num = Math.round(Math.random() * 3) //0-5
            console.log(num)

            return (
              <span
                key={file}
                className={`${styles.glossyButton} ${styles[color[num]]}`}
              >
                {file}
              </span>
            )
          })}
      </div>
    </div>
  )
}
