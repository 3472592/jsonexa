var banzaiMovie = {
	title: "Buckaroo Banzai",
	genre: "Cult Classic",
	rating: 5,
	showtimes: ["1:00pm", "5:00pm", "7:00pm", "11:00pm"]
};

var movie1 = {
	title: "Plan 9 from Outer Space",
	genre: "Cult Classic",
	rating: 2,
	showtimes: ["3:00pm", "7:00pm", "11:00pm"]
};

var movie2 = {
	title: "Forbidden Planet",
	genre: "Classic Sci-fi",
	rating: 5,
	showtimes: ["5:00pm", "9:00pm"]
};

var jsonStr = JSON.stringify(movie1);
console.log(jsonStr);

var jsonMovieObj = JSON.parse(jsonStr);
console.log(jsonMovieObj.title);
