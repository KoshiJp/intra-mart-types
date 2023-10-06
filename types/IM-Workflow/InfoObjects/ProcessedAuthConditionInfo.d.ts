/**
 * 処理済一覧の処理権限条件情報オブジェクト。
 */
declare class ProcessedAuthConditionInfo {
    /**
     * 本人申請情報取得フラグ。（0:取得なし / 1:取得あり）
     */
    applyFlg: string;

    /**
     * 他人（代理元）申請情報取得フラグ。（0:取得なし / 1:取得あり）
     */
    applyOriginalActFlg: string;

    /**
     * 本人（代理先）申請情報取得フラグ。（0:取得なし / 1:取得あり）
     */
    applySelfActFlg: string;

    /**
     * 他人（代理先）申請情報取得フラグ。（0:取得なし / 1:取得あり）
     */
    applyTargetActFlg: string;

    /**
     * 本人承認情報取得フラグ。（0:取得なし / 1:取得あり）
     */
    approveFlg: string;

    /**
     * 他人（代理元）承認情報取得フラグ。（0:取得なし / 1:取得あり）
     */
    approveOriginalActFlg: string;

    /**
     * 本人（代理先）承認情報取得フラグ。（0:取得なし / 1:取得あり）
     */
    approveSelfActFlg: string;

    /**
     * 他人（代理先）承認情報取得フラグ。（0:取得なし / 1:取得あり）
     */
    approveTargetActFlg: string;
}
