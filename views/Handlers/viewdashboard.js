var salesTable = document.getElementById('resentsales');
var productsTable = document.getElementById('resentproducts');
var ordersTable = document.getElementById('resentorders');


window.onload = (e) => { 



const Nav = () => {

    //selecting element aside from the DOM
    const navbarHolder =  document.getElementById('navnav');



    //creating actual navbar (html)

    //edit this nav by adding links and items
    const navbar = `
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      
      <span class="brand-text font-weight-light">InventoryApp</span>
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
            <a href="index.html" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Home
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
                <a href="messages.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Messages</p>
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
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
    `;


    navbarHolder.insertAdjacentHTML( 'beforeend', navbar );

    
}

Nav();
console.log("worked");


    const getProducts = () => {
        //fetch the products
    }


    const getOrders = () => {
        //fetch orders
    }


    const getSales = () => {
        //fetch sales
    }



    return false;
}


