    /* =========================================
    1. DOM ACCESS METHODS
    ========================================= */
    // getElementById()
    const storeTitle = document.getElementById("storeTitle");
    const themeBtn =
        document.getElementById("themeBtn");
    const cartCount =
        document.getElementById("cartCount");
    const searchInput =
        document.getElementById("searchInput");
    // getElementsByClassName()
    const productCards =
        document.getElementsByClassName("product-card");
    // getElementsByTagName()
    const navigationItems =
        document.getElementsByTagName("li");
    // querySelector()
    const welcomeText =
        document.querySelector(".hero h2");
    // querySelectorAll()
    const addCartButtons =
        document.querySelectorAll(".addCart");

    /* =========================================
    2. CLICK EVENT – THEME SWITCHING
    ========================================= */
    let darkMode = false;
    themeBtn.addEventListener("click", function () {
        darkMode = !darkMode;
        document.body.classList.toggle("dark");
        if (darkMode) {
            themeBtn.textContent = "Light Mode";
            welcomeText.textContent =
                "Welcome to ShopEase – Dark Mode";
        } else {
            themeBtn.textContent = "Dark Mode";
            welcomeText.textContent =
                "Welcome to ShopEase";
        }
        const isDark = document.body.classList.contains("dark");
        themeBtn.innerHTML = isDark 
            ? '<i class="fa-solid fa-sun"></i> Light Mode' 
            : '<i class="fa-solid fa-moon"></i> Dark Mode';
    
        welcomeText.innerHTML = isDark
            ? 'Welcome to ShopEase <i class="fa-solid fa-store"></i> - Dark Mode'
            : 'Welcome to ShopEase <i class="fa-solid fa-store"></i>'
    });


    /* =========================================
    3. CLICK EVENT – ADD TO CART
    ========================================= */
    let cart = 0;
    addCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            cart++;
            cartCount.textContent = cart;   
            button.innerHTML = 'Added ✓';
            button.style.backgroundColor = "green";
            button.style.borderColor = "green";
            setTimeout(function() {
                button.innerHTML = '<i class = "fa-solid fa-cart-plus"></i> Add to Cart';
                button.style.backgroundColor = "#2878f0";
                button.style.borderColor = "#2878f0";
            },  2000);
        });
    });

    /* =========================================
    4. MOUSEOVER AND MOUSEOUT EVENTS
    ========================================= */
    /*for (let i = 0; i < productCards.length; i++) {
        productCards[i].addEventListener("mouseover",function() {
                this.classList.add("highlight");
                this.style.boxShadow =
                    "10px 15px 20px rgba(223, 25, 25, 0.86)";
            }
        );
        productCards[i].addEventListener("mouseout",function() {
                this.classList.remove("highlight");
                this.style.boxShadow =
                    "5px 3px 12px rgba(0,0,0,0.12)";
            }
        );
    }*/
    /* =========================================
    5. DOUBLE CLICK EVENT
    ========================================= */

    /*storeTitle.addEventListener(
        "dblclick",
        function() {
            storeTitle.textContent ="ShopEase - Online Store";
            storeTitle.style.color ="yellow";
        
        setTimeout(function(){
        storeTitle.textContent ="ShopEase";
            storeTitle.style.color ="White";
        },2000);
    });      
0*/

    /* =========================================
    6. KEYDOWN EVENT
    ========================================= */
    searchInput.addEventListener(
        "keydown",
        function(event) {
            if (event.key === "Enter") {
                document.getElementById(
                    "searchMessage"
                ).textContent =
                    "Searching for: " +
                    searchInput.value;
            }
        }
    );
    /* =========================================
    7. KEYUP EVENT – LIVE SEARCH
    ========================================= */
    searchInput.addEventListener(
        "keyup",
        function() {
            const searchValue =
                searchInput.value.toLowerCase();
            let visibleProducts = 0;
            for (let i = 0;
                i < productCards.length;
                i++) {
                const productName =
                    productCards[i]
                    .querySelector("h3")
                    .textContent
                    .toLowerCase();
                if (productName.includes(searchValue)) {
                    productCards[i].style.display =
                        "block";
                    visibleProducts++;
                } else {
                    productCards[i].style.display =
                        "none";
                }
            }
            const message =document.getElementById("searchMessage");
            if (searchValue === "") {
                message.textContent = "";
            } else {
                message.textContent =
                    visibleProducts +" product(s) found";
            }
        }
    );
    /* =========================================
    8. CHANGE EVENT
    ========================================= */

    const category =
        document.getElementById("category");

    category.addEventListener(
        "change",
        function() {

            const formMessage =
                document.getElementById(
                    "formMessage"
                );

            if (this.value !== "") {

                formMessage.textContent =
                    "You selected: " +
                    this.options[
                        this.selectedIndex
                    ].text;

                formMessage.style.color =
                    "#2878f0";

            }

        }
    );


    /* =========================================
       9. FORM SUBMISSION
    ========================================= */

    const feedbackForm =
        document.getElementById("feedbackForm");

    feedbackForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const email =
                document.getElementById("email").value;

            const selectedCategory =
                category.value;

            const message =
                document.getElementById(
                    "formMessage"
                );


            if (
                name === "" ||
                email === "" ||
                selectedCategory === ""
            ) {

                message.textContent =
                    "Please complete all fields.";

                message.style.color = "red";

                return;
            }


            message.textContent =
                "Thank you, " +
                name +
                "! Your feedback has been submitted successfully.";

            message.style.color = "green";

            feedbackForm.reset();

        }
    );


    /* =========================================
       11. DYNAMIC MENU
    ========================================= */
    const menuBtn =
        document.getElementById("menuBtn");

    const menuItems =
        document.getElementById("menuItems");

    menuBtn.addEventListener(
        "click",
        function() {

            if (
                menuItems.style.display ===
                "block"
            ) {

                menuItems.style.display =
                    "none";

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i> Show Menu';

            } else {

                menuItems.style.display =
                    "block";

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-x"></i> Hide Menu';

            }

        }
    );


    /* =========================================
       12. DYNAMIC ELEMENT CREATION
    ========================================= */

    const productContainer =
        document.getElementById(
            "productContainer"
        );


    const newProduct =
        document.createElement("div");

    newProduct.className =
        "product-card-1";

    newProduct.innerHTML = `

        <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
            alt="Laptop"
        >

        <h3>Premium Laptop</h3><br>

        <p class="price">₹ 49,999</p><br>

        <button class="addCart">
           <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>

    `;

    productContainer.appendChild(
        newProduct
    );


    /* =========================================
       13. DYNAMIC ELEMENT REPLACEMENT
    ========================================= */
    const description =
        document.getElementById(
            "description"
        );

    const replacementText =
        document.createElement("span");

    replacementText.textContent =
        "Enjoy a smarter and faster shopping experience!";

    description.replaceChildren(
        replacementText
    );


    /* =========================================
       14. DYNAMIC ELEMENT REMOVAL
    ========================================= */

    // Demonstration of remove()

    const temporaryMessage =
        document.createElement("p");

    temporaryMessage.textContent =
        "Temporary promotional message";

    temporaryMessage.id =
        "temporaryMessage";

    document.querySelector(".hero")
        .appendChild(temporaryMessage);


    setTimeout(function() {

        temporaryMessage.remove();

    }, 5000);


    /* =========================================
       15. NAVIGATION EVENTS
    ========================================= */

    for (
        let i = 0;
        i < navigationItems.length;
        i++
    ) {

        navigationItems[i].addEventListener(
            "click",
            function() {

                alert(
                    "You selected: " +
                    this.textContent
                );

            }
        );

    }


    /* =========================================
       16. DYNAMIC ATTRIBUTE MODIFICATION
    ========================================= */

    storeTitle.setAttribute(
        "title",
        "ShopEase Online Shopping"
    );


    /* =========================================
       17. DOM STYLE MANIPULATION
    ========================================= */

    welcomeText.style.letterSpacing =
        "1px";