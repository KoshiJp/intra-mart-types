/**
 * 完了案件操作マネージャオブジェクト。
 */
declare class CplMatterHandleManager {
    /**
     * コンストラクタ
     * @param systemMatterId 
     * @param operateUserCode 
     */
    constructor(systemMatterId: string, operateUserCode: string);

    /**
     * コンストラクタ
     * @param localeId 
     * @param systemMatterId 
     * @param operateUserCode 
     */
    constructor(localeId: string, systemMatterId: string, operateUserCode: string);

    /**
     * 完了案件の確認ノードに確認処理権限者情報を追加します。
     * @param nodeId 
     * @param plugins 
     */
    createConfirmTarget(nodeId: string, plugins: any[]): WorkflowResultInfo;

    /**
     * 完了案件に対して、案件操作権限者(参照者)情報を新規追加又は更新します。
     * @param matterHandleAuth 
     */
    createMatterHandleAuth(matterHandleAuth: any[]): WorkflowResultInfo;

    /**
     * 完了案件の確認ノードの処理権限者情報をすべて削除します。
     * @param nodeId 
     */
    deleteConfirmTargetAll(nodeId: string): WorkflowResultInfo;

    /**
     * 完了案件の確認ノードの処理権限者情報を削除します。
     * @param nodeId 
     * @param plugins 
     */
    deleteConfirmTarget(nodeId: string, plugins: any[]): WorkflowResultInfo;

    /**
     * 完了案件に対して、案件操作権限者(参照者)情報を全て削除します。
     */
    deleteMatterHandleAuthAll(): WorkflowResultInfo;

    /**
     * 完了案件に対して、案件操作権限者(参照者)情報を削除します。
     * @param matterHandleAuth 
     */
    deleteMatterHandleAuth(matterHandleAuth: any[]): WorkflowResultInfo;

    /**
     * 完了案件の確認ノードに対して、確認処理権限者を再展開します。
     * @param nodeId 
     */
    expandConfirmTarget(nodeId: string): WorkflowResultInfo;

    /**
     * 完了案件に対して、案件操作権限者(参照者)を再展開します。
     */
    expandMatterHandleAuth(): WorkflowResultInfo;

    /**
     * 完了案件に対して、案件操作権限者(参照者)情報を更新します。
     * @param matterHandleAuth 
     */
    updateMatterHandleAuth(matterHandleAuth: any[]): WorkflowResultInfo;
}
