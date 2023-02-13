/* const portfolioTabsNav = document.querySelector('.work__tabs-nav');
const portfolioTabsNavBtn = document.querySelectorAll('.work__tabs-item-btn');
const portfolioItem = document.querySelectorAll('.work-slick-item');
const portfolioItemVisible = document.querySelectorAll('.work-slick-item--visible');
const loadMore = document.querySelector('.load__btn');
const maxItems = 9;

const isLoadMoreNeeded = (selector) => {
  if (selector.length <= maxItems) {
    loadMore.style.display = 'none';
  } else {
    loadMore.style.display = 'flex';
  }
};

const hideMoreItems = (selector) => {
  if (selector.length > maxItems) {
    const arr = Array.from(selector);
    const hiddenItems = arr.slice(maxItems, selector.length);

    hiddenItems.forEach(el => {
      el.classList.remove('work-slick-item--visible');
    });
  }
};

portfolioTabsNav.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('work__tabs-item-btn')) {

    loadMore.classList.remove('load__btn--active');
    const path = target.dataset.path;

    portfolioItem.forEach(el => {
        el.classList.add('work-slick-item--visible-animation');
    });

    portfolioTabsNavBtn.forEach(el => {
        el.classList.remove('work__tabs-item-btn--active')
    });
    target.classList.add('work__tabs-item-btn--active');

    setTimeout(function() {
      portfolioItem.forEach(el => {
          el.classList.remove('work-slick-item--visible');
      });

      document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
        el.closest('.work-slick-item').classList.add('work-slick-item--visible');
      });

      isLoadMoreNeeded(document.querySelectorAll(`[data-target="${path}"]`));
      hideMoreItems(document.querySelectorAll('.work-slick-item--visible'));

      if (path == 'all') {
        portfolioItem.forEach(el => {
            el.classList.add('work-slick-item--visible');
        });
        isLoadMoreNeeded(document.querySelectorAll('.work-slick-item--visible'));
        hideMoreItems(document.querySelectorAll('.work-slick-item--visible'));
      }
    }, 300)

    setTimeout(function() {
      portfolioItem.forEach(el => {
          el.classList.remove('work-slick-item--visible-animation');
      });
    }, 600)
  }
});

hideMoreItems(portfolioItem);
isLoadMoreNeeded(portfolioItemVisible);

loadMore.addEventListener('click', (e) => {
  loadMore.classList.add('load__btn--active');
  setTimeout(function() {
    const visibleItems = document.querySelectorAll('.work-slick-item--visible');

    const path = document.querySelector('.work__tabs-item-btn--active').dataset.path;

    if (path == 'all') {
      portfolioItem.forEach(el => {
        if (el.classList.contains('work-slick-item--visible')) {

        } else {
          el.classList.add('work-slick-item--visible');
          el.classList.add('work-slick-item--visible-animation');
          loadMore.style.display = 'none';
        }
      });
      setTimeout(function() {
        portfolioItem.forEach(el => {
            el.classList.remove('work-slick-item--visible-animation');
        });
      }, 300)
    } else {

      portfolioItem.forEach(el => {
        if (el.classList.contains('work-slick-item--visible')) {

        } else {
          document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
            el.closest('.work-slick-item').classList.add('work-slick-item--visible');
          });
          el.classList.add('work-slick-item--visible-animation');
          loadMore.style.display = 'none';
        }
      });
      setTimeout(function() {
        portfolioItem.forEach(el => {
            el.classList.remove('work-slick-item--visible-animation');
        });
      }, 300)
    }
  }, 300);
});
 */
