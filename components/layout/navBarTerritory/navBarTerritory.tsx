import type { NextPage } from 'next'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import styles from './navBarTerritory.module.scss'
import { useOwners, OwnerContextType } from 'store'
import { SearchForm } from 'components'
import { HomeWorkIcon } from 'icons'
import { PrinterSvg, SaveSvg, TrashCanSvg, SortAZSvg, Sort09Svg } from 'icons'
import { OwnerType } from 'types'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const NavBarTerritory: NextPage = () => {
  const [isSort, setIsSort] = useState<boolean>(false)
  const [myBlob, setMyBlob] = useState('')
  const [mySave, setMySave] = useState('')
  const { owners, searchMode, search, sortNums, loading, setLoading } =
    useOwners() as OwnerContextType

  useEffect(() => {
    //if true num sort
    if (isSort) {
      sortNums('number')
    } else {
      sortNums()
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSort])

  useEffect(() => {
    setMyBlob(
      URL.createObjectURL(
        new Blob(print(searchMode ? search : owners), {
          type: 'text/plain',
        })
      )
    )
    setMySave(
      URL.createObjectURL(
        new Blob([JSON.stringify(searchMode ? search : owners)], {
          type: 'text/json',
        })
      )
    )
  }, [searchMode, search, owners])

  function print(owners: OwnerType[]) {
    return owners.map((owner) => {
      const { phoneNumbers } = owner
      const phoneAddress = phoneNumbers
        .map((person) => {
          const { name, contacts } = person
          const personContact = contacts
            .map((contact) => {
              const { address, phoneNumber } = contact
              const addr =
                `\t${address} ${phoneNumber}`.replaceAll(/\r?\n/g, ' ') + '\r\n'
              return addr
            })
            .join('')
          return `${name}\r\n${personContact}`
        })
        .join(' ')
      let phone = '\r\nPhone Number: EMPTY\r\n'
      if (/[a-z0-9]+/.test(phoneAddress)) {
        phone = '\r\n' + `PhoneNumber: ${phoneAddress}\r\n`
      }

      return `Property ID: ${owner.landId}\r\nName: ${owner.name}\nProperty Address: ${owner.physicalAddress} ${owner.physicalCity} ${owner.physicalState} ${owner.physicalZip}\r\nMailing Address:  ${owner.mailingAddress} ${owner.mailingCity} ${owner.mailingState} ${owner.mailingZip}${phone}-----------------------------------------------\r\n\r\n`
    })
  }

  const handleSort = useCallback(() => {
    setLoading(true)
    setTimeout(() => setIsSort(!isSort), 0)
    setTimeout(() => setLoading(false), 0)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSort])

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <Link href={'/'}>
          <a>
            <HomeWorkIcon className={styles.mainIcon} />
          </a>
        </Link>
        <div className={styles.territory}>
          <h1>Territory {owners?.[0]?.territoryNumber}</h1>
          <span className={styles.numText}>
            {searchMode ? search.length : owners.length} Territories
          </span>
        </div>
      </div>

      <SearchForm />

      <div className={styles.iconUtils}>
        <a
          href={myBlob}
          target="_blank"
          download={`Territory_${owners[0].territoryNumber}.txt`}
          rel="noreferrer"
          className="tooltip-bottom"
          data-tooltip="Print Addresses"
        >
          <PrinterSvg />
        </a>

        <a
          href={mySave}
          target="_blank"
          rel="noreferrer"
          download={`Territory_${owners[0].territoryNumber}.json`}
        >
          <SaveSvg />
        </a>

        {isSort ? (
          <SortAZSvg
            onClick={handleSort}
            className={loading ? 'cursorWait' : 'cursorDefault'}
          />
        ) : (
          <Sort09Svg
            onClick={handleSort}
            className={loading ? 'cursorWait' : 'cursorDefault'}
          />
        )}
        <Link href={'/'}>
          <a>
            <TrashCanSvg
              className={styles.trashcan}
              onClick={() => localStorage.clear()}
            />
          </a>
        </Link>
      </div>
    </header>
  )
}
