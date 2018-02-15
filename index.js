import Prism from 'prismjs';

const resetPages = function() {
	Array.from(document.querySelectorAll('article.cardsList')).forEach(element => {
		element.style.display = 'none';
	});
};

const resetSubMenus = function() {
	Array.from(document.querySelectorAll('ul.sub-menu')).forEach(
		element => (element.style.display = 'none')
	);
};

const resetPageLinks = function() {
	Array.from(document.getElementsByClassName('inPageLink')).forEach(element =>
		element.classList.remove('is-active')
	);
};

const changeArticle = function(e) {
	e.preventDefault();
	const target = e.target.dataset.for;
	const $target = document.getElementById(target);

	resetPages();
	$target.style.display = 'block';

	resetSubMenus();
	if (e.target.parentNode.querySelector('ul.sub-menu')) {
		e.target.parentNode.querySelector('ul.sub-menu').style.display = 'block';
	}

	resetPageLinks();
	e.target.classList.add('is-active');
};

const init = function(e) {
	Array.from(document.getElementsByClassName('inPageLink')).forEach(element =>
		element.addEventListener('click', changeArticle)
	);
};

document.addEventListener('DOMContentLoaded', init);
