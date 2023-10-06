/**
 * データベースアクセス処理結果オブジェクト。
 */
declare class DatabaseResult {
    /**
     * 取得行数 または 実行行数。
     */
    readonly countRow: number;

    /**
     * 取得情報。
     */
    readonly data: any[];

    /**
     * エラー判定。
     */
    readonly error: boolean;

    /**
     * エラーコード。
     */
    readonly errorCode: number;

    /**
     * エラーメッセージ。
     */
    readonly errorMessage: string;

    /**
     * 最大取得行数。
     */
    readonly maxRow: number;

    /**
     * パラメータ。
     */
    readonly params: any[];

    /**
     * 実行SQLのタイプ。
     */
    readonly select: boolean;

    /**
     * SQL文。
     */
    readonly sql: string;

    /**
     * SQL STATE。
     */
    readonly sqlState: string;

    /**
     * メッセージを取得します。
     */
    getMessage(): string;

    /**
     * データベースアクセスが成功したかどうかを取得します。
     */
    isSuccess(): boolean;
}
