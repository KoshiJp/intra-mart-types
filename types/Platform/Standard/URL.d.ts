/**
 * URL操作クラス。
 */
declare class URL {

    /**
     * コンストラクタ。
     * @param page_path 
     */
    constructor(page_path: string);

    /**
     * ＵＲＬ（絶対パス）を取得します。
     */
    absoluteLocation(): string;

    /**
     * 指定のＵＲＬに現在のセッションを維持するための情報を付加した ＵＲＬを作成して返します。
     * @param url 
     */
    static createSessionURL(url: string): string;

    /**
     * ＵＲＬデコードを行います。
     * @param target 
     * @param enc 
     */
    static decode(target: string, enc: string): string;

    /**
     * ＵＲＬエンコードを行います。
     * @param target 
     * @param enc 
     */
    static encode(target: string, enc?: string): string;

    /**
     * ＵＲＬ引数を取得します。
     */
    getArgument(): string;

    /**
     * ＵＲＬを取得します。
     */
    location(): string;

    /**
     * リクエスト時起動関数引数を設定します。
     * @param func_name 
     */
    setAction(func_name: string): void;

    /**
     * ＵＲＬ引数を設定します。
     * @param name 
     * @param value 
     */
    setArgument(name: string, value: string): void;

    /**
     * ラベルを設定します。
     * @param name 
     */
    setLabel(name: string): void;
}
