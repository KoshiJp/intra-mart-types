/**
 * ファイル操作オブジェクト。
 */
declare class File {
    /**
     * コンストラクタ。
     * @param path 
     */
    constructor(path: string);

    /**
     * コンストラクタ。
     * @param path 
     */
     constructor(parent: string, child: string);

    /**
     * ファイルを ByteWriter で開いて返します。
     * @param callback 
     */
    appendAsBinary(callback?: Function): ByteWriter;

    /**
     * ファイルを TextWriter で開いて返します。
     * @param callback 
     * @param charsetName 
     */
    appendAsText(callback?: Function, charsetName?: string): TextWriter;

    /**
     * テキストのファイルへ追記を行います。
     * @param strm 
     */
    append(strm: string): boolean;

    /**
     * ファイルを ByteWriter で開いて返します。
     * @param callback 
     */
    createAsBinary(callback?: Function): ByteWriter;

    /**
     * ファイルを TextWriter で開いて返します。
     * @param callback 
     * @param charsetName 
     */
    createAsText(callback?: Function, charsetName?: string): TextWriter;

    /**
     * 新しい空のファイルを作成します。
     * @param prefix 
     * @param suffix 
     * @param directory 
     * @param deleteOnExit 
     */
    static createTempFile(prefix?: string, suffix?: string, directory?: File, deleteOnExit?: boolean): File;

    /**
     * ディレクトリ一覧を取得します。
     */
    directories(): any[];

    /**
     * ファイル(ディレクトリ)の存在確認を行います。
     */
    exist(): boolean;

    /**
     * ファイル一覧を取得します。
     */
    files(): any[];

    /**
     * ディレクトリの存在確認を行います。
     */
    isDirectory(): boolean;

    /**
     * ファイルの存在確認を行います。
     */
    isFile(): boolean;

    /**
     * ファイルの最終更新日付を取得します。
     */
    lastModified(): number;

    /**
     * ファイルの内容を取得します。
     */
    load(): string;

    /**
     * ディレクトリを作成します。
     */
    makeDirectories(): boolean;

    /**
     * ファイル名を変更します。
     * @param newFile 
     */
    move(newFile: File): boolean;

    /**
     * ファイルを ByteReader で開いて返します。
     * @param callback 
     */
    openAsBinary(callback?: Function): ByteReader;

    /**
     * ファイルを TextReader で開いて返します。
     * @param callback 
     * @param charsetName 
     */
    openAsText(callback?: Function, charsetName?: string): TextReader;

    /**
     * パス名を取得します。
     */
    path(): string;

    /**
     * テキストファイル内容を取得します。
     */
    read(): string;

    /**
     * ファイルまたはディレクトリを削除します。
     */
    remove(): boolean;

    /**
     * ファイルへのデータ出力を行います。
     * @param strm 
     */
    save(strm: string): boolean;

    /**
     * ファイルサイズを取得します。
     */
    size(): number;

    /**
     * 
     */
    toString(): void;

    /**
     * テキストファイルの出力を行います。
     * @param strm 
     */
    write(strm: string): boolean;
}
