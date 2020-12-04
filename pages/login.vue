<template>
  <div>
    <div style="background-color: #666666">
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <form class="login100-form validate-form" @submit.stop.prevent="login()">
              <div class="alert alert-success d-none" :class="{ 'd-block': form.sucess }" role="alert">
              {{ form.sucess }}
              </div>
              <span class="login100-form-title p-b-43 pb-3">
                {{ haveAccount ? 'Zaloguj się' : 'Zarejestruj się' }}
              </span>
              <div
                v-show="!haveAccount"
                class="wrap-input100"
                :class="{ 'is-invalid': form.error }"
              >
                <input
                  v-show="!haveAccount"
                  v-model="form.username"
                  type="text"
                  placeholder="Nazwa Twojej Firmy"
                  class="input100 is-valid"
                />
                <span class="focus-input100"></span>
              </div>
              <div
                class="wrap-input100 validate-input"
                :class="{ 'is-invalid': form.error }"
              >
                <input
                  id="username"
                  v-if="haveAccount"
                  v-model="form.identifier"
                  type="text"
                  placeholder="Wpisz swój adres e-mail"
                  class="input100"
                  required
                />
                <input
                  id="username"
                  v-else
                  v-model="form.email"
                  type="email"
                  placeholder="Wpisz swój adres e-mail"
                  class="input100"
                  required
                />
                <span class="focus-input100"></span>
              </div>
              <div
                class="wrap-input100 validate-input"
                :class="{ 'is-invalid': form.error }"
              >
                <input
                  id="password"
                  v-model="form.password"
                  type="password"
                  placeholder="Wpisz swoje hasło"
                  class="input100"
                  required
                />
                <span class="focus-input100"></span>
              </div>
              <div class="row mb-3" v-show="haveAccount">
                <div class="col-6">
                  <input
                    id="remember-me"
                    class="input-checkbox100"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label class="label-checkbox100" for="ckb1">
                    Zapamiętaj mnie
                  </label>
                </div>
                <div class="col-6 text-right">
                  <a href="#" class="txt1"> Zapomniałeś hasła? </a>
                </div>
              </div>
              <div class="row mb-3" v-show="!haveAccount">
                <div class="col-12">
                  <input
                    id="register-agree"
                    class="input-checkbox100"
                    type="checkbox"
                    name="agreement"
                  />
                  <label class="label-checkbox100" for="ckb1">
                    Rejestrując się, wyrażasz zgodę na warunki korzystania z usługi i politykę prywatności.
                  </label>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-12">
                 <div class="invalid-feedback" :class="{ 'd-block': form.error }">
                {{ form.error }}
               </div>
              </div>
              </div>
              <div class="container-login100-form-btn">
                <button
                  type="submit"
                  class="pointer mr2 button login100-form-btn"
                >
                  {{
                    haveAccount
                      ? 'Zaloguj się'
                      : 'Utwórz konto'
                  }}
                 
                </button>
                <span type="button" class="txt2 mt-3" @click="haveAccount = !haveAccount">
                  {{
                    haveAccount
                      ? 'Nie masz konta? Kliknij i utwórz.'
                      : 'Masz już konto? Zaloguj się.'
                  }}
                </span>
              </div>
              <div>
              </div>
            </form>
            <div class="login100-more"></div>
          </div>
        </div>
      </div>
    </div>
    <Cookies />
  </div>
</template>

<script>

import gql from 'graphql-tag'

export default {
  middleware: ['authenticated'],
  data() {
    return {
      haveAccount: true,
      bgImg: '../assets/img/fllow-main-lead-pl.jpg',
      form: {
        username: '',
        identifier: '',
        email: '',
        password: '',
        error: null,
        sucess: null,
      }
    }
  },
  methods: {
    async register() {
      const credentials = this.form;
      this.form.error = null;
      this.form.sucess = null;
      try {
        await this.$apollo.mutate({
          mutation: gql`
            mutation($username: String!, $email: String!, $password: String!) {
              register(input: { username: $username, email: $email, password: $password }) {
                user {
                  id
                  username
                  email
                }
              }
            }
          `,
          variables: credentials
        })

       this.haveAccount = !this.haveAccount;
       this.form.sucess = 'Na Twój adres e-mail wysłaliśmy link aktywacyjny.';
        
      } catch (e) {
        this.form.error = 'Użytkownika o takiej nazwie/e-mailu już istnieje.';
      }
    },
    async login() {
      const credentials = this.form;
      this.form.error = null;
      try {
        const { data: { login: { user, jwt } } } = await this.$apollo.mutate({
          mutation: gql`
            mutation($identifier: String!, $password: String!) {
              login(input: { identifier: $identifier, password: $password }) {
                user {
                  id
                  username
                  email
                  role {
                    name
                    type
                    description
                  }
                }
                jwt
              }
            }
          `,
          variables: credentials
        })
        //set the jwt to the this.$apolloHelpers.onLogin
        await this.$apolloHelpers.onLogin(jwt)
        this.$router.go('/konfigurator')
        
      } catch (e) {
        // console.error(e)
        this.form.error = 'Wpisz poprawne dane logowanie lub zresetuj hasło.';
      }
    }
  }
}
</script>
<style lang="scss">

a {
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}

a:focus {
  outline: none !important;
}

