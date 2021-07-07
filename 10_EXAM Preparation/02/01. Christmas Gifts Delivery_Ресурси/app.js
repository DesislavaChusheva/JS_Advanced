function solution() {
    let sectionsElements = document.querySelectorAll('.container section');

    let addGiftsElement = sectionsElements[0];

    let addGiftsButton = addGiftsElement.querySelector('button');
    addGiftsButton.addEventListener('click', AddGiftToList);

    function AddGiftToList() {

        let giftName = addGiftsElement.querySelector('input').value;
        addGiftsElement.querySelector('input').value = '';

        let gift = document.createElement('li');
        gift.classList.add("gift");
        gift.textContent = giftName;

        let sendButton = document.createElement('button');
        sendButton.id = "sendButton";
        sendButton.textContent = "Send";
        sendButton.addEventListener('click', SendGift);

        let discardButton = document.createElement('button');
        discardButton.id = "discardButton";
        discardButton.textContent = "Discard";
        discardButton.addEventListener('click', DiscardGift);

        gift.appendChild(sendButton);
        gift.appendChild(discardButton);

        let listOfGiftsElement = sectionsElements[1].querySelector('ul');
        let listOfGiftsArray = Array.from(listOfGiftsElement.querySelectorAll('li'));
        

        listOfGiftsArray.push(gift);
        listOfGiftsArray.sort((a,b) => a.textContent.localeCompare(b.textContent))
                        .forEach(li => listOfGiftsElement.appendChild(li));


    }
    function SendGift(e) {
        let sentGiftsElement = sectionsElements[2].querySelector('ul');

        let gift = e.target.parentElement;
        let giftSendButtonElement = gift.querySelector('button');
        giftSendButtonElement.remove();
        let giftDiscardButtonElement = gift.querySelector('button');
        giftDiscardButtonElement.remove();

        let giftName = gift.textContent;
        let giftNameElement = document.createElement('li');
        giftNameElement.textContent = giftName;

        gift.remove();

        sentGiftsElement.appendChild(giftNameElement);

    }
    function DiscardGift(e) {
        let discardedGiftsElement = sectionsElements[3].querySelector('ul');

        let gift = e.target.parentElement;
        let giftSendButtonElement = gift.querySelector('button');
        giftSendButtonElement.remove();
        let giftDiscardButtonElement = gift.querySelector('button');
        giftDiscardButtonElement.remove();

        let giftName = gift.textContent;
        let giftNameElement = document.createElement('li');
        giftNameElement.textContent = giftName;

        gift.remove();

        discardedGiftsElement.appendChild(giftNameElement);
    }
}