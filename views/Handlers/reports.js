window.onload = (e) => { 



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

          var weekproducts = sales.filter(function(product) {
            return  new Date(product.createdAt) < today && new Date(product.createdAt) > lastweek;
          })

          console.log(weekorders);
          
                
                
      } )
      })
      })
      })
        

        const weeklyReportHolder =  document.getElementById('weekly');

        var report = `${date}`;

        // console.log(report);
        
        weeklyReportHolder.insertAdjacentHTML( 'beforeend', report );
    }

    Weekly();
}