class ShoppingList {
    items = []
    totalPrice = 0

    addItem(item){

        if(!this.checkIfAlreadyExists(item)){
            this.items.push(item)
            this.consoleItems()
            return
        }
            
       
    }

    checkIfAlreadyExists(item){
        if(this.items.indexOf(item)==-1){
            return false
        }
        return true
    }

    removeItem(item){
            this.items.splice(this.getItemId(item),1)
            this.consoleItems()
            return
    }
    
    getItemId(item){
           return  this.items.indexOf(item)
            
    }

    consoleItems(){
        console.log(this.items)
        return
    }

    consoleHello(){
        console.log("Hello, world");
        return
    }

    getList(){
        return this.items
    }

    isEmpty(){
        return this.items.length==0
    }

    addPrice(id,price){
        console.log(id);
        console.log(price);
        let idex
       const selected =  this.items.filter((item,index)=>{
            if(item.item===id){
                idex = index
            }
    
    })


   

    console.log(selected);
        this.items[idex].price=price
        this.totalPrice+=(+price)
    }

    checkItem(id){
            let idex
        const selected = this.items.filter((item,index)=>{
            if(item.item===id){
                idex = index
            }
        })
        
        this.items[idex].checked = true
        localStorage.items = JSON.stringify([...this.items])
    }

}