a:hover {
  text-decoration: none;
  color: #dfbad2;
}

/*---------------------------------------------*/
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

p {
  font-family: Poppins-Regular;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
}

ul,
li {
  margin: 0px;
  list-style-type: none;
}

/*---------------------------------------------*/
input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}
input:focus:-moz-placeholder {
  color: transparent;
}
input:focus::-moz-placeholder {
  color: transparent;
}
input:focus:-ms-input-placeholder {
  color: transparent;
}

textarea:focus::-webkit-input-placeholder {
  color: transparent;
}
textarea:focus:-moz-placeholder {
  color: transparent;
}
textarea:focus::-moz-placeholder {
  color: transparent;
}
textarea:focus:-ms-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: #999999;
}
input:-moz-placeholder {
  color: #999999;
}
input::-moz-placeholder {
  color: #999999;
}
input:-ms-input-placeholder {
  color: #999999;
}

textarea::-webkit-input-placeholder {
  color: #999999;
}
textarea:-moz-placeholder {
  color: #999999;
}
textarea::-moz-placeholder {
  color: #999999;
}
textarea:-ms-input-placeholder {
  color: #999999;
}

label {
  display: block;
  margin: 0;
}

/*---------------------------------------------*/
button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

iframe {
  border: none !important;
}

/*//////////////////////////////////////////////////////////////////
[ utility ]*/

/*==================================================================
[ Text ]*/
.txt1 {
  font-family: Montserrat-Regular;
  font-size: 13px;
  line-height: 1.4;
  color: #555555;
}

.txt2 {
  font-family: Montserrat-Regular;
  font-size: 13px;
  line-height: 1.4;
  color: #999999;
}

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
}

.wrap-login100 {
  width: 100%;
  background: #fff;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row-reverse;
}

.login100-more {
  background-image: url(../assets/img/fllow-main-lead-pl.jpg);
  width: calc(100% - 560px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}

.login100-more::before {
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
}

.login100-form {
  width: 560px;
  min-height: 100vh;
  display: block;
  background-color: #f7f7f7;
  padding: 173px 55px 55px 55px;
}

.login100-form-title {
  width: 100%;
  display: block;
  font-weight: 900;
  font-size: 30px;
  color: #333333;
  line-height: 1.2;
}

.wrap-input100 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 100%;
  height: 80px;
  position: relative;
  border: 1px solid #e6e6e6;
  margin-bottom: 10px;
}

.label-input100 {
  font-family: Montserrat-Regular;
  font-size: 18px;
  color: #999999;
  line-height: 1.2;

  display: block;
  position: absolute;
  pointer-events: none;
  width: 100%;
  padding-left: 24px;
  left: 0;
  top: 30px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input100 {
  display: block;
  width: 100%;
  background: transparent;
  font-family: Montserrat-Regular;
  font-size: 18px;
  color: #555555;
  line-height: 1.2;
  padding: 0 26px;
}

input.input100 {
  height: 100%;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

/*---------------------------------------------*/

.focus-input100 {
  position: absolute;
  display: block;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  top: -1px;
  left: -1px;
  pointer-events: none;
  border: 1px solid #dfbad2;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  -webkit-transform: scaleX(1.1) scaleY(1.3);
  -moz-transform: scaleX(1.1) scaleY(1.3);
  -ms-transform: scaleX(1.1) scaleY(1.3);
  -o-transform: scaleX(1.1) scaleY(1.3);
  transform: scaleX(1.1) scaleY(1.3);
}

.input100:focus + .focus-input100 {
  visibility: visible;
  opacity: 1;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.eff-focus-selection {
  visibility: visible;
  opacity: 1;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.input100:focus {
  height: 70px;
}

.input100:focus + .focus-input100 + .label-input100 {
  top: 14px;
  font-size: 13px;
}

.has-val {
  height: 48px !important;
}

.has-val + .focus-input100 + .label-input100 {
  top: 14px;
  font-size: 13px;
}

/*==================================================================
[ Restyle Checkbox ]*/

.input-checkbox100 {
  display: none;
}

.label-checkbox100 {
  font-family: Poppins-Regular;
  font-size: 13px;
  color: #999999;
  line-height: 1.4;

  display: block;
  position: relative;
  padding-left: 26px;
  cursor: pointer;
}

.label-checkbox100::before {
  content: '\f00c';
  font-family: FontAwesome;
  font-size: 13px;
  color: transparent;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 18px;
  height: 18px;
  background: #fff;
  border: 1px solid #dfbad2;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.input-checkbox100:checked + .label-checkbox100::before {
  color: #dfbad2;
}

/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.login100-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  background: #dfbad2;

  font-family: Montserrat-Bold;
  font-size: 12px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login100-form-btn:hover {
  background: #333333;
}

/*------------------------------------------------------------------
[ Responsive ]*/

@media (max-width: 992px) {
  .login100-form {
    width: 50%;
    padding-left: 30px;
    padding-right: 30px;
  }

  .login100-more {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .login100-form {
    width: 100%;
  }

  .login100-more {
    display: none;
  }
}

@media (max-width: 576px) {
  .login100-form {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 70px;
  }
}

/*------------------------------------------------------------------
[ Alert validate ]*/

.is-invalid {
  color: #c80000;
  border-color: #c80000;
}

</style>
