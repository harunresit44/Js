import User from "./user.js"

export default class UserAddModel extends User{
    constructor(id, firstName, lastName, city, age) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
    }

}