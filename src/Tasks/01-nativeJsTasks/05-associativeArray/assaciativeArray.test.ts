import { UsersType,} from "./associativeArrayTask";


let  users:UsersType = {
    "101": {id:101, name:"Sergio"},
    "2334": {id:2334, name: "Alice"},
    "5422": {id:5422, name:"Svetlana"}
}
beforeEach(()=> {
    users = {
        "101": {id:101, name:"Sergio"},
        "2334": {id:2334, name: "Alice"},
        "5422": {id:5422, name:"Svetlana"}
    }
})
test("should select corresponding user from object", ()=>{
    users["101"].name = "Serg"
    expect(users["101"].name).toBe("Serg")
    expect(users["101"]).toStrictEqual({id:101, name:"Serg"})
})
test ("should delete corresponding user from object", ()=> {
    delete users["101"]
    expect(users["101"]).toBeUndefined()
})
test ("should add corresponding user in object", ()=> {
    let user = {id:1, name:"New User"}
    users["1"] = user
    expect(users["1"].name).toBe("New User")
    expect(users["1"]).toStrictEqual({id:1, name:"New User"})
})