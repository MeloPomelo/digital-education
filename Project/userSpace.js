/*Сайдбар*/

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

/*Кнопки. Модуль 12 */

let module12Video = document.getElementById('module12-video');
let module12Text = document.getElementById('module12-text');
let module12LectureButton = document.getElementById('module12-lectureButton');

module12LectureButton.onclick = function() {
  module12Video.classList.remove('turnedOff');
  module12Text.classList.remove('turnedOff');
  module12LectureButton.classList.add('turnedOff');
}

let module12TestButton = document.getElementById('module12-testButton');
let module12Test = document.getElementById('module12-lecture-test');

module12TestButton.onclick = function() {
  module12TestButton.classList.add('turnedOff');
  module12Test.classList.remove('turnedOff');
}

let module12CommentsButton = document.getElementById('module12-comments');
let module12LectureQuestions = document.getElementById('module12-lecture-questions');

module12CommentsButton.onclick = function () {
  module12CommentsButton.classList.add('turnedOff');
  module12LectureQuestions.classList.remove('turnedOff');
}



/*Комментарии. Блок 12*/

let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
};



/*Вопросы и ответы*/

rightAnswer1 = document.getElementById('point1')
wrongAnswer1 = document.getElementById('noPoint1');
function check1() {
  var rightBox1;
  rightBox1 = document.getElementById('correct1');
	if (rightBox1.checked) {
		   rightAnswer1.classList.remove('turnedOff');
       wrongAnswer1.classList.add('turnedOff');
	}
	else {
    wrongAnswer1.classList.remove('turnedOff');
    rightAnswer1.classList.add('turnedOff');
	}
}

rightAnswer2 = document.getElementById('point2');
wrongAnswer2 = document.getElementById('noPoint2');

function check2() {
  var rightBox2;
  rightBox2 = document.getElementById('correct2').value;
  if ((rightBox2 === 'cure') || (rightBox2 === 'Cure')) {
    rightAnswer2.classList.remove('turnedOff');
    wrongAnswer2.classList.add('turnedOff');
  }
  else {
    wrongAnswer2.classList.remove('turnedOff');
    rightAnswer2.classList.add('turnedOff');
  }
}


rightAnswer3 = document.getElementById('point3');
wrongAnswer3 = document.getElementById('noPoint3');

function check3() {
  var rightBox3;
  rightBox3 = document.getElementById('correct3');
  if (rightBox3.checked) {
    rightAnswer3.classList.remove('turnedOff');
    wrongAnswer3.classList.add('turnedOff');
  }
  else {
    wrongAnswer3.classList.remove('turnedOff');
    rightAnswer3.classList.add('turnedOff');
  }
}


rightAnswer4 = document.getElementById('point4')
wrongAnswer4 = document.getElementById('noPoint4');
function check4() {
  var rightBox4;
  rightBox4 = document.getElementById('correct4');
	if (rightBox4.checked) {
		   rightAnswer4.classList.remove('turnedOff');
       wrongAnswer4.classList.add('turnedOff');
	}
	else {
    wrongAnswer4.classList.remove('turnedOff');
    rightAnswer4.classList.add('turnedOff');
	}
}



rightAnswer5 = document.getElementById('point5');
wrongAnswer5 = document.getElementById('noPoint5');

function check5() {
  var rightBox5;
  rightBox5 = document.getElementById('correct5').value;
  if ((rightBox5 === 'катетов') || (rightBox5 === 'Катетов')) {
    rightAnswer5.classList.remove('turnedOff');
    wrongAnswer5.classList.add('turnedOff');
  }
  else {
    wrongAnswer5.classList.remove('turnedOff');
    rightAnswer5.classList.add('turnedOff');
  }
}


rightAnswer6 = document.getElementById('point6')
wrongAnswer6 = document.getElementById('noPoint6');
function check6() {
  var rightBox6;
  rightBox6 = document.getElementById('correct6');
	if (rightBox6.checked) {
		   rightAnswer6.classList.remove('turnedOff');
       wrongAnswer6.classList.add('turnedOff');
	}
	else {
    wrongAnswer6.classList.remove('turnedOff');
    rightAnswer6.classList.add('turnedOff');
	}
}


/*Комментарии. Блок 19*/
let commentForm1 = document.querySelector('.comment-form1');
let commentList1 = document.querySelector('.comment-list1');
let commentField1 = document.querySelector('.comment-field1');

commentForm1.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment1 = document.createElement('li');
  newComment1.classList.add('user-comment');
  newComment1.textContent = commentField1.value;
  commentField1.value = '';
  commentList1.append(newComment1);
};




/*Кнопки. Модуль 19 */

let module19Video = document.getElementById('module19-video');
let module19Text = document.getElementById('module19-text');
let module19LectureButton = document.getElementById('module19-lectureButton');

module19LectureButton.onclick = function() {
  module19Video.classList.remove('turnedOff');
  module19Text.classList.remove('turnedOff');
  module19LectureButton.classList.add('turnedOff');
}

let module19TestButton = document.getElementById('module19-testButton');
let module19Test = document.getElementById('module19-lecture-test');

module19TestButton.onclick = function() {
  module19TestButton.classList.add('turnedOff');
  module19Test.classList.remove('turnedOff');
}

let module19CommentsButton = document.getElementById('module19-comments');
let module19LectureQuestions = document.getElementById('module19-lecture-questions');

module19CommentsButton.onclick = function () {
  module19CommentsButton.classList.add('turnedOff');
  module19LectureQuestions.classList.remove('turnedOff');
}
