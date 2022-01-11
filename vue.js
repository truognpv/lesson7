    let cpt =  {
    data: function(){
        return {
            test: 'Hello Viet Nam!!! ZDC to the moon',

        }
    },
   template: '<h1>Say: {{ test }} </br> <button @click="changeTest">Change It</button> </h1>',
    methods: {
        changeTest: function(){
            this.test = "to the moon!!!";
        }
    }
};
new Vue ({
    el: '#app',
    components: {
        'mycomponent' : cpt
    }

})
new Vue ({
    el: '#app2',
    components: {
        'mycomponent' : cpt
    }
})