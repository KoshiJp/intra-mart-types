/**
 * 申請一覧マネージャ。
 */
declare class ApplyFlowList {
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
     * 備考（フロー）
     */
    static FLOW_NOTE: string;

    /**
     * フローバージョンID
     */
    static FLOW_VERSION_ID: string;

    /**
     * 備考(フローバージョン)
     */
    static FLOW_VERSION_NOTE: string;

    /**
     * システム日で展開するフラグ
     */
    static SYS_DATE_TARGET_EXPAND_FLAG: string;

    /**
     * コンストラクタ。
     * @param userCd 
     * @param localeId 
     */
    constructor(userCd: string, localeId?: string);

    /**
     * コンストラクタに指定したユーザが代理権限で、パラメータに指定した代理元ユーザの申請可能なフローの件数を取得します。
     * @param applyBaseDate 
     * @param originalActUserCode 
     * @param orgzAuthCond 
     * @param cond 
     */
    getActApplyFlowListCount(applyBaseDate: string, originalActUserCode: string, orgzAuthCond: OrgzAuthConditionInfo, cond: ListSearchConditionNoMatterProperty): WorkflowResultInfo;

    /**
     * コンストラクタに指定したユーザが代理権限で、パラメータに指定した代理元ユーザの申請可能なフローの一覧を取得します。
     * @param applyBaseDate 
     * @param originalActUserCode 
     * @param orgzAuthCond 
     * @param cond 
     */
    getActApplyFlowList(applyBaseDate: string, originalActUserCode: string, orgzAuthCond: OrgzAuthConditionInfo, cond: ListSearchConditionNoMatterProperty): WorkflowResultInfo;

    /**
     * コンストラクタに指定したユーザが本人権限で申請可能なフローの件数を取得します。
     * @param applyBaseDate 
     * @param orgzAuthCond 
     * @param cond 
     */
    getApplyFlowListCount(applyBaseDate: string, orgzAuthCond: OrgzAuthConditionInfo, cond: ListSearchConditionNoMatterProperty): WorkflowResultInfo;

    /**
     * コンストラクタに指定したユーザが本人権限で申請可能なフローの一覧を取得します。
     * @param applyBaseDate 
     * @param orgzAuthCond 
     * @param cond 
     */
    getApplyFlowList(applyBaseDate: string, orgzAuthCond: OrgzAuthConditionInfo, cond: ListSearchConditionNoMatterProperty): WorkflowResultInfo;
}
