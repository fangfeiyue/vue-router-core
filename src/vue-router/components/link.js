export default {
  props:{
      to:{
          type:String,
          required:true
      },
      tag:{
          type:String,
          // tag默认是a标签
          default: 'a'
      }
  },
  render(h){
      const tag = this.tag || 'a';
      const handler = ()=>{
          this.$router.push(this.to);
      }
      return <tag onClick={handler}>{this.$slots.default}</tag>
      // return h(this.tag, {}, this.$slots.default)
  }
}
