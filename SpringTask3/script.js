const selectElement1 = document.querySelector('select');
const selectElement = document.getElementById('kz-inp');
selectElement.addEventListener('change', (event) => {
    const result1 = document.getElementById('1usd');
    const result2 = document.getElementById('1eur');
    const result3 = document.getElementById('1kzt');
    if (selectElement1.value === "KZT"){
        result3.value = '-'; //kzt
        result1.value = event.target.value/431;
        result2.value = event.target.value/542.1;

    } else if (selectElement1.value === "USD"){
        result3.value = event.target.value*429;
        result2.value = event.target.value/1.1865;
        result1.value = '-';
    } else { //euro
        result1.value = event.target.value/0.85;
        result2.value = '-';
        result3.value = event.target.value*507;
    }
});