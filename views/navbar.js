//dashboard
var recentsalesTable = document.getElementById('recentsales');
var recentproductsTable = document.getElementById('recentproducts');
var recentordersTable = document.getElementById('recentorders');

//PAGES
//orders
var ordersTable = document.getElementById('orders');

//sales
var salesTable = document.getElementById('sales');

//products
var productsTable = document.getElementById('products');

//categories
var categoriesTable = document.getElementById('categories');

//users
var usersTable = document.getElementById('users');

//report
var reportTable = document.getElementById('report');



window.onload = (e) => { 



const Nav = () => {

    //selecting element aside from the DOM
    const navbarHolder =  document.getElementById('navnav');

    //fetching the logged in user info
    fetch('http://localhost:3000/api/login/getsession')
    .then(response => response.json())
    .then(loggedInUser => {

      if (loggedInUser.type == 'Owner'){
          console.log('Owner');
          

          const navbar = `
    <!-- Brand Logo -->
    <a href="index.html" class="brand-link">
      
      <span class="brand-text font-weight-light">InventoryApp</span><br/>
      <small class="brand-text font-weight-light">${loggedInUser.firstName}, ${loggedInUser.type}</small>

    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
     

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="dashboard.html" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="products.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Product</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="orders.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Orders</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="users.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Users</p>
                </a>
              </li>
             
              <li class="nav-item">
                <a href="sales.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sales</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="categories.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Categories</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="reports.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Report</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="login.html" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Log Out
                
              </p>
            </a>
          </li>
          <li class="nav-item mb-5">
            <p>.</p> 
        </li>
        <li class="nav-item mb-5">
            <p>.</p> 
        </li>
        <li class="nav-item mb-5">
       <p>.</p></li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
    `;

    navbarHolder.insertAdjacentHTML( 'beforeend', navbar );
      }

      if (loggedInUser.type == 'Seller'){
        console.log('Seller');





        const navbar = `
        <!-- Brand Logo -->
        <a href="index.html" class="brand-link">
          
          <span class="brand-text font-weight-light">InventoryApp</span> <br/>
          <small class="brand-text font-weight-light">${loggedInUser.firstName}, ${loggedInUser.type}</small>

        </a>
    
        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Sidebar user panel (optional) -->
         
    
          <!-- Sidebar Menu -->
          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <!-- Add icons to the links using the .nav-icon class
                   with font-awesome or any other icon font library -->
              <li class="nav-item has-treeview menu-open">
                <a href="dashboard.html" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="products.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Product</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="orders.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Orders</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="users.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Users</p>
                    </a>
                  </li>
                 
                  <li class="nav-item">
                    <a href="sales.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Sales</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="categories.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Categories</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="reports.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Report</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="login.html" class="nav-link">
                  <i class="nav-icon fas fa-th"></i>
                  <p>
                    Log Out
                    
                  </p>
                </a>
              </li>
              <li class="nav-item mb-5">
                <p>.</p> 
            </li>
            <li class="nav-item mb-5">
                <p>.</p> 
            </li>
            <li class="nav-item mb-5">
           <p>.</p></li>
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
        `;
    
        navbarHolder.insertAdjacentHTML( 'beforeend', navbar );
      }

      if (loggedInUser.type == 'Storekeeper'){
        console.log('Storekeeper');



        const navbar = `
        <!-- Brand Logo -->
        <a href="index.html" class="brand-link">
          
          <span class="brand-text font-weight-light">InventoryApp</span> <br/>
          <small class="brand-text font-weight-light">${loggedInUser.firstName}, ${loggedInUser.type}</small>
          
        </a>
    
        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Sidebar user panel (optional) -->
         
    
          <!-- Sidebar Menu -->
          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <!-- Add icons to the links using the .nav-icon class
                   with font-awesome or any other icon font library -->
              <li class="nav-item has-treeview menu-open">
                <a href="dashboard.html" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="products.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Product</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="orders.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Orders</p>
                    </a>
                  </li>
                
                 
                  <li class="nav-item">
                    <a href="sales.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Sales</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="categories.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Categories</p>
                    </a>
                  </li>
                 
                </ul>
              </li>
              <li class="nav-item">
                <a href="login.html" class="nav-link">
                  <i class="nav-icon fas fa-th"></i>
                  <p>
                    Log Out
                    
                  </p>
                </a>
              </li>
              <li class="nav-item mb-5">
                <p>.</p> 
            </li>
            <li class="nav-item mb-5">
                <p>.</p> 
            </li>
            <li class="nav-item mb-5">
           <p>.</p></li>
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
        `;
    
        navbarHolder.insertAdjacentHTML( 'beforeend', navbar );
      }

    });


    //creating actual navbar (html)

    //edit this nav by adding links and items
    


  //  navbarHolder.insertAdjacentHTML( 'beforeend', navbar );

    
}


console.log("worked");

    const getRecentSales = () => {


      fetch('http://localhost:3000/api/sales')
      .then(response => response.json())
      .then(sales => {
        //console.log(sales);

        for (let sal = sales.length; sal > sales.length-5; sal--) {
          const sale = sales[sal];

          if (sale){

          
          var tr = document.createElement('tr');
          var initial =  document.createElement('td');
          var product = document.createElement('td');
          var price = document.createElement('td');
          var orderno = document.createElement('td');
          var date = document.createElement('td');

         var dt = new Date(sale.createdAt)
         var d = dt.toDateString()
         
          // set value property of tds
          product.appendChild( document.createTextNode(sale.Product.name));
          price.appendChild( document.createTextNode(sale.Product.price));
          orderno.appendChild( document.createTextNode(sale.Order.id));
          date.appendChild( document.createTextNode(d));
          
          tr.appendChild(initial);
          tr.appendChild(product);
          tr.appendChild(price);
          tr.appendChild(orderno);
          tr.appendChild(date);

        
          // add tr to table (sel)
          if (recentsalesTable) {

            recentsalesTable.appendChild(tr); 
          }
          
        }
      }
          
                
      })
    }
    const getRecentOrders = () => {



      fetch('http://localhost:3000/api/orders')
      .then(response => response.json())
      .then(orders => {
        
        
        for (let odr = orders.length; odr > orders.length-5; odr--) {
          const order = orders[odr];
          
          if (order){
            
            //console.log(order);
            fetch('http://localhost:3000/api/sales')
            .then(response => response.json())
            .then(sales => {

              var nopr = 0;
              sales.forEach(sale => {

                if (sale.OrderID == order.id){

                  nopr++;
                }
                
              });


              var tr = document.createElement('tr');
          var initial =  document.createElement('td');
          var oderNum = document.createElement('td');
          var Numproduct = document.createElement('td');
          var TotalAmt = document.createElement('td');
          var date = document.createElement('td');

         var dt = new Date(order.createdAt)
         var d = dt.toDateString()
         
          // set value property of tds
          oderNum.appendChild( document.createTextNode(order.id));
          Numproduct.appendChild( document.createTextNode(nopr));
          TotalAmt.appendChild( document.createTextNode(order.TotalPrice));
          date.appendChild( document.createTextNode(d));
          
          
          tr.appendChild(initial);
          tr.appendChild(oderNum);
          tr.appendChild(Numproduct);
          tr.appendChild(TotalAmt);
          tr.appendChild(date);

        
          // add tr to table (sel)
          if (recentordersTable) {

            recentordersTable.appendChild(tr); 
          }




            })
          
          
        }
      }
          
                
      })


    }
    const getRecentProducts = () => {


     
      fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(products => {
        //console.log(products);

        for (let pro = products.length; pro > products.length-5; pro--) {
          const product = products[pro];

          if (product){

          
          var tr = document.createElement('tr');
          var initial =  document.createElement('td');
          var name = document.createElement('td');
          var price = document.createElement('td');
          var category = document.createElement('td');
          var supplier = document.createElement('td');
          var date = document.createElement('td');

         var dt = new Date(product.createdAt)
         var d = dt.toDateString()
         
          // set value property of tds
          name.appendChild( document.createTextNode(product.name));
          price.appendChild( document.createTextNode(product.price));
          category.appendChild( document.createTextNode(product.Category.Type));
          supplier.appendChild( document.createTextNode(product.Supplier.Name));
          date.appendChild( document.createTextNode(d));
          
          tr.appendChild(initial);
          tr.appendChild(name);
          tr.appendChild(price);
          tr.appendChild(category);
          tr.appendChild(supplier);
          tr.appendChild(date);

        
          // add tr to table (sel)
          if (recentproductsTable) {

            recentproductsTable.appendChild(tr); 
          }
          
        }
      }
          
                
      })
      .then(err => console.log(err))
      
    }



    const getProducts = () => {
        //fetch the products


        fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(products => {
       // console.log(products);

        products.forEach(product => {
          
       

          

          
          var tr = document.createElement('tr');
          var initial =  document.createElement('td');
          var name = document.createElement('td');
          var price = document.createElement('td');
          var category = document.createElement('td');
          var supplier = document.createElement('td');
          var date = document.createElement('td');

         var dt = new Date(product.createdAt)
         var d = dt.toDateString()
         
          // set value property of tds
          name.appendChild( document.createTextNode(product.name));
          price.appendChild( document.createTextNode(product.price));
          category.appendChild( document.createTextNode(product.Category.Type));
          supplier.appendChild( document.createTextNode(product.Supplier.Name));
          date.appendChild( document.createTextNode(d));
          
          tr.appendChild(initial);
          tr.appendChild(name);
          tr.appendChild(price);
          tr.appendChild(category);
          tr.appendChild(supplier);
          tr.appendChild(date);

        
          // add tr to table (sel)
          if (productsTable) {

            productsTable.appendChild(tr); 
          }
          
        
      
       
    })
                
      })
      .then(err => console.log(err))
    }


    const getOrders = () => {
        //fetch orders


        fetch('http://localhost:3000/api/orders')
        .then(response => response.json())
        .then(orders => {
          
          
          orders.forEach(order => {
            
         
            
            if (order){
              
              //console.log(order);
              fetch('http://localhost:3000/api/sales')
              .then(response => response.json())
              .then(sales => {
  
                var nopr = 0;
                sales.forEach(sale => {
  
                  if (sale.OrderID == order.id){
  
                    nopr++;
                  }
                  
                });
  
  
                var tr = document.createElement('tr');
                var initial =  document.createElement('td');
                var oderNum = document.createElement('td');
                var Numproduct = document.createElement('td');
                var TotalAmt = document.createElement('td');
                var date = document.createElement('td');
      
                var dt = new Date(order.createdAt)
                var d = dt.toDateString()
           
            // set value property of tds
            oderNum.appendChild( document.createTextNode(order.id));
            Numproduct.appendChild( document.createTextNode(nopr));
            TotalAmt.appendChild( document.createTextNode(order.TotalPrice));
            date.appendChild( document.createTextNode(d));
            
            
            tr.appendChild(initial);
            tr.appendChild(oderNum);
            tr.appendChild(Numproduct);
            tr.appendChild(TotalAmt);
            tr.appendChild(date);
  
          
            // add tr to table (sel)
            if (ordersTable) {
  
              ordersTable.appendChild(tr); 
            }
  
  
  
  
              })
            
            
          }
        })
            
                  
        })
    }


    const getSales = () => {
        //fetch sales


      fetch('http://localhost:3000/api/sales')
      .then(response => response.json())
      .then(sales => {
       // console.log(sales);

          sales.forEach(sale => {
            
                var tr = document.createElement('tr');
                var initial =  document.createElement('td');
                var product = document.createElement('td');
                var price = document.createElement('td');
                var orderno = document.createElement('td');
                var date = document.createElement('td');


                var dt = new Date(sale.createdAt)
                var d = dt.toDateString()
                
                // set value property of tds
                product.appendChild( document.createTextNode(sale.Product.name));
                price.appendChild( document.createTextNode(sale.Product.price));
                orderno.appendChild( document.createTextNode(sale.Order.id));
                date.appendChild( document.createTextNode(d));
                
                tr.appendChild(initial);
                tr.appendChild(product);
                tr.appendChild(price);
                tr.appendChild(orderno);
                tr.appendChild(date);

              
                // add tr to table (sel)
                if (salesTable) {

                  salesTable.appendChild(tr); 
                }
          });
                
      })
    }

    const getCategories = () => {



      fetch('http://localhost:3000/api/categories')
      .then(response => response.json())
      .then(categories => {
        // console.log(categories);
        
        var numb = 0;
        categories.forEach(category => {
            
          var tr = document.createElement('tr');
          var initial =  document.createElement('td');
          var num = document.createElement('td');
          var Category = document.createElement('td');
          var Description = document.createElement('td');
          var date = document.createElement('td');

          

          var dt = new Date(category.createdAt)
          var d = dt.toDateString()
          numb++
          // set value property of tds
          num.appendChild( document.createTextNode(numb));
          Category.appendChild( document.createTextNode(category.Type));
          Description.appendChild( document.createTextNode(category.Description));
          date.appendChild( document.createTextNode(d));
          
          tr.appendChild(initial);
          tr.appendChild(num);
          tr.appendChild(Category);
          tr.appendChild(Description);
          tr.appendChild(date);
          
        
          // add tr to table (sel)
          if (categoriesTable) {
            
            categoriesTable.appendChild(tr); 
          }
    });
          
})
    }

    const getUsers = () => {


      fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(users => {
         console.log(users);
        
        var numb = 0;
        users.forEach(user => {
            
          var tr = document.createElement('tr');
          var initial =  document.createElement('td');
          var num = document.createElement('td');
          var Firstname = document.createElement('td');
          var Lastname = document.createElement('td');
          var phone = document.createElement('td');
          var Email = document.createElement('td');
        
          var date = document.createElement('td');

          

          var dt = new Date(user.createdAt)
          var d = dt.toDateString()
          numb++
          // set value property of tds
          num.appendChild( document.createTextNode(numb));
          Firstname.appendChild( document.createTextNode(user.firstName));
          Lastname.appendChild( document.createTextNode(user.lastName));
          Email.appendChild( document.createTextNode(user.email));
          phone.appendChild( document.createTextNode(user.phone));
          date.appendChild( document.createTextNode(d));
          
          tr.appendChild(initial);
          tr.appendChild(num);
          tr.appendChild(Firstname);
          tr.appendChild(Lastname);
          tr.appendChild(Email);
          tr.appendChild(phone);
          tr.appendChild(date);
          
        
          // add tr to table (sel)
          if (usersTable) {
            
            usersTable.appendChild(tr); 
          }
    });
          
})

    }



    //calling navigation bar function
    Nav();

    //calling dashboard functions
    getRecentOrders();
    getRecentProducts();
    getRecentSales();

    //calling the functions (pages)
    getCategories();
    getOrders();
    getProducts();
    getSales();
    getUsers();
    return false;
}


