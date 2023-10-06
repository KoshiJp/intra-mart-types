/**
 * TextReader にアクセスするためのクラスです。
 */
declare class TextReader {
    /**
     * ストリームを閉じて、それに関連するすべてのシステムリソースを解放します。 
     */
    close(): boolean;

    /**
     * 1 行ずつ読み込み、callback を呼び出します。callback には読み出された行の内容と、そのインデックス（行番号）が渡されます。 
     * @param callback 
     */
    eachLine(callback: Function): boolean;

    /**
     * このストリームが mark() オペレーションをサポートするかどうかを判定します。 
     */
    markSupported(): boolean;

    /**
     * ストリームの現在位置にマークを設定します。 
     * @param readAheadLimit 
     */
    mark(readAheadLimit: number): boolean;

    /**
     * テキスト行を読み込みます。 
     */
    readLine(): string;

    /**
     * 配列の一部に文字を読み込みます。 
     * @param cbuf 
     * @param off 
     * @param len 
     */
    read(cbuf?: number[], off?: number, len?: number): number;

    /**
     * このストリームが読み込み可能かどうかを判定します。 
     */
    ready(): boolean;

    /**
     * ストリームをリセットします。 
     */
    reset(): boolean;

    /**
     * 文字をスキップします。 
     * @param n 
     */
    skip(n: number): number;

    /**
     * 自身のストリームから読み込んだデータをすべて writer に書き込みます。 
     * @param writer 
     * @param transSize 
     */
    transferTo(writer: TextWriter, transSize?: number): boolean;
}
