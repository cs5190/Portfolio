
function displayPageContent(style) {
    $('#modern-selector').removeClass('active');
    $('#utility-selector').removeClass('active');
    $('#artsy-selector').removeClass('active');
    $('#dated-selector').removeClass('active');
    $(`#${style}-selector`).addClass('active');

    $('#page-contents-utility').addClass('hidden');
    $('#page-contents-artsy').addClass('hidden');
    $('#page-contents-dated').addClass('hidden');
    $('#page-contents-modern').addClass('hidden');
    $(`#page-contents-${style}`).removeClass('hidden');
}
