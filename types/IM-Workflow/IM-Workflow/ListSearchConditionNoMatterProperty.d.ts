/**
 * 検索条件(案件プロパティを含まない)オブジェクト。
 */
declare class ListSearchConditionNoMatterProperty {
    /**
     * 比較演算子 "="
     */
    static OP_EQ: string;

    /**
     * 比較演算子 ">="
     */
    static OP_GE: string;

    /**
     * 比較演算子 ">"
     */
    static OP_GT: string;

    /**
     * 比較演算子 "<="
     */
    static OP_LE: string;

    /**
     * 比較演算子 " like "
     */
    static OP_LIKE: string;

    /**
     * 比較演算子 "<"
     */
    static OP_LT: string;

    /**
     * 絞り込み条件を追加します。
     * @param column 
     * @param value 
     * @param operatorType 
     */
    addCondition(column: object, value: string, operatorType: string): WorkflowResultInfo;

    /**D
     * ソート条件を追加します。
     * @param column 
     * @param isASC 
     */
    addOrder(column: object, isASC: boolean): WorkflowResultInfo;

    /**
     * 結合条件を設定します。
     * @param isAndCombination 
     */
    setAndCombination(isAndCombination: boolean): WorkflowResultInfo;

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
