/**
 * グローバル関数。
 */

/**
 * メッセージをシステム出力に出力します。
 * @param message 
 */
declare function echo(message: string): void;

/**
 * システムコールを行います。
 * @param command 
 */
declare function execute(command: string): object;

/**
 * 現在のプログラム実行を中断して別プログラムを実行します。
 * @param prgram_name 
 * @param argument 
 */
declare function forward(prgram_name: string, argument: object): void;

/**
 * メッセージダイジェストを生成します。
 * @param algorithm 
 * @param value 
 */
declare function getMessageDigest(algorithm: string, value: string): string;

/**
 * JSファイルをロードして実行します。
 * @param path 
 * @param args 
 */
declare function include(path: string, args: object[]): object;

/**
 * 指定の値の型が配列型であるかどうか判別します。
 * @param object 
 */
declare function isArray(object: object): boolean;

/**
 * 空文字列であるか判別します。
 * @param object 
 */
declare function isBlank(object: object): boolean;

/**
 * 指定の値の型が真偽値型であるかどうか判別します。
 * @param object 
 */
declare function isBoolean(object: object): boolean;

/**
 * 指定の値の型がDate型であるかどうか判別します。
 * @param object 
 */
declare function isDate(object: object): boolean;

/**
 * 引数に指定された２つの値が等しいかどうか判別します。
 * @param value_a 
 * @param value_b 
 */
declare function isEqual(value_a: object, value_b: object): boolean;

/**
 * 指定の値が偽値であるかどうか判別します。
 * @param object 
 */
declare function isFalse(object: object): boolean;

/**
 * 指定の値の型が関数型であるかどうか判別します。
 * @param object 
 */
declare function isFunction(object: object): boolean;

/**
 * 指定の値が null であるかどうか判別します。
 * @param object 
 */
declare function isNull(object: object): boolean;

/**
 * 指定の値の型が数値型であるかどうか判別します。
 * @param object 
 */
declare function isNumber(object: object): boolean;

/**
 * 指定の値の型がObject型であるかどうか判別します。
 * @param object 
 */
declare function isObject(object: object): boolean;

/**
 * 指定の値の型が文字列型であるかどうか判別します。
 * @param object 
 */
declare function isString(object: object): boolean;

/**
 * 指定の値が真値であるかどうか判別します。
 * @param object 
 */
declare function isTrue(object: object): boolean;

/**
 * 指定の値が undefined であるかどうか判別します。
 * @param object 
 */
declare function isUndefined(object: object): boolean;

/**
 * JSファイルをロードします。
 * @param path 
 */
declare function load(path: string): void;

/**
 * 指定ＵＲＬへリダイレクトを行います。
 * @param url 
 */
declare function redirect(url: string): void;

/**
 * 呼び出元のプロトコルを維持した状態で、指定ページにリダイレクトを行います。
 * @param url 
 * @param args 
 */
declare function secureRedirect(url: string, args: object): void;

/**
 * 現在処理中のプログラム実行を中断して、指定のソースを送信します。
 * @param stream 
 */
declare function transmission(stream: string): void;
