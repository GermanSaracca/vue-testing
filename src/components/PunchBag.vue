<template>
    <div class="punch-bag-game">
        <!-- bag image -->
        <div 
            id="bag" 
            :class="{burst: ended, punching: isPunching}" 
            @mousedown="punching"
            @mouseup="punchingOut"
        ></div>

        <!-- bag health -->
        <div id="bag-health">
            <div :style="{width: health + '%'}">
                <p>{{health}}%</p>
            </div>
        </div>

        <!-- game controls -->                              
        <div id="controls">
            <button v-show="!ended" @click="punch">Punch</button>
            <button @click="restart">Restart</button>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        health: 100,
        ended: false,
        isPunching: false,
    }),
    methods: {
        punch() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
                this.isPunching = false;
            }
        },
        punching() {
            this.punch();
            this.isPunching = true;
        },
        punchingOut() {
            this.isPunching = false;
        },
        restart() {
            this.health = 100;
            this.ended = false;
            
        },
    }
}
</script>

<style lang="scss" >
    .punch-bag-game {
        

        #bag {
            width: 200px;
            height: 500px;
            margin: 0 auto;
            background: url('../assets/bag.png') center no-repeat;
            background-size: 80%;
            cursor: pointer;

            &.burst {
                background-image: url('../assets/bag-burst.png');
                pointer-events: none;
            }
            &.punching {
                transform: scale(.9);
            }
        }
        #bag-health {
            width: 200px;
            border: 2px solid #000;
            margin: 0 auto 20px auto;
            position: relative;

            div {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
                font-weight: 600;
                background: crimson;

                p {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
        #controls {
            display: flex;
            gap: 1rem;
            margin: 0 auto;

            button {
                width: 100%;
                height: 40px;
                border: 2px solid #000;
                background: #fff;
                color: #000;
                font-size: 1.2rem;
                font-weight: bold;
                cursor: pointer;

                &:hover {
                    background: #000;
                    color: #fff;
                }
                &:active {
                    background: crimson;
                    color: #000;
                }
            }
        }
    }
</style>