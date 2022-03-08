import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import styles from './navBarTerritory.module.scss'
import { useOwners, OwnerContextType } from 'store'
import { HomeWorkIcon, SearchForm } from 'components'
import { PrinterSvg, SaveSvg, TrashCanSvg, SortAZSvg, Sort09Svg } from 'icons'
import { OwnerType } from 'types'

//interface Props {
//	data: string
//}
//NextPage<Props>

export const NavBarTerritory: NextPage = () => {
  const [isSort, setIsSort] = useState<boolean>(false)
  const [myBlob, setMyBlob] = useState('')
  const { owners, searchMode, search, sortNums } =
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
              const addr = `${address} ${phoneNumber}\r\n`
              console.log(addr)
              return addr
            })
            .join('')
          return `${name}\r\n\t${personContact}`
        })
        .join(' ')
      console.log(phoneAddress)

      return `Property ID: ${owner.landId}\r\nName: ${owner.name}\nProperty Address: ${owner.physicalAddress} ${owner.physicalCity} ${owner.physicalState} ${owner.physicalZip}\r\nMailing Address:  ${owner.mailingAddress} ${owner.mailingCity} ${owner.mailingState} ${owner.mailingZip}\r\n${phoneAddress}\r\n-----------------------------------------------\r\n\r\n`
    })
  }

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <HomeWorkIcon className={styles.mainIcon} />
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

        <SaveSvg />
        {isSort ? (
          <SortAZSvg onClick={() => setIsSort(!isSort)} />
        ) : (
          <Sort09Svg onClick={() => setIsSort(!isSort)} />
        )}
        <TrashCanSvg />
      </div>
    </header>
  )
}
