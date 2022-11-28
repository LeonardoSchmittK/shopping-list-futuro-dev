class Util {

    static formatValueToBrazilCoin(val){
            return  val.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }


    static displayBanner(){
        document.querySelector(".banner i").style.animation=""
        document.querySelector('.banner').style.visibility ='hidden'
       

    }

    static displayBannerPrice(){
        document.querySelector('.layout').removeChild(document.querySelector('.bannerPrice'))
        document.querySelector(".content").style.filter="blur(0px)"
    }

        
}