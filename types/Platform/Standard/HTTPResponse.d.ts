/**
 * HTTPレスポンスオブジェクト。
 */
declare class HTTPResponse {
    /**
     * 指定されたクッキーをレスポンスに設定します。このメソッドは Ver.8.0.7 以降のバージョンで使用可能です。
     * @param cookie 
     */
    addCookie(cookie: Cookie): void;

    /**
     * 指定された名前と日付の値を持つレスポンスヘッダを追加します。このメソッドは Ver.8.0.7 以降のバージョンで使用可能です。
     * @param name 
     * @param date 
     */
    addDateHeader(name: string, date: Date): void;

    /**
     * 指定された名前と日付の値を持つレスポンスヘッダを追加します。このメソッドは Ver.8.0.7 以降のバージョンで使用可能です。
     * @param name 
     * @param date 
     */
    addDateHeader(name: string, date: number): void;

    /**
     * 指定された名前と値を持つレスポンスヘッダを追加します。このメソッドは Ver.8.0.7 以降のバージョンで使用可能です。
     * @param name 
     * @param value 
     */
    addHeader(name: string, value: string): void;

    /**
     * 指定されたステータスを使ってクライアントにエラーレスポンスを送ります。
     * @param sc 
     * @param msg 
     */
    sendError(sc: number, msg?: string): boolean;

    /**
     * 指定のデータを送信します。
     * @param source 
     */
    sendMessageBodyAsBinary(source: Storage): void;

    /**
     *  指定のデータを送信します。
     * @param source 
     * @param charsetName 
     */
    sendMessageBodyAsText(source: Storage, charsetName: string): void;

    /**
     * 指定のファイルを送信します。
     * @param file 
     * @param isDelete 
     */
    sendMessageBodyFile(file: File, isDelete?: boolean): void;

    /**
     * 指定のデータを送信します。
     * @param str 
     */
    sendMessageBodyString(str: string): void;

    /**
     * 指定のデータを送信します。
     * @param strm 
     */
    sendMessageBody(strm: string): void;

    /**
     * レスポンスのメッセージボディ部分の長さをセットします。
     * @param len 
     */
    setContentLength(len: number): void;

    /**
     * レスポンスの Content-Type を設定します。
     * @param type 
     */
    setContentType(type: string): void;

    /**
     * 指定された名前と日付の値を持つレスポンスヘッダを設定します。このメソッドは Ver.8.0.7 以降のバージョンで使用可能です。
     * @param name 
     * @param date 
     */
    setDateHeader(name: string, date: Date): void;

    /**
     * 指定された名前と日付の値を持つレスポンスヘッダを設定します。このメソッドは Ver.8.0.7 以降のバージョンで使用可能です。
     * @param name 
     * @param date 
     */
    setDateHeader(name: string, date: number): void;

    /**
     * 指定された名前と値を持つレスポンスヘッダを設定します。
     * @param name 
     * @param value 
     */
    setHeader(name: string, value: string): void;

    /**
     * このレスポンスのステータスコードを設定します。
     * @param sc 
     */
    setStatus(sc: number): void;
}
