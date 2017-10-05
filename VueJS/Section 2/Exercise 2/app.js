new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function(){
                alert('Alert!');
            },
            storekey: function(event){
                this.value = event.target.value;
            }
        }
    });