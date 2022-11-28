class Util {

    static formatValueToBrazilCoin(val){
            return  val.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }


    static displayBanner(){
        document.querySelector('.banner').style.visibility='hidden'
        document.querySelector('.layout').removeChild(document.querySelector('.bannerPrice'))
        document.querySelector(".content").style.filter="blur(0px)"

    }

    static updateLocalStorage(property,value){
        
    }
}