<template>
  <div>
        <h1>Slots</h1>

        <div class="title">
            <slot name="title"></slot>
        </div>

        <slot name="text"></slot>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title {

}
</style>