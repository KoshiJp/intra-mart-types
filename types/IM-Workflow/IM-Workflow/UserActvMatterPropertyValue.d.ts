/**
 * ユーザデータ案件プロパティ情報マネージャオブジェクト。
 */
declare class UserActvMatterPropertyValue {
    /**
     * コンストラクタ。
     */
    constructor();

    /**
     * ユーザデータ案件プロパティ情報を新規登録します。
     * @param matterProperty 
     */
    createMatterProperty(matterProperty: any[]): WorkflowResultInfo;

    /**
     * ユーザデータ案件プロパティ情報を削除します。
     * @param matterProperty 
     */
    deleteMatterProperty(matterProperty: any[]): WorkflowResultInfo;

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
     * ユーザデータ案件プロパティ情報を更新します。
     * @param matterProperty 
     */
    updateMatterProperty(matterProperty: any[]): WorkflowResultInfo;
}
