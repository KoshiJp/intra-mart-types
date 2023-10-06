/**
 * 案件（完了）マネージャ。
 */
declare class CplMatter {
    /**
     * 処理対象者変更フラグ
     * 案件操作権限情報	
     */
    static CHANGE_USER_FLAG: string;

    /**
     * 確認済みフラグ
     * 完了案件の確認処理権限者情報	
     */
    static CONFIRM_CPL_FLAG: string;

    /**
     * 動的処理ノード削除フラグ
     * 案件操作権限情報	
     */
    static DELETE_DYNAMIC_NODE_FLAG: string;

    /**
     * 処理対象者展開フラグ
     * 案件操作権限情報	
     */
    static EXPAND_USER_FLAG: string;

    /**
     * 操作レベル
     * 案件操作権限情報	
     */
    static HANDLE_LEVEL: string;

    /**
     * 案件操作後進フラグ
     * 案件操作権限情報	
     */
    static HANDLE_MOVE_BACKWARD_FLAG: string;

    /**
     * 案件操作前進フラグ
     * 案件操作権限情報	
     */
    static HANDLE_MOVE_FORWARD_FLAG: string;

    /**
     * 案件操作終了フラグ
     * 案件操作権限情報	
     */
    static HANDLE_TERMINATE_FLAG: string;

    /**
     * 横配置ノード設定フラグ
     * 案件操作権限情報	
     */
    static HORIZONTAL_NODE_CONFIG_FLAG: string;

    /**
     * 保留解除フラグ
     * 案件操作権限情報	
     */
    static RESERVE_CANCEL_FLAG: string;

    /**
     * 動的処理ノード復活フラグ
     * 案件操作権限情報	
     */
    static UNDELETE_DYNAMIC_NODE_FLAG: string;

    /**
     * ユーザコード
     * 案件操作権限情報・確認処理権限者情報共通	
     */
    static USER_CODE: string;

    /**
     * ユーザ名
     * 案件操作権限情報・確認処理権限者情報共通	
     */
    static USER_NAME: string;

    /**
     * 縦配置ノード設定フラグ
     * 案件操作権限情報
     */
    static VERTICAL_NODE_CONFIG_FLAG: string;

    /**
     * コンストラクタ。
     * @param systemMatterId 
     */
    constructor(systemMatterId: string);

    /**
     * コンストラクタ。
     * @param localeId 
     * @param systemMatterId 
     */
    constructor(localeId: string, systemMatterId: string);


    /**
     * 完了案件の処理時に添付したファイルの情報の件数を取得します。
     */
    getAttachFileListCount(): WorkflowResultInfo;

    /**
     * 完了案件の処理時に添付したファイルの情報をすべて取得します。
     */
    getAttachFileList(): WorkflowResultInfo;

    /**
     * 指定した添付ファイルのセッションスコープストレージを取得します。
     * @param systemFileName 
     */
    getAttachFile(systemFileName: string): SessionScopeStorage;

    /**
     * 完了案件の確認処理権限者情報の件数を取得します。
     */
    getCnfmAuthUserListCount(): WorkflowResultInfo;

    /**
     * 完了案件の確認処理権限者情報をすべて取得します。
     * @param cond 
     */
    getCnfmAuthUserList(cond: SortConditionForAuthUser): WorkflowResultInfo;

    /**
     * 完了案件の確認履歴の件数を取得します。
     */
    getCnfmHistoryListCount(): WorkflowResultInfo;

    /**
     * 完了案件の確認履歴をすべて取得します。
     */
    getCnfmHistoryList(): WorkflowResultInfo;

    /**
     * 完了案件の最終処理結果フロー情報「flow.xml」を文字列で取得します。
     */
    getExecFlowXML(): WorkflowResultInfo;

    /**
     * 完了案件の最終処理結果フロー情報「flow.xml」を取得します。
     */
    getExecFlow(): WorkflowResultInfo;

    /**
     * 完了案件の最終処理結果フロー情報「flow.xml」から定義されているノードを、実施可能な処理種別情報とともにすべて取得します。
     */
    getExecNodeListWithProcessType(): WorkflowResultInfo;

    /**
     * 完了案件の申請・起票時の初期フロー設定情報であるマスタフロー「masterflow.xml」を文字列で取得します。
     */
    getMasterFlowXML(): WorkflowResultInfo;

    /**
     * 完了案件の申請・起票時の初期フロー設定情報であるマスタフロー「masterflow.xml」情報を取得します。
     */
    getMasterFlow(): WorkflowResultInfo;

    /**
     * 完了案件の申請・起票時の初期フロー設定情報であるマスタフロー「masterflow.xml」から定義されているノードを、実施可能な処理種別情報とともにすべて取得します。
     */
    getMasterNodeListWithProcessType(): WorkflowResultInfo;

    /**
     * 完了案件の案件操作権限者情報の件数を取得します。
     */
    getMatterHandleAuthUserListCount(): WorkflowResultInfo;

    /**
     * 完了案件の案件操作権限者情報をすべて取得します。
     * @param cond 
     */
    getMatterHandleAuthUserList(cond: SortConditionForAuthUser): WorkflowResultInfo;

    /**
     * 完了案件の案件操作権限者情報を取得します。
     * @param matterHandleUserCd 
     */
    getMatterHandleAuthUser(matterHandleUserCd: string): WorkflowResultInfo;

    /**
     * 完了案件のユーザデータ案件プロパティ情報の件数を取得します。
     */
    getMatterPropertyListCount(): WorkflowResultInfo;

    /**
     * 完了案件のユーザデータ案件プロパティ情報をすべて取得します。
     */
    getMatterPropertyList(): WorkflowResultInfo;

    /**
     * 完了案件の特定のユーザデータ案件プロパティ情報を取得します。
     * @param key 
     */
    getMatterProperty(key: string): WorkflowResultInfo;

    /**
     * 完了案件情報を取得します。
     */
    getMatter(): WorkflowResultInfo;

    /**
     * 完了案件の進捗ファイル情報「progress.xml」を取得します。
     */
    getNodeProgressList(): WorkflowResultInfo;

    /**
     * 完了案件の処理履歴の最新情報を取得します。
     */
    getProcessHistoryLatestList(): WorkflowResultInfo;

    /**
     * 完了案件の処理履歴件数を取得します。
     */
    getProcessHistoryListCount(): WorkflowResultInfo;

    /**
     * 完了案件の処理履歴をすべて取得します。
     */
    getProcessHistoryList(): WorkflowResultInfo;
}
