/**
 * テナントデータベース設定情報操作用オブジェクトです。
 */
declare class TenantDatabaseMapping {
    /**
     * テナントデータベースをバインドします。
     * @param tenantId 
     * @param resourceRefName 
     */
    static bind(tenantId: string, resourceRefName: string): ResultObject;

    /**
     * テナントデータベースの設定情報を取得します。
     * @param tenantId 
     */
    static getMappingInfo(tenantId?: string): ResultObject;

    /**
     * 設定済みのテナントデータベース設定情報を全て返却します。
     */
    static getMappingInfos(): ResultObject;

    /**
     * 設定済みのテナントデータベースの設定内容を更新します。
     * @param tenantId 
     * @param resourceRefName 
     */
    static rebind(tenantId: string, resourceRefName: string): ResultObject;

    /**
     * テナントデータベースの設定をアンバインドします。
     * @param tenantId 
     */
    static unbind(tenantId: string): ResultObject;
}
