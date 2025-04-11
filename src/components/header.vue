<template>

<nav id="head" class="flex items-center justify-between p-4 bg-black text-white">
    <div class="left-0 w-1/3 sticky">
        <p class="text-xl text-white font-bold" @click="changeLocation('home')">Ajay Chitambaran</p>
    </div>
    
    <div class="w-1/3 text-middle sticky"> 
            <button class="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded text-left" @click="changeLocation('about')">About</button>
            <button class="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded ml-3" @click="changeLocation('projects')">Projects</button>
            <button class="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded ml-3 text-right" @click="changeLocation('contact')">Contact</button>
    </div>
    <div class="w-1/3 sticky">
        &nbsp;
        <!-- to do night mode button -->
    </div>
</nav>
</template>

<script>
export default {
    name: 'Header',
    // Add any necessary logic or data properties here
    methods: {
        changeLocation:function(toLocation)
        {
            // console.log(toLocation);
            this.$emit('changeLocation', toLocation);
        }
    },
}
</script>

<style scoped>
/* Add your custom styles for the header component here */
.text-middle{
    vertical-align: middle;
    text-align: center;
}

.zoom:hover {
    transform: scale(0.1);
    transition: transform 0.4s;
}

#head {
    position: sticky;
    top: 0;
    left: 0;
    height: 7vh;
}


</style>