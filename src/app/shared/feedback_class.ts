// tslint:disable-next-line:class-name
export class Feedback_Class {
    constructor(
        public feed_id: number,
        public feed_des: string,
        public feed_fk_event_id: number,
        public feed_fk_user_id: string,
        public feed_date: Date
    ) {

    }
}