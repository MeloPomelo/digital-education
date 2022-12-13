/*Первый блок*/

/*Оценки*/
let gradeLabel1 = document.getElementById('label1');
let five1 = document.getElementById('fiveGrade1');
let four1 = document.getElementById('fourGrade1');
let three1 = document.getElementById('threeGrade1');
let two1 = document.getElementById('twoGrade1');

/*Выбор оценок*/
let choiceFive1 = document.getElementById('chooseFive1');
let choiceFour1 = document.getElementById('chooseFour1');
let choiceThree1 = document.getElementById('chooseThree1');
let choiceTwo1 = document.getElementById('chooseTwo1');


choiceFive1.onclick = function () {
  five1.classList.remove('turnedOff');
  gradeLabel1.classList.add('turnedOff');
  choiceFive1.classList.add('turnedOff');
  choiceFour1.classList.add('turnedOff');
  choiceThree1.classList.add('turnedOff');
  choiceTwo1.classList.add('turnedOff');
  cancelChoice1.classList.remove('turnedOff');
};

choiceFour1.onclick = function () {
  four1.classList.remove('turnedOff');
  gradeLabel1.classList.add('turnedOff');
  choiceFive1.classList.add('turnedOff');
  choiceFour1.classList.add('turnedOff');
  choiceThree1.classList.add('turnedOff');
  choiceTwo1.classList.add('turnedOff');
  cancelChoice1.classList.remove('turnedOff');
};

choiceThree1.onclick = function () {
  three1.classList.remove('turnedOff');
  gradeLabel1.classList.add('turnedOff');
  choiceFive1.classList.add('turnedOff');
  choiceFour1.classList.add('turnedOff');
  choiceThree1.classList.add('turnedOff');
  choiceTwo1.classList.add('turnedOff');
  cancelChoice1.classList.remove('turnedOff');
};

choiceTwo1.onclick = function () {
  two1.classList.remove('turnedOff');
  gradeLabel1.classList.add('turnedOff');
  choiceFive1.classList.add('turnedOff');
  choiceFour1.classList.add('turnedOff');
  choiceThree1.classList.add('turnedOff');
  choiceTwo1.classList.add('turnedOff');
  cancelChoice1.classList.remove('turnedOff');
};

/*Отмена выбора*/

let cancelChoice1 = document.getElementById('cancel1');

cancelChoice1.onclick = function () {
  cancelChoice1.classList.add('turnedOff');
  gradeLabel1.classList.remove('turnedOff');
  choiceFive1.classList.remove('turnedOff');
  choiceFour1.classList.remove('turnedOff');
  choiceThree1.classList.remove('turnedOff');
  choiceTwo1.classList.remove('turnedOff');

  five1.classList.add('turnedOff');
  four1.classList.add('turnedOff');
  three1.classList.add('turnedOff');
  two1.classList.add('turnedOff');
}




/*Второй блок*/

/*Оценки*/
let gradeLabel2 = document.getElementById('label2');
let five2 = document.getElementById('fiveGrade2');
let four2 = document.getElementById('fourGrade2');
let three2 = document.getElementById('threeGrade2');
let two2 = document.getElementById('twoGrade2');

/*Выбор оценок*/
let choiceFive2 = document.getElementById('chooseFive2');
let choiceFour2 = document.getElementById('chooseFour2');
let choiceThree2 = document.getElementById('chooseThree2');
let choiceTwo2 = document.getElementById('chooseTwo2');


choiceFive2.onclick = function () {
  five2.classList.remove('turnedOff');
  gradeLabel2.classList.add('turnedOff');
  choiceFive2.classList.add('turnedOff');
  choiceFour2.classList.add('turnedOff');
  choiceThree2.classList.add('turnedOff');
  choiceTwo2.classList.add('turnedOff');
  cancelChoice2.classList.remove('turnedOff');
};

