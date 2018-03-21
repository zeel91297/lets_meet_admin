// tslint:disable-next-line:class-name
export class Post_Class {
    constructor(public post_id: number,
        public post_title: string,
        public post_des: string,
        public post_pic: string,
        public post_date: Date,
        public post_fk_user_id: string,
        public fk_comm_id: number) {

    }
}
