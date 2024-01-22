export const mapArrToString = (arr:any[]) => {
    return arr.filter(el => Number.isInteger(el)).map(String)
}