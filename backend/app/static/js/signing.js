const token = 'token';
const btn = $('button[class="form_button" type="submit"]');
const loginURL = 'login';
const redirectTo = 'user_spaces';


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
        localStorage.setItem(token, JSON.stringify(json)); // write
        console.log(localStorage.getItem('token')); // read
        document.location.href = redirectTo;
    })
})

function init() {
    $.ajaxSetup({
        beforeSend: function (xhr) {
            const tokenFromServer = localStorage.getItem(token);
            if (tokenFromServer) {
                const tokenData = JSON.parse(tokenFromServer);
                xhr.setRequestHeader('Authorization', `${tokenData.token_type} ${tokenData.access_token}`);
            }
        }
    });
    $(document).ajaxError((event, jqxhr) => {
        if (jqxhr.status === 401) {
            document.location.href = loginURL;
        }
    });
}

if (!document.location.href.endsWith(loginURL)) {
    init();
}