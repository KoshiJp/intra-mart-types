/**
 * アクセスコンテキスト取得API。
 */
declare class Contexts {
    /**
     * アカウントコンテキストを取得します。
     */
    static getAccountContext(): AccountContext;

    /**
     * クライアントコンテキストを取得します。
     */
    static getClientContext(): ClientContext;

    /**
     * 外部ユーザコンテキストを取得します。
     */
    static getExternalUserContext(): ExternalUserContext;

    /**
     * ジョブスケジューラコンテキストを取得します。
     */
    static getJobSchedulerContext(): JobSchedulerContext;

    /**
     * ユーザコンテキストを取得します。
     */
    static getUserContext(): UserContext;
}
