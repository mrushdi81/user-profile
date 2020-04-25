new Vue({
    el: '#app',
    // define data - initial display text
    data: {
        search:'',
        show:false,
        m1: "Chips Dropdowen Vue js",
        list:[
            {id:0,sl:false,name:'Egypt',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/100px-Flag_of_Egypt.svg.png'},
            {id:1,sl:false,name:'Kuwait',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/100px-Flag_of_Kuwait.svg.png'},
            {id:2,sl:false,name:'Jordan',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/100px-Flag_of_Jordan.svg.png'},
            {id:3,sl:false,name:'Tunisia',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/100px-Flag_of_Tunisia.svg.png'},
            {id:4,sl:false,name:'Morocco',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/100px-Flag_of_Morocco.svg.png'},
            {id:5,sl:false,name:'United Arab Emirates',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/100px-Flag_of_the_United_Arab_Emirates.svg.png'},
            {id:6,sl:false,name:'Saudi Arabia',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/100px-Flag_of_Saudi_Arabia.svg.png'},
            {id:7,sl:false,name:'Syria',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/100px-Flag_of_Syria.svg.png'},
            {id:8,sl:false,name:'Yemen',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/100px-Flag_of_Yemen.svg.png'}
    
    
    
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