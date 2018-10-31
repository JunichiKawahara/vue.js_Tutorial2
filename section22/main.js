
Vue.component('my-component', {
    template: '<p>MyComponent</p>',
    data: function() {
        return {
            message: 'Hello Vue.js'
        }
    },
    methods: {

    }
})
var myLocalComponent = {
    template: '<p>My Local Component</p>'
}
var app = new Vue({
    el: '#app',
    components: {
        'my-local-component': myLocalComponent
    }
})
