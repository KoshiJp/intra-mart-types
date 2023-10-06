/**
 * 一時保存一覧マネージャ。
 */
declare class TempSaveMatterList {
    /**
     * 代理フラグ
     */
    static ACT_FLAG: string;

    /**
     * 申請基準日（"yyyy/MM/dd"形式の文字列）
     */
    static APPLY_BASE_DATE: string;

    /**
     * 権限者コード
     */
    static AUTH_USER_CODE: string;

    /**
     * 権限者名
     */
    static AUTH_USER_NAME: string;

    /**
     * フローグループID
     */
    static FLOW_GROUP_ID: string;

    /**
     * フローID
     */
    static FLOW_ID: string;

    /**
     * フロー名
     */
    static FLOW_NAME: string;

    /**
     * 備考（フロー）
     */
    static FLOW_NOTE: string;

    /**
     * フローバージョンID
     */
    static FLOW_VERSION_ID: string;

    /**
     * 案件名
     */
    static MATTER_NAME: string;

    /**
     * 申請ノードID
     */
    static NODE_ID: string;

    /**
     * 処理コメント
     */
    static PROCESS_COMMENT: string;

    /**
     * 保存日（"yyyy/MM/dd HH:mm:ss.SSS"形式の文字列）
     */
    static SAVE_DATE: string;

    /**
     * ユーザデータID
     */
    static USER_DATA_ID: string;

    /**
     * コンストラクタ。
     * @param userCd 
     * @param localeId 
     */
    constructor(userCd: string, localeId?: string);

    /**
     * 特定ユーザが保存した一時保存情報の件数を取得します。
     */
    getTempSaveMatterListCountForEachFlow(): WorkflowResultInfo

    /**
     * 特定ユーザが保存した一時保存情報の件数を取得します。
     * @param cond 
     */
    getTempSaveMatterListCount(cond: ListSearchCondition): WorkflowResultInfo

    /**
     * 特定ユーザが保存した一時保存情報一覧を取得します。
     * @param cond 
     */
    getTempSaveMatterList(cond: ListSearchCondition): WorkflowResultInfo
}
