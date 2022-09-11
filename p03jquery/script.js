$(document).ready(() => {
	$("td").click(function (event) {
		alert("Anda sedang berada di " +$(this).html() + "!");
	});
	$("th").click(function (event) {
		alert("Anda sedang berada di " +$(this).html() + "!");
	});
})