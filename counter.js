
 class counter {
    number = 0;
     constructor(num) {
        this.number = num;
        console.log(this.number)
    }
    decrease() {
        this.number--;
        return this.number;
    }
    increase() {
        this.number++;
        return this.number;
    }

    reset() {
        this.number = 0;

        return this.number;
    }
}

let num = JSON.parse(localStorage.getItem('num'));
if (!num) {
    num = 0;
    var myCounter = new counter(num);
} else {
    document.getElementsByClassName('result')[0].innerHTML = `<div class="result">${num}</div>`;
    var myCounter = new counter(num);
}

window.addEventListener('click', function(event) {
    if (event.target.id == 'resetBtn') {
        let res = myCounter.reset();
        setLocalstorage(res);
        document.getElementsByClassName('result')[0].innerHTML = `<div class="result">${res}</div>`;
    } else if (event.target.id == 'increaseBtn') {
        let res = myCounter.increase();
        setLocalstorage(res);
        document.getElementsByClassName('result')[0].innerHTML = `<div class="result">${res}</div>`;
    } else if (event.target.id == 'decreaseBtn') {
        let res = myCounter.decrease();
        setLocalstorage(res);
        document.getElementsByClassName('result')[0].innerHTML = `<div class="result">${res}</div>`;
    }
});

let setLocalstorage = (value) => {
    localStorage.setItem('num', `${value}`);
}