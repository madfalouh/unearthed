const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());
    const response = await fetch('/gifts');
    const data = await response.json();

    const giftContent = document.getElementById('gift-content');
    let gift = data.find(g => g.id === requestedID);
     if (gift) {
console.log(gift);

        document.getElementById('image').src = gift.image;
        document.getElementById('name').textContent = gift.name;
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedby;
        document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricepoint;
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience;
        document.getElementById('description').textContent = gift.description;
        document.title = `UnEarthed - ${gift.name}`;
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No Gifts Available 😞';
        giftContent.appendChild(message);
    }
};

renderGift();
