declare class RequestParameter {
    /**
     * アップロードされたファイルのファイル名を取得します。
     */
    getFileName(): string;

    /**
     * ヘッダ名称一覧を返します。
     */
    getHeaderNames(): any[];

    /**
     * 指定のヘッダ名をもつ値を返します。
     * @param name 
     */
    getHeader(name: string): string;

    /**
     * データ長を返します。
     */
    getLength(): number;

    /**
     * このオブジェクトのパラメータ名を取得します。
     */
    getName(): string;

    /**
     * 現在のパラメータ値を返します。
     */
    getValueAsStream(): string;

    /**
     * 現在のパラメータ値を返します。
     */
    getValue(): string;

    /**
     * 現在のパラメータ値をバイナリストリームで返します。
     * @param callback 
     */
    openValueAsBinary(callback: Function): ByteReader;

    /**
     * 現在のパラメータ値をテキストストリームで返します。
     * @param callback 
     * @param charsetName 
     */
    openValueAsText(callback: Function, charsetName: string): TextReader;
}
