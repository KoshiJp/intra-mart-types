/**
 * 差戻し用パラメータ情報オブジェクト。
 */
declare class SendBackParamInfo {
    /**
     * 権限者会社コード。
     */
    authCompanyCode: string;

    /**
     * 権限者組織コード。
     */
    authOrgzCode: string;

    /**
     * 権限者組織セットコード。
     */
    authOrgzSetCode: string;

    /**
     * 権限者コード。
     */
    authUserCode: string;

    /**
     * 実行者コード。
     */
    executeUserCode: string;

    /**
     * 案件名。
     */
    matterName: string;

    /**
     * 案件番号。
     */
    matterNumber: string;

    /**
     * 根回し情報オブジェクト。
     */
    nego: NegoModelInfo;

    /**
     * 優先度。
     */
    priorityLevel: string;

    /**
     * 処理コメント。
     */
    processComment: string;

    /**
     * 差戻し先ノードIDの配列。
     */
    sendBackNodeId: any[];
} 
