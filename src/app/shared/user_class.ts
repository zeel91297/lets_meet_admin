// tslint:disable-next-line:class-name
export class User_class {
    constructor(
        public user_id: string,
        public user_name: string,
        public user_pass: string,
        public user_pic: string,
        public gender: string,
        public user_mob_no: string,
        public user_bdate: Date,
        public token: string,
        public verify: string) {

    }
}

// tslint:disable-next-line:class-name
export class Update_User_Class {
    constructor(
        public user_id: string,
        public user_name: string,
        public gender: string,
        public user_mob_no: string,
        public user_bdate: Date,
        public token: string) {

    }
}
