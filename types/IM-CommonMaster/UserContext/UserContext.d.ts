/**
 * ユーザコンテキストオブジェクト。
 */
declare class UserContext {
    /**
     * ユーザが所属する全ての組織。
     */
    allDepartments: any[];

    /**
     * ユーザが所属する全ての組織役職。
     */
    allPosts: any[];

    /**
     * ユーザが所属する全ての会社。
     */
    companyList: any[];

    /**
     * カレント 組織 。
     */
    currentDepartment: Department;

    /**
     * 会社別にユーザが所属する全ての組織。
     */
    departmentByCompany: object;

    /**
     * ユーザの主所属の組織。
     */
    mainDepartment: Department;

    /**
     * ユーザの主所属の組織役職。
     */
    mainPostList: any[];

    /**
     * 会社別にユーザが所属する全ての組織役職。
     */
    postByCompany: object;

    /**
     * ユーザが所属する全てのパブリックグループ。
     */
    publicGroupList: any[];

    /**
     * ユーザが所属する全てのパブリックグループ役割。
     */
    publicGroupRoleList: any[];

    /**
     * ユーザが所属するユーザ分類。
     */
    userCategoryList: any[];

    /**
     * ユーザプロファイル。
     */
    userProfile: UserProfile;
}
