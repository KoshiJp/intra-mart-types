/**
 * アプリケーション・ロック管理オブジェクト。
 */
declare class NewLock {
    /**
     * リクエストに紐付くアプリケーションロックを開始します。
     * @param name 
     */
    static lockRequestScope(name: string): boolean;

    /**
     * アプリケーションロックを開始します。
     * @param name 
     */
    static lock(name: string): boolean;

    /**
     * アプリケーションロックを開始して、指定の関数を実行します。
     * @param name 
     * @param $function 
     * @param timeout 
     */
    static run(name: string, $function: Function, timeout: number): boolean;

    /**
     * リクエストに紐付くアプリケーションロックの開始要求を行ないます。
     * @param name 
     * @param timeout 
     */
    static tryLockRequestScope(name: string, timeout: number): boolean;

    /**
     * アプリケーションロックの開始要求を行ないます。
     * @param name 
     * @param timeout 
     */
    static tryLock(name: string, timeout: number): boolean;

    /**
     * アプリケーションロックを開放します。
     * @param name 
     */
    static unlock(name: string): boolean;
}
