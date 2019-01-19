<template>
  <v-container class="window" grid-list-md fluid>
    <v-layout fill-height align-center justify-center row wrap>
      <!-- Character Header -->
      <v-flex d-flex xs12 class="charInfo" fill-height>
        <v-card color="#bae1ff">
          <!-- Component -->
        </v-card>
      </v-flex>
      <!-- Combat Stats -->
      <v-flex d-flex xs12 class="combatStats" fill-height>
        <v-card color="#baffc9">
          <!-- Component -->
        </v-card>
      </v-flex>
      <!-- Attributes | Saves - Submenu -->
      <v-flex d-flex xs12 class="subMenu" fill-height>
        <v-card color="#ffffba">
          <!-- Component -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "homeMobile",
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.window {
  max-height: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.charInfo {
  max-height: 20%;
}
.combatStats {
  max-height: 25%;
}
.subMenu {
  max-height: 55%;
}
</style>