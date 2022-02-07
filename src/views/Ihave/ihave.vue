<template>
  <div class="asd">
         <!-- 页面头部start -->
    <div class="header">
        <div class="left">
            <span class="left-one" @click="$router.back(-1)"></span>
            <span class="left-two">|</span>
            <span class="left-three"></span>
        </div>
        <div class="center">我要出租</div>
        <div class="right">
            <span class="right-one"></span>
            <span class="right-two">|</span>
            <span class="right-three"></span>
        </div>
    </div>
    <!-- 页面头部end -->

    <!-- 测试模块start -->
    <div class="test">
        <p>测测你的机器</p>
        <p>能租多少钱</p>
    </div>

    <div class="choose">
        <div class="on">
            <div class="choose-left">机器名称</div>
            <span></span>
            <div class="choose-right">请选择</div>
        </div>
        <div class="on">
            <div class="choose-left">机器类型</div>
            <span></span>
            <div class="choose-right">请选择</div>
        </div>
        <div class="on">
            <div class="choose-left">机器大小</div>
            <span></span>
            <div class="choose-right">请选择</div>
        </div>
        <div class="on">
            <div class="choose-left">机器保险</div>
            <span></span>
            <div class="choose-right">请选择</div>
        </div>
        <div class="on">
            <div class="choose-left">填写更多信息，精准估价</div>
            <span></span>
            <div class="choose-right" style="padding-right:14px">立即填写</div>
        </div>
        <div class="under">看看预估租金</div>
    </div>
    <!-- 测试模块end -->

    <!-- 页面底部start -->
    <div class="footer">
        <div class="box-bd">
            北京租赁机器行情
            <span>订阅</span>
        </div>
        <div class="box-hd">
            <div class="cover-one">
                <div class="cover-left">260</div>
                <div class="cover-right">
                    <p class="cover">短缺</p>
                    <p class="knot">套</p>
                </div>
            </div>
            <div class="cover-one">
                <div class="cover-left">4.1</div>
                <div class="cover-right">
                    <p class="cover" style="margin-left:25px">较多</p>
                    <p class="knot">万人</p>
                </div>
            </div>
            <div class="cover-one">
                <div class="cover-left">400</div>
                <div class="cover-right">
                    <p class="cover">热门</p>
                    <p class="knot">套</p>
                </div>
            </div>
        </div>
        <div class="price">
            <div class="price-one">
                <span>在租机器</span>
                <span></span>
            </div>
            <div class="price-two">
                <span>在租机器</span>
                <span></span>
            </div>
            <div class="price-three">
                <span>在租机器</span>
                <span></span>
            </div>
        </div>
        <div class="scarce">
            <div class="scarce-one">
                <span>机器稀缺</span>
                <span>快速预定</span>
            </div>
            <div class="scarce-one">
                <span>机器稀缺</span>
                <span>快速预定</span>
            </div>
            <div class="scarce-one">
                <span>机器稀缺</span>
                <span>快速预定</span>
            </div>
        </div>
    </div>
    
    <!-- 页面底部end -->
  </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
export default {

}
</script>

<style lang="scss" scoped>
  @font-face {
            font-family: "icomoon";
            src: url("../profile/fonts/icomoon.eot?j23wb9");
            src: url("../profile/fonts/icomoon.eot?j23wb9#iefix") format("embedded-opentype"), url("../profile/fonts/icomoon.ttf?j23wb9") format("truetype"), url("../profile/fonts/icomoon.woff?j23wb9") format("woff"), url("../profile/fonts/icomoon.svg?j23wb9#icomoon") format("svg");
            font-weight: normal;
            font-style: normal;
            font-display: block;
        }
.asd {
    font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei", STXihei, hei;
    color: #000;
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


/* 测试模块 */

.test p {
    margin-top: 20px;
    margin-left: 10px;
    font-size: 24px;
    color: #000;
}

.choose {
    position: relative;
    width: 93%;
    height: 345px;
    margin-left: 15px;
    border: 1px solid #000;
    background-color: #fefefe;
}

.on {
    display: flex;
}

.on span {
    position: absolute;
    margin-left: 363px;
    margin-top: 13px;
    font-size: 18px;
    color: #a6a6a6;
    font-family: "icomoon";
}

.choose-left {
    flex: 1 1 auto;
    height: 50px;
    margin-left: 20px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid #a6a6a6;
}

.choose-right {
    flex: 0 0 auto;
    width: 95px;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    color: #a6a6a6;
    border-bottom: 1px solid #a6a6a6;
}

.under {
    position: absolute;
    width: 90%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background-color: #2e71f4;
    border-radius: 10px;
    margin-left: 18px;
    margin-top: 20px;
}


/* 页面底部模块 */

.footer {
    width: 93%;
    height: 150px;
    border: 1px solid #000;
    margin-top: 20px;
    margin-left: 15px;
}

.box-bd {
    margin-top: 15px;
    margin-left: 15px;
    font-size: 20px;
    font-weight: 700;
}

.box-bd span {
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: block;
    margin-left: 250px;
    margin-top: -27px;
    font-size: 15px;
    font-weight: 400;
    color: #476dc0;
    border: 1px solid #476dc0;
}

.box-hd {
    display: flex;
    margin-top: 20px;
}

.cover-one {
    flex: 1;
    height: 50px;
    display: flex;
    /* flex-wrap: wrap; */
}

.cover-left {
    flex: 1;
    line-height: 50px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
}

.cover-right {
    flex: 1;
}

.cover {
    width: 30px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 10px 10px 10px 0;
    background-color: #de6351;
    color: #fff;
    margin-left:17px;
}

.knot {
    display: block;
    margin-top: -8px;
}

.price {
    display: flex;
}

.price-one {
    flex: 1;
}

.price-two {
    flex: 1;
}

.price-three {
    flex: 1;
}

.price-one,
.price-two,
.price-three span {
    font-family: "icomoon";
    padding-left: 10px;
}

.scarce {
    display: flex;
    margin-top: 20px;
    width: 99%;
    height: 65px;
}

.scarce-one:hover {
    background-color: #2e71f4;
    color: #fff;
}

.scarce-one {
    flex: 1;
    margin-left: 4px;
    border: 1px solid #000;
}

.scarce-one span {
    text-align: center;
    display: block;
    position: relative;
    top: 35%;
    transform: translateY(-50%);
}
</style>