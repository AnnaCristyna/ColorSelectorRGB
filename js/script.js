window.addEventListener('load', start);
var ValueRed = 127,
  ValueGreen = 127,
  ValueBlue = 127,
  i,
  ranges = [
    document.querySelector('#rangeR'),
    document.querySelector('#rangeG'),
    document.querySelector('#rangeB'),
  ];
function start() {
  firstRangeInFocus();
  console.log(ranges);
  document.addEventListener('click', wichRangeChanging);
  document.addEventListener('keydown', keypressed);
}
function firstRangeInFocus() {
  i = 0;
  ranges[i].focus();
}

function keypressed(event) {
  console.log(event.key);
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    wichRangeChanging(event);
  }
  if (event.key === 'ArrowDown') {
    if (i < 2) {
      i++;
    } else {
      i = 0;
      console.log(i);
    }
    console.log(i);
  }
  if (event.key === 'ArrowUp') {
    if (i > 0) {
      i--;
    } else {
      i = 2;
    }
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
      //i = 1;
      break;
    case 'rangeG':
      inputText = document.querySelector('#valueGreen');
      ValueGreen = event.target.value;
      inputText.value = ValueGreen;
      // i = 2;
      break;
    case 'rangeB':
      inputText = document.querySelector('#valueBlue');
      ValueBlue = event.target.value;
      inputText.value = ValueBlue;
      // i = 3;
      break;
  }
  changeColor(ValueRed, ValueGreen, ValueBlue);
}

function changeColor(ValueRed, ValueGreen, ValueBlue) {
  var squar = document.querySelector('#squar');
  squar.style.backgroundColor =
    'rgb(' + ValueRed + ',' + ValueGreen + ',' + ValueBlue + ')';
}
