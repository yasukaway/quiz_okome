const question ='黒いスヌーピーの名前は';
const answers = [
  "おこめ",
  "いわのり",
  "たくあん",
  "おにぎり"
];
const correct = "いわのり";



const $button = document.getElementsByTagName("button");

const setup = () => {
  document.getElementById("js-question").textContent = question;
  let buttonIndex = 0;
  let buttonlength = $button.length;
  while(buttonIndex < $button.length){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setup();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert("正解")
  }else{
    window.alert('不正解')
  }
};

let handlerIndex = 0;
const buttonLength = $button.length
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

