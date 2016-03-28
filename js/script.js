var tagClicked;
var tagNum;
var tagName;

tagClicked = document.getElementByClassName('tm');

for (var i = 0; i < tagClicked.length; i++) {
	tagClicked[i].addEventListener('click', createTag);
}

function createTag(e){
	tagName = e.getAttribute('data-name');
	createList();
}

function createList(){
	var myList = document.createElement('li');
	myList.innerHTML = tagName;

	document.getElementById("list").appendChild(myList);
}

