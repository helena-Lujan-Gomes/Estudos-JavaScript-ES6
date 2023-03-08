var data = new Date();
data.getHours();
data.getMinutes();
data.getSeconds();
data.getMilliseconds();

var datanova = new Date("March 4, 2022");
Date.parse(datanova)
datanova.getDate();
datanova.getMonth();
datanova.getDay();
datanova.getFullYear();

datanova.getDate()+"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear();

datanova.setDate(datanova.getDate()+5);
datanova.setHours(datanova.getHours()+10);

datanova.getDay();
var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
dias[datanova.getDate()];