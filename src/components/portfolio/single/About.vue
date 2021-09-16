<template>
  <h2>About</h2>
  <p>
    {{ item.content }}
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
    perspiciatis, eligendi laudantium quam sapiente cum autem. Iure fugit
    assumenda nam nobis. Nisi alias aspernatur magni. Beatae molestiae saepe
    ipsa cum.
  </p>
</template>

<script>
export default {
  name: "About",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
