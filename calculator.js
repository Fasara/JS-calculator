$(document).ready(function(){
	$('.calc-number-button').click(function() {
		pressNumber(this);
	});

	$('.calc-operand-button').click(function() {
		pressOperand(this);
	});

	$('.compute').click(function() {
		pressCompute(this);
	});

	//clear screen function
	$('.clear').click(function() {
		pressClear();
	});

	$('.backspace').click(function(){
		backspace();
	})

});


function pressNumber(button) {
	addCharacterToDisplay(button.value);
}

// replace all x's with *'s

function pressOperand(button) {

	var operandValue = button.value;
	if ( operandValue === "x") {
		operandValue = '*';
	}

	addCharacterToDisplay(operandValue);
}


function addCharacterToDisplay(character) {
	var input_var = document.getElementById('display');
	input_var.value += character;
}


function pressCompute() {
	var input_var = document.getElementById('display');

console.log(input_var.value);
	var answer = Math.floor(+eval(input_var.value));

	document.getElementById('result').value = answer;
}

function pressClear() {
	var displayElement = document.getElementById('display');
	displayElement.value = '';
	var resultElement = document.getElementById('result');
	resultElement.value = '';
}	

function backspace() {
	var displayElement = document.getElementById('display');
	var x = displayElement.value;
	if(x.length > 0) {
		x = x.substring(0, x.length-1); //remove the last character in input
		displayElement.value = x;
	}
	var resultElement = document.getElementById('result');
	var x = resultElement.value;
	if(x.length > 0) {
		x = x.substring(0, x.length-1); 
		resultElement.value = x;
	}

}


