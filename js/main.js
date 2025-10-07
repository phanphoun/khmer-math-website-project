/* -------------------------------------------------------------
   Function that shows (or toggles) the paragraph text.
   ------------------------------------------------------------- */
   function showPlusText() {
    const txt = document.getElementById('video-card-plus-text');
    // Simple “show” – uncomment the line below if you want a toggle instead:
    // txt.style.display = (txt.style.display === 'none' || txt.style.display === '') ? 'inline' : 'none';
    txt.style.display = 'inline';               // always show when the arrow is clicked
}

/* -------------------------------------------------------------
   OPTION 1 – Inline handler (keeps the HTML self‑contained)
   ------------------------------------------------------------- */
document.getElementById('arrow-icon')
        .setAttribute('onclick','showPlusText()');

/* -------------------------------------------------------------
   OPTION 2 – Pure‑JS event listener (recommended for larger apps)
   ------------------------------------------------------------- 
   // Uncomment the line below and comment‑out the inline handler
   // document.getElementById('arrow-icon').addEventListener('click', showPlusText);
   ------------------------------------------------------------- */

/* -------------------------------------------------------------
   OPTIONAL – make the whole div act like a button for better UX
   ------------------------------------------------------------- */
const card = document.getElementById('video-card-plus');
card.addEventListener('click', showPlusText);    // click anywhere on the card
card.setAttribute('role','button');
card.setAttribute('tabindex','0');
card.addEventListener('keypress', e => {
    if (e.key === 'Enter' || e.key === ' ') {   // Enter or Space = activate
        e.preventDefault();
        showPlusText();
    }
});