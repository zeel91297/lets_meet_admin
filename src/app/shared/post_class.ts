import { DateTime } from "ionic-angular/components/datetime/datetime";

export class Post_Class {
    constructor(public post_id: number,
        public post_title: string,
        public post_des: string,
        public post_pic: string,
        public post_date: DateTime,
        public post_fk_user_id: string,
        public fk_comm_id: number) {

    }
}