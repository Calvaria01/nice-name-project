<template>
  <div>
    <h1>Product List</h1>

      <div class="buttons">
        <button @click="toAddPage">ADD</button>
        <button @click="deleteKeys">MASS DELETE</button>
      </div>
      <hr>
      <product-list
          :products="products"
          @selected="toDelete"/>
      <page-footer/>
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter";
import ProductList from "@/components/ProductList";
export default {
  components: {
    PageFooter, ProductList
  },
  data() {
    return {
      products: [],
      check: []
    }
  },
  methods: {
    toDelete(check) {
      this.check = check;
    },
    deleteKeys() {
      fetch('/delete-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.check)
      })
          .then(response => response.json())
          .then(products => this.products = products);
    },
    toAddPage() {
      document.location.href='/add-product';
    }
  },
  mounted() {
      fetch('/get-data')
        .then(response => response.json())
        .then(products => this.products = products);
  }

}
</script>

<style scoped>
.buttons {
  margin-left: 85%;
}
button {
  margin-right: 2em;
}
</style>