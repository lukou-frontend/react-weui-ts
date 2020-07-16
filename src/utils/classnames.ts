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
export interface ClassArray extends Array<ClassValue> {}
export interface ClassDictionary {
    [id: string]: any;
}
export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

var hasOwn = {}.hasOwnProperty;

function classNames (...args: ClassValue[]) {
	var classes = [];

	for (var i = 0; i < args.length; i++) {
		var arg = args[i];
		if (!arg) continue;

		var argType = typeof arg;

		if (argType === 'string' || argType === 'number') {
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			classes.push(classNames.apply(null, arg));
		} else if (argType === 'object') {
			for (var key in arg as ClassDictionary) {
				if (hasOwn.call(arg, key) && (arg as ClassDictionary)[key]) {
					classes.push(key);
				}
			}
		}
	}

	return classes.join(' ');
}

export default classNames;