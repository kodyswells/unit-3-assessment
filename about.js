console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submited succesfully!');
}

const image = event => {
	event.preventDefault()
	alert('I see you like ducks!');
}

const duck = document.querySelector('#duck');
duck.addEventListener('mouseover',image)

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);