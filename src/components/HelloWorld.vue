<template>
  <div class="hello">
    <header>
      <img src="../assets/header.jpg" alt />
    </header>
    <div id="main">
      <div class="main-content" v-for="(item,index) in list" :key="index">
        <div class="main-left">
          <img :src="item.image" />
        </div>
        <div class="main-hot">
          <div class="hot">
            <p class="p1">
              <span class="span1">{{item.name}}</span>
              <span class="span2">{{item.ys}}</span>
            </p>
            <p class="p2">{{item.zr}}</p>
            <p class="p3">
              <span>{{item.nr}}</span>
              <i></i>
            </p>
          </div>
        </div>
        <div class="main-right">
          <button @click="add(item)">我要预约</button>
        </div>
      </div>
      <div class="img">
        <img src="../assets/footer.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  data() {
    return {
      list: [
        {
          image: require("../assets/ys.jpg"),
          name: "刘旭",
          ys: "主任医师",
          zr: "上海市胸科医院二级教授、博导",
          nr: "让看病方便",
        },
        {
          image: require("../assets/liubaodong.jpg"),
          name: "曹江",
          ys: "副主任医师",
          zr: "上海市长海医院博士生导师",
          nr: "让看病方便",
        },
        {
          image: require("../assets/lan.jpg"),
          name: "孙健",
          ys: "副主任医师",
          zr: "上海市新华医院硕士生导师",
          nr: "让看病方便",
        },
        {
          image: require("../assets/jianghao.jpg"),
          name: "郭志福",
          ys: "副主任医师 副教授",
          zr: "上海长海医院心血管内科副主任医师",
          nr: "让看病方便",
        },
        {
          image: require("../assets/ys.jpg"),
          name: "胡坚",
          ys: "主治医师",
          zr: "上海胸科医院外科主任",
          nr: "让看病方便",
        },
      ],
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    [Button.name]: Button,
  },
  methods: {
    add(item) {
      console.log(item.name);
      this.$router.push({
        name: "Home",
        query: {
          name: item.name,
        },
      });
    },
    ret() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
header {
  width: 100%;
  // height: 12.8rem;
  // border: 1px solid #000;
  // background-image: url(../assets/header.jpg);
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
  position: absolute;
  z-index: 5;
  top: 0;
  img {
    width: 100%;
    height: 100%;
  }
}
#main {
  width: 100%;
  overflow: auto;
  top: 8rem;
  position: absolute;
  z-index: 10;
  // bottom: 2rem;
  .img {
    img {
      width: 100% !important;
    }
  }

  .main-conten {
    width: 90%;
    height: 118px;
    border-bottom: 1px solid #efefef;
    margin: 0 auto;
    display: flex;
    .main-left {
      width: 24%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60px;
        height: 78px;
        background: #ccc;
      }
    }
    .main-ho {
      width: 175px;
      height: 100%;
      // border: 1px solid #000;

      .hot {
        margin-top: 25px;
        .p1 {
          margin: 0;
          .span1 {
            color: #3293fb;
            letter-spacing: 6px;
            font-size: 20px;
            margin-right: 11px;
          }
          .span2 {
            color: #000;
            font-size: 14px;
          }
        }
        .p2 {
          margin: 0;
          font-size: 12px;
          color: #858585;
          letter-spacing: 2px;
        }
        .p3 {
          margin: 0;
          display: flex;
          span {
            font-size: 14px;
            color: #42bdf2;
            margin-top: 5px;
            margin-right: 3px;
          }
          i {
            width: 50px;
            height: 28px;
            background: url(../assets/xinwenzhen.jpg);
            background-repeat: no-repeat;
            background-size: 100%;
          }
        }
      }
    }
    .main-right {
      width: 24rem;
      height: 100px;
      text-align: center;
      button {
        width: 74px;
        height: 26px;
        font-size: 12px;
        color: #fff;
        background: #51a3fc;
        border: none;
        border-radius: 16px;
        position: relative;
        top: 45%;
      }
    }
  }
  .main-content {
    width: 90%;
    height: 118px;
    border-bottom: 1px solid #efefef;
    margin: 0 auto;
    display: flex;
    .main-left {
      width: 91px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60px;
        height: 78px;
        background: #ccc;
      }
    }
    .main-hot {
      width: 175px;
      height: 100%;
      // border: 1px solid #000;

      .hot {
        margin-top: 25px;
        .p1 {
          margin: 0;
          .span1 {
            color: #3293fb;
            letter-spacing: 3px;
            font-size: 20px;
          }
          .span2 {
            color: #000;
            font-size: 12px;
          }
        }
        .p2 {
          margin: 0;
          font-size: 12px;
          color: #858585;
          // letter-spacing: 2px;
        }
        .p3 {
          margin: 0;
          display: flex;
          span {
            font-size: 14px;
            color: #42bdf2;
            margin-top: 5px;
            margin-right: 3px;
          }
          i {
            width: 50px;
            height: 28px;
            background: url(../assets/xinwenzhen.jpg);
            background-repeat: no-repeat;
            background-size: 100%;
          }
        }
      }
    }
    .main-right {
      width: 79px;
      height: 100px;
      text-align: center;
      button {
        width: 74px;
        height: 26px;
        font-size: 12px;
        color: #fff;
        background: #51a3fc;
        border: none;
        border-radius: 16px;
        position: relative;
        top: 45%;
      }
    }
  }
}
</style>
