/**
 * セッション情報を取得するオブジェクト。
 */
declare class Client {
    /**
     * クライアント固有保存情報を取得します。
     * @param key 
     */
    static get(key: string): object;

    /**
     * セッションＩＤを取得します。
     */
    static identifier(): string;

    /**
     * 保存キー一覧を取得します。
     */
    static keys(): any[];

    /**
     * セッションタイムアウトの時間設定を取得する。
     */
    static life(): number;

    /**
     * クライアント固有情報を削除します。
     * @param key 
     */
    static remove(key: string): void;

    /**
     * クライアント固有情報を保存します。
     * @param key 
     * @param value 
     */
    static set(key: string, value: object): void;
}
