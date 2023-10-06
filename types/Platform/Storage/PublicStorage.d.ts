/**
 * PublicStorage にアクセスするためのクラスです。
 */
declare class PublicStorage {
    /**
     * コンストラクタ。storage と同一のパスを指す PublicStorage を作成します。
     * @param storage 
     */
    constructor(storage: PublicStorage);

    /**
     * コンストラクタ。parent/child を指す Storage を作成します。
     * @param parent 
     * @param child 
     */
    constructor(parent: PublicStorage, child: string);

    /**
     * コンストラクタ。path を指す PublicStorage を作成します。
     * @param path 
     */
    constructor(path: string);

    /**
     * コンストラクタ。parent/child を指す Storage を作成します。
     * @param parent 
     * @param child 
     */
    constructor(parent: string, child: string);

    /**
     * 追記用としてコンストラクタの引数に指定した path を開きます。
     * @param callback 
     */
    appendAsBinary(callback?: Function): ByteWriter;

    /**
     * 追記用としてコンストラクタの引数に指定した path を開きます。
     * @param callback 
     * @param charsetName 
     */
    appendAsText(callback?: Function, charsetName?: string): TextWriter;

    /**
     * 文字列を指定されたキャラセット名で変換しこのストレージに追記します。
     * @param src 
     * @param charsetName 
     */
    append(src: string, charsetName?: string): boolean;

    /**
     * このファイル、またはディレクトリを引数で指定された対象にコピーします。
     * @param to 
     * @param overwrite 
     */
    copy(to: PublicStorage, overwrite?: boolean): boolean;

    /**
     * 書き込み用としてコンストラクタの引数に指定した path を開きます。
     * @param callback 
     */
    createAsBinary(callback?: Function): ByteWriter;

    /**
     * 書き込み用としてコンストラクタの引数に指定した path を開きます。
     * @param callback 
     * @param charsetName 
     */
    createAsText(callback?: Function, charsetName?: string): TextWriter;

    /**
     * このストレージが示すディレクトリ内のディレクトリを示すストレージのコレクションを返します。
     * @param recursive 
     */
    directoriesStorages(recursive?: boolean): PublicStorage[];

    /**
     * このストレージが示すディレクトリの配下にあるディレクトリのパスのコレクションを返します。
     * @param recursive 
     */
    directories(recursive?: boolean): string[];

    /**
     * このストレージが示すファイルまたはディレクトリが存在するかどうかを判定します。
     */
    exists(): boolean;

    /**
     * このストレージが示すディレクトリ内のファイルを示すストレージのコレクションを返します。
     * @param recursive 
     */
    filesStorages(recursive: boolean): PublicStorage[];

    /**
     * このストレージが示すディレクトリの配下にあるファイルのパスのコレクションを返します。
     * @param recursive 
     */
    files(recursive?: boolean): string[];

    /**
     * 正規化したパスを返します。
     */
    getCanonicalPath(): string;

    /**
     * このストレージが示すファイルまたはディレクトリの名前を返します。
     */
    getName(): string;

    /**
     * 親ストレージを返します。
     */
    getParentStorage(): PublicStorage;

    /**
     * 親パスを返します。
     */
    getParent(): string;

    /**
     * パス名文字列を返します。
     */
    getPath(): string;

    /**
     * このストレージとの相対パスを返します。
     * @param target 
     */
    getRelativePath(target: PublicStorage): string;

    /**
     * ルートストレージを返します。
     */
    getRootStorage(): PublicStorage;

    /**
     * このストレージが示すファイルがディレクトリであるかどうかを判定します。
     */
    isDirectory(): boolean;

    /**
     * このストレージが示すファイルが普通のファイルかどうかを判定します。
     * ファイルは、それがディレクトリではなく、システムに依存するほかの基準を満たす場合に「普通」のファイルと見なされます。
     */
    isFile(): boolean;

    /**
     * このストレージが示すファイルが最後に変更された時刻を返します。
     */
    lastModified(): number;

    /**
     * このストレージが指定されているファイルの長さを返します。パス名にディレクトリが指定されている場合、戻り値は指定されません。
     */
    length(): number;

    /**
     * このストレージが示すディレクトリ内のファイルおよびディレクトリを示すストレージのコレクションを返します。
     * @param filterOrRecursive 
     */
    listStorages(filterOrRecursive?: object): PublicStorage[];

    /**
     * このストレージが示すディレクトリの配下にあるファイル、および、ディレクトリのパスのコレクションを返します。
     * @param filterOrRecursive 
     */
    list(filterOrRecursive?: object): string[];

    /**
     * このストレージが示すディレクトリを生成します。
     */
    makeDirectories(): boolean;

    /**
     * このストレージが示すファイルを移動します。
     * @param newPath 
     */
    move(newPath: string): boolean;

    /**
     * 読み込み用としてコンストラクタの引数に指定した path を開きます。
     */
    openAsBinary(callback?: Function): ByteReader;

    /**
     * 読み込み用としてコンストラクタの引数に指定した path を開きます。
     * @param callback 
     * @param charsetName 
     */
    openAsText(callback?: Function, charsetName?: string): TextReader;

    /**
     * このストレージが示すファイルまたはディレクトリを削除します。
     * @param recursive 
     */
    remove(recursive?: boolean): boolean;

    /**
     * このストレージから相対ストレージを返します。
     * @param other 
     */
    resolve(other: string): PublicStorage;

    /**
     * ファイルの中身をこのストレージに書き込みます。
     * @param byteStream 
     */
    save(byteStream: string): boolean;

    /**
     * 文字列を指定されたキャラセット名でこのストレージに書き込みます。
     * @param src 
     * @param charsetName 
     */
    write(src: string, charsetName?: string): boolean;
}
