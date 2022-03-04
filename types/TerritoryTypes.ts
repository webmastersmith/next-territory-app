export interface OwnerType {
  _id: string
  landId: string
  ownerId: string
  allTrue: boolean
  exemptions: Exemption[]
  nameDeedSame: boolean
  addressSame: boolean
  name: string
  deed: string
  physicalAddress: string
  physicalCity: string
  physicalState: string
  physicalZip: string
  mailingAddress: string
  mailingCity: string
  mailingState: string
  mailingZip: string
  ownership: string
  showOwnerProperty: false
  ownerProperty: OwnerProperty[]
  improvements: Improvement[]
  lands: Land[]
  coordinates: Coordinates
  thumbnail: string
  error: false
  urlOwnerDetails: string
  urlLandMap: string
  territoryNumber: string
  phoneNumbers: PhoneNumber[]
}

export type Exemption = {
  name: string
  description: string
}
export type PhoneNumber = {
  _id: string
  name: string
  contacts: Contact[]
}
export type Contact = {
  phoneNumber: string
  address: string
}
type Coordinates = { id: string; lat: string; lng: string }
type OwnerProperty = {
  propertyId: string
  propertyAddress: string
  name: string
  price: string
  territory: string
  inTerritory: boolean
}
export type Improvement = {
  improvement: string
  livingArea: string
  value: string
  details: Details[]
}
type Details = {
  description: string
  yearBuild: string
  sqft: string
}
export type Land = {
  landType: string
  acres: string
  sqft: string
  marketValue: string
  prodValue: string
}

// person collection
// export interface Persons {
//   _id: string
//   name: string
//   contacts: Contacts[]
// }
// type Contacts = {
//   phoneNumber: string
//   address: string
// }

// prettier-ignore
const territories = [
  '1',   '2',   '3',   '4',   '5',   '6',   '7',   '8',   '9',
  '10',  '11',  '12',  '13',  '14',  '15',  '16',  '17',  '18',
  '19',  '20',  '21',  '22',  '23',  '24',  '25',  '26',  '27',
  '28',  '29',  '30',  '31',  '32',  '33',  '34',  '35',  '36',
  '37',  '38',  '39',  '40',  '41',  '42',  '43',  '44',  '45',
  '46',  '47',  '48',  '49',  '50',  '51',  '52',  '53',  '54',
  '55',  '56',  '57',  '100', '101', '102', '103', '104', '105',
  '106', '107', '108', '109', '110', '111', '112', '113', '114',
  '115', '116', '117', '118', '119', '120', '121', '122', '123',
  '124', '125', '126', '127', '128', '129', '130', '131', '132',
  '133', '134', '135', '136', '137', '138', '139', '201', '202'
]
