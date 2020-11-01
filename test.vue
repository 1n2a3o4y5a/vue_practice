<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <div id="app">{{message}}</div>
    <button v-on:click=reverseMessage>反転</button>


    <script>
        new Vue ({
            el: "#app",
            data: {
                message: "hello world"
            },
            methods: {
                reverseMessage: function() {
                    this.message = this.message.split('').reverse().join('')
                }
            }
        })
    </script>
</body>
</html>