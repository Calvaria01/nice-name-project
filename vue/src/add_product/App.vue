<template>
  <h1>Product Add</h1>
  <div class="buttons">
    <button @click="save">Save</button>
    <button @click="toProdList">Cancel</button>
  </div>
  <hr>
  <form id="product_form" method="post">
    SKU: <input type="text" id="sku" name="sku"><div class="error">{{ errs.sku }}</div>
    <br><br>
    Name: <input type="text" id="name" name="name"><div class="error">{{ errs.name }}</div>
    <br><br>
    Price ($): <input type="text" id="price" name="price"><div class="error">{{ errs.price }}</div>
    <br><br>

    Type Switcher
    <select id="productType" form="product_form" v-model="selected">
      <option disabled value="">Type Switcher</option>
      <option>DVD</option>
      <option>Book</option>
      <option>Furniture</option>
    </select>
    <div class="error">{{ errs.productType }}</div>
    <div class="params">
      <div v-if="selected === 'Book'">
        Weight (KG): <input type="text" id="weight" name="weight"><div class="error">{{ errs.weight }}</div>
        <br><br>
        Please provide weight in KG
      </div>
      <div v-else-if="selected === 'DVD'">
        Size (MB): <input type="text" id="size" name="size"><div class="error">{{ errs.size }}</div>
        <br><br>
        Please provide size in MB format?
      </div>
      <div v-else-if="selected === 'Furniture'">
        <br>
        Height (CM): <input type="text" id="height" name="height"><div class="error">{{ errs.height }}</div>
        <br><br>
        Width (CM): <input type="text" id="width" name="width"><div class="error">{{ errs.width }}</div>
        <br><br>
        Length (CM): <input type="text" id="length" name="length"><div class="error">{{ errs.length }}</div>
        <br><br>
        Please provide dimensions in HxWxL format
      </div>
    </div>
  </form>
  <div>
    <page-footer/>
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter";
export default {
  components: {
    PageFooter
  },
  data() {
    return {
      selected: '',
      errs: {}
    }
  },
  methods: {
    save() {
      let form = new FormData(document.getElementById('product_form'));
      form.set('productType', this.selected);
      fetch('/save-product', {
        method: 'POST',
        body: form
      })
          .then(response => response.json())
          .then(response => response.isErr ? this.errs = response : document.location.href='/');
    },
    toProdList() {
      document.location.href='/';
    }
  }
}
</script>

<style scoped>
.params {
  padding-top: 20px;
}
.buttons {
  margin-left: 85%;
}
button {
  margin-right: 2em;
}
.error {
  font-size: 120%;
  display: inline-block;
  color: red;
  padding-left: 10px;
}
</style>