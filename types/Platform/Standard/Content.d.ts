/**
 * コンテンツクラス。
 */
declare class Content {
    /**
     * コンストラクタ。
     * @param srcPath 
     */
    constructor(srcPath: string);

    /**
     * 指定されたページのファンクションコンテナ内に定義されている関数を実行します。    
     * @param path 
     * @param functionName 
     * @param arg 
     * @param args 
     */
    static executeFunction(path: string, functionName: string, arg?: object, args?: object[]): object;

    /**
     * コンテンツの実行と生成をします。
     * @param value 
     */
    execute(value: object): string;

    /**
     * コンストラクタで指定したページのファンクションコンテナ内に定義されている関数を取得します。 引数で指定した関数が存在しない場合は、nullを返却します。
     * @param functionName 
     */
    getFunction(functionName: string): Function;

    /**
     * コンテンツが実行可能かどうかチェックします。
     */
    isError(): boolean;

    /**
     * オブジェクトの文字列表現を返却します。
     */
    toString(): string;
}
