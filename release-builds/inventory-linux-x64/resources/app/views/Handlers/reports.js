window.onload = (e) => { 



    const Monthly = () => {
        var today = new Date();
        var lastweek = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
       
        lastweek.setDate(lastweek.getDate()- 30);

        fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(products => {

        fetch('http://localhost:3000/api/sales')
      .then(response => response.json())
      .then(sales => {

        fetch('http://localhost:3000/api/orders')
      .then(response => response.json())
      .then(orders => {

        fetch('http://localhost:3000/api/inventories')
      .then(response => response.json())
      .then(inventories => {

       var weekInventories = inventories.filter(function(inv) {
            return  new Date(inv.createdAt) < today && new Date(inv.createdAt) > lastweek;
          })
         
          var weekorders = orders.filter(function(order) {
            return  new Date(order.createdAt) < today && new Date(order.createdAt) > lastweek;
          })

          var weeksales = sales.filter(function(sale) {
            return  new Date(sale.createdAt) < today && new Date(sale.createdAt) > lastweek;
          })

          var weekproducts = products.filter(function(product) {
            return  new Date(product.createdAt) < today && new Date(product.createdAt) > lastweek;
          })

          var totalweekPrice = 0;
          var totalPrice = 0;
          var totalProducts = 0;
          var totalSalesPrice = 0;
          var totalweekProducts = 0;
          var totalweekProductPrice = 0;
          products.forEach(prod => {
           var inveRecord = inventories.filter(function(inve) {
              return  inve.ProductId == prod.id;
            })

            totalPrice += Number(inveRecord[0].TotalPrice);
            totalProducts += Number(inveRecord[0].quantity) * Number(inveRecord[0].TotalPrice);
            
          });


          weekproducts.forEach(prod => {
            var inveRecord = inventories.filter(function(inve) {
               return  inve.ProductId == prod.id;
             })
             totalweekProducts += Number(inveRecord[0].quantity) * Number(inveRecord[0].TotalPrice);
             totalweekProductPrice += Number(inveRecord[0].TotalPrice);
             
           });
         

          weeksales.forEach(sal => {
            totalSalesPrice += Number(sal.Product.price);
            
          });
          
              console.log(totalSalesPrice);
              
                
              const monthlyReportHolder =  document.getElementById('monthly');

              var report = `<div class="row">
              <div class="col-12">
                <div class="card bg-default">
                  <div class="card-header bg-default">
                    <h3 class="card-title">Weekly</h3>
        
                    <div class="card-tools bg-default">
                      <div class="input-group input-group-sm" style="width: 150px;">
        
                        <div class="input-group-append">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.card-header -->
                  
                  <div class="card-body table-responsive p-0" >
                    <div class="invoice p-3 mb-3">
                      <!-- title row -->
                      <div class="row">
                        <div class="col-12">
                          <h4>
                            <i class="fa fa-houzz nav-icon" aria-hidden="true"></i> Inventory
                            <small class="float-right">Date: ${date}</small>
                          </h4>
                        </div>
                        <!-- /.col -->
                      </div>
                      <!-- info row -->
                      <div class="row invoice-info">
                        <div class="col-sm-4 invoice-col">
                          From Date: ${lastweek}
                          <address>
                            <strong>Inventory</strong><br>
                            Sales Records<br>
                            Products Added<br>
                            Orders Issued<br>
                          
                          </address>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 invoice-col">
                          To Date: ${today}
                          <address>
                            <strong>Inventory</strong><br>
                            Sales Records<br>
                            Products Added<br>
                            Orders Issued<br>
                          </address>
                        </div>
                        <!-- /.col -->
                       
                        <!-- /.col -->
                      </div>
                      <!-- /.row -->
        
                      <!-- Table row -->
                      <div class="row">
                        <div class="col-12 table-responsive">
                          <table class="table table-striped">
                            <thead>
                            <tr>
                              <th></th>
                              <th>Record Type</th>
                              <th>No Records</th>
                            
                              <th>Value in Money</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>1</td>
                              <td>Sales</td>
                              <td>${weeksales.length}</td>
                              <td>${totalSalesPrice} Tsh</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Products</td>
                              <td>${weekorders.length}</td>
                              <td>${totalweekProductPrice} Tsh</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Orders</td>
                              <td>${weekorders.length}</td>
                              <td> ${totalSalesPrice} Tsh</td>
                            </tr>
                           
                            </tbody>
                          </table>
                        </div>
                        <!-- /.col -->
                      </div>
                      <!-- /.row -->
        
                      <div class="row">
                       
                        <!-- /.col -->
                        <div class="col-6">
                          <p class="lead">Inventory Current Status</p>
        
                          <div class="table-responsive">
                            <table class="table">
                              <tbody>
                              <tr>
                                <th>Total Products Remained:</th>
                                <td>${totalProducts}</td>
                              </tr>
                              <tr>
                                <th>Total Price in Stock:</th>
                                <td>${totalPrice} Tsh</td>
                              </tr>
                             
                            </tbody></table>
                          </div>
                        </div>
                        <!-- /.col -->
                      </div>
                      <!-- /.row -->
        
                      <!-- this row will not appear when printing -->
                      
                    </div>
      
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </div>
            </div>`;

            monthlyReportHolder.insertAdjacentHTML( 'beforeend', report );

      })
      })
      })
      })
        



        // console.log(report);
        
    }


    const Weekly = () => {
      var today = new Date();
      var lastweek = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     
      lastweek.setDate(lastweek.getDate()-7);

      fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => {

      fetch('http://localhost:3000/api/sales')
    .then(response => response.json())
    .then(sales => {

      fetch('http://localhost:3000/api/orders')
    .then(response => response.json())
    .then(orders => {

      fetch('http://localhost:3000/api/inventories')
    .then(response => response.json())
    .then(inventories => {

     var weekInventories = inventories.filter(function(inv) {
          return  new Date(inv.createdAt) < today && new Date(inv.createdAt) > lastweek;
        })
       
        var weekorders = orders.filter(function(order) {
          return  new Date(order.createdAt) < today && new Date(order.createdAt) > lastweek;
        })

        var weeksales = sales.filter(function(sale) {
          return  new Date(sale.createdAt) < today && new Date(sale.createdAt) > lastweek;
        })

        var weekproducts = products.filter(function(product) {
          return  new Date(product.createdAt) < today && new Date(product.createdAt) > lastweek;
        })

        var totalweekPrice = 0;
        var totalPrice = 0;
        var totalProducts = 0;
        var totalSalesPrice = 0;
        var totalweekProducts = 0;
        var totalweekProductPrice = 0;
        products.forEach(prod => {
         var inveRecord = inventories.filter(function(inve) {
            return  inve.ProductId == prod.id;
          })

          totalPrice += Number(inveRecord[0].TotalPrice);
          totalProducts += Number(inveRecord[0].quantity) * Number(inveRecord[0].TotalPrice);
          
        });


        weekproducts.forEach(prod => {
          var inveRecord = inventories.filter(function(inve) {
             return  inve.ProductId == prod.id;
           })
           totalweekProducts += Number(inveRecord[0].quantity) * Number(inveRecord[0].TotalPrice);
           totalweekProductPrice += Number(inveRecord[0].TotalPrice);
           
         });
       

        weeksales.forEach(sal => {
          totalSalesPrice += Number(sal.Product.price);
          
        });
        
            console.log(totalSalesPrice);
            
              
            const weeklyReportHolder =  document.getElementById('weekly');

            var report = `<div class="row">
            <div class="col-12">
              <div class="card bg-default">
                <div class="card-header bg-default">
                  <h3 class="card-title">Monthly</h3>
      
                  <div class="card-tools bg-default">
                    <div class="input-group input-group-sm" style="width: 150px;">
      
                      <div class="input-group-append">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /.card-header -->
                
                <div class="card-body table-responsive p-0" >
                  <div class="invoice p-3 mb-3">
                    <!-- title row -->
                    <div class="row">
                      <div class="col-12">
                        <h4>
                          <i class="fa fa-houzz nav-icon" aria-hidden="true"></i> Inventory
                          <small class="float-right">Date: ${date}</small>
                        </h4>
                      </div>
                      <!-- /.col -->
                    </div>
                    <!-- info row -->
                    <div class="row invoice-info">
                      <div class="col-sm-4 invoice-col">
                        From Date: ${lastweek}
                        <address>
                          <strong>Inventory</strong><br>
                          Sales Records<br>
                          Products Added<br>
                          Orders Issued<br>
                        
                        </address>
                      </div>
                      <!-- /.col -->
                      <div class="col-sm-4 invoice-col">
                        To Date: ${today}
                        <address>
                          <strong>Inventory</strong><br>
                          Sales Records<br>
                          Products Added<br>
                          Orders Issued<br>
                        </address>
                      </div>
                      <!-- /.col -->
                     
                      <!-- /.col -->
                    </div>
                    <!-- /.row -->
      
                    <!-- Table row -->
                    <div class="row">
                      <div class="col-12 table-responsive">
                        <table class="table table-striped">
                          <thead>
                          <tr>
                            <th></th>
                            <th>Record Type</th>
                            <th>No Records</th>
                          
                            <th>Value in Money</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>1</td>
                            <td>Sales</td>
                            <td>${weeksales.length}</td>
                            <td>${totalSalesPrice} Tsh</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Products</td>
                            <td>${weekorders.length}</td>
                            <td>${totalweekProductPrice} Tsh</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Orders</td>
                            <td>${weekorders.length}</td>
                            <td> ${totalSalesPrice} Tsh</td>
                          </tr>
                         
                          </tbody>
                        </table>
                      </div>
                      <!-- /.col -->
                    </div>
                    <!-- /.row -->
      
                    <div class="row">
                     
                      <!-- /.col -->
                      <div class="col-6">
                        <p class="lead">Inventory Current Status</p>
      
                        <div class="table-responsive">
                          <table class="table">
                            <tbody>
                            <tr>
                              <th>Total Products Remained:</th>
                              <td>${totalProducts}</td>
                            </tr>
                            <tr>
                              <th>Total Price in Stock:</th>
                              <td>${totalPrice} Tsh</td>
                            </tr>
                           
                          </tbody></table>
                        </div>
                      </div>
                      <!-- /.col -->
                    </div>
                    <!-- /.row -->
      
                    <!-- this row will not appear when printing -->
                    
                  </div>
    
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
          </div>`;

          weeklyReportHolder.insertAdjacentHTML( 'beforeend', report );

    })
    })
    })
    })
      



      // console.log(report);
      
  }

    Monthly();
    Weekly();
    window.print();
}