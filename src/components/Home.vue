<template>
  <div class="hello">
    <div class="hert">
      <div class="left" @click="clk">×</div>
      <div class="reight">{{ss}}主任医师在线问诊排班表</div>
    </div>
    <div class="list">
      <div class="list_x">
        <p class="sp1"></p>
        <p class="sp2">咨询日期：</p>
      </div>
      <div class="list_y">
        <div v-for="(v,i) of list" :key="i">
          <p>
            <label>
              <input name="Fruit" type="radio" value slot="label" />当前还可预约4人
            </label>
          </p>
          <span>{{v.name}}</span>
          <span>{{v.add}}</span>
        </div>
      </div>
    </div>
    <div class="home">
      <div class="home_x">
        <p class="sp1"></p>
        <p>个人信息：</p>
      </div>
      <div class="home_y">
        <p>为了防止因为信息不对称或错误导致误诊，请您如实填写！</p>
      </div>
      <div class="home_d">
        <div class="add">
          <input class="inp" type="text" placeholder="姓名" />
          <input class="inp" type="text" placeholder="手机号码" />
          <input class="inp" type="text" placeholder="身份证号" />
        </div>

        <div class="home_w">
          <p>是否本人</p>
          <van-radio-group v-model="radio" class="radio">
            <van-radio name="1">是</van-radio>
            <van-radio name="2">否</van-radio>
          </van-radio-group>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="home_x">
        <p class="sp1"></p>
        <p>咨询问题：</p>
      </div>
      <div class="main_x">
        <div class="layui-input-block">
          <textarea
            class="layui-textarea updateInst"
            style="height: 100px; width:80%; margin-top:8px; text-align:conter; font-size:14px; padding:0 20px; border-radius:10px;border:1px solid #B3B3B3;"
            id="academyDesc"
            name="academyDesc"
            lay-verify="required|describesVerify"
            placeholder="简要描述需要咨询的问题，方便医生了解情况"
            onkeyup="checkLength(this,'200')"
          ></textarea>
          <span style="float: right;margin-right: 40px;font-size:12px">
            <em>
              <span id="actual">0</span>
            </em> /
            <em>
              <span>50</span>
            </em>
          </span>
        </div>
        <div class="fet">
          <p class="p1">注：1、问诊时长>6分钟（视患者情况适当调整）</p>
          <p class="p2">2、可以选择固定坐诊日期</p>
          <p class="p2">3、替患者整理资料</p>
        </div>
      </div>
      <button @click="ass">￥500元 确定</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form } from "vant";
Vue.use(Form);
import { Button } from "vant";
import { RadioGroup, Radio } from "vant";
Vue.use(Radio);
Vue.use(RadioGroup);
export default {
  name: "HelloWorld",
  data() {
    return {
      radio: "1",
      list: [
        {
          name: "8月3号",
          add: "09:00",
        },
        {
          name: "8月8号",
          add: "11:00",
        },
        {
          name: "8月14号",
          add: "15:00",
        },
        {
          name: "8月17号",
          add: "17:00",
        },
      ],
      ss: this.$route.query.name,
    };
  },
  props: {
    msg: String,
  },
  components: {
    [Button.name]: Button,
  },
  methods: {
    ass() {
      this.$router.push("./Fome");
    },
    clk() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="scss">
#app {
  height: 100%;
}
.main {
  width: 100%;
  background: #fff;
  margin-top: 0.4rem;
  text-align: center;
  position: relative;
  height: 100%;
  button {
    width: 60%;
    border: none;
    background-image: linear-gradient(to right, #51a7fb, #4dc1f4);
    border-radius: 5px;
    height: 2.5em;
    color: #fff;
    z-index: 999;
    margin-top: 32px;
  }
  input {
    width: 80%;
    height: 5rem;
  }
  .fet {
    width: 100%;
    font-size: 12px;
    // flex-direction: column;
    // justify-content: center;
    // display: flex;
    margin: 0;
    padding: 0 20px;
    .p1 {
      margin: 0;
    }
    .p2 {
      margin: 0;
      display: flex;
      padding-left: 28px;
    }
  }
}
body,
html {
  padding: 0;
  margin: 0;
  .home_x {
    width: 100%;
    height: 2rem;
    line-height: 0.62rem;
    display: flex;
    .sp1 {
      width: 0.3rem;
      height: 1rem;
      margin-top: 12px;
      background-image: linear-gradient(to right, #51a7fb, #4dc1f3);
      margin-left: 1.22rem;
      margin-right: 0.4rem;
    }
  }
}
.home {
  width: 100%;
  background: #fff;
  .home_x {
    width: 100%;
    height: 2rem;
    line-height: 0.62rem;
    display: flex;

    .sp1 {
      width: 0.3rem;
      height: 1rem;
      margin-top: 12px;
      background: #4dc0f4;
      margin-left: 1.22rem;
      margin-right: 0.4rem;
    }
  }
  .home_y {
    margin-left: 1.1rem;

    p {
      margin: 0;
      font-size: 12px;
      color: #51a3fc;
    }
  }
  .home_d {
    width: 100%;
    height: 100%;
    .add {
      text-align: center;
      input {
        width: 70%;
        height: 2rem;
        border: none;
        border-bottom: 1px solid #ccc;
        padding: 0 1rem;
      }
    }
  }
  .home_w {
    display: flex;
    margin-left: 3.3rem;
    .py {
      margin-left: 2rem;
    }
    .radio {
      display: flex;
      letter-spacing: 6px;
      font-size: 15px;
    }
    .van-icon .van-icon-success {
      width: 20px;
      height: 20px;
    }
  }
}
.list {
  width: 100%;
  background: #fff;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  .list_x {
    width: 100%;
    height: 2rem;
    line-height: 0.62rem;
    display: flex;
    .sp1 {
      width: 0.3rem;
      height: 1rem;
      margin-top: 12px;
      background: #4dc0f4;
      margin-left: 1.22rem;
      margin-right: 0.4rem;
    }
  }
  .list_y {
    width: 100%;
    // height: 7rem;
    background: #fff;
    padding-bottom: 0.4rem;
    color: #4d4d4d;
    font-size: 14px;
    word-spacing: 30px;

    div {
      display: flex;
      padding: 0 30px;
      justify-content: space-between;
      align-items: center;
      p {
        margin: 0.2rem 0;
      }
      span {
        margin-left: 20px;
      }
    }
  }
}

.hello {
  width: 100%;
  background: #f3f5f4;
}
.hert {
  background-image: linear-gradient(to right, #51a7fb, #4dc1f4);
  width: 100%;
  display: flex;
  height: 3rem;
  line-height: 3rem;
  color: #fff;
  .left {
    width: 53px;
    height: 52px;
    font-size: 2.4em;
    font-weight: 400;
    margin-left: 20px;
  }
  .reight {
    text-align: center;
    margin-left: 20px;
    font-weight: 600;
  }
}
</style>
