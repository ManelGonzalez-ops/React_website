import React, {Fragment, useEffect, useState, useRef, useContext} from 'react'
import "./calorieTraker.css"
import {FaEdit, FaBackspace} from "react-icons/fa"
import {AiOutlinePlus, AiFillDelete} from "react-icons/ai"
import InfoHoverable from "../../../../utils/infoHoverable/infoHoverable"
import {Context} from "../../../Context"

export default function CalorieTraker({setLoaded}) {
    const {setHasbeenLoaded} = useContext(Context)

    const [kcalName, setKcalName] = useState("") 
    const [kcalAmount, setKcalAmount] = useState("") 
    const listCont = useRef(null)
  const texto = "Esta aplicación le permite insertar registros, actualizarlos y borrarlos. Está escrita en Vanilla Javascript utilizando el patrón de los módulos. Utiliza el localStorage de base de datos, por lo que los cambios realizados persistirán después de que cierre el navegador"

    const svg = '<svg class="svg" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"> <path class="edit-item path-kcal path" d="M 18.414062 2 C 18.158188 2 17.902031 2.0974687 17.707031 2.2929688 L 16 4 L 20 8 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.925594 2.0974687 18.669937 2 18.414062 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"/></svg>'
    const StorageCtrl = (function () {
        const storage = {
            // {id=.. name=.. calories}
        }
        return {
            updateStorage: function (item) {
                let store;
                if (!localStorage.getItem("elementos")) {
                    store = []
                }
                else {
                    store = JSON.parse(localStorage.getItem("elementos"))
                }
                console.log(item)
                store.push(item)
                localStorage.setItem("elementos", JSON.stringify(store))
            },
            copyData: function () {
                const elementos = JSON.parse(localStorage.getItem("elementos"))
                return elementos            
            },
            deleteItemSto: function(items){
                localStorage.setItem("elementos", JSON.stringify(items))
            },
            clearStorage: function(){
                localStorage.clear()
            }
        }
    })()

    const ItemCtrl = (function(){
        // Item Constructor
        const Item = function(id, name, calories){
          this.id = id;
          this.name = name;
          this.calories = calories;
    
          this.obtainObject = function(){
              return {
                  id: this.id,
                  name: this.name,
                  calories: this.calories
              }
          }
        }
      
        // Data Structure / State
        const data = {
          items: [
            // {id: 0, name: 'Steak Dinner', calories: 1200},
            // {id: 1, name: 'Cookie', calories: 400},
            // {id: 2, name: 'Eggs', calories: 300}
          ],
          currentItem: null,
          totalCalories: 0
        }
      
        // Public methods
        return {
          getItems: function(){
            
            return data.items;
            
          },
          addItem: function(name, calories){
            let ID;
            // Create ID
            if(data.items.length > 0){
              ID = data.items.length;
            } else {
              ID = 0;
            }
      
            // Calories to number
            calories = parseInt(calories);
      
            // Create new item
            let newItem = new Item(ID, name, calories);
      
            // Add to items array
            data.items.push(newItem);
      
            return newItem;
          },
          getItemById: function(id){
            let found = null;
            // Loop through items
            data.items.forEach(function(item){
              if(item.id === id){
                found = item;
              }
            });
            return found;
          },
          setCurrentItem: function(item){
            data.currentItem = item;
           
          },
          getCurrentItem: function(){
            return data.currentItem;
          },
          getTotalCalories: function(){
            let total = 0;
      
            // Loop through items and add cals
            data.items.forEach(function(item){
              total += item.calories;
            });
      
            // Set total cal in data structure
            data.totalCalories = total;
      
            // Return total
            return data.totalCalories;
          },
            deleteCurrentItem : function(current){
                data.items.forEach((item,index) =>{
                    if (item.id === current.id){
                        data.items.splice(index, 1)
                    }
                    
                })
            }
          ,
          logData: function(){
            return data;
          }
        }
      })();

      const UICtrl = (function(){
        const UISelectors = {
          itemList: '#list-kcal',
          addBtn: '.add-kcal',
          updateBtn: '.update-kcal',
          deleteBtn: '.delete-kcal',
          backBtn: '.back-kcal',
          itemNameInput: '#kcal-name',
          itemCaloriesInput: '#kcal-amount',
          totalCalories: '.kcal-total',
          clearBtn : ".kcal-clear"
        }
        
        // Public methods
        return {
          populateItemList: function(items){
            let html = '';
      
            items.forEach(function(item){
              html += `<li class="collection-item" id="item-${item.id}">
              <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
              <a href="#" className="secondary-content">
              ${svg}
              </a>
            </li>`;
            });
      
            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
          },
          getItemInput: function(){
            return {
              name:document.querySelector(UISelectors.itemNameInput).value,
              calories:document.querySelector(UISelectors.itemCaloriesInput).value
            }
          },
          addListItem: function(item){
            // Show the list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            // Create li element
            const li = document.createElement('li');
            // Add class
            li.className = 'collection-item';
            // Add ID
            li.id = `item-${item.id}`;
            // Add HTML
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" className="secondary-content">
            ${svg}
            </a>`;
            // Insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
          },
          clearInput: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
          },
          addItemToForm: function(cb){
            cb()
            if(document.querySelector(UISelectors.itemNameInput).value !== null && document.querySelector(UISelectors.itemCaloriesInput).value !== null){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();}
          },
          hideList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
          },
          showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
          },
          clearEditState: function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
          },
          showEditState: function(){
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
          },
          getSelectors: function(){
            return UISelectors;
          },
          setUpdatedItem: function(inputs, seleccion){
                seleccion.innerHTML = `<strong>${inputs.name}: </strong> <em>${inputs.calories} Calories</em>
                <a href="#" className="secondary-content">
            ${svg}
            </a>`
          }
          ,
          deleteItem: function(seleccion){
              seleccion.remove()
          }
        }
      })();

      const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
        // Load event listeners
        const loadEventListeners = function () {
          // Get UI selectors
          const UISelectors = UICtrl.getSelectors();
      
          // Add item event
          document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
      
          // Edit icon click event
          document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit);
      
          document.querySelector(UISelectors.updateBtn).addEventListener("click", updateEditItem);
      
          document.querySelector(UISelectors.deleteBtn).addEventListener("click", removeItem)
          document.querySelector(UISelectors.clearBtn).addEventListener("click", removeEverything)
          document.querySelector(UISelectors.backBtn).addEventListener("click", turnback)
        }
      
        // Add item submit
        const itemAddSubmit = function (e) {
          // Get form input from UI Controller
          const input = UICtrl.getItemInput();
      
      
          // Check for name and calorie input
          if (input.name !== '' && input.calories !== '') {
            // Add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
      
            const itemGood = newItem.obtainObject()
            console.log(itemGood)
      
            StorageCtrl.updateStorage(itemGood)
      
            // Add item to UI list
            UICtrl.addListItem(newItem);
      
            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);
            // Clear fields
            UICtrl.clearInput();
          }
      
          e.preventDefault();
        }
      
        // Update item submit
        const itemUpdateSubmit = function (e) {
        
          if (e.target.classList.contains('edit-item')) {
            // Get list item id (item-0, item-1)
            console.log(e.target)
            const listId = e.target.parentElement.parentElement.parentElement.id;
      
            // Break into an array
            const listIdArr = listId.split('-');
      
            // Get the actual id
            const id = parseInt(listIdArr[1]);
      
            // Get item
            const itemToEdit = ItemCtrl.getItemById(id);
      
            // Set current item
            let setCallback =()=>{ItemCtrl.setCurrentItem(itemToEdit)};
      
      
      
      
            // Add item to form
            UICtrl.addItemToForm(setCallback);
          }
      
          e.preventDefault();
        }
      
        const updateEditItem = function (e) {
            console.log("kaka")
          let currentElement = ItemCtrl.getCurrentItem() //aquí el nombre de la funcion confunde porque no solo obtenemos el current element si no que lo
          const lista = document.querySelectorAll(".collection-item")
          lista.forEach(li => {
            let lispit = li.id.split("-")
            if (currentElement.id == parseInt(lispit[1])) {
              const objetivo = document.getElementById(`item-${currentElement.id}`)
              const input = UICtrl.getItemInput()
      
      
              const cambiar = ItemCtrl.getItems()
              console.log(cambiar)
              let listaActualizada = []
              cambiar.forEach(item => {
                if (item.id === currentElement.id) {
                  item.calories = parseInt(input.calories)
                  item.name = input.name
                }
                listaActualizada.push(item)  //si te fijas vamos a meter todos los items, solo que si se cumple el if uno de ellos sera modificado
      
              })
              
              
      
              UICtrl.setUpdatedItem(input, objetivo)
              UICtrl.clearInput();
              UICtrl.clearEditState()
      
              StorageCtrl.deleteItemSto(listaActualizada)
              const calories = ItemCtrl.getTotalCalories()
              UICtrl.showTotalCalories(calories)
            }
      
      
          })
      
          e.preventDefault()
        }
      
        const removeItem = function (e) {
      
          const currentElement = ItemCtrl.getCurrentItem()
          const lista = document.querySelectorAll(".collection-item")
          lista.forEach(li => {
            let lispit = li.id.split("-")
            if (currentElement.id == parseInt(lispit[1])) {
              const objetivo = document.getElementById(`item-${currentElement.id}`)
              const inputs = UICtrl.getItemInput()
      
      
      
              ItemCtrl.deleteCurrentItem(currentElement)
              const data = ItemCtrl.getItems()
      
              StorageCtrl.deleteItemSto(data)
      
              UICtrl.deleteItem(objetivo)
      
              UICtrl.clearInput();
              UICtrl.clearEditState()
              console.log(ItemCtrl.getItems())
      
              const calories = ItemCtrl.getTotalCalories()
              UICtrl.showTotalCalories(calories)
      
            }
          })
      
          e.preventDefault()
        }
      
        const removeEverything = function () {
          const dataStructure = ItemCtrl.logData()
          console.log(dataStructure)
          dataStructure.items = []
          dataStructure.totalCalories = 0
          console.log()
          console.log(dataStructure)
          //const lista = document.getElementById("item-list")
          let elementos = document.querySelectorAll(".collection-item")
          //elementos.forEach(item => lista.removeChild(item))
          elementos.forEach(item => item.remove())
      
          const calories = ItemCtrl.getTotalCalories()
          UICtrl.showTotalCalories(calories)
          UICtrl.hideList()
      
          StorageCtrl.clearStorage()
        }
      
        const turnback = function(e){
          UICtrl.clearEditState()
          e.preventDefault()
        }
      
      
        // Public methods
        return {
          init: function () {
            // Clear edit state / set initial set
            UICtrl.clearEditState();
      
            const elementos = StorageCtrl.copyData()
            //const realitems = StorageCtrl.copyData(items)
            // Fetch items from data structure
            if (elementos) {
              elementos.forEach(elem => {
                ItemCtrl.addItem(elem.name, elem.calories)
              })
            }
      
            const items = ItemCtrl.getItems();
      
      
            // Check if any items
            if (items.length === 0) {
              UICtrl.hideList();
            } else {
              // Populate list with items
              UICtrl.populateItemList(items);
            }
      
            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);
      
            // Load event listeners
            loadEventListeners();
          }
        }
      
      })(ItemCtrl, UICtrl, StorageCtrl);
      
      useEffect(()=>{
        setHasbeenLoaded(true)
          App.init()
      }, [])
      
    return (
        <div className="calorie-cont">
            <nav className="kcal-nav">
                <h5>Calorie Tracker</h5>
                <button className="kcal-clear">Clear All</button>
            </nav>

            <section className="kcal-section">
                <div className="kcal-container">
                    <h3>Add Meal / Food Item</h3>
                    <form className="kcal-form">
                        <div className="kcal-form-grid">
                            <div className="kcal-form-group">
                                <label htmlFor="kcal-name">
                                    Meal
                        </label>
                                <input type="text" placeholder="add item" id="kcal-name" name="kcal-name" value={kcalName} onChange={(e)=>{setKcalName(e.target.value)}} />
                            </div>
                            <div className="kcal-form-group">

                                <label htmlFor="kcal-amount">
                                    Calories
                        </label>
                                <input type="number" placeholder="add calories" id="kcal-amount" name="kcal-amount" value={kcalAmount} onChange={(e)=>{setKcalAmount(e.target.value)}} />
                            </div>
                        </div>
                        <button type="submit" className="button-submit add-kcal"><FaEdit/>Add meal</button>
                        <button type="submit" className="button-submit update-kcal"><FaEdit/>Update meal</button>
                        <button type="submit" className="button-submit delete-kcal"><AiFillDelete/>Delete meal</button>
                        <button type="submit" className="button-submit back-kcal"><FaBackspace/> Back</button>
                    </form>
                </div>
            </section>
            <section>
                <h1 className="kcal-total">Total calories<span className="kcal-totalN"></span></h1>
                <ul className="kcal-list" id="list-kcal">

                </ul>
            </section>
            <InfoHoverable textu={texto}/>
        </div>
    )
}

