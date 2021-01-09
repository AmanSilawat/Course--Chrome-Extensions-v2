fetch('https://twitter.com/i/notifications')
    .then(res => res.text())
    .then(data => {
        let temp = document.createElement('template');
        temp.innerHTML = data
        document.body.append(temp);
        console.log(temp.content.getElementById('react-root'))
    })