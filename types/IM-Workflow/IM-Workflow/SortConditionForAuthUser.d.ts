/**
 * ソート条件（対象者）オブジェクト。
 */
declare class SortConditionForAuthUser {
    /**
     * ソート条件を追加します。
     * @param column 
     * @param isASC 
     */
    addOrder(column: object, isASC: boolean): WorkflowResultInfo;

    /**
     * レコードの取得件数を設定します。
     * @param count 
     */
    setCount(count: string): WorkflowResultInfo;

    /**
     * レコードの取得位置を設定します。
     * @param offset 
     */
    setOffset(offset: string): WorkflowResultInfo;
}
