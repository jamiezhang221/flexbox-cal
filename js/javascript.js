var tm = document.getElementsByClassName('tm');
var tagName;
var tl = document.getElementsByClassName('taglist');

for (var i = 0; i < tm.length; i++) {
	tm[i].addEventListener('click', tmClicked);
	// tagName[i]=tm[i].getAttribute('data-name');
}

function tmClicked(e){
	console.log(e);
	var li = document.createElement('li');
	tagName=e.target.dataset.name;
	li.innerHTML = tagName;
	tl[0].appendChild(li);
	li.addEventListener('click',removeTag);
	li.className='list-item';
}

function removeTag(e){
	e.target.remove();
}