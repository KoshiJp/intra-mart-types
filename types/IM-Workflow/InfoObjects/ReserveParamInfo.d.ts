/**
 * 保留用パラメータ情報オブジェクト。
 */
declare class ReserveParamInfo {
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
