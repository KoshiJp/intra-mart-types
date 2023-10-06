/**
 * 取止め用パラメータ情報オブジェクト。
 */
declare class DiscontinueParamInfo {
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
     * 根回し情報オブジェクト。
     */
    nego: NegoModelInfo;

    /**
     * 処理コメント。
     */
    processComment: string;
}
