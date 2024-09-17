setTimeout(function() {
    typingEffect('#modern-brand-name');
}, 200);
setTimeout(function() {
    typingEffect('#modern-branding-statement-two');
}, 1000);

function displayPageContent(style) {
    $('#modern-selector').removeClass('active');
    $('#utility-selector').removeClass('active');
    $('#artsy-selector').removeClass('active');
    $('#dated-selector').removeClass('active');
    $('#retail-selector').removeClass('active');
    $(`#${style}-selector`).addClass('active');

    $('#page-contents-utility').addClass('hidden');
    $('#page-contents-retail').addClass('hidden');
    $('#page-contents-artsy').addClass('hidden');
    $('#page-contents-dated').addClass('hidden');
    $('#page-contents-modern').addClass('hidden');
    $(`#page-contents-${style}`).removeClass('hidden');


    $('#style-selector').removeClass('modern');
    $('#style-selector').removeClass('retail');
    $('#style-selector').removeClass('utility');
    $('#style-selector').removeClass('artsy');
    $('#style-selector').removeClass('dated');
    $('#style-selector').addClass(`${style}`);
}

function typingEffect(elementId) {
    var text = $(elementId).text();
    $(elementId).text('');
    $(elementId).removeClass('hidden');
    var speed =  100;
    if (text.length > 15) {
        speed -= (text.length);
    }
    var character = 0;

    $(elementId).append('<span class="blink">.</span>');

    function typeWriter() {
        if (character < text.length) {
            $(elementId).children('.blink').before(text.charAt(character));
            character++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}