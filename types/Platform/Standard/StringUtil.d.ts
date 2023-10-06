/**
 * 文字列ユーティリティオブジェクト。
 */
declare class StringUtil {
    /**
     * タブ(0x09)、改行(0x0a)、復帰(0x0d)以外のUnicodeのC0制御文字(0x00-0x1F)、削除文字(0x7F)、および、C1制御文字(0x80-0x9F)を除去した文字列を返します。
     * @param str 
     */
    static removeControlCharacterWithoutTCL(str: string): string;

    /**
     * UnicodeのC0制御文字(0x00-0x1F)、削除文字(0x7F)、および、C1制御文字(0x80-0x9F)を除去した文字列を返します。
     * @param str 
     * @param exclusion 
     */
    static removeControlCharacter(str: string, exclusion: string): string;
}
