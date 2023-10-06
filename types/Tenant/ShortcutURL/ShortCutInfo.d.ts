/**
 * ショートカット情報オブジェクト。
 */
declare class ShortCutInfo {
    /**
     * 許可ユーザのユーザID(String)の配列。
     */
    allowUsers: any[];

    /**
     * 認証フラグ。
     */
    isAuth: boolean;

    /**
     * 表示させるURL。
     */
    url: string;

    /**
     * URL引数オブジェクト。
     */
    urlParams: object;

    /**
     * URL引数オブジェクトのURL引数値。
     */
    urlParamsKey: string;

    /**
     * 有効終了日。
     */
    validEndDate: Date;

    /**
     * 拡張検証コード。
     */
    validationCode: string;

    /**
     * 拡張検証パラメータ。
     */
    validationParam: string;
}
