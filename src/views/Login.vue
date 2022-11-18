<script setup>
import axios from "axios";

let id = "";
let pw = "";

const fnKeydown = (event) => {
  event.code === "Enter" ? fnLogin() : false;
};

const fnLogin = () => {
  if (!id || !pw) {
    alert(`${!id ? "아이디" : !pw ? "비밀번호" : ""}를 입력하세요.`);
  } else {
    axios
      .post("/v1/login/process", { loginId: id, lgnPwd: pw })
      .then((data) => {
        console.log(data);
      });
  }
};
</script>

<template>
  <div>
    <h1>로그인</h1>
    <input
      type="text"
      v-model="id"
      placeholder="아이디를 입력하세요."
      @keydown="fnKeydown"
    />
    <input
      type="text"
      v-model="pw"
      placeholder="비밀번호를 입력하세요."
      @keydown="fnKeydown"
    />
    <button @click="fnLogin">로그인</button>
  </div>
</template>
