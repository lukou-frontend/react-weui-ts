/**
 * http://jedwatson.github.io/classnames
 *  字符串(可以单个，多个字符串)
    classNames('el-checkbox-button--m', "is-disabled");

    对象(可以单个，多个)
    classNames({"is-disabled"：true}, {'is-disabled': disabled});

    字符串+对象
    classNames('el-checkbox-button--m', {"is-disabled"：true, 'is-disabled': disabled});

    数组（数组项可以是字符串，对象）
    classNames(['el-checkbox-button--m', "is-disabled"]);
    classNames(['el-checkbox-button--m', {"is-disabled"：true，'is-disabled': disabled}]);
 */
export interface ClassArray extends Array<ClassValue> {
}
export interface ClassDictionary {
    [id: string]: any;
}
export declare type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;
declare function classNames(...args: ClassValue[]): string;
export default classNames;
