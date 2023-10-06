/**
 * 処理結果ステータス情報オブジェクト。
 */
declare class ResultStatusInfo {
    /**
     * エラーレベルを格納。
     */
    readonly level: number;

    /**
     * 処理結果メッセージ引数の配列。
     */
    readonly messageArgs: any[];

    /**
     * 処理結果メッセージID。
     * ワークフローで想定している例外以外が発生した場合は、null が返却される場合があります。（例えば Javaの例外）
     */
    readonly messageId: string;

    /**
     * メッセージ情報オブジェクトの配列。
     */
    readonly subMessages: any[];
}
