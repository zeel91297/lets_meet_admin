// tslint:disable-next-line:class-name
export class Community_Class {
    constructor(public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_pic: string,
        public comm_date: Date,
        public comm_rating: number,
        public created_by: string,
        public comm_fk_cat_id: number) {

    }
}

// tslint:disable-next-line:class-name
export class Update_Community_Class {
    constructor(public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_fk_cat_id: number) {

    }
}
