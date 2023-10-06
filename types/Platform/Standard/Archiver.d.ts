/**
 * ファイルを圧縮／解凍するためのオブジェクトです。
 */
declare class Archiver {
    /**
     * ZIPファイルを解凍します。
     * @param arg 
     */
    static unzip(arg: object): File;

    /**
     * 指定されたファイルやディレクトリをZIP形式で圧縮します。
     * @param arg 
     */
    static zip(arg: object): object;
}
