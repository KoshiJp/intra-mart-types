/**
 * フィルタオブジェクト。
 */
declare class Filter {
    /**
     * 終了日時(from)。
     */
    fromEndDate: Date;

    /**
     * 開始日時(from)。
     */
    fromStartDate: Date;

    /**
     * ジョブネットID。
     */
    jobnetId: string;

    /**
     * 取得件数。
     */
    length: number;

    /**
     * メッセージ。
     */
    message: string;

    /**
     * ソート対象カラム名。
     */
    orderByColumn: string;

    /**
     * 降順ソート。
     */
    orderByDesc: boolean;

    /**
     * 取得開始位置。
     */
    start: number;

    /**
     * ステータス(String)の配列。
     */
    statuses: any[];

    /**
     * 終了日時(to)。
     */
    toEndDate: Date;

    /**
     * 開始日時(to)。
     */
    toStartDate: Date;

    /**
     * トリガID。
     */
    triggerId: string;
}
