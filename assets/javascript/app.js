$(document).ready(function() {

	var correct = 0;
	var wrong = 0;

	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h5>' + this.time + ' seconds remaining</h5>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h5>' + countdownTimer.time + ' seconds remaining</h5>');
			}
			else {
				index++;
				answerWrong();
				showScore();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
				 	showScore();
					countdownTimer.stop();
					$('.timer').hide(countdownTimer);
					$('.mainQuestion').hide();
				}
			}
		}
	};

//My questions in objects
	var q1 = {
		question : 'How many donuts are made in the US every year?',
		possibleAnswers : ['A. Over 100 million','B. Over 1 billion','C. Over 10 billion','D. Over 1 trillion'],
		target : [false, false, true, false],
		answer : 'C. Over 10 billion'
	};

	var q2 = {
		question: 'Why did donut makers start adding a hole in the middle of donuts?',
		possibleAnswers: ['A. To save money on ingredients','B. So they would cook more evenly','C. To make them easier to hold','D. To make them lower in calories'],
		target : [false, true, false, false],
		answer : 'B. So they would cook more evenly'
	};

	var q3 = {
		question: "What percentage of Dunk'in Donuts sales are actually donuts?",
		possibleAnswers: ['A. Less than 75%','B. Less than 50%','C. Less then 20%','D. Less then 10%'],
		target : [false, false, false, true],
		answer : 'D. Less than 10%'
	};

	var q4 = {
		question: "The French name for Donut 'Pet de Nonne' tranlates to this in English: ",
		possibleAnswers: ['A. Fat holes','B. Nuns farts','C. Chubby bunny bites','D. Cake loops'],
		target : [false, true, false, false],
		answer : 'B. Nuns farts'
	};

	var q5 = {
		question: "Which US immigrant population is associated with the introduction of the donut to America?",
		possibleAnswers: ['A. Irish','B. German','C. Russian','D. Dutch'],
		target : [false, false, false, true],
		answer : 'D. Dutch'
	};

	var q6 = {
		question: "Donuts are among Homer Simpson's favorite foods. He prefers: ",
		possibleAnswers: ['A. Long johns','B. Jelly-filled','C. Frosted','D. Chocolate'],
		target : [false, false, true, false],
		answer : 'C. Frosted'
	};

	var q7 = {
		question: "A medium donut measuring 4 inches across contains: ",
		possibleAnswers: ['A. 100 calories','B. 255 calories','C. 500 calories','D. I "donut" want to know'],
		target : [false, true, false, false],
		answer : 'C. 255 calories'
	};

	var q8 = {
		question: "Which US city has the most donut shops per person? ",
		possibleAnswers: ['A. Portland','B. Boston','C. Long Beach','D. Denver'],
		target : [false, true, false, false],
		answer : 'B. Boston'
	};

	var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8];


	function loadQuestion(questionSelection) {
		countdownTimer.reset();
	  $(".mainQuestion").html("<h3>" + questionArray[questionSelection].question + "</h3>");
	  $("#a1").text(questionArray[questionSelection].possibleAnswers[0]).show();
	  $("#a2").text(questionArray[questionSelection].possibleAnswers[1]).show();
	  $("#a3").text(questionArray[questionSelection].possibleAnswers[2]).show();
	  $("#a4").text(questionArray[questionSelection].possibleAnswers[3]).show();
	}


 function setup() {
	 var onStart = $('#startButton')
	 	$('.answerchoice').hide()
		index = 0;
		$('.mainQuestion').append(onStart);
		$(onStart).on('click', function() {
			$(this).hide();
			countdownTimer.start();
		 	loadQuestion(index);
			showScore();
		});
	}

	function getAnswer() {

	//  nextQuestion();
	$('.answerchoice').on('click', function() {
		index++;
		$(".mainQuestion").text('');
		$("#a1").text('');
		$("#a2").text('');
		$("#a3").text('');
		$("#a4").text('');
			loadQuestion();
		})
	}

	function answerCorrect() {
		correct++;
	}

	function answerWrong() {
		wrong++;
	}

	function showScore() {
		$('#correct').text('Guessed Correct: ' + correct);
		$('#incorrect').text('Guessed Wrong: ' + wrong);
	}

setup();
	$('.answerchoice').on('click', function() {
	 if(this.id == 'a1') {
	 	var answerChosen = 'A';

	} else if(this.id == 'a2') {
	 	answerChosen = 'B';

	} else if (this.id == 'a3') {
	 	answerChosen = 'C';

	} else if (this.id == 'a4') {
	 	answerChosen = 'D';
	 }

	 if ((answerChosen == 'A') && (questionArray[index].target[0] == true)) {
	 	answerCorrect();

	 } else if (answerChosen == 'A') {
	 	answerWrong();
	 }

	 if ((answerChosen == 'B') && (questionArray[index].target[1] == true)) {
	 	answerCorrect();

	 } else if (answerChosen == 'B') {
	 	answerWrong();
	 }

	if ((answerChosen == 'C') && (questionArray[index].target[2] == true)) {
	 	answerCorrect();

	 } else if (answerChosen == 'C') {
	 	answerWrong();
	 }

	if ((answerChosen == 'D') && (questionArray[index].target[3] == true)) {
	 	answerCorrect();
	 } else if (answerChosen == 'D') {
	 	answerWrong();
	 }

	 $(".mainQuestion").text('');
	 $("#a1").text('');
	 $("#a2").text('');
	 $("#a3").text('');
	 $("#a4").text('');
	 index++;

	 if (index < questionArray.length) {
	 	loadQuestion(index);
		showScore();
	 } else {
	 	$(".answerchoice").hide();
	 	showScore();
		countdownTimer.stop();
		$('.timer').hide(countdownTimer);
	 }
	});

	});
