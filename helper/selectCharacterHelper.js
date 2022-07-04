export default function selectCharacter(text) {
    let number = 120
    return text.length > number ? `${substringText(text, number)}...` : text
}
function substringText(text, number) {
    return text.substring(0, number);
}