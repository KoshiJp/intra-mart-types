/**
 * 処理結果情報オブジェクト。
 */
declare class WorkflowResultInfo {
    /**
     * 処理結果。
     */
    readonly data: object;

    /**
     * 結果フラグ(true:成功/false:失敗)。;
     */
    readonly resultFlag: boolean;

    /**
     * 処理結果ステータス情報オブジェクト。
     */
    readonly resultStatus: ResultStatusInfo;
}
