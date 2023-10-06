/**
 * ジョブスケジューラコンテキストオブジェクト。
 */
declare class JobSchedulerContext {
    /**
     * 実行日時。
     */
    fireDate: Date;

    /**
     * ジョブ情報オブジェクト。
     */
    jobDetail: JobDetail;

    /**
     * ジョブネット情報オブジェクト。
     */
    jobnet: Jobnet;

    /**
     * 各オブジェクトに設定されたパラメータをマージしたパラメータ。
     */
    mergedParameters: object;

    /**
     * モニタID。
     */
    monitorId: string;

    /**
     * 次回実行日時。
     */
    nextFireDate: Date;

    /**
     * 実行パラメータ。 ジョブの実行中にパラメータに追加されたパラメータを取得します。
     */
    parameters: object;

    /**
     * 前回実行日時。
     */
    previousFireDate: Date;

    /**
     * タスクID。
     */
    taskId: string;

    /**
     * トリガ情報オブジェクト。
     */
    trigger: Trigger;
}
