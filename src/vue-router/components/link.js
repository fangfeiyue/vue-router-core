export default {
  props:{
      to:{
          type:String,
          required:true
      },
      tag:{
          type:String
      }
  },
  render(h){
      const tag = this.tag || 'a';
      const handler = ()=>{
          this.$router.push(this.to);
      }
      return <tag onClick={handler}>{this.$slots.default}</tag>
  }
}
