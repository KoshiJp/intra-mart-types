/**
 * メールを送信するオブジェクトです。
 */
declare class MailSender {
    /**
     * 添付ファイルを追加します。
     * @param filename 
     * @param file 
     */
    addAttachment(filename: string, file: object): void;

    /**
     * Bccを追加します。
     * @param address 
     * @param personal 
     */
    addBcc(address: string, personal: string): void;

    /**
     * Ccを追加します。
     * @param address 
     * @param personal 
     */
    addCc(address: string, personal: string): void;

    /**
     * HTMLメールのインライン画像を追加します。
     * @param filename 
     * @param storage 
     * @param cid 
     */
    addHTMLImage(filename: string, storage: Storage, cid: string): void;

    /**
     * メールヘッダーを追加します。
     * @param name 
     * @param value 
     */
    addHeader(name: string, value: string): void;

    /**
     * ReplyToを追加します。
     * @param replyto 
     */
    addReplyTo(replyto: string): void;

    /**
     * Toを追加します。
     * @param address 
     * @param personal 
     */
    addTo(address: string, personal: string): void;

    /**
     * メール送信エラー時のメッセージを返します。
     */
    getErrorMessage(): string;

    /**
     * メールを送信します。
     */
    send(): boolean;

    /**
     * Fromを設定します。
     * @param address 
     * @param personal 
     */
    setFrom(address: string, personal: string): void;

    /**
     * HTML文書を設定します。
     * @param html 
     */
    setHTML(html: string): void;

    /**
     * Subjectを設定します。
     * @param subject 
     */
    setSubject(subject: string): void;

    /**
     * 本文を設定します。
     * @param text 
     */
    setText(text: string): void;
}
