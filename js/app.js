$(document).ready(function() {
	var num = prompt('Please enter a number:');
	if (num != null) {
		fizzBuzz(num);
	}
	
	$('#calculate').on('click', function() {
		var num = $('#inputValue').val();
		num = parseInt(num, 10);

		if (num % 1 !== 0) {
			alert('No decimal values please!!'); // Not working!!
		} else if (num % 1 === 0 &&  num >= 1) {
			fizzBuzz(num);
		} else {
			alert('You must enter an integer value!!');
			$('#inputValue').val('');
		}
	});

	
	$('#clear').on('click',function() {
		$('#list').empty();
		$('#inputValue').val('');
	});
});


function fizzBuzz(num) {
	var numList = $('#list');

	for (var i = 1; i <= num; i++) {
		if (i % 15 == 0) {
			numList.append('<li class="answer">' + "FizzBuzz" + '</li>');
		} else if (i % 5 == 0) {
			numList.append('<li class="answer">' + "Buzz" + '</li>');
		} else if (i % 3 == 0) {
			numList.append('<li class="answer">' + "Fizz" + '</li>');
		} else {
			numList.append('<li class="answer">' + i + '</li>');
		}
	}
}