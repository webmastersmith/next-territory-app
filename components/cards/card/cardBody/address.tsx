import type { NextPage } from 'next'
import styles from './cardBody.module.scss'
import { GoogleMapSvg } from 'icons'
import { Exemption, OwnerType } from 'types'

type BodyData = {
  svg: React.SVGProps<SVGSVGElement>
  label: string
  text: string | Exemption[]
  checkmark: React.SVGProps<SVGSVGElement> | string
}
interface Props {
  bodyData: BodyData
  owner: OwnerType
}

export const Address: NextPage<Props> = ({ bodyData, owner }) => {
  const {
    addressSame,
    physicalAddress,
    physicalCity,
    physicalState,
    physicalZip,
    mailingAddress,
    mailingCity,
    mailingState,
    mailingZip,
    coordinates: coords,
  } = owner

  const { svg, label, text, checkmark } = bodyData
  // fix coordinates
  let googleMap = <></>
  if (label.includes('Physical')) {
    googleMap = (
      <a
        href={
          coords?.lat
            ? `https://www.google.com/maps/search/${coords.lat},${coords.lng}`
            : `https://www.google.com/maps/search/${physicalAddress.replace(
                /\s/g,
                '+'
              )}+${physicalCity}+${physicalState}+${physicalZip}`
        }
        target="_blank"
        rel="noreferrer"
        className={styles.googleMap}
      >
        {coords?.lat || physicalAddress !== 'empty' ? <GoogleMapSvg /> : ''}
      </a>
    )
  } else {
    googleMap = (
      <a
        href={`https://www.google.com/maps/search/${mailingAddress.replace(
          /\s/g,
          '+'
        )}+${mailingCity}+${mailingState}+${mailingZip}`}
        target="_blank"
        rel="noreferrer"
        className={styles.googleMap}
      >
        {mailingAddress !== 'empty' && !/P\s?O BOX/i.test(mailingAddress) ? (
          <GoogleMapSvg />
        ) : (
          ''
        )}
      </a>
    )
  }
  return (
    <>
      {svg}
      <div className={styles.info}>
        <p className={styles.label}>{label}</p>
        <div
          className={`${styles.address} ${
            styles[addressSame ? 'text' : 'red']
          }`}
        >
          {text}
          {googleMap}
        </div>
      </div>
      <p>{checkmark}</p>
    </>
  )
}
