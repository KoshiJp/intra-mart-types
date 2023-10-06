/**
 * カレンダー情報を管理するマネージャクラスです。
 */
declare class CalendarInfoManager {
    /**
     * カレンダーマネージャーのコンストラクタです。
     */
    constructor();

    /**
     * カレンダーを削除します。
     * @param info 
     */
    deleteCalendarInfo(info: CalendarInfo): ResultObject;

    /**
     * 曜日の情報を削除します。
     * @param info 
     */
    deleteCalendarWeekDayInfo(info: CalendarWeekDayInfo): ResultObject;

    /**
     * 日付情報セットを削除します。
     * @param info 
     */
    deleteDayInfoSet(info: DayInfoSet): ResultObject;

    /**
     * 日付情報を削除します。
     * @param info 
     */
    deleteDayInfo(info: DayInfo): ResultObject;

    /**
     * カレンダーに追加されている日付情報セットを取り除きます。
     * @param calendarId 
     * @param dayInfoSetIds 
     */
    excludeDayInfoSet(calendarId: string, dayInfoSetIds: any[]): ResultObject;

    /**
     * 指定したカレンダーを取得します。
     * @param calendarId 
     */
    getCalendarInfo(calendarId: string): ResultObject;

    /**
     * カレンダーをすべて取得します。
     */
    getCalendarInfos(): ResultObject;

    /**
     * 曜日の情報を取得します。
     * @param calendarId 
     */
    getCalendarWeekDayInfos(calendarId: string): ResultObject;

    /**
     * 指定した日付情報セットを取得します。
     * @param dayInfoSetId 
     */
    getDayInfoSet(dayInfoSetId: string): ResultObject;

    /**
     * カレンダーに登録されている日付情報セットを取得します。
     * @param calendarId 
     */
    getDayInfoSetsByCalendarId(calendarId: string): ResultObject;

    /**
     * 日付情報セットをすべて取得します。
     */
    getDayInfoSets(): ResultObject;

    /**
     * 1カ月分の日付情報を取得します。
     * @param calendarId 
     * @param date 
     * @param fill 
     */
    getDayInfoSummariesOnMonth(calendarId: string, date: Date, fill?: boolean): ResultObject;

    /**
     * 指定した期間の日付情報を取得します。
     * @param baseCalendarId 
     * @param dayInfoSetIds 
     * @param start 
     * @param end 
     */
    getDayInfoSummariesOnTermByDayInfoSetIds(baseCalendarId: string, dayInfoSetIds: any[], start: Date, end: Date): ResultObject;

    /**
     * 指定した期間の日付情報を取得します。
     * @param calendarId 
     * @param start 
     * @param end 
     */
    getDayInfoSummariesOnTerm(calendarId: string, start: Date, end: Date): ResultObject;

    /**
     * 1週間分の日付情報を取得します。
     * @param calendarId 
     * @param date 
     * @param shiftFirstDayOfWeek 
     */
    getDayInfoSummariesOnWeek(calendarId: string, date: Date, shiftFirstDayOfWeek: boolean): ResultObject;

    /**
     * 指定した日の日付情報を取得します。
     * @param calendarId 
     * @param date 
     */
    getDayInfoSummary(calendarId: string, date: Date): ResultObject;

    /**
     * 日付情報セットID、日付情報IDを指定して日付情報を取得します。
     * @param dayInfoSetId 
     * @param dayInfoId 
     */
    getDayInfo(dayInfoSetId: string, dayInfoId: string): ResultObject;

    /**
     * 指定したカレンダーのすべての日付情報を取得します。
     * @param calendarId 
     */
    getDayInfosByCalendarId(calendarId: string): ResultObject;

    /**
     * 指定した日付情報セットのすべての日付情報を取得します。
     * @param dayInfoSetId 
     */
    getDayInfosByDayInfoSetId(dayInfoSetId: string): ResultObject;

    /**
     * カレンダーが存在するかどうか判定します。
     * @param calendarId 
     */
    hasCalendarInfo(calendarId: string): ResultObject;

    /**
     * 日付情報セットが存在するかどうか判定します。
     * @param dayInfoSetId 
     */
    hasDayInfoSet(dayInfoSetId: string): ResultObject;

    /**
     * 指定した日が、指定した日付情報を持つかどうか判定します。
     * @param calendarId 
     * @param date 
     * @param dayInfo 
     */
    hasDayInfo(calendarId: string, date: Date, dayInfo: DayInfo): ResultObject;

    /**
     * カレンダーに日付情報セットを追加します。
     * @param calendarId 
     * @param dayInfoSetIds 
     */
    includeDayInfoSet(calendarId: string, dayInfoSetIds: any[]): ResultObject;

    /**
     * カレンダーを作成します。
     * @param info 
     */
    insertCalendarInfo(info: CalendarInfo): ResultObject;

    /**
     * 曜日の情報を作成します。
     * @param info 
     */
    insertCalendarWeekDayInfo(info: CalendarWeekDayInfo): ResultObject;

    /**
     * 日付情報セットを作成します。
     * @param info 
     */
    insertDayInfoSet(info: DayInfoSet): ResultObject;

    /**
     * 日付情報を作成します。
     * @param info 
     */
    insertDayInfo(info: DayInfo): ResultObject;

    /**
     * 指定した日が休日かどうか判定します。
     * @param calendarId 
     * @param date 
     */
    isHoliday(calendarId: string, date: Date): ResultObject;

    /**
     * このマネージャーで使用する週の開始曜日を設定します。 SUNDAY=0～SATURDAY=6をセットできます。 それ以外の値をセットした場合は、値を変えません。
     * @param firstDayOfWeek 
     */
    setFirstDayOfWeek(firstDayOfWeek: number): boolean;

    /**
     * カレンダーを更新します。
     * @param info 
     */
    updateCalendarInfo(info: CalendarInfo): ResultObject;

    /**
     * 曜日の情報を更新します。
     * @param info 
     */
    updateCalendarWeekDayInfo(info: CalendarWeekDayInfo): ResultObject;

    /**
     * 指定したカレンダー内の日付情報セット優先順位を一括で変更します。
     * @param calendarId 
     * @param dayInfoSetIds 
     */
    updateDayInfoSetSortKeyOnCalendar(calendarId: string, dayInfoSetIds: any[]): ResultObject;

    /**
     * 日付情報セットを更新します。
     * @param info 
     */
    updateDayInfoSet(info: DayInfoSet): ResultObject;

    /**
     * 指定した日付情報セット内の日付情報優先順位を一括で変更します。
     * @param dayInfoSetId 
     * @param dayInfoIds 
     */
    updateDayInfoSortKeyOnDayInfoSet(dayInfoSetId: string, dayInfoIds: any[]): ResultObject;

    /**
     * 日付情報を更新します。
     * @param info 
     */
    updateDayInfo(info: DayInfo): ResultObject;
}
