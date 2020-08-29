new Vue({
    el:"#vue-app",
    data:{
        level:100,
        end:false

    },
    methods:{
        punch:function(){
            this.level-=10;
            if(this.level<=0){
                this.end=true;
            }
        },
        restart:function(){
            this.level=100;
            this.end=false;
        }      

    }
    
});