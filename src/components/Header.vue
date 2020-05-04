<template lang="pug">
  #header(class="columns")
    div(class="column is-3")
      img(:src="headerData.logoSrc")
    div(class="column is-6")
      div(class="form-control")
        input(class="input" type="text" :placeholder="headerData.textPlaceholder")
    div(class="column is-3")
      div(class="columns")
        div(class="column is-7 header-user")
          span(class="pt-10 has-text-right") {{ headerData.userName }}
        div(class="column is-5 header-avatar")
          figure(class="image is-30x30")
            img(class="is-rounded" :src="headerData.userImg")

      
    
    
</template>

<script>
export default {
  name: "Header",
  props: {
    headerData: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
#header {
  height: 72px;
  width: 1024px;
  background: #FFF;
  box-shadow: -6px 3px 25px #b3b3b3;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  display: flex;
  width: 100%;
  padding: 14px;
  justify-content: space-between;
}
.is-30x30 {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-top: -8px;
  margin-right: -559px;
}
.header-avatar {
  margin-top: 3px;
}
.header-user {
  margin-top: 8px;
}
</style>