choiceFour2.onclick = function () {
  four2.classList.remove('turnedOff');
  gradeLabel2.classList.add('turnedOff');
  choiceFive2.classList.add('turnedOff');
  choiceFour2.classList.add('turnedOff');
  choiceThree2.classList.add('turnedOff');
  choiceTwo2.classList.add('turnedOff');
  cancelChoice2.classList.remove('turnedOff');
};

choiceThree2.onclick = function () {
  three2.classList.remove('turnedOff');
  gradeLabel2.classList.add('turnedOff');
  choiceFive2.classList.add('turnedOff');
  choiceFour2.classList.add('turnedOff');
  choiceThree2.classList.add('turnedOff');
  choiceTwo2.classList.add('turnedOff');
  cancelChoice2.classList.remove('turnedOff');
};

choiceTwo2.onclick = function () {
  two2.classList.remove('turnedOff');
  gradeLabel2.classList.add('turnedOff');
  choiceFive2.classList.add('turnedOff');
  choiceFour2.classList.add('turnedOff');
  choiceThree2.classList.add('turnedOff');
  choiceTwo2.classList.add('turnedOff');
  cancelChoice2.classList.remove('turnedOff');
};


/*Отмена выбора*/

let cancelChoice2 = document.getElementById('cancel2');

cancelChoice2.onclick = function () {
  cancelChoice2.classList.add('turnedOff');
  gradeLabel2.classList.remove('turnedOff');
  choiceFive2.classList.remove('turnedOff');
  choiceFour2.classList.remove('turnedOff');
  choiceThree2.classList.remove('turnedOff');
  choiceTwo2.classList.remove('turnedOff');

  five2.classList.add('turnedOff');
  four2.classList.add('turnedOff');
  three2.classList.add('turnedOff');
  two2.classList.add('turnedOff');
}


/*Третий блок*/

/*Оценки*/
let gradeLabel3 = document.getElementById('label3');
let five3 = document.getElementById('fiveGrade3');
let four3 = document.getElementById('fourGrade3');
let three3 = document.getElementById('threeGrade3');
let two3 = document.getElementById('twoGrade3');

/*Выбор оценок*/
let choiceFive3 = document.getElementById('chooseFive3');
let choiceFour3 = document.getElementById('chooseFour3');
let choiceThree3 = document.getElementById('chooseThree3');
let choiceTwo3 = document.getElementById('chooseTwo3');


choiceFive3.onclick = function () {
  five3.classList.remove('turnedOff');
  gradeLabel3.classList.add('turnedOff');
  choiceFive3.classList.add('turnedOff');
  choiceFour3.classList.add('turnedOff');
  choiceThree3.classList.add('turnedOff');
  choiceTwo3.classList.add('turnedOff');
  cancelChoice3.classList.remove('turnedOff');
};

choiceFour3.onclick = function () {
  four3.classList.remove('turnedOff');
  gradeLabel3.classList.add('turnedOff');
  choiceFive3.classList.add('turnedOff');
  choiceFour3.classList.add('turnedOff');
  choiceThree3.classList.add('turnedOff');
  choiceTwo3.classList.add('turnedOff');
  cancelChoice3.classList.remove('turnedOff');
};

choiceThree3.onclick = function () {
  three3.classList.remove('turnedOff');
  gradeLabel3.classList.add('turnedOff');
  choiceFive3.classList.add('turnedOff');
  choiceFour3.classList.add('turnedOff');
  choiceThree3.classList.add('turnedOff');
  choiceTwo3.classList.add('turnedOff');
  cancelChoice3.classList.remove('turnedOff');
};

choiceTwo3.onclick = function () {
  two3.classList.remove('turnedOff');
  gradeLabel3.classList.add('turnedOff');
  choiceFive3.classList.add('turnedOff');
  choiceFour3.classList.add('turnedOff');
  choiceThree3.classList.add('turnedOff');
  choiceTwo3.classList.add('turnedOff');
  cancelChoice3.classList.remove('turnedOff');
};


/*Отмена выбора*/

let cancelChoice3 = document.getElementById('cancel3');

