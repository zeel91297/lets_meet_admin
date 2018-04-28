// tslint:disable-next-line:class-name
export class Community_User_Category_Class {
    constructor(public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_pic: string,
        public comm_date: Date,
        public comm_rating: number,
        public created_by: string,

        public user_id: string,
        public user_name: string,
        public user_pass: string,
        public user_pic: string,
        public gender: string,
        public user_mob_no: string,
        public user_bdate: Date,
        public token: string,
        public verify: string,

        public cat_id: number,
        public cat_name: string) {

    }
}
