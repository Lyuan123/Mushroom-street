<template>
  <div style="height:700px;" class="asd">
      <!-- 页面头部start -->
    <div class="header">
        <div class="left">
            <span class="left-one"></span>
            <span class="left-two">|</span>
            <span class="left-three"></span>
        </div>
        <div class="center">新农重器租赁</div>
        <div class="right">
            <span class="right-one"></span>
            <span class="right-two">|</span>
            <span class="right-three"></span>
        </div>
    </div>
    <!-- 页面头部end -->
        <!-- 搜索模块start -->
    <div class="search">
        <div class="search-left">北京</div>
        <span class="search-one"></span>
        <span class="sx"></span>
        <span class="search-two"></span>
        <div class="search-right">
            <input type="text" placeholder="想租什么机器?" />
        </div>
    </div>
    <!-- 搜索模块end -->

    <!-- 测导航栏模块start -->
    <div class="banner">
        <ul class="subnav-entry">
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon"></span>
                    <span>全部机器</span>
                </a>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon"></span>
                    <span>新上</span>
                </a>
            </li>
            <li>
              <router-link to="/ihave">
                <a href="# ">
                    <span class="subnav-entry-icon"></span>
                    <span>我要出租</span>
                </a>
                </router-link>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon"></span>
                    <span>无息分期</span>
                </a>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon"></span>
                    <span>政府补贴</span>
                </a>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon"></span>
                    <span>小金卡</span>
                </a>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon"></span>
                    <span>小金卡</span>
                </a>
            </li>
            <li>
                <a href="# ">
                    <span class="subnav-entry-icon"></span>
                    <span>小金卡</span>
                </a>
            </li>
        </ul>
    </div>
    <!-- 结束end -->

    <!-- tab栏切换start -->
    <div class="box">
        <ul class="cutter">
            <li>
                <span>猜你喜欢</span>
                <span style="font-size:14px;position: relative;top: -3px;">根据搜索历史</span>
            </li>
            <li>
                <span>必看好机器</span>
                <span style="font-size:14px;position: relative;top: -3px;">超高性价比</span>
            </li>
            <li>
                <span>业主自荐</span>
                <span style="font-size:14px;position: relative;top: -3px;">业主力推机器</span>
            </li>
        </ul>
        <div class="triangle"></div>
    </div>
    <!-- tab栏切换end -->

    <!-- 页面中部start -->
    <div class="middle">
        <div class="middle-left">
            <div class="middle-one">区域</div>
            <div class="middle-two">方式</div>
            <div class="middle-three">租金</div>
            <div class="middle-four">筛选</div>
        </div>
        <div class="middle-right"></div>
    </div>

    <!-- 页面中部end -->

    <!-- 底部start -->
    <div class="picture">
        <div class="picture-left">
            <img src="./images/backdrop.jpg" alt="" />
        </div>
        <div class="picture-right">
            <ul>
                <li>
                    <a href="javascript:;">
                        <span style="
                  display: inline-block;
                  width: 80px;
                  height: 20px;
                  line-height: 20px;
                  text-align: center;
                  background-color: red;
                  color: #fff;
                ">必看好机器</span
              >
              <span style="font-weight: 700; font-size: 15px">整租</span>
                    </a>
                </li>
                <li>
                    <span>待到春来九月八，我花开后百花杀</span>
                </li>
                <li>
                    <span>业主自荐</span>
                    <span>九成新</span>
                    <span>集中发货</span>
                </li>
                <li style="color: red">3100元/月</li>
            </ul>
        </div>
        <div class="love"></div>
    </div>
    <!-- 第二个 -->
    <div class="picture">
        <div class="picture-left">
            <img src="./images/backdrop.jpg" alt="" />
        </div>
        <div class="picture-right">
            <ul>
                <li>
                    <a href="javascript:;">
                        <span style="
                  display: inline-block;
                  width: 80px;
                  height: 20px;
                  line-height: 20px;
                  text-align: center;
                  background-color: red;
                  color: #fff;
                ">必看好机器</span
              >
              <span style="font-weight: 700; font-size: 15px">整租</span>
                    </a>
                </li>
                <li>
                    <span>待到春来九月八，我花开后百花杀</span>
                </li>
                <li>
                    <span>业主自荐</span>
                    <span>九成新</span>
                    <span>集中发货</span>
                </li>
                <li style="color: red">3100元/月</li>
            </ul>
        </div>
        <div class="love"></div>
    </div>
    <!-- 底部end -->

    <!-- footer模块start -->
    <div class="footer">
        <img src="./images/footer.jpg" alt="" />
    </div>
    <div class="test">
        <p style="font-size: 24px; color: #fff">测测你的房子</p>
        <p style="font-size: 24px; color: #fff">能租多少钱</p>
        <p style="
          display: inline-block;
          width: 80px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #fff;
          border: 1px solid #fff;
        ">
            去测测
        </p>
    </div>
    <div class="boult"></div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default {

}
</script>

<style lang="scss" scoped>
.asd{
   font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei", STXihei, hei;
    color: #000;
}
 @font-face {
        font-family: "icomoon";
        src: url("fonts/icomoon.eot?j23wb9");
        src: url("fonts/icomoon.eot?j23wb9#iefix") format("embedded-opentype"), url("fonts/icomoon.ttf?j23wb9") format("truetype"), url("fonts/icomoon.woff?j23wb9") format("woff"), url("fonts/icomoon.svg?j23wb9#icomoon") format("svg");
        font-weight: normal;
        font-style: normal;
        font-display: block;
    }

