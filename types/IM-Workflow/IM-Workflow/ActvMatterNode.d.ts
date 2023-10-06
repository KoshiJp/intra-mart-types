/**
 * 案件（未完了）ノードマネージャ。
 */
declare class ActvMatterNode {
    /**
     * 権限者コード
     * 権限情報
     */
    static AUTH_USER_CODE: string;

    /**
     * 権限者名
     * 権限情報
     */
    static AUTH_USER_NAME: string;

    /**
     * 確認済みフラグ
     * 確認処理権限者情報
     */
    static CONFIRM_CPL_FLAG: string;

    /**
     * 無効フラグ
     * 権限情報
     */
    static INVALID_FLAG: string;

    /**
     * ノードID
     * 権限情報
     */
    static NODE_ID: string;

    /**
     * ユーザコード
     * 確認処理権限者情報
     */
    static USER_CODE: string;

    /**
     * ユーザ名
     * 確認処理権限者情報
     */
    static USER_NAME: string;

    /**
     * コンストラクタ。
     * @param systemMatterId 
     */
    constructor(systemMatterId: string);

    /**
     * コンストラクタ。
     * @param localeId 
     * @param systemMatterId 
     */
    constructor(localeId: string, systemMatterId: string);

    /**
     * 処理中の未完了案件に対して、指定ノードの実行可能な処理種別を取得します。
     * @param nodeId 
     */
    getAvailableProcessTypeList(nodeId: string): WorkflowResultInfo;

    /**
     * 指定ノードに到達する前に処理が行われたノードの情報を取得します。
     * @param nodeId 
     */
    getBeforeProcessedNode(nodeId: string): WorkflowResultInfo;

    /**
     * 未完了案件の特定ノード確認処理権限者情報の件数を取得します。
     * @param nodeId 
     */
    getCnfmAuthUserListCount(nodeId: string): WorkflowResultInfo;

    /**
     * 未完了案件の特定ノードの確認処理権限者情報をすべて取得します。
     * @param nodeId 
     * @param cond 
     */
    getCnfmAuthUserList(nodeId: string, cond: SortConditionForAuthUser): WorkflowResultInfo;

    /**
     * 処理中の未完了案件のノード設定情報を取得します。
     * @param nodeId 
     */
    getExecNodeConfig(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件に対して、処理中の最新フローから指定ノードの処理対象者プラグイン情報を取得します。
     * @param nodeId 
     */
    getExecProcessTargetList(nodeId: string): WorkflowResultInfo;

    /**
     * 未完了案件の特定ノードの処理権限者情報を全て取得します。
     * @param cond 
     */
    getExecutableUserList(cond: ListSearchConditionNoMatterProperty): WorkflowResultInfo;

    /**
     * 処理中の未完了案件の申請・起票時の初期フロー設定情報であるマスタフローからノード設定情報を取得します。
     * @param nodeId 
     */
    getMasterNodeConfig(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件に対して、申請・起票時の初期フロー設定情報であるマスタフローから指定ノードの処理対象者プラグイン情報を取得します。
     * @param nodeId 
     */
    getMasterProcessTargetList(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件のノード情報を取得します。
     * @param nodeId 
     */
    getMatterNode(nodeId: string): WorkflowResultInfo;

    /**
     * 指定のノードで設定対象となっている分岐開始ノード情報を取得します。
     * @param nodeId 
     */
    getNodesToConfigBranchStart(nodeId: string): WorkflowResultInfo;

    /**
     * 指定のノードで設定対象となっている処理対象者設定ノード情報を取得します。
     * @param nodeId 
     */
    getNodesToConfigProcessTarget(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件に対して、特定のノードの処理を行う上で有効な画面パスを取得します。
     * @param nodeId 
     */
    getPageAvailable(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件に対して、指定ノードの申請画面情報を取得します。
     * @param nodeId 
     */
    getPageForApply(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件に対して、指定ノードの確認画面情報を取得します。
     * @param nodeId 
     */
    getPageForConfirm(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件に対して、指定ノードの処理画面情報を取得します。
     * @param nodeId 
     */
    getPageForProcess(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件に対して、指定ノードの再申請画面情報を取得します。
     * @param nodeId 
     */
    getPageForReapply(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件に対して、指定ノードの一時保存画面情報を取得します。
     * @param nodeId 
     */
    getPageForTempSave(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件の特定ノードに対して、処理履歴の最新情報を取得します。
     * @param nodeId 
     */
    getProcessHistoryLatest(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件の特定ノードに対して、処理履歴件数を取得します。
     * @param nodeId 
     */
    getProcessHistoryListCount(nodeId: string): WorkflowResultInfo;

    /**
     * 処理中の未完了案件の特定ノードに対して、処理履歴をすべて取得します。
     * @param nodeId 
     */
    getProcessHistoryList(nodeId: string): WorkflowResultInfo;
}
