/**
 * 処理マネージャオブジェクト。
 */
declare class ProcessManager {
    /**
     * コンストラクタ
     * @param systemMatterId 
     * @param nodeId 
     */
    constructor(systemMatterId: string, nodeId: string);

    /**
     * コンストラクタ
     * @param localeId 
     * @param systemMatterId 
     * @param nodeId 
     */
    constructor(localeId: string, systemMatterId: string, nodeId: string);

    /**
     * 未申請状態の案件の申請処理を実行します。
     * @param applyFromUnapplyParam 
     * @param userParam 
     */
    applyFromUnapply(applyFromUnapplyParam: ApplyFromUnapplyParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 承認終了処理を実行します。
     * @param approveEndParam 
     * @param userParam 
     */
    approveEnd(approveEndParam: ApproveEndParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 承認処理を実行します。
     * @param approveParam 
     * @param userParam 
     */
    approve(approveParam: ApproveParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 否認処理を実行します。
     * @param denyParam 
     * @param userParam 
     */
    deny(denyParam: DenyParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 取止め処理を実行します。
     * @param discontinueParam 
     * @param userParam 
     */
    discontinue(discontinueParam: DiscontinueParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 指定したユーザの未完了案件に対する処理権限者の所属組織情報を取得します。
     * @param authUserCode 
     */
    getAuthUserOrgz(authUserCode: string): WorkflowResultInfo;

    /**
     * 指定したユーザの未完了案件に対する処理権限者情報を取得します。
     * @param executeUserCode 
     */
    getAuthUser(executeUserCode: string): WorkflowResultInfo;

    /**
     * 処理を行う際に設定が必要なノード情報と処理・確認対象者関連情報を取得します。
     */
    getConfigSetToProcessWithProcessTarget(): WorkflowResultInfo;

    /**
     * 承認等の処理を行う際に処理権限者等の設定が可能なノード情報を取得します。
     */
    getConfigSetToProcess(): WorkflowResultInfo;

    /**
     * 特定のノードから差戻し可能なノード情報を取得します。
     */
    getNodesToSendBack(): WorkflowResultInfo;

    /**
     * パラメータで指定したユーザが対象案件のノードで処理を実行できるか判定します。
     * @param executeUserCode 
     */
    isPossibleToProcess(executeUserCode: string): WorkflowResultInfo;

    /**
     * 再申請処理を実行します。
     * @param reapplyParam 
     * @param userParam 
     */
    reapply(reapplyParam: ReapplyParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 保留解除処理を実行します。
     * @param reserveCancelParam 
     * @param userParam 
     */
    reserveCancel(reserveCancelParam: ReserveCancelParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 保留処理を実行します。
     * @param reserveParam 
     * @param userParam 
     */
    reserve(reserveParam: ReserveParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 差戻し処理を実行します。
     * @param sendBackParam 
     * @param userParam 
     */
    sendBack(sendBackParam: SendBackParamInfo, userParam: object): WorkflowResultInfo;
}
