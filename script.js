// Hide photo-initials if real photo loads successfully
const img = document.querySelector('.profile-photo img');
const initials = document.querySelector('.photo-initials');

if (img && initials) {
  img.addEventListener('load', () => {
    initials.style.display = 'none';
  });
  img.addEventListener('error', () => {
    initials.style.display = 'flex';
  });
}