cancelChoice3.onclick = function () {
  cancelChoice3.classList.add('turnedOff');
  gradeLabel3.classList.remove('turnedOff');
  choiceFive3.classList.remove('turnedOff');
  choiceFour3.classList.remove('turnedOff');
  choiceThree3.classList.remove('turnedOff');
  choiceTwo3.classList.remove('turnedOff');

  five3.classList.add('turnedOff');
  four3.classList.add('turnedOff');
  three3.classList.add('turnedOff');
  two3.classList.add('turnedOff');
}


/*Четвёртый блок*/

/*Оценки*/
let gradeLabel4 = document.getElementById('label4');
let five4 = document.getElementById('fiveGrade4');
let four4 = document.getElementById('fourGrade4');
let three4 = document.getElementById('threeGrade4');
let two4 = document.getElementById('twoGrade4');

/*Выбор оценок*/
let choiceFive4 = document.getElementById('chooseFive4');
let choiceFour4 = document.getElementById('chooseFour4');
let choiceThree4 = document.getElementById('chooseThree4');
let choiceTwo4 = document.getElementById('chooseTwo4');


choiceFive4.onclick = function () {
  five4.classList.remove('turnedOff');
  gradeLabel4.classList.add('turnedOff');
  choiceFive4.classList.add('turnedOff');
  choiceFour4.classList.add('turnedOff');
  choiceThree4.classList.add('turnedOff');
  choiceTwo4.classList.add('turnedOff');
  cancelChoice4.classList.remove('turnedOff');
};

choiceFour4.onclick = function () {
  four4.classList.remove('turnedOff');
  gradeLabel4.classList.add('turnedOff');
  choiceFive4.classList.add('turnedOff');
  choiceFour4.classList.add('turnedOff');
  choiceThree4.classList.add('turnedOff');
  choiceTwo4.classList.add('turnedOff');
  cancelChoice4.classList.remove('turnedOff');
};

choiceThree4.onclick = function () {
  three4.classList.remove('turnedOff');
  gradeLabel4.classList.add('turnedOff');
  choiceFive4.classList.add('turnedOff');
  choiceFour4.classList.add('turnedOff');
  choiceThree4.classList.add('turnedOff');
  choiceTwo4.classList.add('turnedOff');
  cancelChoice4.classList.remove('turnedOff');
};

choiceTwo4.onclick = function () {
  two4.classList.remove('turnedOff');
  gradeLabel4.classList.add('turnedOff');
  choiceFive4.classList.add('turnedOff');
  choiceFour4.classList.add('turnedOff');
  choiceThree4.classList.add('turnedOff');
  choiceTwo4.classList.add('turnedOff');
  cancelChoice4.classList.remove('turnedOff');
};


/*Отмена выбора*/

let cancelChoice4 = document.getElementById('cancel4');

cancelChoice4.onclick = function () {
  cancelChoice4.classList.add('turnedOff');
  gradeLabel4.classList.remove('turnedOff');
  choiceFive4.classList.remove('turnedOff');
  choiceFour4.classList.remove('turnedOff');
  choiceThree4.classList.remove('turnedOff');
  choiceTwo4.classList.remove('turnedOff');

  five4.classList.add('turnedOff');
  four4.classList.add('turnedOff');
  three4.classList.add('turnedOff');
  two4.classList.add('turnedOff');
}



/*Пятый блок*/

/*Оценки*/
let gradeLabel5 = document.getElementById('label5');
let five5 = document.getElementById('fiveGrade5');
let four5 = document.getElementById('fourGrade5');
let three5 = document.getElementById('threeGrade5');
let two5 = document.getElementById('twoGrade5');

/*Выбор оценок*/
let choiceFive5 = document.getElementById('chooseFive5');
let choiceFour5 = document.getElementById('chooseFour5');
let choiceThree5 = document.getElementById('chooseThree5');
let choiceTwo5 = document.getElementById('chooseTwo5');


