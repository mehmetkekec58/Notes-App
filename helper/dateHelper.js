export default function date() {
    var date = new Date()
    return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()}/${date.getFullYear()}  -  ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
}