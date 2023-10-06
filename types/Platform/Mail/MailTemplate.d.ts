/**
 * メールテンプレートオブジェクト。
 */
declare class MailTemplate {
    /**
     * 指定されたメールテンプレートの情報を取得します。
     * @param path 
     * @param locale 
     */
    static getTemplate(path: string, locale: string): ResultObject;

    /**
     * メールテンプレートの処理を行います。
     * @param path 
     * @param locale 
     * @param parameters 
     */
    static process(path: string, locale: string, parameters: object): ResultObject;

    /**
     * 指定されたメールテンプレートの情報を保存します。
     * @param path 
     * @param locale 
     * @param template 
     */
    static saveTemplate(path: string, locale: string, template: TemplateInfo): ResultObject;
}
