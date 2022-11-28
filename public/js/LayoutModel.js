class LayoutModel {
    list;
    listWrapperElement;
    counter = 0

    constructor(listWrapperElementClass,list){
        this.listWrapperElement = document.querySelector(`.${listWrapperElementClass}`)
        this.list=list
    }

    displayNewItem(item){
        this.displayItem(item)
        this.displayZeroItems()
        this.displayItemAddedSuccess()
        
            return
    }

    displayZeroItems(){
           

            if(!this.list.isEmpty()){
                if(document.querySelector(".zero-items-title")){
                    this.listWrapperElement.removeChild(document.querySelector(".zero-items-title"))
                    return
                }

                return

            }

        this.listWrapperElement.innerHTML=`<h3 class="zero-items-title">You don't have any item :(</h3>`
        
    }

    displayItemAddedSuccess(){
        document.querySelector(".banner").style.visibility="visible"

    }

    displayItem(item="item",isChecked=false,price=0){
        this.counter++
        this.list.addItem({item:item,checked:isChecked,price:price})
        this.displayZeroItems()
        this.addPrice(price,item)
        localStorage.setItem("items",JSON.stringify(this.list.getList()))
        const skeleton = `
            <div class="shopping-list-item ${item}" id="${item}">
                <input ${isChecked?"checked":""} onclick="App.displayPriceBox('${item}')" type="checkbox" name="" id="${item}">
                <h3>${item}</h3>
                    <div class="remove-box" onclick="App.removeItem(this)">
                        <i class="fa-solid fa-trash"></i>
                    </div>
            </div>
        `
            this.listWrapperElement.innerHTML+=skeleton
            return
    }

    removeItem(node){
        this.list.removeItem(node.parentNode.id)
        //  const stored = JSON.parse(localStorage.items) 
        //  stored.splice(node.parentNode.id,1)
        localStorage.items = JSON.stringify(this.list.getList())

        this.listWrapperElement.removeChild(node.parentNode)
        this.displayZeroItems()
    }

    setList(list){
        this.list = list
    }


    displayStoredItems(){
        const storedItems = JSON.parse(localStorage.items)
        console.log(storedItems);
        let totalPrice = 0
        for(let i in storedItems){
            // this.list.addItem(i)
            console.log(storedItems[i].item);
            this.displayItem(storedItems[i].item,storedItems[i].checked,storedItems[i].price)
        }
        document.querySelector(".shopping-result__amount").innerHTML=this.list.totalPrice

    }


    addPrice(price,itemId){
        
        console.log("HELLO ", price);
        // this.list.addPrice(price)
        this.list.addPrice(itemId,price)
        document.querySelector(".shopping-result__amount").innerHTML=this.list.totalPrice
        localStorage.setItem("items",JSON.stringify(this.list.getList()))

    }

    displayPriceBox(item){
        document.querySelector(".content").style.filter="blur(5px)"
        // document.querySelector(".content").style.filter="blur(10px)"
        document.querySelector(".layout").innerHTML+=`
        <div class="bannerPrice banner">
            <h1>Digite o preço da ${item}</h1>
            <input type="number" name="item-price" id="${item}">
            <button onclick="App.addPrice(document.querySelector('input[type=number]').value,document.querySelector('input[type=number]').id);Util.displayBanner();document.querySelector('input#${item}').checked=true;App.addMark('${item}')" class="button-confirm-item-price ${item}">Confirmar</button>

            <div class="remove-box remove-display">
            <div onclick="Util.displayBanner()">

                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        </div>
        `
    }

    addMark(it){
        this.list.checkItem(it)
    }
    
}