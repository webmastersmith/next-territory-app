import { OwnerType } from 'types'

export const fixLocalStorage = (owners: OwnerType[]) => {
  try {
    localStorage.setItem('owners', JSON.stringify(owners))
  } catch (e) {
    console.log('Storage Problem: ', e)
  }
}

export const searchOwnersFn = (owners: OwnerType[], text: string) => {
  // filter against search text.
  return owners.filter((owner) => {
    const {
      name,
      ownerId,
      landId,
      deed,
      physicalAddress,
      physicalCity,
      physicalState,
      physicalZip,
      mailingAddress,
      mailingCity,
      mailingState,
      mailingZip,
      exemptions,
      phoneNumbers,
    } = owner
    const p = `${physicalAddress} ${physicalCity} ${physicalState} ${physicalZip}`
    const m = `${mailingAddress} ${mailingCity} ${mailingState} ${mailingZip}`
    const phoneAddress = phoneNumbers
      .map((person) => {
        const { name, contacts } = person
        const personContact = contacts.map((contact) => {
          const { phoneNumber, address } = contact
          return phoneNumber + ' ' + address
        })
        return [name, ...personContact].join(' ')
      })
      .join(' ')
    let exempt: string[] = []
    exemptions.forEach((e) => {
      if (!e.name.includes('EMPTY')) {
        exempt.push(e.name)
      }
    })
    const all = `${name} ${deed} ${ownerId} ${landId} ${exempt.join(
      ' '
    )} ${p} ${m} ${phoneAddress}`
      .replaceAll(/[-,.()\n\r]/g, '')
      .replaceAll('  ', ' ')
      .toLowerCase()
    return all.includes(text.toLowerCase())
  })
}

export const sortCardsFn = (
  owners: OwnerType[],
  sortByLandId: boolean = false
) => {
  //landId sort
  if (sortByLandId) {
    return owners.sort((objA, objB) => {
      const a = +objA.landId
      const b = +objB.landId
      return a - b
    })
  }
  // owner name alphabet sort
  return owners.sort((objA, objB) => {
    const a = objA.name
    const b = objB.name
    return a > b ? 1 : b > a ? -1 : 0
  })
}
