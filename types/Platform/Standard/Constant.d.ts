/**
 * 定数値管理オブジェクト。
 */
declare class Constant {
    /**
     * 定数値を設定します。
     * @param key 
     * @param value 
     */
    static define(key: string, value: object): void;

    /**
     * 定数値設定ファイルを読込ます。
     * @param src 
     */
    static load(src: string): void;
}