choiceFive5.onclick = function () {
  five5.classList.remove('turnedOff');
  gradeLabel5.classList.add('turnedOff');
  choiceFive5.classList.add('turnedOff');
  choiceFour5.classList.add('turnedOff');
  choiceThree5.classList.add('turnedOff');
  choiceTwo5.classList.add('turnedOff');
  cancelChoice5.classList.remove('turnedOff');
};

choiceFour5.onclick = function () {
  four5.classList.remove('turnedOff');
  gradeLabel5.classList.add('turnedOff');
  choiceFive5.classList.add('turnedOff');
  choiceFour5.classList.add('turnedOff');
  choiceThree5.classList.add('turnedOff');
  choiceTwo5.classList.add('turnedOff');
  cancelChoice5.classList.remove('turnedOff');
};

choiceThree5.onclick = function () {
  three5.classList.remove('turnedOff');
  gradeLabel5.classList.add('turnedOff');
  choiceFive5.classList.add('turnedOff');
  choiceFour5.classList.add('turnedOff');
  choiceThree5.classList.add('turnedOff');
  choiceTwo5.classList.add('turnedOff');
  cancelChoice5.classList.remove('turnedOff');
};

choiceTwo5.onclick = function () {
  two5.classList.remove('turnedOff');
  gradeLabel5.classList.add('turnedOff');
  choiceFive5.classList.add('turnedOff');
  choiceFour5.classList.add('turnedOff');
  choiceThree5.classList.add('turnedOff');
  choiceTwo5.classList.add('turnedOff');
  cancelChoice5.classList.remove('turnedOff');
};


/*Отмена выбора*/

let cancelChoice5 = document.getElementById('cancel5');

cancelChoice5.onclick = function () {
  cancelChoice5.classList.add('turnedOff');
  gradeLabel5.classList.remove('turnedOff');
  choiceFive5.classList.remove('turnedOff');
  choiceFour5.classList.remove('turnedOff');
  choiceThree5.classList.remove('turnedOff');
  choiceTwo5.classList.remove('turnedOff');

  five5.classList.add('turnedOff');
  four5.classList.add('turnedOff');
  three5.classList.add('turnedOff');
  two5.classList.add('turnedOff');
}



/*Шестой блок*/

/*Оценки*/
let gradeLabel6 = document.getElementById('label6');
let five6 = document.getElementById('fiveGrade6');
let four6 = document.getElementById('fourGrade6');
let three6 = document.getElementById('threeGrade6');
let two6 = document.getElementById('twoGrade6');

/*Выбор оценок*/
let choiceFive6 = document.getElementById('chooseFive6');
let choiceFour6 = document.getElementById('chooseFour6');
let choiceThree6 = document.getElementById('chooseThree6');
let choiceTwo6 = document.getElementById('chooseTwo6');


choiceFive6.onclick = function () {
  five6.classList.remove('turnedOff');
  gradeLabel6.classList.add('turnedOff');
  choiceFive6.classList.add('turnedOff');
  choiceFour6.classList.add('turnedOff');
  choiceThree6.classList.add('turnedOff');
  choiceTwo6.classList.add('turnedOff');
  cancelChoice6.classList.remove('turnedOff');
};

choiceFour6.onclick = function () {
  four6.classList.remove('turnedOff');
  gradeLabel6.classList.add('turnedOff');
  choiceFive6.classList.add('turnedOff');
  choiceFour6.classList.add('turnedOff');
  choiceThree6.classList.add('turnedOff');
  choiceTwo6.classList.add('turnedOff');
  cancelChoice6.classList.remove('turnedOff');
};

choiceThree6.onclick = function () {
  three6.classList.remove('turnedOff');
  gradeLabel6.classList.add('turnedOff');
  choiceFive6.classList.add('turnedOff');
  choiceFour6.classList.add('turnedOff');
  choiceThree6.classList.add('turnedOff');
  choiceTwo6.classList.add('turnedOff');
  cancelChoice6.classList.remove('turnedOff');
};

