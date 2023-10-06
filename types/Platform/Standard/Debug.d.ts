/**
 * デバッグ情報を表示するオブジェクト。
 */
declare class Debug {
    /**
     * ブラウザへの変数情報を表示します。
     * @param arg 
     * @param args 
     */
    static browse(arg: object, args: object[]): void;

    /**
     * オブジェクトの内容をコンソール上に表示します。
     * @param arg 
     * @param args 
     */
    static console(arg: object, args: object[]): void;

    /**
     * コンソールへメッセージを出力します。
     * @param msg 
     */
    static print(msg: string): void;

    /**
     * ファイルへメッセージを出力します。
     * @param msg 
     */
    static write(msg: string): void;
}
