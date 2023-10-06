/**
 * JSON 関連のライブラリです。
 */
declare class ImJson {
    /**
     * インデント文字列 " "
     */
    static readonly INDENT_STRING: string;

    /**
     * JSON 文字列からJavaScriptオブジェクトへの変換に失敗した場合に投げられる例外のメッセージです。 "parseJSON Error"
     */
    static readonly PARSE_JSON_ERROR_MESSAGE: string;

    /**
     * 「Array」型 を表す定数 "/* Array *\/"
     */
    static readonly TYPE_ARRAY: string;

    /**
     * 「BigDecimal」型 を表す定数 "/* BigDecimal *\/"
     */
    static readonly TYPE_BIG_DECIMAL: string;

    /**
     * 「BigInteger」型 を表す定数 "/* BigInteger *\/"
     */
    static readonly TYPE_BIG_INTEGER: string;

    /**
     * 「Boolean」型 を表す定数 "/* Boolean *\/"
     */
    static readonly TYPE_BOOLEAN: string;

    /**
     * 「Date」型 を表す定数 "/* Date *\/"
     */
    static readonly TYPE_DATE: string;

    /**
     * 「Function」型 を表す定数 "/* Function *\/"
     */
    static readonly TYPE_FUNCTION: string;

    /**
     * 「Java」型 を表す定数 "/* Java *\/"
     */
    static readonly TYPE_JAVA: string;

    /**
     * 「null」型 を表す定数 "/* Null *\/"
     */
    static readonly TYPE_NULL: string;

    /**
     * 「Number」型 を表す定数 "/* Number *\/"
     */
    static readonly TYPE_NUMBER: string;

    /**
     * 「Object」型 を表す定数 "/* Object *\/"
     */
    static readonly TYPE_OBJECT: string;

    /**
     * 「String」型 を表す定数 "/* String *\/"
     */
    static readonly TYPE_STRING: string;

    /**
     * 「Undefined」型 を表す定数 "/* Undefined *\/"
     */
    static readonly TYPE_UNDEFINED: string;

    /**
     * 型が特定できない場合を表す定数 "/* Unknown *\/"
     */
    static readonly TYPE_UNKNOWN: string;

    /**
     * 「XML」型 を表す定数 "/* XML *\/"
     */
    static readonly TYPE_XML: string;

    /**
     * JSON 文字列の妥当性をチェックします。
     * @param jsonString 
     */
    static checkJSONString(jsonString: string): boolean;

    /**
     * JSON 文字列からJavaScriptオブジェクトに変換します。
     * @param jsonString 
     */
    static parseJSON(jsonString: string): object;

    /**
     * JSON 文字列に変換します。
     * @param value 
     * @param debugFlg 
     */
    static toJSONString(value: object, debugFlg?: boolean): string;
}
