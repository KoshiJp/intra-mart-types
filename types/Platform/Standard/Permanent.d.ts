/**
 * 永続情報操作オブジェクト。
 */
declare class Permanent {
    /**
     * コンストラクタ。
     * @param domain 
     * @param group 
     */
    constructor(domain: string, group: string);

    /**
     * カテゴリ内のすべての設定済みデータを取得します。
     */
    elements(): object;

    /**
     * カテゴリ・キーの一覧を取得します。
     * @param domain 
     */
    static entries(domain: string): any[];

    /**
     * カテゴリ・データを削除します。
     */
    extinction(): object;

    /**
     * カテゴリ内の指定保存キーにマップされているデータを取得します。
     * @param key 
     */
    get(key: string): object;

    /**
     * カテゴリ内の保存キーの一覧を取得します。
     */
    keys(): any[];

    /**
     * カテゴリ内の指定保存キーとマップされているデータを削除します。
     * @param key 
     */
    remove(key: string): object;

    /**
     * カテゴリ内の指定保存キーで指定データを保存します。
     * @param key 
     * @param value 
     */
    set(key: string, value: object): object;
}
