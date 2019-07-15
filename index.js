import firstletter from './pinyin_dict_firstletter'

export default getFirstLetter = (str) => {
    if (!str || /^ +$/g.test(str)) return '';
    var result = [];
    for (var i = 0; i < str.length; i++) {
        var unicode = str.charCodeAt(i);
        var ch = str.charAt(i);
        if (unicode >= 19968 && unicode <= 40869) {
            ch = firstletter.all.charAt(unicode - 19968);
        }
        result.push(ch);
    }
    return result.join('');
}