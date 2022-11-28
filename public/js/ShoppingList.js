class ShoppingList {
    items = []
    totalPrice = 0

    addItem(item) {
            this.items.push(item)
            this.consoleItems()
            return
    }

    

    removeItem(id) {
        let index;
        this.items.map((arrItem, idex) => {
            if (arrItem.item === id) {
                index = idex
                this.totalPrice -= Number(this.items[index].price)
                console.log(this.items);
                this.items.splice(index, 1)
                console.log(this.items);
                return
            }


        })


    }

    getItemId(item) {
        return this.items.indexOf(item)

    }

    consoleItems() {
        console.log(this.items)
        return
    }

    consoleHello() {
        console.log("Hello, world");
        return
    }

    getList() {
        return this.items
    }

    isEmpty() {
        return this.items.length == 0
    }

    addPrice(itemName = "item", price = 0) {

        let index;
        const selected = this.items.map((arrItem, idex) => {
            if (arrItem.item === itemName) {
                index = idex
                this.items[index].price = price
                this.totalPrice += Number(price)
            }


        })

    }

    checkItem(itemName) {
        let index;
        const selected = this.items.map((arrItem, idex) => {
            if (arrItem.item === itemName) {
                index = idex
                this.items[index].checked = true
            }


        })

    }

}