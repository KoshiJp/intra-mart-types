/**
 * データベース周りの情報を取得するためのユーティリティオブジェクトです
 */
declare class DatabaseUtil {
    /**
     * データベースがDB2であることを示します。
     */
    static DBTYPE_DB2: number;

    /**
     * データベースがSAP HANAであることを示します。
     */
    static DBTYPE_HANA: number;

    /**
     * データベースがオラクルであることを示します。
     */
    static DBTYPE_ORACLE: number;

    /**
     * データベースがPostgreSQLであることを示します。
     */
    static DBTYPE_POSTGRESQL: number;

    /**
     * データベースがSQLServerであることを示します。
     */
    static DBTYPE_SQLSERVER: number;

    /**
     * バイナリ型であることを示します。
     */
    static TYPE_BINARY: number;

    /**
     * 日付型であることを示します。
     */
    static TYPE_DATE: number;

    /**
     * 数値型であることを示します。
     */
    static TYPE_NUMBER: number;

    /**
     * 文字列型であることを示します。
     */
    static TYPE_STRING: number;

    /**
     * Timestamp型であることを示します。
     */
    static TYPE_TIMESTAMP: number;

    /**
     * テーブルの存在を調べます。
     * @param connectId 
     * @param tableName 
     */
    static checkTableExist(connectId: string, tableName: string): boolean;

    /**
     * フィールドコメントのマップ配列を取得します。
     * @param js_connectId 
     * @param js_tableName 
     */
    static getColumnComment(js_connectId: string, js_tableName: string): object;

    /**
     * 指定されたテーブルのカラム情報配列を取得します。
     * @param jsconnectId 
     * @param jstableName 
     * @param jsincludeForeignKey 
     */
    static getDatabaseColumns(jsconnectId: string, jstableName: string, jsincludeForeignKey: boolean): object;

    /**
     * データベースの種類を取得します。
     * @param connectId 
     */
    static getDbType(connectId: string): number;

    /**
     * 外部キー制約が付与されたフィールドの名称セットを取得します。
     * @param jsconnectId 
     * @param jstableName 
     */
    static getFKColumnNames(jsconnectId: string, jstableName: string): object;

    /**
     * 主キーのフィールド名を配列で取得します。
     * @param jsconnectId 
     * @param jstableName 
     */
    static getPKColumnNames(jsconnectId: string, jstableName: string): object;

    /**
     * テーブルコメントのマップ配列を取得します。
     * @param js_connectId 
     */
    static getTableComment(js_connectId: string): object;

    /**
     * テーブル名の配列を取得します。
     * @param connectId 
     */
    static getTableNames(connectId: string): object;

    /**
     * ビュー名の配列を取得します。
     * @param connectId 
     */
    static getViewNames(connectId: string): object;

    /**
     * フィールドにコメントを追記します。
     * @param js_connectId 
     * @param js_tableName 
     * @param js_columnName 
     * @param js_comment 
     */
    static setColumnComment(js_connectId: string, js_tableName: string, js_columnName: string, js_comment: string): object;

    /**
     * テーブルにコメントを追記します。
     * @param js_connectId 
     * @param js_tableName 
     * @param js_comment 
     */
    static setTableComment(js_connectId: string, js_tableName: string, js_comment: string): object;
}
