function setTime(data) {
    var data = data;
    var time = new Date(data);
    var yyyy = time.getFullYear();
    var mm = time.getMonth()+1;
    var dd = time.getDate();
    var h = time.getHours();
    var min = time.getMinutes();
    var second = time.getSeconds();
    return {
        year:yyyy,
        month:mm,
        day:dd,
        hour:h,
        minute:min,
        second:second
    }
}