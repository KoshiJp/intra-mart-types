/**
 * 処理済一覧（完了）ノードマネージャ。
 */
declare class ProcessedCplMatterNodeList {
    /**
     * 代理フラグ
     */
    static ACT_FLAG: string;

    /**
     * 申請代理フラグ
     */
    static APPLY_ACT_FLAG: string;

    /**
     * 申請権限者コード
     */
    static APPLY_AUTH_USER_CODE: string;

    /**
     * 申請権限者名
     */
    static APPLY_AUTH_USER_NAME: string;

    /**
     * 申請基準日（"yyyy/MM/dd"形式の文字列）
     */
    static APPLY_BASE_DATE: string;

    /**
     * 申請日（"yyyy/MM/dd HH:mm:ss.SSS"形式の文字列）
     */
    static APPLY_DATE: string;

    /**
     * 申請実行者コード
     */
    static APPLY_EXECUTE_USER_CODE: string;

    /**
     * 申請実行者名
     */
    static APPLY_EXECUTE_USER_NAME: string;

    /**
     * 権限者会社コード
     */
    static AUTH_COMPANY_CODE: string;

    /**
     * 権限者組織コード
     */
    static AUTH_ORGZ_CODE: string;

    /**
     * 権限者組織名
     */
    static AUTH_ORGZ_NAME: string;

    /**
     * 権限者組織セットコード
     */
    static AUTH_ORGZ_SET_CODE: string;

    /**
     * 権限者コード
     */
    static AUTH_USER_CODE: string;

    /**
     * 権限者名
     */
    static AUTH_USER_NAME: string;

    /**
     * 処理日（"yyyy/MM/dd HH:mm:ss.SSS"形式の文字列）
     */
    static END_DATE: string;

    /**
     * フローグループID
     */
    static FLOW_GROUP_ID: string;

    /**
     * フローID
     */
    static FLOW_ID: string;

    /**
     * フロー名
     */
    static FLOW_NAME: string;

    /**
     * フローバージョンID
     */
    static FLOW_VERSION_ID: string;

    /**
     * 案件名
     */
    static MATTER_NAME: string;

    /**
     * 案件番号
     */
    static MATTER_NUMBER: string;

    /**
     * ノードID
     */
    static NODE_ID: string;

    /**
     * ノード名
     */
    static NODE_NAME: string;

    /**
     * ノード種別
     */
    static NODE_TYPE: string;

    /**
     * 操作者コード
     */
    static OPERATE_USER_CODE: string;

    /**
     * 操作者名
     */
    static OPERATE_USER_NAME: string;

    /**
     * 優先度
     */
    static PRIORITY_LEVEL: string;

    /**
     * 到達日（"yyyy/MM/dd HH:mm:ss.SSS"形式の文字列）
     */
    static START_DATE: string;

    /**
     * ノード状態
     */
    static STATUS: string;

    /**
     * システム案件ID
     */
    static SYSTEM_MATTER_ID: string;

    /**
     * ユーザデータID
     */
    static USER_DATA_ID: string;

    /**
     * コンストラクタ。
     * @param userCd 
     * @param localeId 
     */
    constructor(userCd: string, localeId?: string);

    /**
     * ユーザが処理した完了案件ノード件数を取得します。
     * @param processedAuthCond 
     * @param cond 
     */
    getProcessedListCount(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition): WorkflowResultInfo;

    /**
     * ユーザが処理した完了案件ノード一覧を取得します。
     * @param processedAuthCond 
     * @param cond 
     */
    getProcessedList(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition): WorkflowResultInfo;
}
