/**
 * SQLパラメータオブジェクト。
 */
declare class DbParameter {
    /**
     * ストアドファンクション/プロシージャパラメータにnull値を渡す場合に利用します。
     * ストアドファンクション/プロシージャ以外には利用できません。
     * この定数は intra-mart Accel Platform 2017 Winter(8.0.18)（データベースアクセスモジュール(スクリプト開発向け)モジュールバージョン 8.0.13）から利用可能です。	
     */
    static NULL: number;

    /**
     * ストアドファンクション/プロシージャパラメータのタイプ(BIGINT)。
     * ストアドファンクション/プロシージャのパラメータ型指定以外には利用できません。
     * この定数は intra-mart Accel Platform 2017 Winter(8.0.18)（データベースアクセスモジュール(スクリプト開発向け)モジュールバージョン 8.0.13）から利用可能です。	-5
     */
    static TYPE_BIGINT: number;

    /**
     * 引数のタイプ（byte 配列）。	-2
     */
    static TYPE_BINARY: number;

    /**
     * 引数のタイプ(BLOB)。	2004
     */
    static TYPE_BLOB: number;

    /**
     * 引数のタイプ（真偽値）。	16
     */
    static TYPE_BOOLEAN: number;

    /**
     * ストアドファンクション/プロシージャパラメータのタイプ(CHAR)。
     * ストアドファンクション/プロシージャのパラメータ型指定以外には利用できません。
     * この定数は intra-mart Accel Platform 2017 Winter(8.0.18)（データベースアクセスモジュール(スクリプト開発向け)モジュールバージョン 8.0.13）から利用可能です。	1
     */
    static TYPE_CHAR: number;

    /**
     * 引数のタイプ(CLOB)。	2005
     */
    static TYPE_CLOB: number;

    /**
     * ストアドファンクション/プロシージャパラメータのタイプ(REF_CURSOR)。
     * ストアドファンクション/プロシージャのOUTパラメータ型指定以外には利用できません。
     * この定数は intra-mart Accel Platform 2017 Winter(8.0.18)（データベースアクセスモジュール(スクリプト開発向け)モジュールバージョン 8.0.13）から利用可能です。	2012
     */
    static TYPE_CURSOR: number;

    /**
     * 引数のタイプ（日付）。	91
     */
    static TYPE_DATE: number;

    /**
     * ストアドファンクション/プロシージャパラメータのタイプ(INTEGER)。
     * ストアドファンクション/プロシージャのパラメータ型指定以外には利用できません。
     * この定数は intra-mart Accel Platform 2017 Winter(8.0.18)（データベースアクセスモジュール(スクリプト開発向け)モジュールバージョン 8.0.13）から利用可能です。	4
     */
    static TYPE_INTEGER: number;

    /**
     * 引数のタイプ(NVARCHAR)。
     * この定数は intra-mart Accel Platform 2015 Winter(8.0.12)（データベースアクセスモジュール(スクリプト開発向け)モジュールバージョン 8.0.8）から利用可能です。	-9
     */
    static TYPE_NSTRING: number;

    /**
     * 引数のタイプ（数値）。	3
     */
    static TYPE_NUMBER: number;

    /**
     * ストアドファンクション/プロシージャパラメータのタイプ(NUMERIC)。
     * ストアドファンクション/プロシージャのOUTパラメータ型指定以外には利用できません。
     * この定数は intra-mart Accel Platform 2017 Winter(8.0.18)（データベースアクセスモジュール(スクリプト開発向け)モジュールバージョン 8.0.13）から利用可能です。	2
     */
    static TYPE_NUMERIC: number;

    /**
     * 引数のタイプ（不明な型）。	-2147483648
     */
    static TYPE_OBJECT: number;

    /**
     * ストアドファンクション/プロシージャパラメータのタイプ(REAL)。
     * ストアドファンクション/プロシージャのパラメータ型指定以外には利用できません。
     * この定数は intra-mart Accel Platform 2017 Winter(8.0.18)（データベースアクセスモジュール(スクリプト開発向け)モジュールバージョン 8.0.13）から利用可能です。	7
     */
    static TYPE_REAL: number;

    /**
     * ストアドファンクション/プロシージャパラメータのタイプ(SMALLINT)。
     * ストアドファンクション/プロシージャのパラメータ型指定以外には利用できません。
     * この定数は intra-mart Accel Platform 2017 Winter(8.0.18)（データベースアクセスモジュール(スクリプト開発向け)モジュールバージョン 8.0.13）から利用可能です。	5
     */
    static TYPE_SMALLINT: number;

    /**
     * 引数のタイプ（文字列）。	12
     */
    static TYPE_STRING: number;

    /**
     * 引数のタイプ(Time)。	92
     */
    static TYPE_TIME: number;

    /**
     * 引数のタイプ（タイムスタンプ）。	93
     */
    static TYPE_TIMESTAMP: number;

    /**
     * コンストラクタ。
     */
    constructor(data: object, type: number);

    /**
     * new DbParameter(arg, DbParameter.TYPE_BIGINT) と同値です。
     * @param arg 
     */
    static bigint(arg: object): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_BINARY) と同値です。
     * @param arg 
     */
    static binary(arg: object): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_BLOB) と同値です。
     * @param arg 
     */
    static blob(arg: ByteReader): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_BOOLEAN) と同値です。
     * @param arg 
     */
    static boolean(arg: boolean): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_CHAR) と同値です。
     * @param arg 
     */
    static char(arg: object): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_CLOB) と同値です。
     * @param arg 
     */
    static clob(arg: TextReader): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_DATE) と同値です。
     * @param arg 
     */
    static date(arg: Date): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_INTEGER) と同値です。
     * @param arg 
     */
    static integer(arg: object): DbParameter;

    /**
     * ストアドプロシージャ/ファンクション用のパラメータがINもしくはINOUTであるかどうかを判別します。
     */
    isParamIn(): boolean;

    /**
     * ストアドプロシージャ/ファンクション用のパラメータがOUTもしくはINOUTであるかどうかを判別します。
     */
    isParamOut(): boolean;

    /**
     * new DbParameter(arg, DbParameter.TYPE_NSTRING) と同値です。
     * @param arg 
     */
    static nstring(arg: string): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_NUMBER) と同値です。
     * @param arg 
     */
    static number(arg: object): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_NUMERIC) と同値です。arg に BigDecimal を指定可能です。
     * @param arg 
     */
    static numeric(arg: object): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_OBJECT) と同値です。
     * @param arg 
     */
    static object(arg: object): DbParameter;

    /**
     * ストアドプロシージャ/ファンクション用のパラメータがINOUTであることを設定します。
     */
    paramInOut(): DbParameter;

    /**
     * ストアドプロシージャ/ファンクション用のパラメータがINであることを設定します。
     */
    paramIn(): DbParameter;

    /**
     * ストアドプロシージャ/ファンクション用のパラメータがOUTであることを設定します。
     */
    paramOut(): DbParameter;

    /**
     * ストアドプロシージャ/ファンクション用のOUTパラメータを作成します。
     * @param type 
     */
    static paramOut(type: number): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_REAL) と同値です。
     * @param arg 
     */
    static real(arg: object): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_SMALLINT) と同値です。
     * @param arg 
     */
    static smallint(arg: object): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_STRING) と同値です。
     * @param arg 
     */
    static string(arg: object): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_TIME) と同値です。
     * @param arg 
     */
    static time(arg: Date): DbParameter;

    /**
     * new DbParameter(arg, DbParameter.TYPE_TIMESTAMP) と同値です。
     * @param arg 
     */
    static timestamp(arg: Date): DbParameter;
}
