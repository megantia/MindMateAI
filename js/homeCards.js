const cards = document.querySelectorAll('.homeCard');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        // Close all other cards
        cards.forEach(c => {
          if (c !== card) {
            c.classList.remove('active');
            c.querySelector('.homeContent').style.maxHeight = null;
          }
        });

        // Toggle current card
        const content = card.querySelector('.homeContent');
        if (card.classList.contains('active')) {
          card.classList.remove('active');
          content.style.maxHeight = null;
        } else {
          card.classList.add('active');
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });