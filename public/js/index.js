const LabSchoolShoppingList = new ShoppingList()
const App = new LayoutModel("shopping-list-container",LabSchoolShoppingList)

localStorage.items && App.displayStoredItems()
