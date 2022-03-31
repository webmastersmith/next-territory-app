import type { NextPage } from 'next'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import styles from './navBarTerritory.module.scss'
import { SearchForm } from 'components'
import {
  PrinterSvg,
  SaveSvg,
  TrashCanSvg,
  SortAZSvg,
  Sort09Svg,
  UploadSvg,
  HomeWorkIcon,
} from 'icons'
import { OwnerType } from 'types'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import { setOwners, sortCards } from 'store/ownerSlice'

export const NavBarTerritory: NextPage = () => {
  const [myBlob, setMyBlob] = useState('')
  const [mySave, setMySave] = useState('')
  const dispatch = useDispatch()
  const { owners, loading, search, searchMode, isLandIdSort } = useSelector(
    (state: RootState) => state.ownerReducer
  )

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
          download={`Territory_${owners?.[0]?.territoryNumber}.txt`}
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
          download={`Territory_${owners?.[0]?.territoryNumber}.json`}
        >
          <SaveSvg />
        </a>

        <div>
          <input
            type="file"
            id="fileElem"
            accept=".json"
            name="myFile"
            className={styles.hidden}
            onChange={(e) => {
              if (e.target.files?.[0]) {
                e.target.files[0].text().then((data) => {
                  //do something with data.
                  const owners = JSON.parse(data)
                  dispatch(setOwners(owners))
                })
              }
            }}
          />
          <div
            onClick={() => {
              document.getElementById('fileElem')?.click()
            }}
          >
            <UploadSvg />
          </div>
        </div>

        {isLandIdSort ? (
          <SortAZSvg
            onClick={() => dispatch(sortCards(false))}
            className={loading ? 'cursorWait' : 'cursorDefault'}
          />
        ) : (
          <Sort09Svg
            onClick={() => dispatch(sortCards(true))}
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
