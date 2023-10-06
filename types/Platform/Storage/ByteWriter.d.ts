/**
 * ByteWriter にアクセスするためのクラスです。
 */
declare class ByteWriter {
    /**
     * ストリームを閉じて、それに関連するすべてのシステムリソースを解放します。
     */
    close(): boolean;

    /**
     * この出力ストリームをフラッシュし、バッファに入っている出力バイトをすべて強制的に書き込みます。
     */
    flush(): boolean;

    /**
     * 指定されたバイト配列の、オフセット位置 off から始まる len バイトをこの出力ストリームに書き込みます。
     * @param b 
     * @param off 
     * @param len 
     */
    write(b: number[], off?: number, len?: number): boolean;
}
