var mySiema = new Siema();
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

prev.addEventListener('click', function () {return mySiema.prev();});
next.addEventListener('click', function () {return mySiema.next();});