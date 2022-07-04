import { COLOR_LIST } from '../contains/colors';

export default function randomColor() {
    return COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)]
}