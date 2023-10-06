/**
 * プロシージャクラス。
 */
declare class Procedure {
    /**
     * ＪＳ関数（オブジェクト等）を設定します。
     * @param name 
     * @param func 
     */
    static define(name: string, func: object): void;
}
