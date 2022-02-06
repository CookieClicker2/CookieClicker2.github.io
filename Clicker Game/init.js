if (!localStorage.getItem('Cookies')) {
    localStorage.setItem('Cookies', 100)
}
if (!localStorage.getItem('Multi')) {
    localStorage.setItem('Multi', 1)
}
function click() {
    localStorage.setItem('Cookies', localStorage.getItem('Cookies')+=(1*localStorage.getItem('Multi')))
}