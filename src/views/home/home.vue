<template>
  <div class="home">
    <div class="banner-text"> 
        <div class="about-agileinfo">
          <el-col :sm="24" :md="10" >
            <div class="about-left ">
              <img src="../../assets/images/banner.jpg" class="img-responsive" alt=""/>
            </div>
          </el-col>
          <el-col :sm="24" :md="14" >
            <div class="about-right wthree">
              <h3>Hi, i'm <span>Zuke Ding </span></h3>
              <h4>Web Developer </h4>
              <ul class="address">
                <li>
                  <ul class="agileits-address-text ">
                    <li><b>D.O.B :</b></li>
                    <li> 17-05-1992</li>
                  </ul>
                </li>
                <li>
                  <ul class="agileits-address-text">
                    <li><b>PHONE : </b></li>
                    <li> 152 232 93876</li>
                  </ul>
                </li>
                <li>
                  <ul class="agileits-address-text">
                    <li><b>ADDRESS :</b></li>
                    <li> Chongqing</li>
                  </ul>
                </li>
                <li>
                  <ul class="agileits-address-text">
                    <li><b>E-MAIL :</b></li>
                    <li> dingzuke2012@163.com</li>
                  </ul>
                </li>
                <li>
                  <ul class="agileits-address-text">
                    <li><b>WEBSITE :</b></li>
                    <li> www.ding51.cn/home</li>
                  </ul>
                </li>
              </ul>  
            </div> 
          </el-col>
        </div> 
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuActive: false
    }
  },
  activated:function(){
    this.$emit('isChange',{"title":"Home"});
  },
  methods: {
    changeAct(){
      !this.menuActive;
    }
  }
}
</script>

<style scoped>
    .home{
        margin-top:60px; 
    }
    .about-agileinfo{
      max-width: 1200px;
      display: block;
      margin: 0 auto;
    }
    .about-left  .img-responsive{
      border: 20px solid #eee;
      width: 60%;
      margin: 0 auto;
      display: block;
    }
    .about-right{
      margin: 0 20px;
    }
    .about-right h3{
      font-size: 2.5em;
      color: #999;
    }
    .about-right h3 span {
        color: #4378ff;
    }
    .about-right h4 {
        font-size: 1.1em;
        color: #a5a5a5;
        margin-top: 1em;
        letter-spacing: 2px;
    }
    ul{
      margin: 0;
      padding:0;
    }
    ul.address {
        margin-top: 1.5em;
        border-top: 1px dashed rgba(96, 125, 139, 0.38);
        padding-top: 0.5em;
    }
    ul.address li {
        display: block;
    }
    ul.address li ul.agileits-address-text li {
        display: inline-block;
        font-size: 1.1em;
        color: #999;
        margin-top: 1.5em;
        font-weight: 100;
    }
</style>
