export class RegistrationRequest{
    firstName: String;
    lastName: String;
    birthday: Date;
    email: String;
    phone: String;
    login: String;
    password: String;

    constructor(firstName: String,
        lastName: String,
        birthday: Date,
        email: String,
        phone: String,
        login: String,
        password: String){
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthday = birthday;
            this.email = email;
            this.phone = phone;
            this.login = login;
            this.password = password;

    }
}