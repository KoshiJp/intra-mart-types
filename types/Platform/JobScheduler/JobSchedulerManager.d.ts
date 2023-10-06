/**
 * ジョブスケジューラマネージャオブジェクト。
 */
declare class JobSchedulerManager {
    /**
     * コンストラクタ。
     */
    constructor();

    /**
     * 指定したジョブクラスのパラメータ注釈からパラメータ定義を生成します。
     * @param jobType 
     * @param jobPath 
     */
    static createParametersDefinition(jobType: string, jobPath: string): ResultObject;

    /**
     * 指定したIDのジョブカテゴリを削除します。
     * @param categoryId 
     */
    deleteJobCategory(categoryId: string): ResultObject;

    /**
     * 指定したIDのジョブを削除します。
     * @param jobId 
     */
    deleteJob(jobId: string): ResultObject;

    /**
     * 指定したIDのジョブネットカテゴリを削除します。
     * @param categoryId 
     */
    deleteJobnetCategory(categoryId: string): ResultObject;

    /**
     * 指定したIDのジョブネットを削除します。
     * @param jobnetId 
     */
    deleteJobnet(jobnetId: string): ResultObject;

    /**
     * 指定したIDのモニタ情報を削除します。
     * @param monitorId 
     */
    deleteMonitor(monitorId: string): ResultObject;

    /**
     * 指定したIDのトリガを削除します。
     * @param triggerId 
     */
    deleteTrigger(triggerId: string): ResultObject;

    /**
     * 指定したIDのトリガを無効にします。
     * @param triggerId 
     */
    disableTrigger(triggerId: string): ResultObject;

    /**
     * 指定したIDのジョブネットに関連付けられているトリガを全て無効にします。
     * @param jobnetId 
     */
    disableTriggers(jobnetId: string): ResultObject;

    /**
     * 指定したIDのトリガを有効にします。
     * @param triggerId 
     */
    enableTrigger(triggerId: string): ResultObject;

    /**
     * 指定したIDのジョブネットに関連付けられているトリガを全て有効にします。
     * @param jobnetId 
     */
    enableTriggers(jobnetId: string): ResultObject;

    /**
     * 指定したジョブネットの即時実行を行います。
     * @param jobnetId 
     */
    execute(jobnetId: string): ResultObject;

    /**
     * 指定したIDのモニタで実行中、または停止中のジョブネットを強制終了します。
     * @param monitorId 
     */
    exitJobnet(monitorId: string): ResultObject;

    /**
     * 指定したIDのジョブカテゴリの子カテゴリを全て取得します。
     * @param parentId 
     */
    findChildJobCategories(parentId: string): ResultObject;

    /**
     * 指定したIDのジョブカテゴリの子カテゴリ数を取得します。
     * @param parentId 
     */
    findChildJobCategoriyCount(parentId: string): ResultObject;

    /**
     * 指定したIDのジョブネットカテゴリの子カテゴリを全て取得します。
     * @param parentId 
     */
    findChildJobnetCategories(parentId: string): ResultObject;

    /**
     * 指定したIDのジョブネットカテゴリの子カテゴリ数を取得します。
     * @param parentId 
     */
    findChildJobnetCategoriyCount(parentId: string): ResultObject;

    /**
     * 指定したIDのジョブカテゴリを取得します。
     * @param categoryId 
     */
    findJobCategory(categoryId: string): ResultObject;

    /**
     * 指定したIDのジョブカテゴリに関連付けられているジョブ数を取得します。
     * @param categoryId 
     */
    findJobCountByCategory(categoryId: string): ResultObject;

    /**
     * 指定したIDのジョブ情報を取得します。
     * @param jobId 
     */
    findJob(jobId: string): ResultObject;

    /**
     * 指定したIDのジョブネットカテゴリを取得します。
     */
    findJobnetCategory(categoryId: string): ResultObject;

    /**
     * 指定したIDのジョブネットカテゴリに関連付けられているジョブネット数を取得します。
     */
    findJobnetCountByCategory(categoryId: string): ResultObject;

    /**
     * 指定したIDのジョブネット情報を取得します。
     * @param jobnetId 
     */
    findJobnet(jobnetId: string): ResultObject;

    /**
     * 指定したIDのジョブネットカテゴリに関連付けられているジョブネットを全て取得します。
     * @param categoryId 
     */
    findJobnetsByCategory(categoryId: string): ResultObject;

    /**
     * 指定したIDのジョブカテゴリに関連付けられているジョブ情報を全て取得します。
     * @param categoryId 
     */
    findJobsByCategory(categoryId: string): ResultObject;

    /**
     * 指定したフィルタ(条件)に一致するモニタ数を取得します。
     * @param filter 
     */
    findMonitorCountByFilter(filter: PluralJobnetFilter): ResultObject;

