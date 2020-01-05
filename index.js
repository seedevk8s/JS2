const number = document.getElementById('number');
const buttons = document.querySelectorAll('button');
const [increase, decrease] = buttons;


increase.onclick = () => {
    const current = parseInt(number.innerText, 10);    //number에 있는 문자를 꺼내와서 10진수로 파싱해 저장
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}
















