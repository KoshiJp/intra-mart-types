/**
 * 一時保存案件マネージャ。
 */
declare class TempSaveMatter {
    /**
     * コンストラクタ。
     * @param localeId 
     */
    constructor(localeId?: string);

    /**
     * ユーザデータ案件プロパティ情報の件数を取得します。
     * @param userDataId 
     */
    getMatterPropertyListCount(userDataId: string): WorkflowResultInfo;

    /**
     * ユーザデータ案件プロパティ情報をすべて取得します。
     * @param userDataId 
     */
    getMatterPropertyList(userDataId: string): WorkflowResultInfo;

    /**
     * ユーザデータ案件プロパティ情報を取得します。
     * @param userDataId 
     * @param key 
     */
    getMatterProperty(userDataId: string, key: string): WorkflowResultInfo;

    /**
     * 一時保存情報を取得します。
     * @param userDataId 
     */
    getTempSaveMatter(userDataId: string): WorkflowResultInfo;
}
