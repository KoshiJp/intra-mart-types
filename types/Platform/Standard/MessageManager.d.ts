/**
 * メッセージを取得するためのAPIです。
 */
declare class MessageManager {
    /**
     * 国際化されたメッセージを取得します。
     * @param locale 
     * @param key 
     * @param args 
     */
    static getLocaleMessage(locale: string, key: string, ...args: any[]): string;

    /**
     * メッセージを取得します。
     * @param key 
     * @param args 
     */
    static getMessage(key: string, ...args: any[]): string;

    /**
     * メッセージが存在するかどうかを判断します。
     * @param locale 
     * @param key 
     */
    static hasLocaleMessage(locale: string, key: string): boolean;

    /**
     * メッセージが存在するかどうかを判断します。
     * @param key 
     */
    static hasMessage(key: string): boolean;
}
