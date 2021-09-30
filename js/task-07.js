const refs = {
    range: document.getElementById('font-size-control'),
    currentText: document.getElementById('text')
}
refs.range.addEventListener('input', onInputChange)
const initialTextSize = refs.currentText.style.fontSize = `50px`

function onInputChange() {
    refs.currentText.style.fontSize = `${refs.range.value}px`;
}