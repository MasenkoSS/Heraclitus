(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }

    window.addEventListener('keydown', closeModalEsc);

    function closeModalEsc(e) {
      e.preventDefault();
      if (e.code === 'Escape') {
        modalContent.close();
  
        window.removeEventListener('keydown', closeModalEsc);
      }
    }



  })();