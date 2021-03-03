export const translitToRus = (string: string) => {
    const converter = {
        'a': 'а',
        'b': 'б',
        'v': 'в',
        'g': 'г',
        'd': 'д',
        'z': 'з',
        'i': 'и',
        'k': 'к',
        'l': 'л',
        'm': 'м',
        'n': 'н',
        'o': 'о',
        'p': 'п',
        'r': 'р',
        's': 'с',
        't': 'т',
        'u': 'у',
        'f': 'ф',
        'h': 'х',
        'c': 'ц',
        'y': 'ы',
        'e': 'э',
    };

    let result = string.toLowerCase().split('');

    string.toLowerCase().split('').forEach((e, index) => {
        // @ts-ignore
        if (typeof converter[e] !== 'undefined') {
            // @ts-ignore
            result[index] = converter[e];
        }
    });

    return result.join('').toUpperCase();
};
