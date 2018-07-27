new Vue({
    el: '#app',
    data: {
        title: 'BBBecoming a Vue ninja',
        name: 'Yossy',
        url: 'www.youtube.com',
        classes: ['test', 'test2'],
        wage: 10,
        coords: {
            x: 0,
            y: 0
        },
        showName: false,
        items: ['a', 'b', 'c']
    },
    methods: {
        greet(time) {
            return `Hello and good ${time}, ${this.name}, `
        },

        changeWage(amount) {
            this.wage += amount
        },

        logEvent(e) {
            console.log(e)
        },

        logCoords(e) {
            console.log(e.offsetX, e.offsetY)
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },

        updateName(e) {
            // console.log(e.target.value);
            this.name = e.target.value            
        },

        logMessage() {
            console.log('hello message')
        },

        toggleName() {
            this.showName = !this.showName
        }
    }
})