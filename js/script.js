window.addEventListener('load', () => {
  firstRangeInFocus();
  console.log(ranges);
  document.addEventListener('click', wichRangeChanging);
  document.addEventListener('keydown', keypressed);
});
let ValueRed = 127,
  ValueGreen = 127,
  ValueBlue = 127,
  i;
const ranges = [
  document.querySelector('#rangeR'),
  document.querySelector('#rangeG'),
  document.querySelector('#rangeB'),
];
function firstRangeInFocus() {
  i = 0;
  ranges[i].focus();
}

function keypressed(event) {
  if (event.keyCode === 37 || event.keyCode === 39) {
    //ArrowLeft and ArrowRight
    wichRangeChanging(event);
  }
  if (event.keyCode === 40) {
    //ArrowDown
    i < 2 ? i++ : (i = 0);
  }
  if (event.keyCode === 38) {
    //ArrowUp
    i > 0 ? i-- : (i = 2);
  }
  ranges[i].focus();
}

function wichRangeChanging(event) {
  var idRange = event.target.id;
  var inputText;
  switch (idRange) {
    case 'rangeR':
      inputText = document.querySelector('#valueRed');
      ValueRed = event.target.value;
      inputText.value = ValueRed;
      break;
    case 'rangeG':
      inputText = document.querySelector('#valueGreen');
      ValueGreen = event.target.value;
      inputText.value = ValueGreen;
      break;
    case 'rangeB':
      inputText = document.querySelector('#valueBlue');
      ValueBlue = event.target.value;
      inputText.value = ValueBlue;
      break;
  }
  changeColor(ValueRed, ValueGreen, ValueBlue);
}

function changeColor(ValueRed, ValueGreen, ValueBlue) {
  var squar = document.querySelector('#squar');
  squar.style.backgroundColor = `rgb(${ValueRed}, ${ValueGreen}, ${ValueBlue})`;
}
