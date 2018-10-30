var app = new Vue({
    el: '#app',
    data: {
        test01: '',
        testString: '',
        value: 'test',
        textValue: 'This is Test',
        width: 800,
        height: 600
    },
    computed: {
        area: function() {
            return this.width * this.height
        },
        watchTarget: function() {
            return [this.width, this.height]
        }
    },
    watch: {
        test01: function(newValue, oldValue) {
            this.testString = oldValue + ' => ' + newValue
            console.log(this.testString)
        },
        textValue: _.debounce(function(newVal) {
            console.log(newVal)
        }, 500),
        watchTarget: function() {
            console.log('area = ' + this.area)
        }
    },
    created: function() {
        this.$watch('value', function(newVal, oldVal) {
            console.log(oldVal+ ' -> ' + newVal)
        }, {
            imediate: true
        }),
        this.$watch(function() {
            return [this.width, this.height]
        }, function() {
            console.log('width: ' + this.width + ', height: ' + this.height)
        })
    }
})