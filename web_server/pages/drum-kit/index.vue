<template>
    <div class="container__fluid">
        <nuxt-link class="return" to="/dashboard">
            <AppIcon iconName="ph:arrow-bend-up-left-bold" iconSize="medium" /> <span>Back to Dashboard</span>
        </nuxt-link>
        <h2>DrumKit</h2>
        <section class="drum-parts">
            <div v-for="part in drumParts">
                <div class="drum-parts__part" :class="part.play ? 'active' : ''" @click="playSound(part.sound)">
                    
                    <AppIcon :iconName="part.icon" iconSize="huge" />

                    <p>
                        <strong>
                            {{ part.letter }}
                        </strong>
                        <span>
                            Plays {{ part.name }}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

    const drumParts = reactive([
        {letter: 'W',name: 'Hi-Hat',key:"KeyW", sound: "/drum-kit/sounds/hi-hat.mp3", icon: 'arcticons:drumon', play: false},
        // {letter: 'E',name: 'Hi-Hat Closed', key:"KeyE", sound: "/drum-kit/sounds/hi-hat-closed.mp3", icon: 'arcticons:drumon', play: false},
        {letter: 'T',name: 'Crash', key:"KeyT", sound: "/drum-kit/sounds/crash.mp3", icon: 'arcticons:drumon', play: false},
        {letter: 'R',name: 'Ride', key:"KeyR", sound: "/drum-kit/sounds/ride.mp3", icon: 'arcticons:drumon', play: false},
        {letter: 'S',name: 'Snare', key:"KeyS", sound: "/drum-kit/sounds/snare.mp3", icon: 'emojione-monotone:drum', play: false},
        {letter: 'Space',name: 'Bass', key:"Space", sound: "/drum-kit/sounds/bass.mp3", icon: 'emojione-monotone:drum', play: false},
        {letter: 'G',name: 'Small Tom', key:"KeyG", sound: "/drum-kit/sounds/small-tom.mp3", icon: 'emojione-monotone:drum', play: false},
        {letter: 'H',name: 'Medium Tom', key:"KeyH", sound: "/drum-kit/sounds/medium-tom.mp3", icon: 'emojione-monotone:drum', play: false},
        {letter: 'J',name: 'Floor Tom', key:"KeyJ", sound: "/drum-kit/sounds/floor-tom.mp3", icon: 'emojione-monotone:drum', play: false},
    ])

    const keyPressed = ref(null)

    function playSound(sound){
        const audio = new Audio(sound);
        audio.play() 
    }

    
    onMounted(() => {
        window.addEventListener("keyup", function(e){
            for (let i=0; i < drumParts.length; i++) {
                if (drumParts[i].key == e.code) { 
                    drumParts[i].play = true
                    const audioKey = new Audio(drumParts[i].sound);
                    audioKey.play()
                    setTimeout(function() {
                    drumParts[i].play = false
                    }, 0.1 * 1000);
                }
            }
        })

    });


    definePageMeta({
        layout: 'blank',
        middleware: ["auth"]
    })
</script>

<style lang="scss" scoped>
    .container__fluid{
        display: grid;
        place-items: center;
        min-height: 100vh;
        background-color: #372d2e;
        .return{
            padding: 20px;
            color: #ffe9e9;
            position: fixed;
            left: 0;
            top: 0;
            @media (max-width: $br_mobile){
                span{
                    display: none;
                }
            }
            &:hover{
                color: #ff1346;
            }
        }
        h2{
            color: #ff1346;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            @media (max-width: $br_mobile){
                flex-direction: row;
            }
        }
        .drum-parts{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            flex-wrap: wrap;
            @media (max-width: $br_mobile){
                grid-template-columns: repeat(2, 1fr);
            }

            &__part{
                cursor: pointer;
                border: 2px solid #665858;
                border-radius: 12px;
                padding: 20px;
                transition: all 0.2s ease;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                min-height: 200px;
                color: #ffe9e9;
                @media (max-width: $br_mobile){
                    padding: 12px;
                    min-height: auto;
                }
                p{
                    text-align: center;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    @media (max-width: $br_mobile){
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 8px;
                    }
                    strong{
                        border-radius: 8px;
                        background-color: #ffe9e9;
                        font-size: 20px;
                        padding: 12px;
                        min-width: 48px;
                        text-align: center;
                        color: #372d2e;
                        @media (max-width: $br_mobile){
                            display: none;
                        }
                    }
                }
                &.active, &:active{
                    border-color: #ff1346;
                    transform: scale(1.2);
                    color: #ff1346;
                    strong{
                        background-color: #ff1346;
                    }
                }
            }
        }

    }
</style>