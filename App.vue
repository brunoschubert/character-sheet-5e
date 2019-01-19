<template>
  <v-app id="app" class="window">
    <v-container grid-list-xl fluid>
      <v-layout fill-height align-center justify-center row wrap>
        <!-- LEFT ROW -->
        <v-flex d-flex xs12 md3 fill-height>
          <v-layout row wrap>
            <!-- Character Header -->
            <v-flex d-flex xs12 fill-height class="charInfo">
              <v-card color="#bae1ff"></v-card>
              <!-- component -->
            </v-flex>
            <!-- Saves -->
            <v-flex d-flex xs12 fill-height class="saves">
              <v-card color="#baffc9"></v-card>
              <!-- component -->
            </v-flex>
            <!-- Proficiencies -->
            <v-flex d-flex xs12 fill-height class="proficiencies">
              <v-card color="#ffdfba"></v-card>
              <!-- component -->
            </v-flex>
          </v-layout>
        </v-flex>
        <!-- RIGHT ROW -->
        <v-flex d-flex xs12 md9 fill-height>
          <v-layout row wrap>
            <!-- Attributes -->
            <v-flex d-flex xs12 fill-height class="attributes">
              <v-card color="#ffb3ba"></v-card>
              <!-- component -->
            </v-flex>
            <!-- Skills -->
            <v-flex d-flex xs12 md3 fill-height class="skill">
              <v-card color="#ffffba"></v-card>
              <!-- component -->
            </v-flex>
            <!-- INNER RIGHT ROW -->
            <v-flex d-flex xs12 md9 class="innerRow">
              <v-layout row wrap>
                <!-- Combat Stats-->
                <v-flex d-flex xs12 fill-height class="stats">
                  <v-card color="#ffffba"></v-card>
                  <!-- component -->
                </v-flex>
                <!-- Feats -->
                <v-flex d-flex xs12 class="feats" fill-height>
                  <v-card color="#bae1ff"></v-card>
                  <!-- component -->
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
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
  max-height: 30%;
}
.saves {
  max-height: 25%;
}
.proficiencies {
  max-height: 45%;
}
.attributes {
  max-height: 20%;
}
.skill {
  max-height: 80%;
}
.stats {
  max-height: 45%;
}
.feats {
  max-height: 55%;
}
</style>