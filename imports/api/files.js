// Read file from the public folder.
// https://github.com/CollectionFS/Meteor-CollectionFS/issues/320#issuecomment-43817349
export function getTextFromFile(url) {
    var text;
    $.ajax({
        async: false,
        type: "GET",
        url,
        success(data) {
            text = data;
        }
    });
    return text.split("/n");
}