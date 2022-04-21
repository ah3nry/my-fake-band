// import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog';
import 'player-wc/player-wc';


const $body = document.querySelector('body');
const dialog = document.querySelector('.dialog-overview');
dialog.addEventListener('sl-request-close', event => event.preventDefault());
const mobileMenuToggle = dialog.nextElementSibling;

mobileMenuToggle.addEventListener('click', function() {
	myFakeBand.toggleMenu(this)
});

// Play initial animations on page load.
window.addEventListener('load', function() {
	window.setTimeout(function() {
		$body.classList.remove('is-preload');
	}, 500);
});

const myFakeBand = {
	toggleMenu: function(el) {
		el.classList.toggle('active');
	 	this.toggleMobileMenu();
	},
	toggleMobileMenu: function() {
		dialog.open ? dialog.hide() : dialog.show();
	}
}

window.myFakeBand = myFakeBand;

