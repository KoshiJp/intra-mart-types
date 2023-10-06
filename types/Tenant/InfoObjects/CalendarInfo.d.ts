/**
 * カレンダー情報オブジェクト。
 */
declare class CalendarInfo {
    /**
     * カレンダーID
     */
    calendarId: string;

    /**
     * デフォルトロケールのカレンダー名
     */
    calendarName: string;

    /**
     * カレンダー国際化情報
     */
    i18n: CalendarInfoI18N;

    /**
     * ソートキー
     */
    sortKey: number;
}
