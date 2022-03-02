import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './numberBlock.module.scss'

interface Props {
  files: string[]
}
export const NumberBlock: NextPage<Props> = ({ files }) => {
  const [mount, setMount] = useState(false)
  useEffect(() => {
    setMount(true)
  }, [])

  const color = [
    'glossyButtonBlue',
    'glossyButtonGold',
    'glossyButtonGreen',
    'glossyButtonRed',
  ]

  return (
    <div className={styles.outerContainer}>
      <h1 className={styles.title}>Choose your territory</h1>

      <div className={styles.innerContainer}>
        {mount &&
          !!files.length &&
          files.map((file) => {
            const num = Math.round(Math.random() * 3) //0-5

            return (
              <Link href={`/${file}`} key={file}>
                <a>
                  <button
                    className={`${styles.glossyButton} ${styles[color[num]]}`}
                  >
                    {file}
                  </button>
                </a>
              </Link>
            )
          })}
      </div>
    </div>
  )
}
