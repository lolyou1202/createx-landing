document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.offer__accordion-item');

	accordions.forEach(el => {
		el.addEventListener('click', function() {
			const content = this.querySelector('.offer__accordion-item__content');

			// если открыт аккордеон
			if (this.classList.contains('open')) {
				this.classList.remove('open');
				content.style.maxHeight = null;
			} else {
				for(el of accordions) {
					el.querySelector('.offer__accordion-item__content').style.maxHeight = null;
					el.classList.remove('open');
				}
				this.classList.add('open');
				content.style.maxHeight = content.scrollHeight + 'px';
			}
		});
	});
});
