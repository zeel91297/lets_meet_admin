import { DateTime } from "ionic-angular/components/datetime/datetime";

export class Community_Class {
    constructor(public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_pic: string,
        public comm_date: DateTime,
        public comm_rating: number,
        public created_by: string) {

    }
}