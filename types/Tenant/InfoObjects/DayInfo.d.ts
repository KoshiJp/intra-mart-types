/**
 * 日付情報オブジェクト。
 */
declare class DayInfo {
    /**
     * 表示色
     */
    color: string;

    /**
     * データタイプ
     */
    dataType: string;

    /**
     * 日付情報ID
     */
    dayInfoId: string;

    /**
     * デフォルトロケールの日付情報名
     */
    dayInfoName: string;

    /**
     * 日付情報セットID
     */
    dayInfoSetId: string;

    /**
     * 日
     */
    dayOfMonth: number;

    /**
     * 曜日
     */
    dayOfWeek: number;

    /**
     * 第何曜日
     */
    dayOfWeekInMonth: number;

    /**
     * 年
     */
    fullYear: number;

    /**
     * 日付情報国際化情報
     */
    i18n: DayInfoI18N;

    /**
     * 月
     */
    month: number;

    /**
     * ソートキー
     */
    sortKey: number;

    /**
     * 有効終了年
     */
    validEndYear: number;

    /**
     * 有効開始年
     */
    validStartYear: number;

    /**
     * 第何週
     */
    weekOfMonth: number;
}
