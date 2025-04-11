<template>
    <div class="grid grid-flow-col grid-rows-3 gap-4 text-white" id="aboutMe">
        <div class="row-span-2 min-h-full flex flex-col justify-center ml-8">
            <span class="text-6xl text-gray-600">EXPERIENCE</span>
            <br>
            <span class="text-8xl">{{ getExperience.years }} YEARS</span>
            <br>
            <span class="text-8xl">{{ getExperience.months }} MONTHS</span>
        </div>
        <div class="row-span-2 min-h-full flex flex-col justify-center ml-8 w-11/12">
            <span class="text-6xl text-gray-600">WHO AM I ?</span>
            <p class="text-lg text-gray-300 p-4">
                    I'm <strong>Ajay C</strong>, a Software Developer based in Kerala, India with experience working at Linways Technologies. I specialize in building robust full-stack web solutions using PHP, Vue.js, and Node.js, and have hands-on experience with CI/CD (Jenkins), RESTful APIs, and cloud-native technologies like Docker and Kubernetes.
                </p>
                <br>
                <p class="text-lg text-gray-300 p-4">
                    I’m a problem solver at heart, always eager to learn and apply the latest practices in software development, from Agile methodologies to DevOps culture. My educational background in Information Technology supports my work with a solid understanding of computer science fundamentals.
                </p>
                <br>
                <p class="text-lg text-gray-300 p-4">
                    My journey into tech started with a Diploma in Computer Engineering from Government Polytechnic College, Shoranur, and later a B.Tech in Information Technology from Government Engineering College, Idukki. I currently work as an Associate Developer at Linways Technologies, where I build robust web solutions and contribute to projects using PHP, Vue.js, and Jenkins for continuous integration.
                </p>
                <br>
        </div>
        <div>
            <div class="row-span-2 min-h-full flex flex-col ml-8">
                 <span class="text-6xl text-gray-600">SKILLS</span>
                    <div class="rounded-lg bg-white p-4 mt-4 overflow-hidden w-11/12 p-4">
                        <div class="flex animate-slide-left whitespace-nowrap" @mouseenter="stopSlide" @mouseleave="slideImages">
                            <template v-for="n in 2">
                                <img
                                v-for="img in skills"
                                :key="img + n"
                                class="h-12 mx-4"
                                :src="'/src/assets/icons/' + img + '.svg'"
                                :alt="img"
                                :title="img"
                                />
                            </template>
                        </div>
                    </div>
            </div>
        </div>

  
        <!-- <div class="col-span-2 min-h-full flex flex-col justify-center ml-8">
            <div class="ml-6">
                <p class="text-lg text-gray-300 px-20">
                    I'm <strong>Ajay C</strong>, a Software Developer based in Kerala with experience working at Linways Technologies. I specialize in building robust full-stack web solutions using PHP, Vue.js, and Node.js, and have hands-on experience with CI/CD (Jenkins), RESTful APIs, and cloud-native technologies like Docker and Kubernetes.
                </p>
                <br>
                <p class="text-lg text-gray-300 px-20">
                    I’m a problem solver at heart, always eager to learn and apply the latest practices in software development, from Agile methodologies to DevOps culture. My educational background in Information Technology supports my work with a solid understanding of computer science fundamentals.
                </p>
                <br>
                <p class="text-lg text-gray-300 px-20">
                    My journey into tech started with a Diploma in Computer Engineering from Government Polytechnic College, Shoranur, and later a B.Tech in Information Technology from Government Engineering College, Idukki. I currently work as an Associate Developer at Linways Technologies, where I build robust web solutions and contribute to projects using PHP, Vue.js, and Jenkins for continuous integration.
                </p>
                <br>
                <p class="text-lg text-gray-300 px-20">
                    From creating a mobile app like Gluco, which helps users manage sugar intake, to developing a spam detection system using machine learning, I’m always exploring new technologies and ideas that solve real-world problems.      
                </p>
            </div>
        </div> -->
  
        <!-- <div class="col-span-2 row-span-2 flex items-center justify-center">
            03
        </div> -->
</div>
</template>

<script>

import CubeScene from './cube.vue'
import { computed } from 'vue';
export default {
  name: "AboutMe",
  components: {
    CubeScene
  },
  setup() {

        const currentDate = new Date();
        const joiningDate = new Date('2022-07-04');

        const getExperience = computed(() => {
            const diffInMonths = (currentDate.getMonth() - joiningDate.getMonth()) + 12 * (currentDate.getFullYear() - joiningDate.getFullYear());
            const years = Math.floor(diffInMonths / 12);
            const months = diffInMonths % 12;

            return { years, months };
        });

        return {
            getExperience
        };

  },
  data() {
    return {
        bio: "I am a passionate software developer with a love for creating innovative solutions. I have experience in various programming languages and frameworks, and I enjoy learning new technologies.",
        skills: [
            "bootstrap",
            "docker",
            "javascript",
            "jenkins",
            "jquery",
            "linux",
            "mysql",
            "node",
            "php",
            "postman",
            "vue",
            "python",
            "rest_api",
            "html",
            "css",
            "github"
        ],
        joiningDate: "2022-07-04"
    }
  },
  methods: {
    slideImages() {
        const slider = document.querySelector('.animate-slide-left');
        if (slider) {
            slider.style.animationPlayState = 'running';
        }
    },
    stopSlide() {
        const slider = document.querySelector('.animate-slide-left');
        if (slider) {
            slider.style.animationPlayState = 'paused';
        }
    }

    
  }
};
</script>

<style scoped>
#aboutMe {
    /* Add your custom styles here */
    height: 97vh;
    width: 100vw;
    font-color: white;
}

.skills-container {
    display: none;
}

/* #aboutMe:hover .skills-container {
    display: block;
}


@keyframes slideLeft {
    0% { transform: translateX(0); }
    10% { transform: translateX(-10%); }
    20% { transform: translateX(-20%); }
    30% { transform: translateX(-30%); }
    40% { transform: translateX(-40%); }
    50% { transform: translateX(-50%); }
    60% { transform: translateX(-60%); }
    70% { transform: translateX(-70%); }
    80% { transform: translateX(-80%); }
    90% { transform: translateX(-90%); }
    100% { transform: translateX(-100%); }
}

.animate-slide-left {
    display: inline-block;
    animation: slideLeft 0s linear infinite;
} */

@keyframes slideLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-slide-left {
  animation: slideLeft 30s linear infinite;
}

</style>