<template>
    <div>
        <!-- <div>App</div> -->
        <router-view/>
        <FooterGuide v-show="$route.meta.is"></FooterGuide>
    </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {reqFoodCategorys} from './api'
export default {
  components: {
    FooterGuide
  },
    mounted() {
      const resu=reqFoodCategorys()
      console.log(1)
    }
}
</script>
<style>

</style>
