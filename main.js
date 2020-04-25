new Vue({
    el: '#app',
    // define data - initial display text
    data: {
        search:'',
        show:false,
        m1: "You got to let me know",
        list:[
            {id:0,sl:false,name:'Egypt'},
            {id:1,sl:false,name:'Kuwait'},
            {id:2,sl:false,name:'Jordn'},
            {id:3,sl:false,name:'Tuniis'},
            {id:4,sl:false,name:'Moroco'},
            {id:5,sl:false,name:'United arabic'},
            {id:6,sl:false,name:'Saudia'},
            {id:7,sl:false,name:'syria'},
            {id:8,sl:false,name:'Yeaman'}
    
    
    
    ]
    },
    computed:{
        filter: function () {
            return this.list.filter(list => list.sl == true);

          },
          unfilter: function () {
            return this.list.filter(list => list.sl == false);

          },
          finallist(){
              var filtertxt=new RegExp(this.search,'i')
              
              return  this.unfilter.filter(m => m.name.match(filtertxt))
              
          }
    },
    methods:{
        unCheck(id){
            this.list[id].sl=false
            this.show=true
        },
        onChange(){
            if (this.finallist.length>=1) {
                 this.show=true
            }else{
                this.show=false 
            }
           
            
        }
        ,
        
    }
})