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

  // const color = [
  //   'glossyButtonBlue',
  //   'glossyButtonGold',
  //   'glossyButtonGreen',
  //   'glossyButtonRed',
  // ]

  return (
    <div className={styles.container}>
      {mount &&
        !!files.length &&
        files.map((file) => {
          return (
            <Link href={`/${file}`} key={file} prefetch={false}>
              <a>
                <button
                  className={`${styles.glossyButton} ${
                    +file <= 58
                      ? styles.glossyButtonRed
                      : styles.glossyButtonGold
                  }`}
                  onClick={() => localStorage.clear()}
                >
                  {file}
                </button>
              </a>
            </Link>
          )
        })}
    </div>
  )
}
