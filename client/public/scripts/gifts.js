        const renderGifts = async () => {
            const response = await fetch('/gifts');
            const data = await response.json();

            const mainContent = document.getElementById('main-content');

            if (data && data.length > 0) {
                data.map(gift => {
                    const cardLink = document.createElement('a'); 
                    cardLink.href = `/gifts/${gift.id}`;
                    cardLink.target = "_blank"; 

                    const card = document.createElement('div');
                    card.classList.add('card');

                    const topContainer = document.createElement('div');
                    topContainer.classList.add('top-container');
                    topContainer.style.backgroundImage = `url(${gift.image})`;

                    const bottomContainer = document.createElement('div');
                    bottomContainer.classList.add('bottom-container');

                    const name = document.createElement('h3');
                    name.textContent = gift.name;
                    bottomContainer.appendChild(name);

                    const pricePoint = document.createElement('p');
                    pricePoint.textContent = 'Price: ' + gift.pricePoint;
                    bottomContainer.appendChild(pricePoint);

                    const audience = document.createElement('p');
                    audience.textContent = 'Great For: ' + gift.audience;
                    bottomContainer.appendChild(audience);

                    const link = document.createElement('span');
                    link.textContent = 'Read More >';
                    link.setAttribute('role', 'button');
                    bottomContainer.appendChild(link);

                    card.appendChild(topContainer);
                    card.appendChild(bottomContainer);

                    cardLink.appendChild(card);
                    mainContent.appendChild(cardLink);
                });
            } else {
                const message = document.createElement('h2');
                message.textContent = 'No Gifts Available 😞';
                mainContent.appendChild(message);
            }
        };

        const requestedUrl = window.location.href.split('/').pop();

        if (requestedUrl && requestedUrl !== 'gift.html') {
            window.location.href = '../404.html';
        } else {
            renderGifts();
        }