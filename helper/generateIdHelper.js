export default function generateId(list) {
    let max = list[0].id;
    for (let i = 1; i < list.length; i++) {
        if (max < list[i].id) {
            max = list[i].id
        }
    }
    return max + 1;
}