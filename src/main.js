    import iziToast from 'izitoast';
    import 'izitoast/dist/css/iziToast.min.css';
    import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
    } from './js/render-functions';
    import { getImagesByQuery } from './js/pixabay-api';
    import { PER_PAGE } from './js/pixabay-api';

    const form = document.querySelector('form');
    const userInput = document.querySelector('input');
    const loadMoreButton = document.querySelector('.load-more-button');



    // Оголошуємо змінні явно
    let page = 1;
    let currentQuery = '';
    let totalHits = 0;          // ← виправлено: явне оголошення



    form.addEventListener('submit', handleFormSubmit);
    loadMoreButton.addEventListener('click', handleLoadMore);

    async function handleFormSubmit(event) {
    event.preventDefault();
    const newQuery = userInput.value.trim();

    if (!newQuery) {
        iziToast.info({ message: 'Введіть запит для пошуку зображень' });
        return;
    }

    if (newQuery === currentQuery) {
        iziToast.info({ message: 'Такий самий запит уже виконано', timeout: 2200 });
        return;
    }

    currentQuery = newQuery;
    page = 1;
    totalHits = 0;

    clearGallery();
    hideLoadMoreButton();
    await renderGallery();
    }

    async function handleLoadMore() {
    page += 1;
    hideLoadMoreButton();
    await renderGallery();
    }

    async function renderGallery() {
    showLoader();

    try {
        const response = await getImagesByQuery(currentQuery, page);
        const { hits, totalHits: newTotal } = response;

        // Зберігаємо загальну кількість тільки при першому запиті
        if (page === 1) {
        totalHits = newTotal;
        }

        if (hits.length === 0) {
        if (page === 1) {
            iziToast.warning({
            message: 'За вашим запитом нічого не знайдено. Спробуйте інший запит.',
            });
        }
        hideLoadMoreButton();
        return;
        }

        createGallery(hits);

        if (page > 1) {
        smoothScroll();
        }


        
        // Логіка показу/ховання кнопки "Завантажити ще"
        const alreadyLoaded = PER_PAGE * page;

        if (alreadyLoaded >= totalHits) {
        hideLoadMoreButton();
        if (totalHits > 0) {
            iziToast.info({
            message: 'Ви переглянули всі доступні зображення',
            timeout: 4000,
            });
        }
        } else {
        showLoadMoreButton();
        }

    } catch (error) {
        console.error('Помилка завантаження зображень:', error);

        iziToast.error({
        title: 'Помилка',
        message: 'Не вдалося завантажити зображення. Перевірте підключення або спробуйте пізніше.',
        timeout: 5000,
        position: 'topRight',
        });

        hideLoadMoreButton();
    } finally {
        hideLoader();
    }
    }

    function smoothScroll() {
    const galleryItem = document.querySelector('.gallery-item');
    if (!galleryItem) return;

    const { height: cardHeight } = galleryItem.getBoundingClientRect();

    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
    }