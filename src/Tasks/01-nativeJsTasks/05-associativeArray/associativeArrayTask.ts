
export type UsersType = { [key:string]:UserType }
export type UserType = {id:number, name: string}
export const users:UsersType = {
    "101": {id:101, name:"Sergio"},
    "2334": {id:2334, name: "Alice"},
    "5422": {id:5422, name:"Svetlana"}
}
let user = {id: 29, name:"New User"};
// Добаление пользоователя в ассоциативный массив
users[user.id.toString()] = user
// Удаление пользователя в ассоциативном массиве
delete users[user.id]
// Перезатирание свойств в ассоциативном массиве
users[user.id].name = "Update Name"