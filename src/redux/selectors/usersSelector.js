export const getUsersData = (state) => {
  return state.usersPage.usersData
}
export const getPageSize = (state) => {
  return state.usersPage.pageSize
}
export const getTotalItemsCount = (state) => {
  return state.usersPage.totalItemsCount
}
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}
export const getFetchStatus = (state) => {
  return state.usersPage.isFetching
}
