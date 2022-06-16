// 5 > 4                 true
// "ананас" > "яблоко"   false
// "2" > "12"            true
// undefined == null     true
// undefined === null    false
// null == "\n0\n"       false
// null === +"\n0\n"     false


if (time == "утро") {
    message = 'пей кофе и иди батрачить';
  } else if (time == "обед") {
    message = 'едем в сталовку ';
  } else if (time == "вечер") {
    message = 'идем домой';
  } else {
    message = 'спим';
  }

  
  let message = (time == 'Утро') ? 'пей кофе и иди батрачить' :
    (time == 'обед') ? 'едем в сталовку' :
    (time == "вечер") ? 'идем домой' :
    (time == 'ночь') ? 'спим' :
    '';
