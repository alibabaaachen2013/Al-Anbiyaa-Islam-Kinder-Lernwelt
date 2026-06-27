// ========================================
// Kinder Lernbücher - App Logic (Multilingual)
// ========================================

// UI translations
const uiTranslations = {
    de: { appTitle: "Al-Anbiyaa Islam Lernwelt", subtitle: "Islamische Lernbücher und Quiz für Kinder", pages: "Seiten", page: "Seite", of: "von", prev: "◀ Vorherige", next: "Nächste ▶", back: "← Zurück", quizStart: "🧠 Quiz starten", quizNext: "Nächste Frage ▶", quizRetry: "🔄 Nochmal versuchen", quizHome: "🏠 Zurück zur Übersicht", quizQuestion: "Frage", quizExcellent: "Ausgezeichnet!", quizExcellentText: "Mashallah, du hast super aufgepasst!", quizGood: "Gut gemacht!", quizGoodText: "Du hast vieles richtig, lies nochmal um alles zu lernen!", quizPractice: "Weiter üben!", quizPracticeText: "Lies das Buch nochmal und versuch es dann erneut!", quizCorrect: "✅ Mashallah! Richtig!", quizWrong: "❌ Leider falsch. Die richtige Antwort ist:", quizScore: "von", quizRight: "richtig" }
};

class LearningBooksApp {
    constructor() {
        this.currentBook = null;
        this.currentPage = 0;
        this.quizState = null;
        this.currentLang = 'de';
        this.init();
    }

    init() {
        this.cacheElements();
        this.applyLanguage();
        this.renderBooks();
        this.bindEvents();
    }

    cacheElements() {
        // Views
        this.dashboardView = document.getElementById('dashboard');
        this.readerView = document.getElementById('reader');
        this.quizView = document.getElementById('quiz');
        
        // Dashboard elements
        this.booksGrid = document.getElementById('books-grid');
        
        // Reader elements
        this.bookTitle = document.getElementById('book-title');
        this.pageIndicator = document.getElementById('page-indicator');
        this.pageContent = document.getElementById('page-content');
        this.pageDots = document.getElementById('page-dots');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.backBtn = document.getElementById('back-btn');

        // Quiz elements
        this.quizTitle = document.getElementById('quiz-title');
        this.quizProgress = document.getElementById('quiz-progress');
        this.quizContainer = document.getElementById('quiz-container');
        this.quizQuestion = document.getElementById('quiz-question');
        this.quizOptions = document.getElementById('quiz-options');
        this.quizFeedback = document.getElementById('quiz-feedback');
        this.quizNextBtn = document.getElementById('quiz-next-btn');
        this.quizResult = document.getElementById('quiz-result');
        this.quizResultIcon = document.getElementById('quiz-result-icon');
        this.quizResultTitle = document.getElementById('quiz-result-title');
        this.quizResultText = document.getElementById('quiz-result-text');
        this.quizResultScore = document.getElementById('quiz-result-score');
        this.quizRetryBtn = document.getElementById('quiz-retry-btn');
        this.quizHomeBtn = document.getElementById('quiz-home-btn');
        this.quizBackBtn = document.getElementById('quiz-back-btn');
    }

