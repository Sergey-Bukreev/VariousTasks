
import {
    addCompanyForUser,
    addNewBooksForUser, changeUserBook, removeUserBook,
    upgradeUserAddress,
    upgradeUserLaptop,
    UserDeepCopyType,
    userForDeepCopy
} from "./DeepCopyObjectTask";


beforeEach(()=>{
    let  userForDeepCopy:UserDeepCopyType = {
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
})
test("Upgrade laptop for user", ()=> {
const userCopy:UserDeepCopyType = upgradeUserLaptop(userForDeepCopy, "Asus")
    expect(userForDeepCopy).not.toBe(userCopy)
    expect(userForDeepCopy.address).toBe(userCopy.address)
    expect(userForDeepCopy.laptop).not.toBe(userCopy.laptop)
    expect(userForDeepCopy.laptop.title).toBe("MacBook")
    expect(userCopy.laptop.title).toBe("Asus")
})

test("Upgrade address for user", ()=> {
    const userCopy:UserDeepCopyType = upgradeUserAddress(userForDeepCopy, "Minsk", 30)
    expect(userForDeepCopy).not.toBe(userCopy)
    expect(userForDeepCopy.laptop).toBe(userCopy.laptop)
    expect(userForDeepCopy.name).toBe(userCopy.name)
    expect(userForDeepCopy.address).not.toBe(userCopy.address)
    expect(userForDeepCopy.address.city).toBe("Geneve")
    expect(userForDeepCopy.address.house).toBe(12)
    expect(userCopy.address.city).toBe("Minsk")
    expect(userCopy.address.house).toBe(30)
})
test("add new books  for user", ()=> {
    const userCopy:UserDeepCopyType = addNewBooksForUser(userForDeepCopy, ["JS", "Rest API"])
    expect(userForDeepCopy).not.toBe(userCopy)
    expect(userForDeepCopy.name).toBe(userCopy.name)
    expect(userForDeepCopy.address).toBe(userCopy.address)
    expect(userForDeepCopy.books).not.toBe(userCopy.books)
    expect(userForDeepCopy.books.length).toBe(3)
    expect(userForDeepCopy.books[0]).toBe("react")
    expect(userForDeepCopy.books[2]).toBe("css")
    expect(userCopy.books[3]).toBe("JS")
    expect(userCopy.books[4]).toBe("Rest API")
})

test("update  books for user", ()=> {
    const userCopy:UserDeepCopyType = changeUserBook(userForDeepCopy, "react", "TS")
    expect(userForDeepCopy).not.toBe(userCopy)
    expect(userForDeepCopy.name).toBe(userCopy.name)
    expect(userForDeepCopy.books.length).toBe(3)
    expect(userForDeepCopy.books[0]).toBe("react")
    expect(userCopy.books[0]).toBe("TS")
})
test("remove book for  user", ()=> {
   const userCopy:UserDeepCopyType = removeUserBook(userForDeepCopy, "css")
    expect(userForDeepCopy).not.toBe(userCopy)
    expect(userForDeepCopy.name).toBe(userCopy.name)
    expect(userForDeepCopy.books.length).toBe(3)
    expect(userCopy.books.length).toBe(2)
    expect(userCopy.books[0]).toBe("react")
    expect(userCopy.books[1]).toBe("html")
})

test("add new company for user", ()=> {
    const userCopy: UserDeepCopyType = addCompanyForUser(userForDeepCopy, 3,"google")
    expect(userForDeepCopy).not.toBe(userCopy)
    expect(userForDeepCopy.name).toBe(userCopy.name)
    expect(userForDeepCopy.laptop).toBe(userCopy.laptop)
    expect(userForDeepCopy.companies.length).toBe(2)
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2].title).toBe("google")
    expect(userCopy.companies[2].id).toBe(3)

})