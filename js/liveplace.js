 document.querySelectorAll('.favorite-icon').forEach(icon => {
          icon.addEventListener('click', function () {
            this.classList.toggle('active');
            this.classList.toggle('bi-heart');
            this.classList.toggle('bi-heart-fill');
          });
        });



        