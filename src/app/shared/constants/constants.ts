
export class Constants {
    public static readonly FIREBASE_TOKEN = 'fb-token';
    public static readonly OBJECT_ID_EMPTY = '000000000000000000000000';
    public static readonly TABLE_PARAM = {
        PAGE_SIZE: 40,
    };
    public static readonly ACTIONS = {
        EDIT: 0,
        DELETE: 1,
    };
    public static readonly VALUE_OPERATION = [
        { label: 'OR', value: 1 },
        { label: 'AND', value: 2 },
    ];

    public static readonly DISABLE_STATUS = [
        {label:'Disable',value:true},
        {name:'Enable',value:false}
    ];
    static readonly GENDERS = [
        { label: 'Nam', value: '1' },
        { label: 'Nữ', value: '0' },]
        public static readonly PATIENT_TYPES = [
            { label: 'Nội trú', value: '0' },
            { label: 'Ngoại trú', value: '1' },
        ];
    public static readonly SUCCESS = 'Success';
    public static readonly ERROR = 'error';
    public static readonly TOKEN = 'token';
    public static readonly LANGUAGE = 'language';
    public static readonly ACTION = 'action';
    public static readonly USER_INFO = 'user';
    public static readonly MESSAGE_DELETE_SUCCESS = 'Xóa thành công';
    public static readonly MESSAGE_ADD_SUCCESS = 'Tạo mới thành công';
    public static readonly MESSAGE_UPDATE_SUCCESS = 'Cập nhật thành công';

}
export class StorageKeys {
    public static readonly TOKEN = 'token';
    public static readonly USER = 'user';
    public static readonly ADMIN_DASHBOARD = 'admin';
    public static readonly LOGIN_FAIL = 'Incorrect username and/or password.';
}


// export class Roles {
//     public static readonly ADMIN = 'Admin';
//     public static readonly USER = "User";

// }
