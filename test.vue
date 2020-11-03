<template>
    <div id="app">
        <p>{{number}}回クリック</p>
        <button v-on:click="plus">クリック</button>
        <p v-on:mousemove="change">aaaaaaaaaaaaaa
            <span v-on:mousemove.stop>jjjjjjjjjjjjjjjjjj</span>
        </p>
        <p>x:{{x}} y:{{y}}</p>

        <input type="text" @keydown.enter="myAlert">
    </div>
</template>

<script>
Vue.config.devtools = true;

        new Vue ({
            el: "#app",
            data: {
                number: 0,
                x: 0,
                y: 0,
            },
            methods: {
                plus: function() {
                    this.number = this.number + 1
                },
                change: function(event) {
                    this.x = event.clientX;
                    this.y = event.clientY;
                },
                myAlert: function () {
                    alert("アラート");
                }
            }
        })
    </script>