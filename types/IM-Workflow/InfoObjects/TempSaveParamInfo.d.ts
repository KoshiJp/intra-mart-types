/**
 * 一時保存用パラメータ情報オブジェクト。
 */
declare class TempSaveParamInfo {
    /**
     * 権限者コード。
     */
    applyAuthUserCode: string;

    /**
     * 申請基準日（"yyyy/MM/dd"形式の文字列）。
     */
    applyBaseDate: string;

    /**
     * 実行者コード。
     */
    applyExecuteUserCode: string;

    /**
     * フローID。
     */
    flowId: string;

    /**
     * 案件名。
     */
    matterName: string;

    /**
     * 処理コメント。
     */
    processComment: string;

    /**
     * ユーザデータID。
     */
    userDataId: string;
}
