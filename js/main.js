document.addEventListener('DOMContentLoaded', () => {
  // dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();

  const modal = document.getElementById('modal');
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const ctaSignup = document.getElementById('ctaSignup');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const switchAuth = document.getElementById('switchAuth');
  const authForm = document.getElementById('authForm');

  function openModal(mode = 'login'){
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden','false');
    modalTitle.textContent = mode === 'login' ? 'Logowanie' : 'Rejestracja';
    switchAuth.textContent = mode === 'login' ? 'Przejdź do rejestracji' : 'Masz już konto? Zaloguj';
  }

  function closeModal(){
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden','true');
  }

  loginBtn.addEventListener('click', () => openModal('login'));
  signupBtn.addEventListener('click', () => openModal('signup'));
  ctaSignup.addEventListener('click', () => openModal('signup'));
  modalClose.addEventListener('click', closeModal);

  switchAuth.addEventListener('click', () => {
    const isLogin = modalTitle.textContent.includes('Logowanie');
    openModal(isLogin ? 'signup' : 'login');
  });

  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // placeholder: tutaj wywołaj API logowania/rejestracji
    const email = document.getElementById('email').value;
    alert(`Symulacja: wysyłanie danych dla ${email}`);
    closeModal();
  });

  // prosty accessibility escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
