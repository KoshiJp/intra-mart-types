/**
 * ジョブ詳細情報オブジェクト。
 */
declare class JobDetail {
    /**
     * ジョブカテゴリID。
     */
    categoryId: string;

    /**
     * ジョブID。
     */
    id: string;

    /**
     * ジョブ実行言語。
     */
    jobType: string;

    /**
     * 国際化情報オブジェクト。
     */
    localizes: object;

    /**
     * ジョブパラメータ。
     */
    parameters: object;
}
