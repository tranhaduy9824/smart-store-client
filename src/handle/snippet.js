function snippet(string, count) {
    if (string.length > count) {
        return string.substring(0, count) + '...';
    } else {
        return string;
    }
}

export default snippet;