<template>
    <div id="projects" class="p-36">
        <div id="cursorCircle" class="fixed w-8 h-8 bg-white rounded-full pointer-events-none z-50 transition-all duration-75 opacity-30"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 text-white pointer-events-auto">
            <div>
                <h2 class="text-8xl text-gray-600">MY</h2>
                <br>
                <h2 class="text-8xl">PROJECTS</h2>
            </div>
            <div>
                <h2 class="text-6xl text-gray-50">ACADEMIC PROJECTS</h2>
                <ul class="list-disc">
                    <li class="mt-4 text-2xl text-gray-400 ml-8" >SWORD MAIL</li>
                    <span >Spam Detection in Email using Content Analysis – A smart filtering system that identifies spam emails by scanning their content, including text patterns, embedded links, and images. This approach goes beyond traditional filters by analyzing the body of the email for hidden or deceptive content, ensuring more accurate detection and better email security.</span>
                    <li class="mt-4 text-2xl text-gray-400 ml-8">GLUCO</li>
                    <span>Gluco is a user-friendly mobile application designed to help individuals track and manage their blood glucose levels effectively. The app allows users to log their glucose readings and receive personalized health suggestions based on their data trends and lifestyle inputs.</span>
                </ul>
                <br>
                <br>
                <h2 class="text-6xl text-gray-50">OTHER PROJECTS</h2>
                <ul class="list-disc">
                    <li class="mt-4 text-2xl text-gray-400 ml-8">LINWAYS AMS</li>
                    <span>Linways AMS is a cloud-based Academic Management System designed to streamline and automate the academic workflows of educational institutions. The platform enables administrators, faculty, and students to efficiently manage everything from curriculum planning and assessments to attendance tracking and reporting — all in one centralized system.</span>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import CubeScene from './cube.vue'
import { computed } from 'vue';
export default {
  name: "Projects",
  components: {
    CubeScene
  },
  setup() {

    document.addEventListener('mousemove', (e) => {
        const cursor = document.getElementById('cursorCircle');
        cursor.style.left = `${e.clientX - 16}px`; // center the circle (half width)
        cursor.style.top = `${e.clientY - 16}px`;
        });

        

  },
  data() {
    return {
       
    }
  },
  methods: {
    

    
  }
};
</script>

<style scoped>
#projects {
    /* Add your custom styles here */
    height: 97vh;
    width: 100vw;
    font-color: white;
}



</style>