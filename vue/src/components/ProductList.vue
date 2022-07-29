<template>
  <div>
    <div class="list-items" v-for="product in products" :key="product.id">
      <label>
        <input type="checkbox"
               class="delete-checkbox"
               :value="product.id"
               v-model="check"
               @change="checked">
        <div>
          {{ product.sku }}<br>
          {{ product.name }}<br>
          {{ product.price }} $<br>
          {{ product.dimension }}: {{ product.value }}
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required:true
    }
  },
  data () {
    return {
      check: []
    }
  },
  methods: {
    checked() {
      this.$emit('selected', this.check);
    }
  }
}
</script>

<style scoped>
.list-items {
  margin: 15px;
  padding: 10px;
  border: 3px solid black;
  width: 10%;
  height: 7em;
  display: inline-block;
  text-align: center;
}
</style>