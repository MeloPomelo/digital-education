const token = 'token';
const btn = $('input[type="send"]');
const loginURL = 'login';
const redirectTo = '/';


btn.on('click', () => {
    const form = $('form[class="main_form"]');
    const formData = new FormData();
    form.serializeArray().filter(x => x.value).forEach(x => formData.append(x.name, x.value));
    $.post({
        'url': form.attr('action'),
        'data': formData,
        'processData': false,
        'contentType': false,
    }).done((json) => {
        localStorage[token] = JSON.stringify(json);
        document.location.href = redirectTo;
    }).fail(msg => {
        notifyServerError(msg);
    });
})

//$('body').off('click').on('click', '#flexCheckChecked', function () {
//    if ($(this).is(':checked')) {
//        $('#password').attr('type', 'text');
//    } else {
//        $('#password').attr('type', 'password');
//    }
//});