    bindEvents() {
        // Language switcher
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.setLanguage(btn.dataset.lang);
            });
        });

        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.changePage(-1));
        this.nextBtn.addEventListener('click', () => this.handleNextClick());
        this.backBtn.addEventListener('click', () => this.showDashboard());

        // Quiz buttons
        this.quizNextBtn.addEventListener('click', () => this.nextQuizQuestion());
        this.quizRetryBtn.addEventListener('click', () => this.startQuiz());
        this.quizHomeBtn.addEventListener('click', () => this.showDashboard());
        this.quizBackBtn.addEventListener('click', () => this.showDashboard());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.currentBook && !this.quizState) {
                if (e.key === 'ArrowLeft') this.changePage(-1);
                if (e.key === 'ArrowRight') this.handleNextClick();
                if (e.key === 'Escape') this.showDashboard();
            }
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        this.readerView.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.readerView.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next page
                this.changePage(1);
            } else {
                // Swipe right - previous page
                this.changePage(-1);
            }
        }
    }

    // ========================================
    // Language Support
    // ========================================

    getText(field) {
        if (typeof field === 'object' && field !== null) {
            return field[this.currentLang] || field['de'] || '';
        }
        return field || '';
    }

    setLanguage(lang) {
        this.currentLang = lang === 'de' ? 'de' : 'de';
        localStorage.setItem('appLang', 'de');
        this.applyLanguage();
        this.renderBooks();
        if (this.currentBook) {
            this.bookTitle.textContent = this.getText(this.currentBook.title);
            this.renderPage();
        }
    }

    applyLanguage() {
        const t = uiTranslations[this.currentLang];
        // Set direction
        document.documentElement.lang = 'de';
        document.documentElement.dir = 'ltr';

        // Update UI strings
        const appTitleEl = document.querySelector('[data-i18n="appTitle"]');
        const subtitleEl = document.querySelector('[data-i18n="subtitle"]');
        if (appTitleEl) appTitleEl.textContent = t.appTitle;
        if (subtitleEl) subtitleEl.textContent = t.subtitle;

        // Update buttons
        this.prevBtn.textContent = t.prev;
        this.nextBtn.textContent = t.next;
        this.backBtn.textContent = t.back;
        this.quizBackBtn.textContent = t.back;
        this.quizNextBtn.textContent = t.quizNext;
        this.quizRetryBtn.textContent = t.quizRetry;
        this.quizHomeBtn.textContent = t.quizHome;

        // Highlight active lang button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    }

    renderBooks() {
        this.booksGrid.innerHTML = '';
        const t = uiTranslations[this.currentLang];
        const orderedBooks = [...booksData];

        const moveBookAfter = (bookId, afterBookId) => {
            const sourceIndex = orderedBooks.findIndex((book) => book.id === bookId);
            const targetIndex = orderedBooks.findIndex((book) => book.id === afterBookId);

            if (sourceIndex === -1 || targetIndex === -1 || sourceIndex === targetIndex + 1) {
                return;
            }

            const [bookToMove] = orderedBooks.splice(sourceIndex, 1);
            const updatedTargetIndex = orderedBooks.findIndex((book) => book.id === afterBookId);
            orderedBooks.splice(updatedTargetIndex + 1, 0, bookToMove);
        };

        moveBookAfter(15, 1);
        moveBookAfter(13, 12);

        orderedBooks.forEach((book, index) => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.style.setProperty('--book-color', book.color);
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <div class="book-icon">${book.icon}</div>
                <h3>${this.getText(book.title)}</h3>
                <p>${this.getText(book.description)}</p>
                <div class="book-pages">${book.pages.length} ${t.pages}</div>
            `;

            card.addEventListener('click', () => this.openBook(book));
            this.booksGrid.appendChild(card);
        });
    }

    openBook(book) {
        this.currentBook = book;
        this.currentPage = 0;

        // Update header
        this.bookTitle.textContent = this.getText(book.title);

        // Render page dots
        this.renderPageDots();

        // Show first page
        this.renderPage();

        // Switch views
        this.dashboardView.classList.remove('active');
        this.readerView.classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
    }

    renderPageDots() {
        this.pageDots.innerHTML = '';

        this.currentBook.pages.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'page-dot';
            if (index === this.currentPage) dot.classList.add('active');

            dot.addEventListener('click', () => {
                this.currentPage = index;
                this.renderPage();
                this.updatePageDots();
            });

            this.pageDots.appendChild(dot);
        });
    }

    updatePageDots() {
        const dots = this.pageDots.querySelectorAll('.page-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentPage);
        });
    }

    renderPage() {
        const page = this.currentBook.pages[this.currentPage];
        const t = uiTranslations[this.currentLang];

        // Animate out
        this.pageContent.style.opacity = '0';
        this.pageContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
            this.pageContent.innerHTML = `
                <div class="page-icon">${page.icon}</div>
                <h3>${this.getText(page.title)}</h3>
                <p>${this.getText(page.content).replace(/\n/g, '<br>')}</p>
            `;

            // Animate in
            this.pageContent.style.opacity = '1';
            this.pageContent.style.transform = 'translateY(0)';
        }, 200);

        // Update page indicator
        this.pageIndicator.textContent = `${t.page} ${this.currentPage + 1} ${t.of} ${this.currentBook.pages.length}`;

        // Update navigation buttons
        this.prevBtn.disabled = this.currentPage === 0;
        const isLastPage = this.currentPage === this.currentBook.pages.length - 1;
        this.nextBtn.disabled = false;
        if (isLastPage && quizData[this.currentBook.id]) {
            this.nextBtn.textContent = t.quizStart;
        } else if (isLastPage) {
            this.nextBtn.disabled = true;
            this.nextBtn.textContent = t.next;
        } else {
            this.nextBtn.textContent = t.next;
        }

        // Update dots
        this.updatePageDots();
    }

    changePage(direction) {
        const newPage = this.currentPage + direction;

        if (newPage >= 0 && newPage < this.currentBook.pages.length) {
            this.currentPage = newPage;
            this.renderPage();
        }
    }

    handleNextClick() {
        const isLastPage = this.currentPage === this.currentBook.pages.length - 1;
        if (isLastPage && quizData[this.currentBook.id]) {
            this.startQuiz();
        } else {
            this.changePage(1);
        }
    }

    // ========================================
    // Quiz Logic
    // ========================================

    startQuiz() {
        const t = uiTranslations[this.currentLang];
        this.quizState = {
            questions: [...quizData[this.currentBook.id]],
            currentIndex: 0,
            score: 0,
            answered: false
        };

        this.quizTitle.textContent = `Quiz: ${this.getText(this.currentBook.title)}`;
        this.quizContainer.style.display = 'block';
        this.quizResult.style.display = 'none';

        this.readerView.classList.remove('active');
        this.quizView.classList.add('active');

        this.renderQuizQuestion();
        window.scrollTo(0, 0);
    }

    renderQuizQuestion() {
        const { questions, currentIndex } = this.quizState;
        const q = questions[currentIndex];
        const t = uiTranslations[this.currentLang];

        this.quizProgress.textContent = `${t.quizQuestion} ${currentIndex + 1} ${t.of} ${questions.length}`;
        this.quizQuestion.innerHTML = `<div class="quiz-question-icon">❓</div><h3>${this.getText(q.question)}</h3>`;
        this.quizFeedback.innerHTML = '';
        this.quizFeedback.className = 'quiz-feedback';
        this.quizNextBtn.style.display = 'none';
        this.quizState.answered = false;

        const options = this.getText(q.options);
        this.quizOptions.innerHTML = '';
        options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => this.selectAnswer(index));
            this.quizOptions.appendChild(btn);
        });
    }

    selectAnswer(selectedIndex) {
        if (this.quizState.answered) return;
        this.quizState.answered = true;

        const { questions, currentIndex } = this.quizState;
        const q = questions[currentIndex];
        const isCorrect = selectedIndex === q.correct;

        if (isCorrect) {
            this.quizState.score++;
        }

        // Highlight answers
        const buttons = this.quizOptions.querySelectorAll('.quiz-option-btn');
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === q.correct) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        // Show feedback
        if (isCorrect) {
            this.quizFeedback.innerHTML = uiTranslations[this.currentLang].quizCorrect;
            this.quizFeedback.classList.add('correct');
        } else {
            this.quizFeedback.innerHTML = `${uiTranslations[this.currentLang].quizWrong} <strong>${this.getText(q.options)[q.correct]}</strong>`;
            this.quizFeedback.classList.add('wrong');
        }

        // Show next button or result
        if (currentIndex < questions.length - 1) {
            this.quizNextBtn.style.display = 'inline-block';
        } else {
            setTimeout(() => this.showQuizResult(), 1500);
        }
    }

    nextQuizQuestion() {
        this.quizState.currentIndex++;
        this.renderQuizQuestion();
    }

    showQuizResult() {
        const { score, questions } = this.quizState;
        const total = questions.length;
        const percentage = Math.round((score / total) * 100);
        const t = uiTranslations[this.currentLang];

        this.quizContainer.style.display = 'none';
        this.quizResult.style.display = 'block';

        if (percentage >= 80) {
            this.quizResultIcon.textContent = '🏆';
            this.quizResultTitle.textContent = t.quizExcellent;
            this.quizResultText.textContent = t.quizExcellentText;
        } else if (percentage >= 60) {
            this.quizResultIcon.textContent = '⭐';
            this.quizResultTitle.textContent = t.quizGood;
            this.quizResultText.textContent = t.quizGoodText;
        } else {
            this.quizResultIcon.textContent = '📖';
            this.quizResultTitle.textContent = t.quizPractice;
            this.quizResultText.textContent = t.quizPracticeText;
        }

        this.quizResultScore.textContent = `${score} ${t.quizScore} ${total} ${t.quizRight} (${percentage}%)`;
    }

    showDashboard() {
        this.currentBook = null;
        this.currentPage = 0;
        this.quizState = null;

        this.readerView.classList.remove('active');
        this.quizView.classList.remove('active');
        this.dashboardView.classList.add('active');

        window.scrollTo(0, 0);
    }
}

function openLegalSectionById(id) {
    const target = document.getElementById(id);
    if (!target || target.tagName.toLowerCase() !== 'details') return;

    document.querySelectorAll('.legal-details').forEach((section) => {
        section.open = section.id === id;
    });

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {
    const pageContent = document.getElementById('page-content');
    if (pageContent) {
        pageContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    document.querySelectorAll('.app-footer-link').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const id = link.getAttribute('href')?.replace('#', '');
            if (!id) return;

            openLegalSectionById(id);
            history.replaceState(null, '', `#${id}`);
        });
    });
});

// Initialize the app
const app = new LearningBooksApp();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
    });
}
