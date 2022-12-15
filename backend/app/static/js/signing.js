const token = 'token';
const btn = $('button[type="submit"]');
const redirectTo = 'spaces';


btn.onclick = async function () {
    const form = document.getElementById('form1')
    const url = '/users/login'
    const formData = new FormData(form);

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData)
    }).then(response => {
        localStorage[token] = JSON.stringify(response);
        window.location.href = redirectTo;
    })
}