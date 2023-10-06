/**
 * アカウントコンテキストオブジェクト。
 */
declare class AccountContext {
    /**
     * アプリケーションライセンス(String)の一覧。
     */
    applicationLicenses: string[];

    /**
     * 認証状況。
     */
    authenticated: boolean;

    /**
     * カレンダーID。
     */
    calendarId: string;

    /**
     * 日時表示形式一覧。
     */
    dateTimeFormats: object;

    /**
     * 数値形式のフォーマットID。
     */
    decimalFormatId: string;

    /**
     * 文字エンコーディング。
     */
    encoding: string;

    /**
     * 週の開始曜日。
     */
    firstDayOfWeek: number;

    /**
     * ホームURL。
     */
    homeUrl: string;

    /**
     * ロケール。
     */
    locale: string;

    /**
     * ログイングループID。非推奨です。テナントIDと同じ値が取得されます。
     */
    loginGroupId: string;

    /**
     * ログイン時間。
     */
    loginTime: Date;

    /**
     * ロールID(String)の一覧。
     */
    roleIds: string[];

    /**
     * ログイン署名。
     */
    signature: string;

    /**
     * テナントID。
     */
    tenantId: string;

    /**
     * テーマID。
     */
    themeId: string;

    /**
     * タイムゾーン。
     */
    timeZone: TimeZone;

    /**
     * ユーザID。
     */
    userCd: string;

    /**
     * ユーザ種別。
     */
    userType: string;
}
