const app = Vue.createApp({
    data () {
        return{
            intro: 'Velkommen til min Vue Template',
            animals: [],
            category: '',
            age: '',
            price: ''
        }
    },
    mounted () {
        axios
          .get('http://localhost:5200/api/Animal')
          .then(response => (this.animals = response.data))
    },
    methods: {
        postanimal() {

            axios.post('http://localhost:5200/api/Animal', {
                category: this.category,
                age: this.age,
                price: this.price
            }).then(response => {
                this.animals.push(response.data)
                this.category = '',
                this.age = '',
                this.price = ''
            })
        }
    },
    computed: {

    }
})