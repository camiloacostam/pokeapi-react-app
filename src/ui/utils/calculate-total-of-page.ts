export const calculateTotalOfPage = (totalOfItems: number, limit: number) => {
  return Math.ceil(totalOfItems / limit)
}
