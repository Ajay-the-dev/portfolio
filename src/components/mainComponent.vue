<template>
  <div id="main">
    <Header @change-location="gotoDiv" />
    <ThreeD></ThreeD>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <contact></contact>


  </div>
</template>

<script>
import Header from "./header.vue";
import ThreeD from "./threeD.vue";
import AboutMe from "./about.vue";
import Projects from "./projects.vue";
import Contact from "./contact.vue";




export default {
  name: "MainComponent",
  components: {
    Header,ThreeD,AboutMe,Projects,Contact
  },
  setup() {


    const gotoDiv = (toLocation) => {
      console.log(toLocation);

      switch (toLocation) {
        case 'about':
          const element = document.getElementById("aboutMe");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          };
          break;

        case 'home':
        const elementHome = document.getElementById("home");
          if (elementHome) {
            elementHome.scrollIntoView({ behavior: "smooth" });
          };
          break;
        case 'projects':
        const elementProject = document.getElementById("projects");
          if (elementProject) {
            elementProject.scrollIntoView({ behavior: "smooth" });
          };
          break;
        case 'contact':
        const elementContact = document.getElementById("contact");
          if (elementContact) {
            elementContact.scrollIntoView({ behavior: "smooth" });
          };
          break;

        default:
          break;
      }

      }

    return {
      gotoDiv,
    };

  }
};
</script>

<style scoped>

</style>
