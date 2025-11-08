class CardManager{
    flippedCards = new Set();
    urlFactory;

    constructor(factory){
        this.urlFactory = factory;
    }

    gen(heroNumber){
        let template = document.getElementById("cardTemplate");
        let clone = template.content.cloneNode(true);

        clone.children[0].addEvenetListener('click',
            Event => this.onclick(Event)
        )

        return clone;
    }

    onclick(Event){
        this.flippedCards(Event.target);
    }

    flip(cardNode){
        cardNode.children[0].classList.add('selected');
        this.flippedCards.add(carNode);
    }

    unflip(cardNode){
        cardNode.children[0].classList.remove('selected')
    }
    disable(cardNode){
        cardNode.children[0].classList.add('matched');
        this.unflip(carNode);
    }

}