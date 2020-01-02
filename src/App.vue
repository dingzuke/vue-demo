<template>
  <div id="app">
    <div class="header">
      <div class="banner container">
        <div class="logo">
          <img src="./assets/images/logo.png" class="img-responsive" alt=""/>
        </div>
        <div class="menu">
            <span :class="menuActive ? 'navicon navicon--active' : 'navicon'"  @click="menuActive=!menuActive"></span>
            <div class="toggle" v-show="menuActive">
              <ul>
                <li :class="[title=='Home' ? 'activMenu' : '']" @click="changeMenu('/')">Home</li>
                <li>Article</li>
                <li>Skills</li>
                <li :class="[title=='Projects' ? 'activMenu' : '']" @click="changeMenu('/projects')">My Projects</li>
              </ul>
            </div>
        </div>
      </div>
      <div class="baseInfo">
          <el-row class="lists">
              <el-col :md="8" :xs="24"><div class="infoList"><i class="el-icon-location-outline"></i>&nbsp;&nbsp;&nbsp;中国·武汉</div></el-col>
              <el-col :md="8" :xs="24"><div class="infoList"><i class="el-icon-message"></i>&nbsp;&nbsp;&nbsp;675129745@qq.com</div></el-col>
              <el-col :md="8" :xs="24"><div class="infoList"><i class="el-icon-phone-outline"></i>&nbsp;&nbsp;&nbsp;15223293876</div></el-col>
          </el-row>
          <span class="title">{{title}}</span>
      </div>
    </div>
    <keep-alive>
      <router-view @isChange="Change"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       title:"",
       menuActive: false
    }
  },
  methods: {
    Change:function(changeData){
        this.title = changeData.title
    },
    changeMenu(mue){
      this.menuActive = false;
      this.$router.push(mue)
    }
  }
}
</script>

<style >
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.banner{
  overflow: auto;
  margin: 0 20px;
  height: 98px;
}
.header{
    background: url('./assets/images/banner.jpg')no-repeat center 0px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    position: relative;
    color: #ffffff;
    height: 300px;
}
.header .logo{
  float: left;
  font-size: 3.5em;
  font-weight: 100;
  font-family: 'Roboto Condensed', sans-serif;
  font-style: italic;
}
.header .menu{
    margin-top: 2em;
    position: absolute;
    z-index: 9999;
    right: 15px;
}
.container{
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  position: relative;
  height: 100%;
}
.baseInfo{
  text-align: center;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  top: -160px;
}
.baseInfo .lists{
  height: 90px;
}
.baseInfo .infoList{
  font-size: 1.1em;
  display: inline-block;
  text-align: center;
  color: #fff;
  line-height: 30px;
}
.baseInfo .title{
  background: #1b2d52;
  color: #fff;
  margin-top: 22px;
  padding: 16px 40px;
  display: inline-block;
  font-size: 3em;
  font-weight: 400;
  text-transform: capitalize;
}
.menu .navicon {
    background: transparent;
    position: relative;
    height: 46px;
    width: 46px;
    display: block;
    z-index: 9999;
    -webkit-transition: linear 0.5s all;
    -moz-transition: linear 0.5s all;
	  -ms-transition: linear 0.5s all;
    -o-transition: linear 0.5s all;
    transition: linear 0.5s all;
	  outline: none;
    cursor: pointer;
}
.menu .navicon:before, .menu .navicon:after {
	background: #fff;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	content: "";
	height: 3px;
	left: 0;
	-webkit-transition: 0.8s all;
	-moz-transition: 0.8s all;
	-o-transition: 0.8s all;
	-ms-transition: 0.8s all;
	transition: 0.8s all;
	width: 45px;
} 
.menu .navicon:before {
	-moz-box-shadow: #fff 0 14px 0 0;
	-o-box-shadow: #fff 0 14px 0 0;
	-ms-box-shadow: #fff 0 14px 0 0;
	-webkit-box-shadow: #fff 0 14px 0 0;
	box-shadow: #fff 0 14px 0 0;
	position: absolute;
	top: 0;
} 
.menu .navicon:after {
	position: absolute;
	top: 28px;
} 
.menu .navicon--active { 
	-webkit-transition:0.5s all;
	-moz-transition:0.5s all; 
	-moz-transition:0.5s all; 
	-o-transition:0.5s all;
	transition:0.5s all;
} 
.menu .navicon--active:before {
	-moz-box-shadow: transparent 0 0 0 0;
	-ms-box-shadow: transparent 0 0 0 0;
	-o-box-shadow: transparent 0 0 0 0;
	-webkit-box-shadow: transparent 0 0 0 0;
	box-shadow: transparent 0 0 0 0;
	top: 15px !important;
	-webkit-transform: rotate(225deg);
	-ms-transform: rotate(225deg);
	-moz-transform: rotate(225deg);
	-o-transform: rotate(225deg);
	transform: rotate(225deg);
}
.menu .navicon--active:after {
	top: 15px !important;
	-webkit-transform: rotate(315deg);
	-ms-transform: rotate(315deg);
	-moz-transform: rotate(315deg);
	-o-transform: rotate(315deg);
	transform: rotate(315deg);
} 
.menu .toggle {
  position: absolute;
  opacity: 1;
  position: absolute;
  right: 0px;
  width: 170px;
  background-color: rgb(255, 255, 255);
  padding: 1em 2em;
}
.menu .toggle ul{
  padding: 0;
}
.menu .toggle ul li{
  text-decoration: none;
  color: #999;
  display: inline-block;
  text-align: center;
  font-size: 1.1em; 
  font-weight: 400;
  margin: 6px 0;
  position: relative;
	text-transform: uppercase;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
	-o-transition: 0.5s all;
	-ms-transition: 0.5s all;
  transition: 0.5s all;
  display: block;
  margin: 1em auto;
  text-align: center;
  cursor: pointer;
}
.menu .toggle ul .activMenu{
    color: #4378ff;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    font-weight: 700;
}
.menu .toggle ul li:hover{
    color: #4378ff;
    font-weight: 700;
}
</style>
