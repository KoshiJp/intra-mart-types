/**
 * TextWriter にアクセスするためのクラスです。
 */
declare class TextWriter {
    /**
     * 指定された文字シーケンスのサブシーケンスをこのライターに追加します。
     * @param csq 
     * @param start 
     * @param end 
     */
    append(csq: object, start?: number, end?: number): TextWriter;

    /**
     * ストリームを閉じて、それに関連するすべてのシステムリソースを解放します。
     */
    close(): boolean;

    /**
     * この出力ストリームをフラッシュし、バッファに入っている出力バイトをすべて強制的に書き込みます。
     */
    flush(): boolean;

    /**
     * 改行文字を書き込みます。
     */
    newLine(): boolean;

    /**
     * オフセット off から始まる指定の文字シーケンス str からこの出力ストリームに len バイトを書き込みます。
     * @param str 
     * @param off 
     * @param len 
     */
    write(str: object, off?: number, len?: number): boolean;
}
