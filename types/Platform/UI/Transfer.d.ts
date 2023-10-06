/**
 * メッセージ表示画面へ遷移する関数を提供します。
 */
declare class Transfer {
    /**
     * エラー画面へ遷移します。
     * @param param 
     */
    static toErrorPage(param: object): void;

    /**
     * インフォメーション画面へ遷移します。
     * @param param 
     */
    static toInformationPage(param: object): void;

    /**
     * 警告画面へ遷移します。
     * @param param 
     */
    static toWarningPage(param: object): void;
}
