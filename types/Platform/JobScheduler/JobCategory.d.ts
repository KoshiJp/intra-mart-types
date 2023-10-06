/**
 * ジョブカテゴリオブジェクト。
 */
declare class JobCategory {
    /**
     * ジョブカテゴリID。
     */
    id: string;

    /**
     * 国際化情報オブジェクト。
     */
    localizes: object;

    /**
     * 親ジョブカテゴリID。
     */
    parentId: string;
}
