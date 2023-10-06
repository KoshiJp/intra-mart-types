/**
 * 引戻マネージャオブジェクト。
 */
declare class PullBackManager {
    /**
     * コンストラクタ
     * @param systemMatterId 
     */
    constructor(systemMatterId: string);

    /**
     * コンストラクタ
     * @param localeId 
     * @param systemMatterId 
     */
    constructor(localeId: string, systemMatterId: string);

    /**
     * 指定したユーザが引戻し可能な案件ノード情報を取得します。
     * @param executeUserCode 
     */
    getNodesToPullBack(executeUserCode: string): WorkflowResultInfo;

    /**
     * 引戻し処理を実行します。
     * @param pullBackParam 
     * @param userParam 
     */
    pullBack(pullBackParam: PullBackParamInfo, userParam: object): WorkflowResultInfo;
}
