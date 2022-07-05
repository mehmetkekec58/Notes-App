export default function generateId(list) {

    if (list == null || list == undefined || list.length <= 0) {
        return 0;
    }
    let max = list[0].id;
    for (let i = 1; i < list.length; i++) {
        if (max < list[i].id) {
            max = list[i].id
        }
    }
    return max + 1;
}