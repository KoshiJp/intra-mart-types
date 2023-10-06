/**
 * スクリプト開発モデル用のCache機構を提供します。
 */
declare class Cache {
    /**
     * キャッシュオブジェクトを生成します。
     * @param cacheName 
     */
    constructor(cacheName: string);

    /**
     * キャッシュの内容を取得します。
     * @param key 
     */
    get(key: string): object;

    /**
     * キャッシュに内容を登録します。
     * @param key 
     * @param value 
     */
    put(key: string, value: object): void;

    /**
     * キャッシュに含まれる全ての内容を削除します。
     */
    removeAll(): void;

    /**
     * 指定されたキーに対するキャッシュを削除します。
     * @param key 
     */
    remove(key: string): void;
}
