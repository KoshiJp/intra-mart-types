/**
 * 案件操作マネージャオブジェクト。
 */
declare class ActvMatterHandleManager {
    /**
     * コンストラクタ
     * @param systemMatterId 
     * @param operateUserCode 
     */
    constructor(systemMatterId: string, operateUserCode: string);

    /**
     * コンストラクタ
     * @param localeId 
     * @param systemMatterId 
     * @param operateUserCode 
     */
    constructor(localeId: string, systemMatterId: string, operateUserCode: string);

    /**
     * マスタフローから実行中フローにノードをコピー（追加）します。
     * @param masterNodeId 
     * @param backwardNodeId 
     * @param forwardNodeId 
     * @param copyNodeId 
     */
    copyNodeFromMasterFlow(masterNodeId: string, backwardNodeId: string, forwardNodeId: string, copyNodeId: string): WorkflowResultInfo;

    /**
     * 案件操作権限者(参照者)情報を新規追加又は更新します。
     * @param matterHandleAuth 
     */
    createMatterHandleAuth(matterHandleAuth: any[]): WorkflowResultInfo;

    /**
     * ノードに処理対象者情報を追加します。
     * @param nodeId 
     * @param plugins 
     */
    createProcessTarget(nodeId: string, plugins: any[]): WorkflowResultInfo;

    /**
     * 案件操作権限者(参照者)情報を全て削除します。
     */
    deleteMatterHandleAuthAll(): WorkflowResultInfo;

    /**
     * 案件操作権限者(参照者)情報を削除します。
     * @param matterHandleAuth 
     */
    deleteMatterHandleAuth(matterHandleAuth: any[]): WorkflowResultInfo;

    /**
     * 指定されたノードを処理中のフローから削除します。
     * @param nodeId 
     */
    deleteNode(nodeId: string): WorkflowResultInfo;

    /**
     * ノードの処理対象者情報をすべて削除します。
     * @param nodeId 
     */
    deleteProcessTargetAll(nodeId: string): WorkflowResultInfo;

    /**
     * ノードの処理対象者情報を削除します。
     * @param nodeId 
     * @param plugins 
     */
    deleteProcessTarget(nodeId: string, plugins: any[]): WorkflowResultInfo;

    /**
     * 未完了案件の確認ノードに対して、確認処理権限者を再展開します。
     * @param nodeId 
     */
    expandConfirmTarget(nodeId: string): WorkflowResultInfo;

    /**
     * 指定された案件ノード展開情報を横配置・縦配置ノード内に展開、再展開します。
     * @param horizontalVerticalNodeId 
     * @param nodes 
     */
    expandHorizontalVerticalNode(horizontalVerticalNodeId: string, nodes: any[]): WorkflowResultInfo;

    /**
     * 未完了案件に対して、案件操作権限者(参照者)を再展開します。
     */
    expandMatterHandleAuth(): WorkflowResultInfo;

    /**
     * 未完了案件の処理ノードに対して、処理対象者情報を再展開します。
     * @param nodeId 
     */
    expandProcessTarget(nodeId: string): WorkflowResultInfo;

    /**
     * 特定の処理中のノードから案件操作で移動できるノートとして指定可能な移動先ノード情報を取得します。
     * @param originalNodeId 
     */
    getNodesToMove(originalNodeId: string): WorkflowResultInfo;

    /**
     * 指定された横配置・縦配置ノードを初期化します。
     * @param horizontalVerticalNodeId 
     */
    initializeHorizontalVerticalNode(horizontalVerticalNodeId: string): WorkflowResultInfo;

    /**
     * 未完了案件の処理中のノードの移動処理を行います。
     * @param originalNodeId 
     * @param targetNodeId 
     * @param comment 
     */
    moveActvNode(originalNodeId: string, targetNodeId: any[], comment: string): WorkflowResultInfo;

    /**
     * 保留解除処理を実行します。
     * @param reserveCancelParam 
     * @param nodeId 
     */
    reserveCancel(reserveCancelParam: ReserveCancelParamInfo, nodeId: string): WorkflowResultInfo;

    /**
     * 分岐開始ノードからの分岐先ノードを設定します。
     * @param branchStartNodeId 
     * @param branchForwardNodeIds 
     */
    setBranchForwardNode(branchStartNodeId: string, branchForwardNodeIds: any[]): WorkflowResultInfo;

    /**
     * 案件操作権限者(参照者)情報を更新します。
     * @param matterHandleAuth 
     */
    updateMatterHandleAuth(matterHandleAuth: any[]): WorkflowResultInfo;
}
