<script setup>
import axios from "axios";

const fnClick = () => {
  console.log("click event!");
  axios
    .get("/v1/login/auth/get?data=aaaa")
    .then((data) => {
      console.log("RestApi GET Test Response.");
      console.log(data);
    })
    .catch((e) => {
      console.log("화면 에러 캐치");
      console.log(e);
    });
};
</script>

<template>
  <div>
    <h1>#인증</h1>
    <a href="#click" @click="fnClick">인증 테스트!</a>
  </div>
</template>
