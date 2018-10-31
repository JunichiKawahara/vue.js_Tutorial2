Vue.directive('my_focus', {
    inserted: function(el) {
        el.focus()
    }
})

new Vue({
    el: '#app',
    directives: {
        focus: {
            inserted: function(el) {
                el.value = "test"
            }
        }
    }
})
