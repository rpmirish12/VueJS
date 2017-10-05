new Vue({
  el: '#exercise',
  data: {
      attachHighlight: false,
      attachShrink: false,
      color: 'class_color',
      background: 'class_background',
      border: 'class_border',
      bar: 'class_bar',
      effectClasses: {
        highlight: false,
          shrink: true
        },

  float: 'float',
  userClass: '',
  isVisible: true,
  myStyle: {
  width: '100px',
    height: '150px',
    backgroundColor: 'gray'
  },
  progressBar: {
    width: '0px',
    backgroundColor: 'red',
    height: '16px',
    margin: '2px'
  }
},

  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        if(!vm.attachHighlight){
          vm.attachHighlight = true,
          vm.attachShrink = false
        }
        else{
          vm.attachHighlight = false,
          vm.attachShrink = true
        }
      },2000);
    },

    startProgress: function(){
      var vm = this;
      var width = 0;
      setInterval(function(){
        width = width + 10;
        if(width < 198){
          vm.progressBar.width = width + 'px';
        }
        else{
          width = 198;
          vm.progressBar.width = 198;
        }
      }, 1000);
    }
  }
});
