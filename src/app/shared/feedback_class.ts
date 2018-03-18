import { DateTime } from "ionic-angular/components/datetime/datetime";

export class Feedback_Class {
    constructor(
        public feed_id: number,
        public feed_des: string,
        public feed_fk_event_id: number,
        public feed_fk_user_id: string,
        public feed_date: DateTime
    ) {

    }
}