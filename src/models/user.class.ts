export class User {

    firstName: string|any;
    lastName: string|any;
    email: string|any;
    birthDate: number|any;
    street: string|any;
    zipCode: number|any;
    city: string|any

    //if-else-Abfrage
    constructor(obj?:any){
        this.firstName = obj? obj.firstName: ''; 
        this.lastName = obj? obj.lastName: '';
        this.email = obj? obj.email: '';
        this.birthDate = obj? obj.birthDate: '';
        this.street = obj? obj.street: '';
        this.zipCode = obj? obj.zipCode: '';
        this.city = obj? obj.city: '';



    }

    public toJSON(){
        return{
            firstName:  this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode:  this.zipCode,
            city: this.city

        }
    }
}