/**
 * 一時保存マネージャオブジェクト。
 */
declare class TempSaveManager {
    /**
     * コンストラクタ
     * @param localeId 
     */
    constructor(localeId?: string);

    /**
     * 一時保存案件を新規作成します。
     * @param tempSaveParam 
     * @param userParam 
     */
    createTempSaveMatter(tempSaveParam: TempSaveParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 一時保存案件を削除します。
     * @param tempSaveParam 
     * @param userParam 
     */
    deleteTempSaveMatter(tempSaveParam: TempSaveParamInfo, userParam: object): WorkflowResultInfo;

    /**
     * 一時保存案件を更新します。
     * @param tempSaveParam 
     * @param userParam 
     */
    updateTempSaveMatter(tempSaveParam: TempSaveParamInfo, userParam: object): WorkflowResultInfo;
}
