document.forms[0].onsubmit = function submitForm(e) {
    e.preventDefault();
    const params = new URLSearchParams([...new FormData(e.target).entries()]);
    let res = fetch("http://localhost:4040/database", {
        method: "POST",
        body: params,
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    res.then(data => data.text()).then(res => console.log(res));
}