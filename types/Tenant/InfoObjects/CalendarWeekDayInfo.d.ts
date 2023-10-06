/**
 * 週の情報オブジェクト。
 */
declare class CalendarWeekDayInfo {
    /**
     * カレンダーID
     */
    calendarId: Date;

    /**
     * 表示色
     */
    color: string;

    /**
     * 曜日番号
     */
    dayOfWeek: number;

    /**
     * 休日フラグ
     */
    holiday: boolean;
}