* {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color: #222;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}


/* 页面头部模块 */

.header {
    display: flex;
    height: 30px;
    margin-top: 20px;
}

.left {
    display: flex;
    flex: 0 0 auto;
    width: 90px;
    border-radius: 10px;
    margin-left: 5px;
    border: 1px solid #000;
}

.header .left span {
    display: block;
    font-family: "icomoon";
    font-size: 20px;
}

.left-one,
.left-two,
.left-three {
    text-align: center;
    line-height: 30px;
}

.left-one {
    flex: 1;
}

.left-two {
    flex: 1;
    color: #ececec;
    margin-top: -3px;
}

.left-three {
    flex: 1;
}

.center {
    flex: 1 1 auto;
    line-height: 30px;
    text-align: center;
    color: #000;
    font-weight: 700;
    font-size: 20px;
}

.right {
    display: flex;
    flex: 0 0 auto;
    width: 90px;
    border-radius: 20px;
    margin-right: 5px;
    border: 1px solid #000;
}

.header .right span {
    display: block;
    font-family: "icomoon";
    font-size: 20px;
}

.right-one,
.right-two,
.right-three {
    text-align: center;
    line-height: 30px;
}

.right-one {
    flex: 1;
}

.right-two {
    flex: 1;
    color: #ececec;
    margin-top: -3px;
}

.right-three {
    flex: 1;
}


/* 搜索模块 */

.search {
    display: flex;
    width: 325px;
    height: 45px;
    background-color: #fff;
    margin-top: 10px;
    margin-left: 20px;
    box-shadow: 10px 10px 10px 10px #f5f5f5;
}

.search-left {
    flex: 0 0 auto;
    width: 70px;
    line-height: 45px;
    text-align: center;
}

.search-one {
    font-family: "icomoon";
    display: inline-block;
    margin-top: 13px;
    margin-left: -16px;
}

.sx {
    float: left;
    margin-top: 14px;
    width: 1px;
    height: 20px;
    background-color: #818181;
    margin-left: 14px;
}

.search-two {
    font-family: "icomoon";
    display: inline-block;
    margin-top: 15px;
    margin-left: 26px;
}

.search-right {
    flex: 1 1 auto;
    line-height: 45px;
    text-align: center;
}

input {
    border: none;
    outline: medium;
}

input:-moz-placeholder {
    color: #818181;
}


/* 测导航栏 */

.banner {
    margin-top: 7px;
}

.subnav-entry {
    display: flex;
    border-radius: 8px;
    background-color: #fff;
    margin: 0 4px;
    flex-wrap: wrap;
    padding: 5px 0;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
}

.subnav-entry li {
    flex: 25%;
}

.subnav-entry a {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subnav-entry-icon {
    width: 28px;
    height: 28px;
    background-color: pink;
    margin-top: 4px;
    background: url(./images/subnav-entry.png) no-repeat -1px -3px;
    background-size: 28px auto;
}


/* tab栏切换模块 */

.box {
    width: 92%;
    height: 50px;
    margin-top: 25px;
    margin-left: 10px;
}

.cutter {
    display: flex;
}

.cutter li {
    flex: 1;
    border: 1px solid;
    height: 50px;
    margin-left: 10px;
}

.cutter li span:nth-child(2) {
    color: #9e9e9e;
}

.cutter span {
    display: inline-block;
    text-align: center;
    margin-left: 15px;
}

.triangle {
    margin-left: 50px;
    width: 0;
    border: 10px solid;
    border-color: #333 transparent transparent transparent;
}


/* 页面中部 */

.middle {
    display: flex;
    height: 55px;
    margin-top: 20px;
    border-bottom: 1px solid #000;
}

.middle-left {
    flex: 1 1 auto;
    display: flex;
}

.middle-one,
.middle-two,
.middle-three,
.middle-four {
    line-height: 55px;
    text-align: center;
}

.middle-one {
    flex: 1;
}

.middle-two {
    flex: 1;
}

.middle-three {
    flex: 1;
}

.middle-four {
    flex: 1;
}

.middle-right {
    font-family: "icomoon";
    font-size: 20px;
    flex: 0 0 auto;
    width: 30px;
    height: 55px;
    line-height: 55px;
    text-align: center;
}


/* 底部模块 */

.picture {
   display: flex;
    width: 90%;
    height: 85px;
    margin-left: 20px;
    margin-top: 20px;
}

.picture-left {
    flex: 0 0 auto;
}

.picture-left img {
    width: 110px;
}

.picture-right {
    flex: 1 1 auto;
    margin-left: 15px;
}

.love {
    font-family: "icomoon";
    margin-top: 62px;
}


/* footer模块 */

.footer {
    width: 96%;
    height: 130px;
    margin-left: 10px;
}

.footer img {
    width: 100%;
    height: 130px;
}

.test {
    margin-top: -115px;
    margin-left: 40px;
}

.boult {
    font-family: "icomoon";
    margin-top: -25px;
    margin-left: 192px;
    color: #fff;
}
</style>