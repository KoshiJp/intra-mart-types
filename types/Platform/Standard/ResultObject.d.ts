/**
 * 汎用的な処理結果クラスを提供します。
 */
declare class ResultObject {
    /**
     * 取得情報。機能により、設定されるデータは異なります。
     */
    readonly data: object;

    /**
     * エラー判定。
     */
    readonly error: boolean;

    /**
     * エラーメッセージ。
     */
    readonly errorMessage: string;
}
