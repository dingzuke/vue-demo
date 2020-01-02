<template>
  <div class="poject">
    myproject
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuActive: false
    }
  },
  activated:function(){
    this.$emit('isChange',{"title":"Projects"});
  },
  methods: {
    changeAct(){
      !this.menuActive;
    }
  }
}
</script>

<style scoped>
    
</style>
