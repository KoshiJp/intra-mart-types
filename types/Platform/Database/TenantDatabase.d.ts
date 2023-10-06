/**
 * テナント用のデータベースにアクセスするためのクラスです。
 */
declare class TenantDatabase {
    /**
     * コンストラクタ。
     */
    constructor()

    /**
     * 接続先のID
     */
    readonly connectId: string;

    /**
     * JNDI名
     */
    readonly dataSourceName: string;

    /**
     * "Oracle", "PostgreSQL", "DB2", "SQLServer" のいずれか
     */
    readonly databaseName: string;

    /**
     * 2WaySQL を実行します。
     * @param path 
     * @param params 
     */
    executeByTemplate(path: string, params?: object): DatabaseResult;

    /**
     * ストアドプロシージャ/ファンクションを実行します。
     * @param sql 
     * @param params 
     */
    executeCallable(sql: string, params?: any[]): DatabaseResult;

    /**
     * 任意のSQL文を実行します。
     * @param sql 
     * @param params 
     */
    execute(sql: string, params?: any[]): DatabaseResult;

    /**
     * 2WaySQL を実行します。
     * @param path 
     * @param start 
     * @param length 
     * @param params 
     */
    fetchByTemplate(path: string, start: number, length: number, params?: object): DatabaseResult;

    /**
     * SELECT文を発行後、取得データをフェッチして取得します。
     * @param sql 
     * @param start 
     * @param length 
     * @param params 
     */
    fetch(sql: string, start: number, length: number, params?: any[]): DatabaseResult;

    /**
     * BLOB または InputStream を取得し、それを元に ByteReader を返します。
     * @param tableName 
     * @param columnName 
     * @param condition 
     * @param params 
     * @param callback 
     */
    getByteReader(tableName: string, columnName: string, condition: string, params?: any[], callback?: Function): DatabaseResult;

    /**
     * データベースのメタデータを取得します。
     */
    getMetaData(): DatabaseResult;

    /**
     * CLOB または Reader を取得し、それを元に TextReader を返します。
     * @param tableName 
     * @param columnName 
     * @param condition 
     * @param params 
     * @param callback 
     */
    getTextReader(tableName: string, columnName: string, condition: string, params?: any[], callback?: Function): DatabaseResult;

    /**
     * 指定されたテーブルにデータを挿入します。
     * @param tableName 
     * @param insertData 
     */
    insert(tableName: string, insertData: object): DatabaseResult;

    /**
     * decimal/numeric型のカラムの取得方法を変更するフラグを取得します。
     */
    isUseBigDecimal(): boolean;

    /**
     * データベースデータを削除します。
     * @param tableName 
     * @param condition 
     * @param params 
     */
    remove(tableName: string, condition: string, params?: any[]): DatabaseResult;

    /**
     * SELECT文を発行してデータを取得します。
     * @param sql 
     * @param params 
     * @param length 
     */
    select(sql: string, params?: any[], length?: number): DatabaseResult;

    /**
     * decimal/numeric型のカラムの取得方法を変更するフラグを設定します。
     * @param useBigDecimal 
     */
    setUseBigDecimal(useBigDecimal: boolean): void;

    /**
     * データベースのデータを更新します。
     * @param tableName 
     * @param updateData 
     * @param condition 
     * @param params 
     */
    update(tableName: string, updateData: object, condition: string, params?: any[]): DatabaseResult;
}
