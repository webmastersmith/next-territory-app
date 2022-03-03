import type { NextPage } from 'next'
import { OwnerType, Exemption } from 'types'
import {
  PersonSvg,
  DeedSvg,
  MailingAddressSvg,
  PhysicalAddressSvg,
  ExemptionSvg,
  CheckSvg,
  XSvg,
} from 'icons'
import styles from './cardBody.module.scss'
import { Address } from './address'
import { OwnerDeed } from './ownerDeed'
import { Exemptions } from './exemptions'

export const uid = () =>
  new Date().getTime() + Math.random().toString(16).slice(2)

interface Props {
  owner: OwnerType
}

export const CardBody: NextPage<Props> = ({ owner }) => {
  const {
    landId,
    name,
    deed,
    nameDeedSame,
    addressSame,
    physicalAddress,
    physicalCity,
    physicalState,
    physicalZip,
    mailingAddress,
    mailingCity,
    mailingState,
    mailingZip,
    exemptions,
  } = owner

  const physicalAddr = `${physicalAddress} ${physicalCity} ${physicalState} ${physicalZip}`
  const mailingAddr = `${mailingAddress} ${mailingCity} ${mailingState} ${mailingZip}`

  type CardBodyData = {
    svg: React.SVGProps<SVGSVGElement>
    label: string
    text: string | Exemption[]
    checkmark: React.SVGProps<SVGSVGElement> | string
  }

  const cardBodyData: CardBodyData[] = [
    {
      svg: <PersonSvg />,
      label: 'Owner Name',
      text: name as string,
      checkmark: '',
    },
    {
      svg: <DeedSvg />,
      label: 'Deed',
      text: deed as string,
      checkmark: nameDeedSame ? (
        <CheckSvg className={styles.checkMark} />
      ) : (
        <XSvg className={styles.x} />
      ),
    },
    {
      svg: <PhysicalAddressSvg className={styles.physicalAddressSvg} />,
      label: 'Physical Address',
      text: physicalAddr as string,
      checkmark: addressSame ? (
        <CheckSvg className={styles.checkMark} />
      ) : (
        <XSvg className={styles.x} />
      ),
    },
    {
      svg: <MailingAddressSvg />,
      label: 'Mailing Address',
      text: mailingAddr as string,
      checkmark: addressSame ? (
        <CheckSvg className={styles.checkMark} />
      ) : (
        <XSvg className={styles.x} />
      ),
    },
    {
      svg: <ExemptionSvg />,
      label: 'Tax Exemptions',
      text: exemptions as Exemption[],
      checkmark: '',
    },
  ]

  return (
    <div className={styles.cardBodyWrapper}>
      <p className={styles.landId}>{landId}</p>

      <div className={styles.cardBodyGrid}>
        {cardBodyData.map((bodyData) => {
          const { label } = bodyData
          // Owner, Deed
          if (/owner|deed/i.test(label)) {
            return <OwnerDeed bodyData={bodyData} key={uid()} />
          }

          // Physical Address, Mailing Address
          if (label.includes('Address')) {
            return <Address bodyData={bodyData} owner={owner} key={uid()} />
          }
          // Exemptions
          return <Exemptions bodyData={bodyData} key={uid()} />
        })}
      </div>
    </div>
  )
}
