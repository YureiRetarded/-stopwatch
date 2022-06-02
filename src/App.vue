<template>
  <navbar/>
  <div class="container">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar"
export default{
  components:{
    Navbar
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
</style>
