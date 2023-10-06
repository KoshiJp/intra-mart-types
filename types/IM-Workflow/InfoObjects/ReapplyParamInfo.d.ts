/**
 * 再申請用パラメータ情報オブジェクト。
 */
declare class ReapplyParamInfo {
    /**
     * 動的・確認ノード設定情報オブジェクトの配列。
     */
    DCNodeConfigModels: any[];

    /**
     * 横配置・縦配置ノード設定情報オブジェクトの配列。
     */
    HVNodeConfigModels: any[];

    /**
     * 権限者会社コード。
     */
    applyAuthCompanyCode: string;

    /**
     * 権限者組織コード。
     */
    applyAuthOrgzCode: string;

    /**
     * 権限者組織セットコード。
     */
    applyAuthOrgzSetCode: string;

    /**
     * 権限者コード。
     */
    applyAuthUserCode: string;

    /**
     * 実行者コード。
     */
    applyExecuteUserCode: string;

    /**
     * 分岐先選択情報オブジェクトの配列。
     */
    branchSelectModels: any[];

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
     * 削除対象システムファイル名の配列。
     */
    systemFileNameForDelete: any[];

    /**
     * 添付ファイル一時領域ディレクトリキー。
     */
    tempDirKey: string;
} 
