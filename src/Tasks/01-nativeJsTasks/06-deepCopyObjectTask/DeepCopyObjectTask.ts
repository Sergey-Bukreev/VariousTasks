export type UserDeepCopyType = {
    name: string
    age:number
    address: AddressDeepCopyType
    laptop: LaptopDeepCopyType
    books:Array<string>
    companies:Array<CompaniesType>
}
export type AddressDeepCopyType = {
    city: string
    house:number
}
export type LaptopDeepCopyType = {
    title:string
}
export type CompaniesType = {
    id: number
    title: string
}
export let userForDeepCopy:UserDeepCopyType = {
    name: "Sergio",
    age: 28,
    address:{
        city:"Geneve",
        house: 12
    },
    laptop:{
        title:"MacBook"
    },
    books: ["react", "html", "css"],
    companies:[
        {id:1, title:"epam"},
        {id:2, title: "it-incubator"}
    ]
}

export const upgradeUserLaptop = (userForDeepCopy:UserDeepCopyType, title:string) => {
    let userWithNewLaptop:UserDeepCopyType = {...userForDeepCopy, laptop: {...userForDeepCopy.laptop, title:title}}

    return userWithNewLaptop
}
export const upgradeUserAddress = (userForDeepCopy:UserDeepCopyType, city: string, house:number)=> {
    let userWithNewAddress:UserDeepCopyType = {...userForDeepCopy, address: {...userForDeepCopy.address, city:city, house:house}}
    return userWithNewAddress
}

export const addNewBooksForUser = (userForDeepCopy:UserDeepCopyType, newBooks:Array<string>) => {
    let userWithNewBooks: UserDeepCopyType = {...userForDeepCopy, books:[...userForDeepCopy.books.concat(newBooks)]}
    return userWithNewBooks
}
export const changeUserBook = (userForDeepCopy:UserDeepCopyType, oldBook:string, newBook: string)=> {
    let userWithChangedBooks:UserDeepCopyType = {...userForDeepCopy, books:[...userForDeepCopy.books.map(book=>{
        if(book === oldBook){
            return newBook
        }
        return book
        })]}
    return userWithChangedBooks
}
export const removeUserBook = (userForDeepCopy:UserDeepCopyType, bookForRemove:string) => {
    let userWithNewBooks:UserDeepCopyType = {...userForDeepCopy, books:[...userForDeepCopy.books.filter(book=>book !== bookForRemove)]}
    return userWithNewBooks
}
export const addCompanyForUser = (userForDeepCopy:UserDeepCopyType, id:number, title:string)=> {
    let userWithNewCompany = {...userForDeepCopy, companies: [...userForDeepCopy.companies, {id:id, title:title}]}
    return userWithNewCompany
}