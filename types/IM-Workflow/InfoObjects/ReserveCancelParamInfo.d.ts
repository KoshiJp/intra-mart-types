/**
 * 保留解除用パラメータ情報オブジェクト。
 */
declare class ReserveCancelParamInfo {
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
