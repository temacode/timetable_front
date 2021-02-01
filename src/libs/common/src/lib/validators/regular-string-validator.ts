export const regularStringValidator = (value: string, regularString: RegExp) => regularString.test(value) ? undefined : 'Только латинские буквы и  цифры';
