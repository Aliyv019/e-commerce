let new_product=[]
let test_arr=[]
//bos bir array yaradib onun icine atirsan obyekti if in icinde
let new_product_photo=""

const navbar=document.querySelector('nav')
const main_page_btn=navbar.querySelectorAll('button')[0]
const cart_page_btn=navbar.querySelectorAll('button')[1]
const admin_page_btn=navbar.querySelectorAll('button')[2]
const main_page=document.querySelector('.main_page')
const admin_page=document.querySelector('.admin_main')
const cart_page=document.querySelector('.cart_main')
const title=document.querySelector('title')

main_page_btn.addEventListener('click',()=>{
    main_page.style.display="flex"
    admin_page.style.display="none"
    cart_page.style.display="none"
    title.textContent="E-Commerce"
    for(let element of new_product){
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`<div class="main_page_card">
                            <img src="./assets/photos/${element.photo}" alt="">
                            <div>
                                <h2>${element.name}</h2>
                                <p>Price:${element.price}$</p>
                            </div>
                            <button class="add_to_cart">Add to cart</button>
                        </div>`
        main_card_list.appendChild(ListItem)
        
        const add_to_cart_btn=ListItem.querySelector('button')
        add_to_cart_btn.addEventListener('click',()=>{
            add_to_cart_btn.style.display="none"
            test_arr.push(element)
        })
    }

})
admin_page_btn.addEventListener('click',()=>{
    main_page.style.display="none"
    admin_page.style.display="flex"
    cart_page.style.display="none"
    title.textContent="Admin"
    main_card_list.innerHTML=``
})
let sum=0
const shopping_card_list=document.querySelector('.shopping_cart')
cart_page_btn.addEventListener('click',()=>{
    main_page.style.display="none"
    admin_page.style.display="none"
    cart_page.style.display="block"
    title.textContent="Shopping Cart"
    main_card_list.innerHTML=``
    test_arr.forEach((element)=>{
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`<div class="shopping_cart_card">
                        <img src="./assets/photos/${element.photo}" alt="">
                        <div class="credits">
                            <div>
                                <h2>${element.name}</h2>
                                <p>Price:${element.price}$</p>
                            </div>
                            <div class="shopping_card_input">
                                <button class="minus">-</button>
                                <input type="number" value=1>
                                <button class="plus">+</button>
                            </div>
                        </div>
                    </div>`
        shopping_card_list.appendChild(ListItem)
        const input=ListItem.querySelector('input')
        const plus=ListItem.querySelector('.plus')
        const minus=ListItem.querySelector('.minus')
        input.addEventListener('change',()=>{
            sum+=input.value*element.price
        })
    })

})





    const admin_input_name=document.querySelector('#product_name')
    const admin_input_price=document.querySelector('#price')
    const admin_btn=document.querySelector('.admin_new_product_btn')
    const admin_photos=document.querySelector('.photos')
    for(let i=1;i<=16;i++){
        const admin_image=document.createElement('img')
        admin_image.src=`./assets/photos/ring${i}.webp`
        admin_photos.appendChild(admin_image)
        admin_image.addEventListener('click',()=>{
            if(admin_image.style.borderColor=='red'){admin_image.style.borderColor='white'}
            else{admin_image.style.borderColor='red';new_product_photo=admin_image.src.split("/photos/").pop()}
        })
    }
    admin_btn.addEventListener('click',()=>{
        if(new_product_photo!="" && admin_input_name.value!="" && admin_input_price.value!=""){
            new_product.push({
                name:admin_input_name.value.trim(),
                photo:new_product_photo,
                price:+admin_input_price.value
            })
            admin_input_name.value=""
            admin_input_price.value=""
            for(let i=0;i<16;i++){
                const img=admin_photos.querySelectorAll('img')[i]
                if(img.style.borderColor=="red"){img.style.borderColor="white"}
            }
            console.log(new_product);
        }
        else if(admin_input_name.value=="" || admin_input_price.value==""){
            if(admin_input_name.value==""){admin_input_name.style.borderColor="red"}
            else{admin_input_price.style.borderColor="red"}
        }
    })


const main_card_list=document.querySelector('.main_page ul')



