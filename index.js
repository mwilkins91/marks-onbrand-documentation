import Prism from 'prismjs';

const changeArticle = function(e) {
	e.preventDefault();
	const target = e.target.dataset.for;
	Array.from(document.querySelectorAll('article.cardsList')).forEach(
		element => (element.style.display = 'none')
	);
	document.getElementById(target).style.display = 'block';
};

const init = function(e) {
	Array.from(document.getElementsByClassName('inPageLink')).forEach(element =>
		element.addEventListener('click', changeArticle)
	);
};

document.addEventListener('DOMContentLoaded', init);
