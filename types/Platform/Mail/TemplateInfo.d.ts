/**
 * メールテンプレート情報オブジェクト。
 */
declare class TemplateInfo {
    /**
     * Bccアドレス配列
     */
    Bcc: any[];

    /**
     * メール本文
     */
    body: TemplateBodyInfo;

    /**
     * Ccアドレス配列
     */
    cc: any[];

    /**
     * fromアドレス
     */
    from: TemplateAddressInfo;

    /**
     * メールヘッダ情報配列
     */
    headers: any[];

    /**
     * ReplyToアドレス配列
     */
    replyTo: any[];

    /**
     * メールタイトル
     */
    subject: string;

    /**
     * Toアドレス配列
     */
    to: any[];
}
