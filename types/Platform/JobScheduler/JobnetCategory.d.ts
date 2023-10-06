/**
 * ジョブネットカテゴリオブジェクト。
 */
declare class JobnetCategory {
    /**
     * ジョブネットカテゴリID。
     */
    id: string;

    /**
     * 国際化情報オブジェクト。
     */
    localizes: object;

    /**
     * 親ジョブネットカテゴリID。
     */
    parentId: string;
}
