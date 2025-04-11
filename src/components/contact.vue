<template>
    <div id="contact" class="text-white">
        <div class="grid grid-cols-3 gap-4 h-full w">
            <div class="flex flex-col justify-center align-middle">
                <h1 class="text-9xl text-gray-400 text-center">Reach</h1>
                <h1 class="text-9xl text-white text-center">Me</h1>
                <h1 class="text-9xl text-white text-center">through</h1>
            </div>
            <div class="flex flex-col justify-center col-span-2">
                <div class="grid grid-cols-2 gap-5 p-16 w-2/3">
                        <a href="tel:+919746517722" class="text-black hover:underline text-3xl">
                            <div class="rounded-lg bg-gray-300 h-32 button-pop flex items-center justify-center">
                                    <img width="50" src="/src/assets/icons/phone.svg" alt="Phone" />
                            </div>
                        </a>
                        <a href="mailto:ajaychitambaran@gmail.com" class="text-black hover:underline text-3xl">
                            <div class="rounded-lg bg-gray-300 h-32 button-pop flex items-center justify-center">
                                    <img width="50" src="/src/assets/icons/email.svg" alt="Email" />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/ajaychitambaran/" target="_blank" class="text-black hover:underline text-3xl">
                            <div class="rounded-lg bg-gray-300 h-32 button-pop flex items-center justify-center">
                                    <img width="50" src="/src/assets/icons/linkedin.svg" alt="linkedIn" />
                            </div>
                        </a>
                        <a href="https://github.com/Ajay-the-dev" target="_blank" class="text-black hover:underline text-3xl">
                            <div class="rounded-lg bg-gray-300 h-32 button-pop flex items-center justify-center">
                                <img width="50" src="/src/assets/icons/github.svg" alt="github" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/ajay_the_dev/profilecard/?igsh=dTY1MGJpYTc5NDAy" target="_blank" class="text-black hover:underline text-3xl">
                            <div class="rounded-lg bg-gray-300 h-32 button-pop flex items-center justify-center">
                                <img width="50" src="/src/assets/icons/instagram.svg" alt="instagram" />
                            </div>
                        </a>
                        <div class="rounded-lg bg-gray-300 h-32 button-pop flex items-center justify-center" @click="resumeDownload">
                            <img width="50" src="/src/assets/icons/resume.svg" alt="Resume" />
                        </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="text-center text-gray-400 py-4">
        <p>&copy; {{ getYear }} My Portfolio by <a href="https://github.com/Ajay-the-dev" target="_blank">Ajay-the-dev</a> . All rights reserved.</p>
    </footer>
</template>

<script>

import {computed} from 'vue';

export default {
    name: 'Contact',
    // Add any necessary data, methods, or lifecycle hooks here
    setup() {


            const getYear = computed(() => {
                const currentYear = new Date().getFullYear();
                return currentYear;
            });

            const openFileInNewTab = (filePath) => {
                window.open(filePath, '_blank');
            };

            const resumeDownload = ()=>{
              console.log('downloading'); 

                    openFileInNewTab('/src/assets/Ajay_C.pdf');
            };

            return {
                getYear,resumeDownload
            };

    }
    
}
</script>

<style scoped>
#contact {
    /* Add your custom styles here */
    height: 97vh;
    width: 100vw;
}

.button-pop:hover{
    transform: scale(1.010);
    background-color: #99a1af;
}

</style>