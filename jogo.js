 class JogodaMemoria{
    constructor(){
        this.card = document.querySelector('.card_container')
        this.descr = []
        
        this.init()
    }

    creatCards(){
        const cards = [
            "facebook",
            "instagram",
            "linkedin",
            "twitter",
            "youtube"
        ]

        let cardHtmlContainer = ""
    for(let i = 1; i <=2;i++){

        cards.sort()

        for(let card = 0; card<cards.length;card++){
            cardHtmlContainer+=`
                <div class="card" >
                    <div class="card_front" class="card" id="${cards[card]}">
                        <img class="icons" src="./imgs/${cards[card]}.png" alt="${cards[card]}">
                    </div>
                    <div class="card_back">
                        <img src="./imgs/social.jpg" >
                    </div>
                </div>
            `
        }

    }

    

    this.card.innerHTML = cardHtmlContainer
    }
    bindEvents(){
        this.mostrar = this.mostrar.bind(this)
    }
    esconderNovamente(elements){
        for(let element of elements){
            element.cardTag.style.display = "block"
            console.log(element.cardTag)
        }
    }
    validade(){
        if(this.descr[0].id != this.descr[1].id){
            this.esconderNovamente(this.descr)
        }
    }
    
    addArray(element){

        
       
        this.descr.push(element)

        if(this.descr.length == 2){
           setTimeout(() => {
            this.validade()
            this.descr = []
           }, 1000);
        }
        
        
      

        
    }
    
    mostrar(event){

        let element = event.target.parentElement.previousElementSibling

        let elementSocial = event.target.parentElement

        elementSocial.classList.toggle("animation")
        

        setTimeout(()=>{
            elementSocial.style.display = "none"
            
        },700)

        const id = event.target.parentElement.previousElementSibling.getAttribute('id')

        const cardTag = elementSocial

        const detalhes = {
            id,
            cardTag
            
        }
        this.addArray(detalhes)
    }
    abrirCarta(){
        this.cards = document.querySelectorAll('.card_back')

       for(let card of this.cards){
           card.addEventListener("click",this.mostrar)
       } 

       
        
    }
    init(){
        this.bindEvents()
        this.creatCards()
        this.abrirCarta()
    }
}