choiceTwo6.onclick = function () {
  two6.classList.remove('turnedOff');
  gradeLabel6.classList.add('turnedOff');
  choiceFive6.classList.add('turnedOff');
  choiceFour6.classList.add('turnedOff');
  choiceThree6.classList.add('turnedOff');
  choiceTwo6.classList.add('turnedOff');
  cancelChoice6.classList.remove('turnedOff');
};


/*Отмена выбора*/

let cancelChoice6 = document.getElementById('cancel6');

cancelChoice6.onclick = function () {
  cancelChoice6.classList.add('turnedOff');
  gradeLabel6.classList.remove('turnedOff');
  choiceFive6.classList.remove('turnedOff');
  choiceFour6.classList.remove('turnedOff');
  choiceThree6.classList.remove('turnedOff');
  choiceTwo6.classList.remove('turnedOff');

  five6.classList.add('turnedOff');
  four6.classList.add('turnedOff');
  three6.classList.add('turnedOff');
  two6.classList.add('turnedOff');
}



/*Седьмой блок*/

/*Оценки*/
let gradeLabel7 = document.getElementById('label7');
let five7 = document.getElementById('fiveGrade7');
let four7 = document.getElementById('fourGrade7');
let three7 = document.getElementById('threeGrade7');
let two7 = document.getElementById('twoGrade7');

/*Выбор оценок*/
let choiceFive7 = document.getElementById('chooseFive7');
let choiceFour7 = document.getElementById('chooseFour7');
let choiceThree7 = document.getElementById('chooseThree7');
let choiceTwo7 = document.getElementById('chooseTwo7');


choiceFive7.onclick = function () {
  five7.classList.remove('turnedOff');
  gradeLabel7.classList.add('turnedOff');
  choiceFive7.classList.add('turnedOff');
  choiceFour7.classList.add('turnedOff');
  choiceThree7.classList.add('turnedOff');
  choiceTwo7.classList.add('turnedOff');
  cancelChoice7.classList.remove('turnedOff');
};

choiceFour7.onclick = function () {
  four7.classList.remove('turnedOff');
  gradeLabel7.classList.add('turnedOff');
  choiceFive7.classList.add('turnedOff');
  choiceFour7.classList.add('turnedOff');
  choiceThree7.classList.add('turnedOff');
  choiceTwo7.classList.add('turnedOff');
  cancelChoice7.classList.remove('turnedOff');
};

choiceThree7.onclick = function () {
  three7.classList.remove('turnedOff');
  gradeLabel7.classList.add('turnedOff');
  choiceFive7.classList.add('turnedOff');
  choiceFour7.classList.add('turnedOff');
  choiceThree7.classList.add('turnedOff');
  choiceTwo7.classList.add('turnedOff');
  cancelChoice7.classList.remove('turnedOff');
};

choiceTwo7.onclick = function () {
  two7.classList.remove('turnedOff');
  gradeLabel7.classList.add('turnedOff');
  choiceFive7.classList.add('turnedOff');
  choiceFour7.classList.add('turnedOff');
  choiceThree7.classList.add('turnedOff');
  choiceTwo7.classList.add('turnedOff');
  cancelChoice7.classList.remove('turnedOff');
};


/*Отмена выбора*/

let cancelChoice7 = document.getElementById('cancel7');

cancelChoice7.onclick = function () {
  cancelChoice7.classList.add('turnedOff');
  gradeLabel7.classList.remove('turnedOff');
  choiceFive7.classList.remove('turnedOff');
  choiceFour7.classList.remove('turnedOff');
  choiceThree7.classList.remove('turnedOff');
  choiceTwo7.classList.remove('turnedOff');

  five7.classList.add('turnedOff');
  four7.classList.add('turnedOff');
  three7.classList.add('turnedOff');
  two7.classList.add('turnedOff');
}



/*Восьмой блок*/

/*Оценки*/
let gradeLabel8 = document.getElementById('label8');
let five8 = document.getElementById('fiveGrade8');
let four8 = document.getElementById('fourGrade8');
let three8 = document.getElementById('threeGrade8');
let two8 = document.getElementById('twoGrade8');

