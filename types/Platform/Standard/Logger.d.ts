/**
 * ログ出力用オブジェクト。
 */
declare class Logger {
    /**
     * debugレベルのログを出力します。
     * @param msg 
     */
    debug(msg: string): void;

    /**
     * debugレベルのログを出力します。
     * @param format 
     * @param arg 
     */
    debug(format: string, arg: object): void;

    /**
     * debugレベルのログを出力します。
     * @param format 
     * @param argArray 
     */
    debug(format: string, argArray: any[]): void;

    /**
     * debugレベルのログを出力します。
     * @param format 
     * @param arg1 
     * @param arg2 
     */
    debug(format: string, arg1: object, arg2: object): void;

    /**
     * errorレベルのログを出力します。
     * @param msg 
     */
    error(msg: string): void;

    /**
     * errorレベルのログを出力します。
     * @param format 
     * @param arg 
     */
    error(format: string, arg: object): void;

    /**
     * errorレベルのログを出力します。
     * @param format 
     * @param argArray 
     */
    error(format: string, argArray: any[]): void;

    /**
     * errorレベルのログを出力します。
     * @param format 
     * @param arg1 
     * @param arg2 
     */
    error(format: string, arg1: object, arg2: object): void;

    /**
     * Loggerオブジェクトを返します。
     * @param name 
     */
    static getLogger(name: string): Logger;

    /**
     * Loggerオブジェクトを返します。
     */
    static getLogger(): Logger;

    /**
     * infoレベルのログを出力します。
     * @param msg 
     */
    info(msg: string): void;

    /**
     * infoレベルのログを出力します。
     * @param format 
     * @param arg 
     */
    info(format: string, arg: object): void;

    /**
     * infoレベルのログを出力します。
     * @param format 
     * @param argArray 
     */
    info(format: string, argArray: any[]): void;

    /**
     * infoレベルのログを出力します。
     * @param format 
     * @param arg1 
     * @param arg2 
     */
    info(format: string, arg1: object, arg2: object): void;

    /**
     * debugレベルのログ処理が現在有効かどうかチェックします。
     */
    isDebugEnabled(): boolean;

    /**
     * errorレベルのログ処理が現在有効かどうかチェックします。
     */
    isErrorEnabled(): boolean;

    /**
     * infoレベルのログ処理が現在有効かどうかチェックします。
     */
    isInfoEnabled(): boolean;

    /**
     * traceレベルのログ処理が現在有効かどうかチェックします。
     */
    isTraceEnabled(): boolean;

    /**
     * warnレベルのログ処理が現在有効かどうかチェックします。
     */
    isWarnEnabled(): boolean;

    /**
     * traceレベルのログを出力します。
     * @param msg 
     */
    trace(msg: string): void;

    /**
     * traceレベルのログを出力します。
     * @param format 
     * @param arg 
     */
    trace(format: string, arg: object): void;

    /**
     * traceレベルのログを出力します。
     * @param format 
     * @param argArray 
     */
    trace(format: string, argArray: any[]): void;

    /**
     * traceレベルのログを出力します。
     * @param format 
     * @param arg1 
     * @param arg2 
     */
    trace(format: string, arg1: object, arg2: object): void;

    /**
     * warnレベルのログを出力します。
     * @param format 
     * @param argArray 
     */
    warn(format: string, argArray: any[]): void;

    /**
     * warnレベルのログを出力します。
     * @param format 
     * @param arg1 
     * @param arg2 
     */
    warn(format: string, arg1: object, arg2: object): void;

    /**
     * warnレベルのログを出力します。
     * @param msg 
     */
    warn(msg: string): void;

    /**
     * warnレベルのログを出力します。
     * @param format 
     * @param arg 
     */
    warn(format: string, arg: object): void;
}
