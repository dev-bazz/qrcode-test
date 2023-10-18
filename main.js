document.addEventListener("DOMContentLoaded", () => {
	const url = new URLSearchParams(window.location.search);
	const id = url.get("id");

	console.log(id);
});

function getDomElementById(id) {
	return document.querySelector(id);
}
