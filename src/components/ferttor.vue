<template>
  <div class="hello">
    <div class="hert">
      <div class="left" @click="ret">×</div>
      <div class="reight">预约信息</div>
    </div>
    <div class="main">
      <div class="main-xm" @click="ass" v-for="(v,i) of list" :key="i">
        <div class="pei">
          <div class="p1">{{v.name}}</div>
          <div class="p2">{{v.add}}</div>
        </div>
        <div class="pei-2">
          <div>{{v.btn}}</div>
          <div style="color:#4dv.addc1f3;font-weight: 600;">{{v.footer}}</div>
        </div>
      </div>
    </div>

    <button @click="btn">再次预约</button>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [
        {
          name: "8月3号",
          add: "09:00",
          btn: "问诊人",
          footer: "王刚",
        },
        {
          name: "8月3号",
          add: "10:00",
          btn: "问诊人",
          footer: "王刚",
        },
        {
          name: "8月3号",
          add: "14:00",
          btn: "问诊人",
          footer: "王刚",
        },
        {
          name: "8月3号",
          add: "16:00",
          btn: "问诊人",
          footer: "王刚",
        },
      ],
    };
  },
  props: {
    msg: String,
  },
  components: {
    [Button.name]: Button,
  },
  methods: {
    btn() {
      this.$router.push("./");
    },
    ret() {
      this.$router.go(-1);
    },
    ass() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="scss">
.hert {
  width: 100%;
  display: flex;
  height: 3rem;
  background: linear-gradient(to right, #51a7fb, #4dc1f3);
  color: #fff;
  line-height: 3rem;
  margin-bottom: 2rem;
  .left {
    font-size: 2.4em;
    margin-left: 20px;
  }
  .reight {
    width: 70%;
    text-align: center;
    margin-left: 20px;
  }
}
body,
html {
  overflow: hidden;
}
button {
  width: 60%;
  border: none;
  background-image: linear-gradient(to right, #51a7fb, #4dc1f3);
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 20%;
  height: 2.5em;
  // margin-top: 90%;
  color: #fff;
}
.main-as {
  width: 100%;
  margin-left: 20px;

  .main-sa {
    margin-bottom: 10px;
    width: 90%;
    font-size: 12px;
  }
  .text {
    width: 90%;
    height: 6em;
  }
}
.main {
  width: 100%;
  margin-left: 20px;
  .main-xm {
    width: 90%;
    height: 5em;
    border: 1px solid #b3b3b3;
    border-radius: 5px;
    line-height: 2em;
    margin-bottom: 1em;
    color: #4d4d4d;
    .pei {
      width: 90%;
      text-align: center;
      display: flex;
      color: #4dc1f3;
      font-weight: 600;
      margin-left: 17px;
      border-bottom: 1px solid #b3b3b3;
      font-size: 14px;
      margin-bottom: 15px;
      .p1 {
        margin-right: 15px;
      }
    }
    .pei-2 {
      padding: 0 17px;
      display: flex;
      justify-content: space-between;
    }
  }
  .main-qw {
    width: 90%;
    .p1 {
      font-size: 12px;
      margin: 0;
    }
    .p2 {
      font-size: 12px;
      margin: 0;
      margin-left: 24px;
    }
  }
}
.hello {
  width: 100%;
  // background: #fff;
}
</style>
