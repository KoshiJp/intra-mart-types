/**
 * タイムゾーン情報を扱うクラスです。
 */
declare class TimeZone {
    /*
    * タイムゾーンID
    */
    readonly id: string;

    /*
    * このタイムゾーンの標準時間を取得するために、UTC に追加するミリ秒単位の時間量
    */
    readonly rawOffset: number;

    /*
    * このタイムゾーンが夏時間を使用している場合は true、そうでない場合は false
    */
    readonly useDaylightTime: boolean;

    /**
     * 指定された日付で UTC からのこのタイムゾーンのオフセットをミリ秒で返します。
     * @param date 
     */
    getOffset(date: Date): number;

    /**
     * 指定されたIDのタイムゾーンを取得します。
     * @param id 
     */
    static getTimeZone(id: string): ResultObject;

    /**
     * 指定された日付が、このタイムゾーンでは夏時間の期間内かどうかを問い合せます。
     * @param date 
     */
    inDaylightTime(date: Date): boolean;
}
