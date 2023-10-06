/**
 * 案件（完了）ノードマネージャ。
 */
declare class CplMatterNode {
    /**
     * 確認済みフラグ
     */
    static CONFIRM_CPL_FLAG: string;

    /**
     * ユーザコード
     */
    static USER_CODE: string;

    /**
     * ユーザ名
     */
    static USER_NAME: string;

    /**
     * コンストラクタ。
     */
    constructor(systemMatterId: string);

    /**
     * コンストラクタ。
     * @param localeId 
     * @param systemMatterId 
     */
    constructor(localeId: string, systemMatterId: string);

    /**
     * 完了案件の特定ノード確認処理権限者情報の件数を取得します。
     * @param nodeId 
     */
    getCnfmAuthUserListCount(nodeId: string): WorkflowResultInfo;

    /**
     * 完了案件の特定ノード確認処理権限者情報をすべて取得します。
     * @param nodeId 
     * @param cond 
     */
    getCnfmAuthUserList(nodeId: string, cond: SortConditionForAuthUser): WorkflowResultInfo;

    /**
     * 実行フローのノード設定情報を取得します。
     * @param nodeId 
     */
    getExecNodeConfig(nodeId: string): WorkflowResultInfo;

    /**
     * 結果フローのノードの処理対象をすべて取得します。
     * @param nodeId 
     */
    getExecProcessTargetList(nodeId: string): WorkflowResultInfo;

    /**
     * マスタフローのノードの処理対象をすべて取得します。
     * @param nodeId 
     */
    getMasterProcessTargetList(nodeId: string): WorkflowResultInfo;

    /**
     * ノード情報を取得します。
     * @param nodeId 
     */
    getMatterNode(nodeId: string): WorkflowResultInfo;

    /**
     * 対象ノードにおける最新の処理履歴を取得します。
     * @param nodeId 
     */
    getProcessHistoryLatest(nodeId: string): WorkflowResultInfo;

    /**
     * 対象ノードの処理履歴の件数を取得します。
     * @param nodeId 
     */
    getProcessHistoryListCount(nodeId: string): WorkflowResultInfo;

    /**
     * 対象ノードの処理履歴をすべて取得します。
     * @param nodeId 
     */
    getProcessHistoryList(nodeId: string): WorkflowResultInfo;
}
