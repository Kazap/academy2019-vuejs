<template>
  <div class="login">
    <div class="content center">
      <img class="logo" :src="require('../assets/logo.png')" alt="Logo"/>

      <form class="login-form" action="/" method="POST">
        <div class="input-control">
          <label for="email-input">E-mail</label>
          <input type="email" id="email-input" name="email" class="input" placeholder="Digite seu e-mail">
        </div>

        <div class="input-control">
          <label for="password-input">Senha</label>
          <input type="password" id="password-input" name="password" class="input" placeholder="Digite sua senha">
        </div>

        <div class="actions">
          <button type="submit" class="center">
            Acessar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
  body {
    background: url("../assets/fundo.png") no-repeat center center fixed;
    background-color: #54C780;
    background-size: cover;
  }

  .login {
    overflow: hidden;
  }

  .login > .content {
    width: 320px;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .center {
    display: block;
    margin: 0 auto;
  }

  .login-form {
    margin-top: 78px;
  }

  .input-control {
    margin-bottom: 20px;
  }

  .input-control > label {
    display: block;
  }

  .input-control > .input {
    height: 48px;
    width: calc(100% - 50px);
    border-radius: 24px;
    border-width: 0;
    background: #FFF;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;

    padding: 0 25px;
  }

  .input-control > .input:focus {
    background: #F2F2F2;
  }

  .login-form > .actions > button[type="submit"] {
    background-color: #354463;
    border: 0;
    border-radius: 24px;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 18px;
    width: 160px;
    height: 48px;
  }

  .logo {
    margin: auto;
    display: block;
  }

  .login > .content > .login-form > .input-control > label {
    display: none;
  }
</style>
