/**
 * 検索条件オブジェクト。
 */
declare class ListSearchCondition {
    /**
     * カラムタイプ "DATE"
     */
    static COL_DATE: string;

    /**
     * カラムタイプ "NUMBER"
     */
    static COL_NUMBER: string;

    /**
     * カラムタイプ "TIMESTAMP"
     */
    static COL_TIMESTAMP: string;

    /**
     * カラムタイプ "VARCHAR"
     */
    static COL_VARCHAR: string;

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
     * 検索結果モデルに表示カラムとして追加する案件プロパティのキーを追加します。
     * @param mpKeyName 
     */
    addColumnByMatterProp(mpKeyName: string): WorkflowResultInfo;

    /**
     * 案件プロパティの絞り込み条件を追加します。
     * @param mpKeyName 
     * @param value 
     * @param operatorType 
     * @param type 
     */
    addConditionByMatterProp(mpKeyName: string, value: string, operatorType: string, type: string): WorkflowResultInfo;

    /**
     * 絞り込み条件を追加します。
     * @param column 
     * @param value 
     * @param operatorType 
     */
    addCondition(column: object, value: string, operatorType: string): WorkflowResultInfo;

    /**
     * 案件プロパティをソート条件に追加します。
     * @param mpKeyName 
     * @param isASC 
     * @param type 
     */
    addOrderByMatterProp(mpKeyName: string, isASC: boolean, type: string): WorkflowResultInfo;

    /**
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
