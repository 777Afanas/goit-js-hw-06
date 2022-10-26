const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputRange.addEventListener("input", () => {
    
    spanText.style.fontSize = `${Number(inputRange.value)}px`;
    console.log(spanText.style.fontSize);
});