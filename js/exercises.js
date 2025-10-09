document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const searchInput = document.getElementById('searchExercises');
    const gradeFilter = document.getElementById('gradeFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const topicFilter = document.getElementById('topicFilter');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const exerciseCards = document.querySelectorAll('.exercise-card');
    const pageLinks = document.querySelectorAll('.page-numbers a');
    const prevPage = document.querySelector('.page-nav:first-child');
    const nextPage = document.querySelector('.page-nav:last-child');

    // Current filter state
    let currentFilters = {
        search: '',
        grade: '',
        difficulty: '',
        topic: '',
        category: 'all',
        currentPage: 1,
        itemsPerPage: 6
    };

    // Initialize the exercises
    function initExercises() {
        filterExercises();
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Search input
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value.toLowerCase();
            currentFilters.currentPage = 1;
            filterExercises();
            updatePagination();
        });

        // Filter dropdowns
        [gradeFilter, difficultyFilter, topicFilter].forEach(select => {
            select.addEventListener('change', (e) => {
                const filterType = e.target.id.replace('Filter', '');
                currentFilters[filterType] = e.target.value;
                currentFilters.currentPage = 1;
                filterExercises();
                updatePagination();
            });
        });

        // Category buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                currentFilters.category = category;
                currentFilters.currentPage = 1;
                
                // Update active state
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                
                filterExercises();
                updatePagination();
            });
        });

        // Pagination
        pageLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                if (link.classList.contains('active')) return;
                
                currentFilters.currentPage = parseInt(link.textContent);
                updateActivePage();
                filterExercises();
            });
        });

        // Previous/Next buttons
        prevPage.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentFilters.currentPage > 1) {
                currentFilters.currentPage--;
                updateActivePage();
                filterExercises();
            }
        });

        nextPage.addEventListener('click', (e) => {
            e.preventDefault();
            const totalPages = Math.ceil(getFilteredExercises().length / currentFilters.itemsPerPage);
            if (currentFilters.currentPage < totalPages) {
                currentFilters.currentPage++;
                updateActivePage();
                filterExercises();
            }
        });

        // Solve buttons
        document.querySelectorAll('.btn-solve').forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.exercise-card');
                const title = card.querySelector('h3').textContent;
                alert(`Opening exercise: ${title}\nThis would typically open a detailed view or modal with the exercise.`);
            });
        });
    }

    // Filter exercises based on current filters
    function filterExercises() {
        const filteredExercises = getFilteredExercises();
        const startIdx = (currentFilters.currentPage - 1) * currentFilters.itemsPerPage;
        const endIdx = startIdx + currentFilters.itemsPerPage;
        const paginatedExercises = filteredExercises.slice(startIdx, endIdx);
        
        // Hide all exercises first
        exerciseCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Show only filtered and paginated exercises
        paginatedExercises.forEach(exercise => {
            exercise.style.display = 'flex';
        });
        
        // Show/hide no results message
        const noResults = document.querySelector('.no-results');
        if (filteredExercises.length === 0) {
            if (!noResults) {
                const noResultsDiv = document.createElement('div');
                noResultsDiv.className = 'no-results';
                noResultsDiv.innerHTML = `
                    <div class="no-results-content">
                        <i class="fas fa-search"></i>
                        <h3>រកមិនឃើញលំហាត់</h3>
                        <p>សូមព្យាយាមការស្វែងរកផ្សេង ឬផ្លាស់ប្តូរតម្រង</p>
                    </div>
                `;
                document.querySelector('.exercises-grid').appendChild(noResultsDiv);
            }
        } else if (noResults) {
            noResults.remove();
        }
    }

    // Get filtered exercises based on current filters
    function getFilteredExercises() {
        return Array.from(exerciseCards).filter(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.exercise-content').textContent.toLowerCase();
            const grade = card.dataset.category;
            const difficulty = card.dataset.difficulty;
            const topic = card.dataset.topic;
            
            // Apply filters
            const matchesSearch = currentFilters.search === '' || 
                                 title.includes(currentFilters.search) || 
                                 description.includes(currentFilters.search);
            
            const matchesGrade = !currentFilters.grade || grade === currentFilters.grade;
            const matchesDifficulty = !currentFilters.difficulty || difficulty === currentFilters.difficulty;
            const matchesTopic = !currentFilters.topic || topic === currentFilters.topic;
            
            // Apply category filter (simplified for demo)
            let matchesCategory = true;
            if (currentFilters.category === 'new') {
                // In a real app, you would check a date attribute
                matchesCategory = Math.random() > 0.5; // Random for demo
            } else if (currentFilters.category === 'popular') {
                const attempts = parseInt(card.querySelector('.attempts').textContent.replace(/\D/g, ''));
                matchesCategory = attempts > 1000;
            } else if (currentFilters.category === 'exam') {
                matchesCategory = difficulty === 'hard';
            }
            
            return matchesSearch && matchesGrade && matchesDifficulty && matchesTopic && matchesCategory;
        });
    }

    // Update pagination UI
    function updatePagination() {
        const totalExercises = getFilteredExercises().length;
        const totalPages = Math.ceil(totalExercises / currentFilters.itemsPerPage);
        
        // Hide pagination if no exercises
        document.querySelector('.pagination').style.display = totalExercises > 0 ? 'flex' : 'none';
        
        // Update page numbers
        const pageNumbers = document.querySelector('.page-numbers');
        pageNumbers.innerHTML = '';
        
        // Always show first page
        addPageNumber(1);
        
        // Show ellipsis if needed
        if (currentFilters.currentPage > 3) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            pageNumbers.appendChild(ellipsis);
        }
        
        // Show current page and adjacent pages
        const startPage = Math.max(2, currentFilters.currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentFilters.currentPage + 1);
        
        for (let i = startPage; i <= endPage; i++) {
            addPageNumber(i);
        }
        
        // Show last page if not already shown
        if (totalPages > 1 && endPage < totalPages - 1) {
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                pageNumbers.appendChild(ellipsis);
            }
            addPageNumber(totalPages);
        } else if (totalPages > 1 && !pageNumbers.textContent.includes(totalPages)) {
            addPageNumber(totalPages);
        }
        
        // Update active state
        updateActivePage();
        
        // Update prev/next buttons
        prevPage.classList.toggle('disabled', currentFilters.currentPage === 1);
        nextPage.classList.toggle('disabled', currentFilters.currentPage >= totalPages);
    }
    
    // Helper to add a page number button
    function addPageNumber(pageNumber) {
        const pageNumbers = document.querySelector('.page-numbers');
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = pageNumber;
        if (pageNumber === currentFilters.currentPage) {
            pageLink.classList.add('active');
        }
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (!e.target.classList.contains('active')) {
                currentFilters.currentPage = pageNumber;
                updateActivePage();
                filterExercises();
            }
        });
        pageNumbers.appendChild(pageLink);
    }
    
    // Update active page in pagination
    function updateActivePage() {
        document.querySelectorAll('.page-numbers a').forEach(link => {
            link.classList.toggle('active', parseInt(link.textContent) === currentFilters.currentPage);
        });
        
        // Scroll to top of exercises
        document.querySelector('.exercises-section').scrollIntoView({ behavior: 'smooth' });
    }

    // Initialize the exercises page
    initExercises();
});
