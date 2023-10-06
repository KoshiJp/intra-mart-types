/**
 * ジョブネット情報オブジェクト。
 */
declare class Jobnet {
    /** 
     * ジョブネットカテゴリID。
     */
    categoryId: string;

    /** 
     * 並列実行不可。
     */
    disallowConcurrent: boolean;

    /** 
     * ジョブネットID。
     */
    id: string;

    /** 
     * 実行ジョブ配列。(ジョブの実行順にジョブIDを設定した配列です。)
     */
    jobIds: any[];

    /** 
     * 国際化情報オブジェクト。
     */
    localizes: object;

    /** 
     * ジョブネットパラメータ。
     */
    parameters: object;

    /** 
     * このジョブネットで利用するジョブID（String）の配列。
     */
    useJobIds: any[];
}
