document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileNavClose');
  const galleryLightbox = document.getElementById('galleryLightbox');
  const galleryLightboxImage = document.getElementById('galleryLightboxImage');
  const galleryLightboxCaption = document.getElementById('galleryLightboxCaption');

  function openNav() {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      if (mobileNav.classList.contains('open')) closeNav();
      else openNav();
    });
  }

  if (mobileClose) mobileClose.addEventListener('click', closeNav);

  // Close when a link is clicked
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  // Close when clicking outside
  mobileNav.addEventListener('click', function (e) {
    if (e.target === mobileNav) closeNav();
  });

  function openGallery(src, alt) {
    if (!galleryLightbox || !galleryLightboxImage || !galleryLightboxCaption) return;
    galleryLightboxImage.src = src;
    galleryLightboxImage.alt = alt || '';
    galleryLightboxCaption.textContent = alt || '';
    galleryLightbox.classList.add('open');
    galleryLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    if (!galleryLightbox) return;
    galleryLightbox.classList.remove('open');
    galleryLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (galleryLightbox) {
    document.querySelectorAll('[data-gallery-trigger]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        openGallery(trigger.dataset.gallerySrc, trigger.dataset.galleryAlt);
      });
    });

    galleryLightbox.addEventListener('click', function (event) {
      if (event.target === galleryLightbox || event.target.closest('[data-gallery-close]')) {
        closeGallery();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeGallery();
        closeNav();
      }
    });
  }
});
