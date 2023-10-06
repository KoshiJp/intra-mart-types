/**
 * 日付情報セットオブジェクト。
 */
declare class DayInfoSet {
    /**
     * 日付情報セットID
     */
    dayInfoSetId: string;

    /**
     * デフォルトロケールの日付情報セット名
     */
    dayInfoSetName: string;

    /**
     * 週の開始曜日
     */
    firstDayOfWeek: number;

    /**
     * 日付情報セット国際化情報
     */
    i18n: DayInfoSetI18N;

    /**
     * ソートキー
     */
    sortKey: number;
}
