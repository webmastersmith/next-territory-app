import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OwnerType } from 'types'
import { searchOwnersFn, fixLocalStorage, sortCardsFn } from './ownerSliceUtils'

export type OwnerStateType = {
  owners: OwnerType[]
  search: OwnerType[]
  searchMode: boolean
  loading: boolean
  isLandIdSort: boolean
}

const initialState: OwnerStateType = {
  owners: [],
  search: [],
  searchMode: false,
  loading: false,
  isLandIdSort: false,
}

//state is owners array.
export const ownerSlice = createSlice({
  name: 'owners',
  initialState,
  reducers: {
    setOwners: (state, action: PayloadAction<OwnerType[]>) => {
      state.owners = action.payload
      fixLocalStorage(action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    clearSearchMode: (state) => {
      state.search = []
      state.searchMode = false
    },
    searchOwners: (state, action: PayloadAction<string>) => {
      const text = action.payload.trim()
      if (text === '') {
        state.search = []
        state.searchMode = true
        return
      }
      const searchResults = searchOwnersFn(state.owners, text)
      if (searchResults.length > 0) {
        state.search = searchResults
        state.searchMode = true
      }
    },
    deleteOwner: (state, action: PayloadAction<string>) => {
      state.owners = state.owners.filter(
        (owner) => action.payload !== owner.landId
      )
      fixLocalStorage(state.owners)

      // if card is deleted in 'searchMode' card in search array is removed.
      // this will not effect the 'deleted' array, because the card is removed from
      // the owners array and added to deleted array.
      state.search = state.search.filter(
        (owner) => action.payload !== owner.landId
      )
    },
    sortCards: (state, action: PayloadAction<boolean>) => {
      state.isLandIdSort = action.payload //true for landId sort.

      state.owners = sortCardsFn(state.owners, action.payload)
      fixLocalStorage(state.owners)

      if (state.search.length > 0) {
        state.search = sortCardsFn(state.search, action.payload)
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  searchOwners,
  setOwners,
  deleteOwner,
  sortCards,
  clearSearchMode,
  setLoading,
} = ownerSlice.actions

export default ownerSlice.reducer
