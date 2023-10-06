/**
 * 根回し情報オブジェクト。
 */
declare class NegoModelInfo {
    /**
     * 根回し宛先情報（Bcc）オブジェクトの配列。
     */
    addressBcc: any[];

    /**
     * 根回し宛先情報（Cc）オブジェクトの配列。
     */
    addressCc: any[];

    /**
     * 根回し宛先情報（To）オブジェクトの配列。
     */
    addressTo: any[];

    /**
     * 返信先。
     */
    replyTo: string;

    /**
     * 件名。
     */
    subject: string;

    /**
     * 本文。
     */
    text: string;
}
