/**
 * スクリプト開発からトランザクションを制御するためのクラスです。
 */
declare class Transaction {
    /**
     * データベーストランザクションを開始します。
     * @param operation 
     */
    static begin(operation?: Function): DatabaseResult;

    /**
     * データベーストランザクションをコミットします。
     */
    static commit(): DatabaseResult;

    /**
     * トランザクションの状態を取得します。
     */
    static isTransaction(): DatabaseResult;

    /**
     * データベーストランザクションをロールバックします。
     */
    static rollback(): DatabaseResult;

    /**
     * データベースがロールバックされる予定であるかを返します。
     */
    static toBeRollbacked(): DatabaseResult;
}
