function fizzBuzz() {
	var num = $('#inputValue').val();
	//var numList = $('.result .content');
	var numList = $('#list');

	for (var i = 1; i <= num; i++) {
		if (i % 15 == 0) {
			numList.append('<li class="answer">' + "FizzBuzz" + '</li>');
			//numList.append('<p>FizzBuzz</p>');
		} else if (i % 5 == 0) {
			numList.append('<li class="answer">' + "Buzz" + '</li>');
			//numList.append('<p>Buzz</p>');
		} else if (i % 3 == 0) {
			numList.append('<li class="answer">' + "Fizz" + '</li>');
			//numList.append('<p>Fizz</p>');
		} else {
			numList.append('<li class="answer">' + i + '</li>');
			//numList.append(i);
		}
	}

	//$('#inputValue').val('');
	//$('#list').('');
}

function clearList() {
	$('#list').empty();
	$('#inputValue').val('');
}




$(function() {
	$('#calculate').on('click', fizzBuzz);
	$('#clear').on('click', clearList);
	//numList.empty();
});