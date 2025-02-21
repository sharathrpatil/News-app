// Auto-refresh the page every 30 minutes
setTimeout(() => {
    window.location.reload();
}, 30 * 60 * 1000);

// Add smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn')) {
                const link = card.querySelector('.btn');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
    });
});
