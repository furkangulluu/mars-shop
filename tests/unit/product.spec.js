import Vue from 'vue'
import Product from '@/components/pages/product/Product'

describe('Product.vue', () => {
  it('Should list products', () => {
    const container= document.createElement('Product');
    const ProductComponent= Vue.extend(Product);
    const vm=new ProductComponent({
      propsData:{
        products:[
          { id:1, name:'coffee', image:'coffee.png', price:29.90 },
          { id:2, name:'shampoo', image:'shampoo.png', price:39.90 }
        ]
      }
    })
    vm.$mount(container);

    expect(vm.products.length).toEqual(2);
    expect(vm.$el.querySelectorAll('.p-card').length).toEqual(2);
    
  })
})
