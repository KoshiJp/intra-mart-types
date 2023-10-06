/**
 * Webクラス。
 */
declare class Web {
    /**
     * WebサーバのベースURLを取得します。
     */
    static base(): string;

    /**
     * 現在処理中ページパスを取得します。
     */
    static current(): string;

    /**
     * グローバル関数「redirect()」の中で使えるように、 指定されたURLをエンコードします。
     * @param url 
     */
    static encodeRedirectURL(url: string): string;

    /**
     * 指定されたURLがセッションIDを含むようにエンコードします。
     * @param url 
     */
    static encodeURL(url: string): string;

    /**
     * リクエストされたURIのうち、 リクエストのコンテキストを指す部分を返します。
     */
    static getContextPath(): string;

    /**
     * レスポンスオブジェクトを返します。
     */
    static getHTTPResponse(): HTTPResponse;

    /**
     * リクエストのプロトコル名とバージョンを HTTP/1.1 のように プロトコル名/メジャーバージョン番号.マイナーバージョン番号 の形式で返します。
     */
    static getProtocol(): string;

    /**
     * リクエストを送ってきたクライアントの IP(Internet Protocol) アドレスを返します。
     */
    static getRemoteAddr(): string;

    /**
     * リクエストを送ってきたクライアントの FQDN(Fully Qualified Domain Name: 完全修飾ドメイン名)を返します。;
     */
    static getRemoteHost(): string;

    /**
     * リクエストオブジェクトを返します。
     */
    static getRequest(): Request;

    /**
     * 例えば http や https, ftp のようなリクエストのスキームを返します。
     */
    static getScheme(): string;

    /**
     * リクエストを受け取ったサーバのホスト名を返します。
     */
    static getServerName(): string;

    /**
     * このリクエストを受け取るのに使われたポート番号を返します。
     */
    static getServerPort(): number;

    /**
     * CGI 環境変数データを取得します。
     * @param ref_name 
     */
    static getenv(ref_name: string): string;
    /**
     * Ｗｅｂサーバ名を取得します。
     */
    static host(): string;

    /**
     * このリクエストが HTTPS のようなセキュアなチャネルを使って 送られたものかどうかを示す boolean を返します。
     */
    static isSecure(): boolean;

    /**
     * リクエストURLを取得します。
     */
    static location(): string;

    /**
     * ＷｅｂサーバのＨＴＴＰポートを取得します。
     */
    static port(): number;

    /**
     * Ｗｅｂサーバのプロトコルを取得します。
     */
    static protocol(): string;

    /**
     * リクエストを要求したページパスを取得します。
     */
    static referer(): string;

    /**
     * Ｗｅｂサーバスクリプト名を取得します。
     */
    static script(): string;

    /**
     * HTTP ヘッダを設定します。
     * @param name 
     * @param value 
     */
    static setHTTPResponseHeader(name: string, value: string): void;
}
