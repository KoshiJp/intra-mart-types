/**
 * 申請マネージャオブジェクト。
 */
declare class ApplyManager {
    /**
     * コンストラクタ
     * @param localeId 
     */
    constructor(localeId?: string);

    /**
     * 申請処理を実行します。
     * @param applyParam 
     * @param userParam 
     */
    apply(applyParam: ApplyParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 起票案件を新規登録します。
     * @param draftParam 
     */
    draft(draftParam: DraftParamInfo): WorkflowResultInfo;

    /**
     * 特定のユーザが特定のフローによって案件を申請する際に選択可能な所属組織情報を取得します。
     * @param flowId 
     * @param baseDate 
     * @param authUserCd 
     */
    getAuthUserOrgz(flowId: string, baseDate: string, authUserCd: string): WorkflowResultInfo;

    /**
     * 申請を行う際に処理権限者等の設定が可能なノード情報を初期値で設定した処理権限者情報と共に取得します。
     * @param flowId 
     * @param applyBaseDate 
     */
    getConfigSetToApplyWithProcessTarget(flowId: string, applyBaseDate: string): WorkflowResultInfo;

    /**
     * 申請を行う際に処理権限者等の設定が可能なノード情報を取得します。
     * @param flowId 
     * @param applyBaseDate 
     */
    getConfigSetToApply(flowId: string, applyBaseDate: string): WorkflowResultInfo;
}
