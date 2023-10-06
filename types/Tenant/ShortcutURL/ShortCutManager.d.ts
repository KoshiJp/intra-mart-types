/**
 * ショートカット情報オブジェクト。
 */
declare class ShortCutManager {
    /**
     * コンストラクタ。
     */
    constructor();

    /**
     * 指定日付加算。
     * @param countDays 
     */
    addValidEndDate(countDays: number): Date;

    /**
     * ショートカットＩＤの作成。
     * @param shortCutInfo 
     */
    createShortCut(shortCutInfo: ShortCutInfo): string;

    /**
     * ショートカットＩＤ削除。
     * @param shortCutId 
     */
    deleteShortCut(shortCutId: string): boolean;

    /**
     * ショートカットエラーページ取得。
     */
    getErrorPage(): string;

    /**
     * ショートカットメインページ取得。
     */
    getMainPage(): string;

    /**
     * ショートカット情報取得。
     * @param shortCutId 
     */
    getShortCutInfo(shortCutId: string): ShortCutInfo;

    /**
     * 指定したショートカット情報に対してユーザが許可されているか判定します。
     * @param shortcutInfo 
     * @param userId 
     */
    isAllowUser(shortcutInfo: ShortCutInfo, userId: string): boolean;

    /**
     * ショートカット情報を検証し、無効なショートカット情報の削除数を取得。
     * @param verifyDate 
     */
    verifyShortCut(verifyDate: Date): number;
}
