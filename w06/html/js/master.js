var Body = {
  setBackgroundColor: function (color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('background-color', color);
  },
  setColor: function (color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBorderColor: function (color) {
    $('h1 a').css('border-bottom-color', color);
  },
};
var Links = {
  setColor: function (color) {
    // var i = 0;
    // var alist = document.querySelectorAll('a');
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  },
};

function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value == '야간모드 끄기') {
    Body.setBackgroundColor('whitesmoke');
    Body.setColor('black');
    Body.setBorderColor('black');
    self.value = '야간모드 켜기';
  } else {
    Body.setBackgroundColor('black');
    Body.setColor('whitesmoke');
    Body.setBorderColor('whitesmoke');
    self.value = '야간모드 끄기';
  }
}
