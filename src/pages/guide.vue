<template>
  <section>
    <article id="intro">
      <v-waypoint @waypoint-in="waypointInHandler('intro')"></v-waypoint>
      <!-- TODO `header` of the `article`? -->
      <h1>Introduction</h1>
    </article>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <article id="theming">
      <v-waypoint @waypoint-in="waypointInHandler('theming')"></v-waypoint>
      <!-- TODO `header` of the `article`? -->
      <h1>Theming</h1>
    </article>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <article id="guideline">
      <v-waypoint @waypoint-in="waypointInHandler('guideline')"></v-waypoint>
      <!-- TODO `header` of the `article`? -->
      <h1>Guideline</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae molestias in numquam molestiae atque. Fuga, amet, nam? Omnis dolorum ab cum officia iste laborum esse nihil, nesciunt, harum architecto inventore voluptates deserunt necessitatibus rem! Inventore, totam! Error esse quidem exercitationem, eveniet accusantium!</p>
    </article>
  </section>
</template>

<script>
  export default {
    methods: {
      waypointInHandler(anchor) {
        this.$emit('waypoint', { anchor });
      },
    },
  };
</script>
