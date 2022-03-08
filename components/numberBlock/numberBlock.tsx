import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './numberBlock.module.scss'

interface Props {
  files: string[]
}
export const NumberBlock: NextPage<Props> = ({ files }) => {
  const [mount, setMount] = useState(false)
  // prevents map loading error before page loads.
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
              <Link href={`/${file}`} key={file} prefetch={false}>
                <a>
                  <button
                    className={`${styles.glossyButton} ${styles[color[num]]}`}
                    onClick={() => localStorage.clear()}
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
