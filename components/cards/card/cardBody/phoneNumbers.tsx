import type { NextPage } from 'next'
import styles from './cardBody.module.scss'
import { PhoneNumber, Contact } from 'types'
import { uid } from 'components'
import React from 'react'

type BodyData = {
  svg: React.SVGProps<SVGSVGElement>
  label: string
  text: PhoneNumber[]
  checkmark: React.SVGProps<SVGSVGElement> | string
}
type Props = {
  bodyData: BodyData
}

export const PhoneNumbers: NextPage<Props> = ({ bodyData }) => {
  const { label, svg, text, checkmark } = bodyData
  const getContacts = (contacts: Contact[]) => {
    return contacts.map((contact) => {
      const { address, phoneNumber } = contact
      return (
        <p key={uid()} className={styles.phoneP}>
          <span>{address}</span>
          <span>{phoneNumber}</span>
        </p>
      )
    })
  }
  return (
    <>
      {svg}
      <div className={styles.info}>
        <p className={styles.label}>{label}</p>
        {!!text[0]?.name ? (
          text.map((phoneNumber) => {
            const { contacts, name } = phoneNumber
            return (
              <React.Fragment key={uid()}>
                <p className={styles.phoneName}>{name}</p>
                {getContacts(contacts)}
              </React.Fragment>
            )
          })
        ) : (
          <p>No phone number found</p>
        )}
      </div>
      <p>{checkmark}</p>
    </>
  )
}
