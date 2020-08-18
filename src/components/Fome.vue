<template>
  <div class="hello">
    <div class="hert">
      <div class="left" @click="ret">×</div>
      <div class="reight">问诊信息</div>
    </div>
    <div class="herder">
      <div class="der">
        <div class="list_x">
          <p class="sp1"></p>
          <p class="sp2">问诊人信息：</p>
        </div>
        <div class="der_x">
          <p>姓名：</p>
          <input type="text" />
        </div>
        <div class="der_y">
          <p>手机号：</p>
          <input type="text" />
        </div>
        <div class="der_w">
          <p>身份证号：</p>
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="fome">
      <div class="list_x">
        <p class="sp1"></p>
        <p class="sp2">问诊信息：</p>
      </div>
      <div class="fome_x">
        <div class="fo">
          <p>医生：</p>
          <p>王强</p>
        </div>
        <div class="fm">
          <p>问诊时间：</p>
          <p>
            <span>8月3号</span>&nbsp;
            <span>14：00</span>
          </p>
        </div>
        <div class="fe">
          <p class="p2">咨询问题</p>
          <p class="p1">头重脚轻，四肢酸痛</p>
        </div>
      </div>
      <div class="fet">
        <p class="p1">注：1、问诊时长>6分钟（视患者情况适当调整）</p>
        <p class="p2">2、可以选择固定坐诊日期</p>
        <p class="p3">3、替患者整理资料</p>
      </div>
      <button @click="btn">返回</button>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "hello",
  props: {
    msg: String,
  },
  components: {
    [Button.name]: Button,
  },
  methods: {
    btn() {
      this.$router.push("./ferttor");
    },
    ret() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="scss">
.fome {
  width: 100%;
  background: #fff;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 60%;
    margin-top: 54px;

    border: none;
    background-image: linear-gradient(to right, #51a7fb, #4dc1f4);
    border-radius: 5px;
    height: 2.5em;
    color: #fff;
  }

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
  .fome_x {
    width: 90%;
    height: 12rem;
    border: 1px solid #e6e6e6;
    margin: 0 auto;
    border-radius: 5px;
    margin-top: 10px;
    .fo {
      display: flex;
      color: #4d4d4d;
      font-size: 14px;
      width: 60%;
      padding: 0 100px 0 10px;
      justify-content: space-between;
      margin: 0 auto;
      border-bottom: 1px solid #e6e6e6;
      p {
        margin: 0;
        height: 2rem;
        line-height: 2rem;
      }
    }
    .fm {
      display: flex;
      color: #4d4d4d;
      width: 87%;
      word-spacing: 15px;
      padding: 0 10px;
      justify-content: space-between;
      margin: 0 auto;
      border-bottom: 1px solid #e6e6e6;
      font-size: 14px;
      p {
        margin: 0;
        height: 2rem;
        line-height: 2rem;
        span {
          margin-left: 10px;
        }
      }
    }
    .fe {
      margin-left: 20px;
      font-size: 14px;
      .p2 {
        color: #4d4d4d;
      }
      .p1 {
        font-weight: 600;
        margin: -12px 0 10px 0px;
      }
    }
  }
}
.fet {
  width: 100%;
  font-size: 12px;
  color: #b3b3b3;
  .p1 {
    margin: 10px 0 0 20px;
  }
  .p2 {
    margin: 0 0 0 44px;
  }
  .p3 {
    margin: 0 0 0 44px;
  }
}
.herder {
  background: #fff;
  margin-top: 12px;
  .der {
    padding: 0 0 12px 0;
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
    .der_x {
      width: 80%;
      display: flex;
      border-bottom: 1px solid #e6e6e6;
      margin: 0 auto;
      color: #4d4d4d;
      input {
        width: 80%;
        border: none;
      }
    }
    .der_y {
      width: 80%;
      display: flex;
      border-bottom: 1px solid #e6e6e6;
      margin: 0 auto;
      color: #4d4d4d;
      input {
        width: 70%;
        border: none;
      }
    }
    .der_w {
      width: 80%;
      display: flex;
      border-bottom: 1px solid #e6e6e6;
      margin: 0 auto;
      color: #4d4d4d;

      input {
        width: 70%;
        border: none;
      }
    }
  }
}
.hert {
  width: 100%;
  display: flex;
  height: 3rem;
  background: linear-gradient(to right, #51a7fb, #4dc1f3);
  color: #fff;
  line-height: 3rem;

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
  .main-sm {
    margin-bottom: 10px;
    width: 90%;
    font-size: 12px;
  }
  .main-xm {
    width: 90%;
    height: 8em;
    border: 1px solid #8f8f8f;
    border-radius: 5px;
    line-height: 2em;
    margin-bottom: 1em;
    .pei {
      display: flex;
      justify-content: space-evenly;
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
  background: #f3f5f4;
}
</style>
