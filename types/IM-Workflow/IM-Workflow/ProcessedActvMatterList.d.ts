/**
 * 処理済一覧（未完了）マネージャ。
 */
declare class ProcessedActvMatterList {
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
     * 最終処理日（"yyyy/MM/dd HH:mm:ss.SSS"形式の文字列）
     */
    static LAST_PROCESS_DATE: string;

    /**
     * 案件名
     */
    static MATTER_NAME: string;

    /**
     * 案件番号
     */
    static MATTER_NUMBER: string;

    /**
     * 優先度
     */
    static PRIORITY_LEVEL: string;

    /**
     * 引戻し可能フラグ
     */
    static PULLBACK_ABLE_FLAG: string;

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
     * コンストラクタで指定した特定ユーザが本人権限で処理した案件、又は代理先として設定されている場合に代理元ユーザが処理した未完了案件の件数を取得します。
     */
    getProcessedListCountForEachFlow(): WorkflowResultInfo;

    /**
     * コンストラクタで指定した特定ユーザが本人権限で処理した案件、又は代理先として設定されている場合に代理元ユーザが処理した未完了案件の件数を取得します。
     * @param processedAuthCond 
     * @param cond 
     * @param flowGroupId 
     */
    getProcessedListCountWithFlowGroup(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition, flowGroupId: string): WorkflowResultInfo;

    /**
     * コンストラクタで指定した特定ユーザが本人権限で処理した案件、又は代理先として設定されている場合に代理元ユーザが処理した未完了案件の件数を取得します。
     * @param processedAuthCond 
     * @param cond 
     * @param flowId 
     */
    getProcessedListCountWithFlow(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition, flowId: string): WorkflowResultInfo;

    /**
     * コンストラクタで指定した特定ユーザが本人権限で処理した案件、又は代理先として設定されている場合に代理元ユーザが処理した未完了案件の件数を取得します。
     * @param processedAuthCond 
     * @param cond 
     */
    getProcessedListCount(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition): WorkflowResultInfo;

    /**
     * ユーザが処理した未完了案件件数を取得します。
     * @param processedAuthCond 
     * @param cond 
     * @param filterCond 
     * @param flowGroupId 
     */
    getProcessedListWithAuthCountFlowGroup(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition, filterCond: MatterFilterConditionInfo, flowGroupId: string): WorkflowResultInfo;

    /**
     * ユーザが処理した未完了案件件数を取得します。
     * @param processedAuthCond 
     * @param cond 
     * @param filterCond 
     * @param flowId 
     */
    getProcessedListWithAuthCountFlow(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition, filterCond: MatterFilterConditionInfo, flowId: string): WorkflowResultInfo;

    /**
     * ユーザが処理した未完了案件件数を取得します。
     * @param filterCond 
     */
    getProcessedListWithAuthCountForEachFlow(filterCond: MatterFilterConditionInfo): WorkflowResultInfo;

    /**
     * ユーザが処理した未完了案件件数を取得します。
     * @param processedAuthCond 
     * @param cond 
     * @param filterCond 
     */
    getProcessedListWithAuthCount(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition, filterCond: MatterFilterConditionInfo): WorkflowResultInfo;

    /**
     * ユーザが処理した未完了案件一覧を取得します。
     * @param processedAuthCond 
     * @param cond 
     * @param filterCond 
     * @param flowGroupId 
     */
    getProcessedListWithAuthFlowGroup(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition, filterCond: MatterFilterConditionInfo, flowGroupId: string): WorkflowResultInfo;

    /**
     * ユーザが処理した未完了案件一覧を取得します。
     * @param processedAuthCond 
     * @param cond 
     * @param filterCond 
     * @param flowId 
     */
    getProcessedListWithAuthFlow(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition, filterCond: MatterFilterConditionInfo, flowId: string): WorkflowResultInfo;

    /**
     * ユーザが処理した未完了案件一覧を取得します。
     * @param processedAuthCond 
     * @param cond 
     * @param filterCond 
     */
    getProcessedListWithAuth(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition, filterCond: MatterFilterConditionInfo): WorkflowResultInfo;

    /**
     * コンストラクタで指定した特定ユーザが本人権限で処理した案件、又は代理先として設定されている場合に代理元ユーザが処理した未完了案件一覧を取得します。
     * @param processedAuthCond 
     * @param cond 
     * @param flowGroupId 
     */
    getProcessedListWithFlowGroup(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition, flowGroupId: string): WorkflowResultInfo;

    /**
     * コンストラクタで指定した特定ユーザが本人権限で処理した案件、又は代理先として設定されている場合に代理元ユーザが処理した未完了案件一覧を取得します。
     * @param processedAuthCond 
     * @param cond 
     * @param flowId 
     */
    getProcessedListWithFlow(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition, flowId: string): WorkflowResultInfo;

    /**
     * コンストラクタで指定した特定ユーザが本人権限で処理した案件、又は代理先として設定されている場合に代理元ユーザが処理した未完了案件一覧を取得します。
     * @param processedAuthCond 
     * @param cond 
     */
    getProcessedList(processedAuthCond: ProcessedAuthConditionInfo, cond: ListSearchCondition): WorkflowResultInfo;
}
