const formatDate = (date: string): string => {
    const dateFormatted = new Date(date);
    const day = ('0' + dateFormatted.getDate()).slice(-2);
    const month = ('0' + (dateFormatted.getMonth() + 1)).slice(-2);
    const year = dateFormatted.getFullYear();

    return `${day}/${month}/${year}`;
}

export default formatDate;
