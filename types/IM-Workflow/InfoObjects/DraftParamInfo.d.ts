/**
 * 起票用パラメータ情報オブジェクト。
 */
declare class DraftParamInfo {
    /**
     * 申請基準日（"yyyy/MM/dd"形式の文字列）。
     */
    applyBaseDate: string;

    /**
     * 処理対象者情報（プラグイン情報）オブジェクトの配列。
     */
    applyUserPlugin: any[];

    /**
     * 起票者コード。
     */
    draftUserCode: string;

    /**
     * フローID。
     */
    flowId: string;

    /**
     * 案件名。
     */
    matterName: string;

    /**
     * 案件番号。
     */
    matterNumber: string;

    /**
     * 優先度。
     */
    priorityLevel: string;

    /**
     * ユーザデータID。
     */
    userDataId: string;
}
