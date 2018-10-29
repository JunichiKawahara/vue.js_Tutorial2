var app = new Vue({
    el: '#app',
    data: {
        message: 'Vue.js!',
        messageObject: {
            value: 'Hello Vue.js'
        },
        list: ['りんご', 'ばなな', 'いちご'],
        num: 1,

        count: 0,

        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',

        classObject: {
            child: true,
            'is-active': false
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        },

        radius: 50
    },
    methods: {
        increment: function() {
            this.count += 1
        },
        resetCounter: function() {
            this.count = 0
        }
    }
})