/*Выбор оценок*/
let choiceFive8 = document.getElementById('chooseFive8');
let choiceFour8 = document.getElementById('chooseFour8');
let choiceThree8 = document.getElementById('chooseThree8');
let choiceTwo8 = document.getElementById('chooseTwo8');


choiceFive8.onclick = function () {
  five8.classList.remove('turnedOff');
  gradeLabel8.classList.add('turnedOff');
  choiceFive8.classList.add('turnedOff');
  choiceFour8.classList.add('turnedOff');
  choiceThree8.classList.add('turnedOff');
  choiceTwo8.classList.add('turnedOff');
  cancelChoice8.classList.remove('turnedOff');
};

choiceFour8.onclick = function () {
  four8.classList.remove('turnedOff');
  gradeLabel8.classList.add('turnedOff');
  choiceFive8.classList.add('turnedOff');
  choiceFour8.classList.add('turnedOff');
  choiceThree8.classList.add('turnedOff');
  choiceTwo8.classList.add('turnedOff');
  cancelChoice8.classList.remove('turnedOff');
};

choiceThree8.onclick = function () {
  three8.classList.remove('turnedOff');
  gradeLabel8.classList.add('turnedOff');
  choiceFive8.classList.add('turnedOff');
  choiceFour8.classList.add('turnedOff');
  choiceThree8.classList.add('turnedOff');
  choiceTwo8.classList.add('turnedOff');
  cancelChoice8.classList.remove('turnedOff');
};

choiceTwo8.onclick = function () {
  two8.classList.remove('turnedOff');
  gradeLabel8.classList.add('turnedOff');
  choiceFive8.classList.add('turnedOff');
  choiceFour8.classList.add('turnedOff');
  choiceThree8.classList.add('turnedOff');
  choiceTwo8.classList.add('turnedOff');
  cancelChoice8.classList.remove('turnedOff');
};


/*Отмена выбора*/

let cancelChoice8 = document.getElementById('cancel8');

cancelChoice8.onclick = function () {
  cancelChoice8.classList.add('turnedOff');
  gradeLabel8.classList.remove('turnedOff');
  choiceFive8.classList.remove('turnedOff');
  choiceFour8.classList.remove('turnedOff');
  choiceThree8.classList.remove('turnedOff');
  choiceTwo8.classList.remove('turnedOff');

  five8.classList.add('turnedOff');
  four8.classList.add('turnedOff');
  three8.classList.add('turnedOff');
  two8.classList.add('turnedOff');
}



/*Девятый блок*/

/*Оценки*/
let gradeLabel9 = document.getElementById('label9');
let five9 = document.getElementById('fiveGrade9');
let four9 = document.getElementById('fourGrade9');
let three9 = document.getElementById('threeGrade9');
let two9 = document.getElementById('twoGrade9');

/*Выбор оценок*/
let choiceFive9 = document.getElementById('chooseFive9');
let choiceFour9 = document.getElementById('chooseFour9');
let choiceThree9 = document.getElementById('chooseThree9');
let choiceTwo9 = document.getElementById('chooseTwo9');


choiceFive9.onclick = function () {
  five9.classList.remove('turnedOff');
  gradeLabel9.classList.add('turnedOff');
  choiceFive9.classList.add('turnedOff');
  choiceFour9.classList.add('turnedOff');
  choiceThree9.classList.add('turnedOff');
  choiceTwo9.classList.add('turnedOff');
  cancelChoice9.classList.remove('turnedOff');
};

choiceFour9.onclick = function () {
  four9.classList.remove('turnedOff');
  gradeLabel9.classList.add('turnedOff');
  choiceFive9.classList.add('turnedOff');
  choiceFour9.classList.add('turnedOff');
  choiceThree9.classList.add('turnedOff');
  choiceTwo9.classList.add('turnedOff');
  cancelChoice9.classList.remove('turnedOff');
};

choiceThree9.onclick = function () {
  three9.classList.remove('turnedOff');
  gradeLabel9.classList.add('turnedOff');
  choiceFive9.classList.add('turnedOff');
  choiceFour9.classList.add('turnedOff');
  choiceThree9.classList.add('turnedOff');
  choiceTwo9.classList.add('turnedOff');
  cancelChoice9.classList.remove('turnedOff');
};

