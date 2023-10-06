
/**
 * クッキーオブジェクト。
 */
declare class Cookie {
    /**
     * クッキーオブジェクトを生成します。
     * @param name 
     * @param value 
     */
    constructor(name: string, value: string);

    /**
     * このクッキーに記述されているコメントを取得します。
     */
    getComment(): string;

    /**
     * このクッキーにセットされているドメイン名を返します。
     */
    getDomain(): string;

    /**
     * クッキーの最長存続期間の値を秒単位の数値で返します。
     */
    getMaxAge(): number;

    /**
     * クッキーの名前を取得します。
     */
    getName(): string;

    /**
     * クッキーに含まれているサーバ上のパスを返します。
     */
    getPath(): string;

    /**
     * HTTPS や SSL のようなセキュアなプロトコルを使っている場合のみ、ブラウザがクッキーを送るかどうかの値を取得します。
     */
    getSecure(): boolean;

    /**
     * クッキーの値を取得します。
     */
    getValue(): string;

    /**
     * クッキーのプロトコルのバージョンを取得します。
     */
    getVersion(): number;

    /**
     * クッキーがHTTP通信に限定されているかどうかの情報を取得します。
     */
    isHttpOnly(): boolean;

    /**
     * クッキーにコメントを設定します。
     * @param purpose 
     */
    setComment(purpose: string): void;

    /**
     * このクッキーがどこで生成されたかを表すドメインを設定します。
     * @param domain 
     */
    setDomain(domain: string): void;

    /**
     * クッキーをHTTP通信に限定するかどうかを設定します。
     * @param isHttpOnly 
     */
    setHttpOnly(isHttpOnly: boolean): void;

    /**
     * クッキーの最長存続期間を秒単位で設定します。
     * @param expiry 
     */
    setMaxAge(expiry: number): void;

    /**
     * クライアントがこのクッキーを返さなくてはいけないパスを設定します。
     * @param uri 
     */
    setPath(uri: string): void;

    /**
     * HTTPS や SSL のようなセキュアなプロトコルを使っている場合のみ、ブラウザがクッキーを送るかどうかを設定します。
     * @param flag 
     */
    setSecure(flag: boolean): void;

    /**
     * クッキーに新しい値を設定します。
     * @param newValue 
     */
    setValue(newValue: string): void;

    /**
     * クッキーのプロトコルのバージョンを設定します。
     * @param version 
     */
    setVersion(version: number): void;
}
