export function getJSONData(url) {
    var text;
    $.ajax({
        async: false,
        type: "GET",
        url,
        success(data) {
            text = data;
        }
    });
    return text;
}