choiceTwo9.onclick = function () {
  two9.classList.remove('turnedOff');
  gradeLabel9.classList.add('turnedOff');
  choiceFive9.classList.add('turnedOff');
  choiceFour9.classList.add('turnedOff');
  choiceThree9.classList.add('turnedOff');
  choiceTwo9.classList.add('turnedOff');
  cancelChoice9.classList.remove('turnedOff');
};


/*Отмена выбора*/

let cancelChoice9 = document.getElementById('cancel9');

cancelChoice9.onclick = function () {
  cancelChoice9.classList.add('turnedOff');
  gradeLabel9.classList.remove('turnedOff');
  choiceFive9.classList.remove('turnedOff');
  choiceFour9.classList.remove('turnedOff');
  choiceThree9.classList.remove('turnedOff');
  choiceTwo9.classList.remove('turnedOff');

  five9.classList.add('turnedOff');
  four9.classList.add('turnedOff');
  three9.classList.add('turnedOff');
  two9.classList.add('turnedOff');
}



/*Десятый блок*/

/*Оценки*/
let gradeLabel10 = document.getElementById('label10');
let five10 = document.getElementById('fiveGrade10');
let four10 = document.getElementById('fourGrade10');
let three10 = document.getElementById('threeGrade10');
let two10 = document.getElementById('twoGrade10');

/*Выбор оценок*/
let choiceFive10 = document.getElementById('chooseFive10');
let choiceFour10 = document.getElementById('chooseFour10');
let choiceThree10 = document.getElementById('chooseThree10');
let choiceTwo10 = document.getElementById('chooseTwo10');


choiceFive10.onclick = function () {
  five10.classList.remove('turnedOff');
  gradeLabel10.classList.add('turnedOff');
  choiceFive10.classList.add('turnedOff');
  choiceFour10.classList.add('turnedOff');
  choiceThree10.classList.add('turnedOff');
  choiceTwo10.classList.add('turnedOff');
  cancelChoice10.classList.remove('turnedOff');
};

choiceFour10.onclick = function () {
  four10.classList.remove('turnedOff');
  gradeLabel10.classList.add('turnedOff');
  choiceFive10.classList.add('turnedOff');
  choiceFour10.classList.add('turnedOff');
  choiceThree10.classList.add('turnedOff');
  choiceTwo10.classList.add('turnedOff');
  cancelChoice10.classList.remove('turnedOff');
};

choiceThree10.onclick = function () {
  three10.classList.remove('turnedOff');
  gradeLabel10.classList.add('turnedOff');
  choiceFive10.classList.add('turnedOff');
  choiceFour10.classList.add('turnedOff');
  choiceThree10.classList.add('turnedOff');
  choiceTwo10.classList.add('turnedOff');
  cancelChoice10.classList.remove('turnedOff');
};

choiceTwo10.onclick = function () {
  two10.classList.remove('turnedOff');
  gradeLabel10.classList.add('turnedOff');
  choiceFive10.classList.add('turnedOff');
  choiceFour10.classList.add('turnedOff');
  choiceThree10.classList.add('turnedOff');
  choiceTwo10.classList.add('turnedOff');
  cancelChoice10.classList.remove('turnedOff');
};


/*Отмена выбора*/

let cancelChoice10 = document.getElementById('cancel10');

cancelChoice10.onclick = function () {
  cancelChoice10.classList.add('turnedOff');
  gradeLabel10.classList.remove('turnedOff');
  choiceFive10.classList.remove('turnedOff');
  choiceFour10.classList.remove('turnedOff');
  choiceThree10.classList.remove('turnedOff');
  choiceTwo10.classList.remove('turnedOff');

  five10.classList.add('turnedOff');
  four10.classList.add('turnedOff');
  three10.classList.add('turnedOff');
  two10.classList.add('turnedOff');
}
