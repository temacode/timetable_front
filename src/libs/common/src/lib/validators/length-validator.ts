const lengthValidator = (value: string, minLength: number) => value.length >= minLength ? undefined : `Не менее ${minLength} символов`;
