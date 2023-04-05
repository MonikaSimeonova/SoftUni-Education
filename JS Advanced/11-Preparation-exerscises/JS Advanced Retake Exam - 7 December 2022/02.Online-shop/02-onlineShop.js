class OnlineShop {

  constructor(warehouseSpace) {
      this.warehouseSpace = Number(warehouseSpace);
      this.products = [];
      this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
      if (spaceRequired > this.warehouseSpace) {
          throw new Error('Not enough space in the warehouse.');
      }
      const productObj = {
          product,
          quantity
      }
      this.products.push(productObj);
      // console.table(this.products);
      this.warehouseSpace -= quantity;
      return `The ${product} has been successfully delivered in the warehouse.`
  };

  quantityCheck(product, minimalQuantity) {
      let check = false;
      for (const obj of this.products) {
          if (obj.product == product) {
              check = true;
          };
      };
      if (!check) {
          throw new Error(`There is no ${product} in the warehouse.`);
      };

      if (minimalQuantity <= 0) {
          throw new Error('The quantity cannot be zero or negative.')
      };

      for (const obj of this.products) {
          if (minimalQuantity <= obj.quantity && obj.product == product) {
              return `You have enough from product ${product}.`
          } else if (obj.product == product) {
              const difference = minimalQuantity - obj.quantity;
              obj.quantity = minimalQuantity;
              return `You added ${difference} more from the ${product} products.`
          }
      };


  };

  sellProduct(product) {
      let check = false;
      for (const obj of this.products) {
          if (obj.product == product) {
              check = true;
              obj.quantity--;
              const salesObj = {
                  product: product,
                  quantity: 1
              }
              this.sales.push(salesObj);
              return `The ${product} has been successfully sold.`
          };
      };
      if (!check) {
          throw new Error(`There is no ${product} in the warehouse.`);
      };
  };

  revision() {
      if (this.sales.length == 0) {
          throw new Error("There are no sales today!")
      } else {
          let resultArr = [`You sold ${this.sales.length} products today!`,
              'Products in the warehouse:',];

              for (const product of this.products) {
                  resultArr.push(`${product.product}-${product.quantity} more left`);
              }
          return resultArr.join('\n')
      }
  }
}
