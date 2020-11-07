<template>
  <v-app id="inspire" light>
    <v-row>
      <v-sheet
        light
        class="text-center layout-side mx-auto mx-md-1 d-none d-md-flex flex-md-column justify-space-between"
      >
        <div class="mt-3 mt-md-10 pa-2 brand">
          <div class="display-2 font-weight-bold primary--text">Playerize</div>
          <div class="title my-2">For teams!</div>
        </div>

        <img class="w-full" src="../../assets/undraw_fans_gr54.svg" />
      </v-sheet>
      <div class="pa-2 pa-md-4 flex-grow-1 align-center justify-center d-flex flex-column">
        <div class="layout-content w-full ma-auto">
            <slot/>
        </div>
      </div>
    </v-row>
  </v-app>
</template>
<style scoped lang="scss">
.layout-side {
  width: 450px;
}
.theme--light.v-application {
  background: #f2f5f8;
  color: rgba(0, 0, 0, 0.87);
}
.w-full {
  width: 100%;
}
.layout-side {
  div.brand {
    min-height: 300px;
  }
  img {
    padding: 30px;
  }
}
.layout-content {
  max-width: 450px;
}
</style>