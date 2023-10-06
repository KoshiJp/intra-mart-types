/**
 * 案件フィルタリング条件 オブジェクト。
 */
declare class MatterFilterConditionInfo {
    /**
     * 処理権限者コード。
     */
    authUserCd: string;

    /**
     * フローIDの配列。
     */
    filterFlowIdList: any[];

    /**
     * 権限者所属組織情報オブジェクトの配列。
     */
    orgz: any[];
}