    /**
     * 指定したフィルタ(条件)に一致するモニタ数を取得します。
     * @param filter 
     */
    findMonitorCountByFilter(filter: Filter): ResultObject;

    /**
     * 指定したステータスのモニタ数を取得します。
     * @param status 
     */
    findMonitorCountByStatus(status: string): ResultObject;

    /**
     * 指定したIDのトリガからステータスが一致するモニタ数を取得します。
     * @param triggerId 
     * @param status 
     */
    findMonitorCountByTriggerWithStatus(triggerId: string, status: string): ResultObject;

    /**
     * 指定したIDのトリガのモニタ数を取得します。
     * @param triggerId 
     */
    findMonitorCountByTrigger(triggerId: string): ResultObject;

    /**
     * 指定したIDのモニタ情報を取得します。
     * @param monitorId 
     */
    findMonitor(monitorId: string): ResultObject;

    /**
     * 指定したフィルタ(条件)に一致するモニタを全て取得します。
     * @param filter 
     */
    findMonitorsByFilter(filter: PluralJobnetFilter): ResultObject;

    /**
     * 指定したフィルタ(条件)に一致するモニタを全て取得します。
     * @param filter 
     */
    findMonitorsByFilter(filter: Filter): ResultObject;

    /**
     * 指定したステータスのモニタを全て取得します。
     * @param status 
     */
    findMonitorsByStatus(status: string): ResultObject;

    /**
     * 指定したIDのトリガからステータスが一致するモニタを全て取得します。
     * @param triggerId 
     * @param status 
     */
    findMonitorsByTriggerWithStatus(triggerId: string, status: string): ResultObject;

    /**
     * 指定したIDのトリガのモニタを全て取得します。
     * @param triggerId 
     */
    findMonitorsByTrigger(triggerId: string): ResultObject;

    /**
     * 指定したIDのジョブネットに登録されているトリガ数を取得します。
     * @param jobnetId 
     */
    findTriggerCountByJobnet(jobnetId: string): ResultObject;

    /**
     * 指定したIDのトリガを取得します。
     * @param triggerId 
     */
    findTrigger(triggerId: string): ResultObject;

    /**
     * 指定したIDのジョブネットに登録されているトリガを全て取得します。
     * @param jobnetId 
     */
    findTriggersByJobnet(jobnetId: string): ResultObject;

    /**
     * 指定したIDのジョブを利用しているジョブネットを全て取得します。
     * @param jobId 
     */
    findUsedJobnets(jobId: string): ResultObject;

    /**
     * 新しいジョブカテゴリを登録します。
     * @param category 
     */
    insertJobCategory(category: JobCategory): ResultObject;

    /**
     * 新しいジョブを登録します。
     * @param job 
     */
    insertJob(job: JobDetail): ResultObject;

    /**
     * 新しいジョブネットカテゴリを登録します。
     * @param category 
     */
    insertJobnetCategory(category: JobnetCategory): ResultObject;

    /**
     * 新しいジョブネットを登録します。
     * @param jobnet 
     */
    insertJobnet(jobnet: Jobnet): ResultObject;

    /**
     * 新しいトリガを登録します。
     * @param trigger 
     */
    insertTrigger(trigger: Trigger): ResultObject;

    /**
     * 指定したIDのモニタで実行中のジョブネットを停止します。
     * @param monitorId 
     */
    pauseJobnet(monitorId: string): ResultObject;

    /**
     * 指定したIDのモニタで停止中のジョブネットを再開します。
     * @param monitorId 
     */
    resumeJobnet(monitorId: string): ResultObject;

    /**
     * ジョブカテゴリの情報を更新します。
     * @param category 
     */
    updateJobCategory(category: JobCategory): ResultObject;

    /**
     * ジョブの情報を更新します。
     * @param job 
     */
    updateJob(job: JobDetail): ResultObject;

    /**
     * ジョブネットカテゴリの情報を更新します。
     * @param category 
     */
    updateJobnetCategory(category: JobnetCategory): ResultObject;

    /**
     * ジョブネットの情報を更新します。
     * @param jobnet 
     */
    updateJobnet(jobnet: Jobnet): ResultObject;

    /**
     * 指定したIDのモニタのメッセージを更新します。
     * @param monitorId 
     * @param message 
     */
    updateMonitorMessage(monitorId: string, message: string): ResultObject;

    /**
     * 指定したIDのモニタタスクのメッセージを更新します。
     * @param monitorId 
     * @param taskId 
     * @param message 
     */
    updateMonitorTaskMessage(monitorId: string, taskId: string, message: string): ResultObject;

    /**
     * トリガの情報を更新します。
     * @param trigger 
     */
    updateTrigger(trigger: Trigger): ResultObject;
}
