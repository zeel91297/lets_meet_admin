// tslint:disable-next-line:class-name
export class Event_Community_Class {
    constructor(public event_id: number,
        public event_name: string,
        public event_des: string,
        public event_pic: string,
        public event_s_time: Date,
        public event_e_time: Date,
        public event_date: Date,
        public event_loc: string,
        public fk_user_id: string,
        public fk_comm_id: number,
        public event_verify: string,
        public comm_id: number,
        public comm_name: string,
        public comm_des: string,
        public comm_pic: string,
        public comm_date: Date,
        public comm_rating: number,
        public created_by: string) {

    }
}
