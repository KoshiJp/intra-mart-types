
/**
 * ByteReader にアクセスするためのクラスです。
 */
declare class ByteReader {
    /**
     * この入力ストリームのメソッドの次の呼び出しによって、ブロックせずにこの入力ストリームから読み込むことができる (またはスキップできる) 推定バイト数を返します。
     */
    available(): number;

    /**
     * ストリームを閉じて、それに関連するすべてのシステムリソースを解放します。
     */
    close(): boolean;

    /**
     * 1 バイトずつ読み込み、callback を呼び出します。callback には読み出されたバイトと、そのインデックス（先頭からのバイト数）が渡されます。
     * @param callback 
     */
    eachByte(callback: Function): boolean;

    /**
     * transSize バイトずつ読み込み、callback を呼び出します。callback には読み出されたバイト配列と、そのインデックス（先頭からのバイト数）と、読み出されたバイト数が渡されます。
     * @param callback 
     * @param transSize 
     */
    eachBytes(callback: Function, transSize: number): boolean;

    /**
     * 入力ストリームが mark と reset メソッドをサポートしているかどうかを判定します。
     */
    markSupported(): boolean;

    /**
     * この入力ストリームの現在位置にマークを設定します。
     * @param readlimit 
     */
    mark(readlimit: number): boolean;

    /**
     * 入力ストリームからオフセット off から len バイトまでのデータをバッファ配列 b に読み込みます。
     * @param b 
     * @param off 
     * @param len 
     */
    read(b?: number[], off?: number, len?: number): number;

    /**
     * このストリームの位置を、入力ストリームで最後に mark メソッドが呼び出されたときのマーク位置に再設定します。
     */
    reset(): number;

    /**
     * 入力ストリームからのデータを n バイトだけスキップしてその範囲のデータを破棄します。
     * @param n 
     */
    skip(n: number): number;

    /**
     * 自身のストリームから読み込んだデータをすべて writer に書き込みます。
     * @param writer 
     * @param transSize 
     */
    transferTo(writer: ByteWriter, transSize?: number): boolean;
}
