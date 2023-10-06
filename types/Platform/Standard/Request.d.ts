/**
 * リクエストオブジェクト。
 */
declare class Request {
    /**
     * このリクエストで利用可能な属性名を含む配列型のオブジェクトを返します。
     */
    getAttributeNames(): any[];

    /**
     * 指定された名前の属性値を返します。
     * @param name 
     */
    getAttribute(name: string): object;

    /**
     * リクエストコンテンツの長さを取得します。
     */
    getContentLength(): number;

    /**
     * リクエストコンテンツタイプを取得します。
     */
    getContentType(): string;

    /**
     * すべてのクッキーの名前の配列を返します。
     */
    getCookieNames(): any[];

    /**
     * 指定の名前を持つクッキーの値を返します。
     * @param name 
     */
    getCookie(name: string): string;

    /**
     * 指定の名前を持つすべてのクッキーの値の配列を返します。
     * @param name 
     */
    getCookies(name: string): any[];

    /**
     * このリクエストに含まれる全てのヘッダ名の配列を返します。
     */
    getHeaderNames(): any[];

    /**
     * 指定されたリクエストヘッダの値をStringとして返します。
     * @param name 
     */
    getHeader(name: string): string;

    /**
     * 指定されたリクエストヘッダの全ての値をStringの配列として返します。
     * @param name 
     */
    getHeaders(name: string): any[];

    /**
     * メッセージボディに含まれているバイナリデータをStringとして返します。
     */
    getMessageBodyAsStream(): string;

    /**
     * メッセージボディに含まれているデータをStringとして返します。
     */
    getMessageBodyAsString(): string;

    /**
     * メッセージボディに含まれているバイナリデータをStringとして返します。
     * @param enc 
     */
    getMessageBody(enc: string): string;

    /**
     * このリクエストを生成したHTTPメソッドの名前を返します。
     */
    getMethod(): string;

    /**
     * すべてのリクエストパラメータ名を返します。
     */
    getParameterNames(): any[];

    /**
     * 指定のキーに該当する URL 引数データを返却します。
     * @param key 
     */
    getParameterValue(key: string): string;

    /**
     * 指定のキーに該当する URL 引数データ群を返却します。
     * @param key 
     */
    getParameterValues(key: string): any[];

    /**
     * 指定されたパラメータの値をRequestParameterオブジェクトとして返します。
     * @param name 
     */
    getParameter(name: string): RequestParameter;

    /**
     * 指定されたパラメータのすべての値が格納された配列を返します。
     * @param name 
     */
    getParameters(name: string): any[];

    /**
     * リクエストされたURLのパスの後ろに含まれているクエリ文字列を返します。
     */
    getQueryString(): string;

    /**
     * メッセージボディに含まれているバイナリデータを ByteReader として返します。
     * @param callback 
     */
    openMessageBodyAsBinary(callback: Function): ByteReader;

    /**
     * メッセージボディに含まれているデータを TextReader として返します。
     * @param callback 
     * @param enc 
     */
    openMessageBodyAsText(callback: Function, enc: string): TextReader;

    /**
     * このリクエストから属性を削除します。
     * @param name 
     */
    removeAttribute(name: string): void;

    /**
     * 。このリクエストに属性をセットします
     */
    setAttribute(name: string, object: object): void;
}
