<template>
  <div class="maxstone-calc">
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center h-100">
      <div class="row w-100">
        <div class="col-xl-12 p-0">
          <router-link to="/">Wróć na strone główną</router-link>
          <div class="maxstone-wrapper text-center">
            <router-link class="p-5" to="/fllow-calc">
              <img alt="MaxStone.pl logo" class="img-fluid" src="../assets/maxstone.png" />
            </router-link>
          </div>
          <Calculator msg="MaxStone.pl Calculators" class="my-5" />
        </div>
      </div>
      <div class="row calculator w-100">
        <div class="col-xl-9 calculator__operation">
          <div class="row">
            <h2>Kalkulator</h2>
          </div>
          <div class="row calculator__label align-items-center">
            <span class="calculator__before-txt">1</span>Automatyczne
            wyliczenie wymiarów paneli
          </div>
          <div class="row">
            <div class="input-group w-auto">
              <div class="input-group-radio">
                <input
                  id="calculatorPlaszczyznaPion"
                  checked
                  type="radio"
                  name="calculatorPlaszczyzna"
                  aria-label="Pionowy sposób układania paneli"
                />
                <label for="calculatorPlaszczyznaPion">Pion</label>
              </div>
              <div class="input-group-radio">
                <input
                  id="calculatorPlaszczyznaPoziom"
                  type="radio"
                  name="calculatorPlaszczyzna"
                  aria-label="Poziomy sposób układania paneli"
                />
                <label for="calculatorPlaszczyznaPoziom">Poziom</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4 p-0">
              <div class="calculator__label d-flex align-items-center">
                <span class="calculator__before-txt">2</span>Wybierz producenta
              </div>
              <div class="input-group">
                <select
                  class="custom-select"
                  id="calculatorPanelProducent"
                  aria-label="Wybierz producenta"
                >
                  <option selected>Wybierz producenta...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="col-xl-4 p-0">
              <div class="calculator__label d-flex align-items-center">
                <span class="calculator__before-txt">3</span>Wybierz nazwę
                </div>
              <div class="input-group">
                <select
                  class="custom-select"
                  id="calculatorPanelName"
                  aria-label="Wybierz nazwę panela"
                >
                  <option selected>Wybierz nazwę panela...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="col-xl-4 p-0">
              <div class="calculator__label d-flex align-items-center">
                <span class="calculator__before-txt">4</span>Wybierz numer
              </div>
              <div class="input-group">
                <select
                  class="custom-select"
                  id="calculatorPanelNumber"
                  aria-label="Wybierz numer panela"
                >
                  <option selected>Wybierz numer panela...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row calculator__label align-items-center">
            <span class="calculator__before-txt">5</span>Wpisz wymiary projektowanego pola
          </div>
          <div class="row">
            <div class="col-xl-6">
              <div class="input-group-prepend mt-3">
                  <span>Wysokość</span>
                </div>
              <div class="input-group my-3 d-flex align-items-center">
                <input
                  type="text"
                  class="form-control mr-3"
                  name="calculatorPanelHeight"
                  aria-label="Wysokość projektowanego pola"
                />
                <div class="input-group-append">
                  <span>cm</span>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="input-group-prepend mt-3">
                  <span>Szerokość</span>
                </div>
              <div class="input-group my-3 d-flex align-items-center">
                <input
                  type="text"
                  class="form-control mr-3"
                  name="calculatorPanelWidth"
                  aria-label="Szerokość projektowanego pola"
                />
                <div class="input-group-append">
                  <span>cm</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row calculator__label align-items-center">
            <span class="calculator__before-txt">6</span>Automatyczne wyliczenie ilości paneli
          </div>
          <div class="row my-3 justify-content-center">
            <div class="col-xl-6 text-center">
              <div class="calculator__result-field">
                <p>2120 szt.</p>
              </div>
            </div>
          </div>
          <div class="row calculator__label align-items-center">
            <span class="calculator__before-txt">7</span>Automatyczne wyliczenie wymiarów paneli
          </div>
          <div class="row my-3">
            <div class="col-xl-6">
              <div class="calculator__result-field-before mb-3">
                <span>Wysokość</span>
              </div>
              <div class="calculator__result-field">
                <p>2120 cm</p>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="calculator__result-field-before mb-3">
                <span>Szerokość</span>
              </div>
              <div class="calculator__result-field">
                <p>2120 cm</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 calculator__result py-4">
          <p class="calculator__result-title">Sweter Sava</p>
          <img alt="Fllow.pl logo" class="img-fluid mb-3" src="../assets/panel.png" />
          <p class="mb-3">Model: PANEL TAPICER</p>
          <p class="mb-3">Rozmiar: 30x60</p>
          <div class="calculator__result-price">
            <span>Cena:</span>
            <div>23 776 zł</div>
            <div>
              <img src="../assets/basket-2.png" class="img-fluid" alt="Ikona ceny" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue';

export default {
  name: 'MaxstoneCalc',
  components: {
    Calculator,
  },
};
</script>
<style lang="scss" scoped>
.maxstone-calc {
  height: 100%;

  h2 {
    background: linear-gradient(175.63deg, #000000 3.55%, #202426 90.34%);
    color: #fff;
    width: 100%;
    padding: 1em;
  }

  .calculator {
    padding-top: 2em;
    padding-bottom: 2em;

    input,
      select {
        max-height: calc(1.6em + 24px);
        height: calc(1.6em + 24px);
        border-radius: 0;
        border: none;
      }

    .calculator__label {
      background: #e5e5e5;
      border: 1px solid #ffffff;

      .calculator__before-txt {
        color: #fff;
        background-color: #616970;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        padding: 0.8em 1.2em;
        margin-right: 1em;
      }
    }

    .input-group-radio {
      padding: 0.375rem 0.75rem;
      position: relative;
      margin: 10px 0 0;

      input[type='radio'] {
        margin-right: 0.75rem;
        margin-bottom: 0;
        display: none;
      }

      label {
        margin-right: 1.5rem;
        font-size: 1em;

        &::before {
          content: ' ';
          display: inline-block;
          position: relative;
          top: 5px;
          margin: 0 5px 0 0;
          width: 20px;
          height: 20px;
          border-radius: 0;
          border: 0.75px solid#626970;
          background-color: transparent;
        }
      }

      input[type='radio']:checked + label::after {
        border-radius: 0;
        width: 12px;
        height: 12px;
        position: absolute;
        top: 15px;
        left: 16.2px;
        content: ' ';
        display: block;
        background: #626970;
      }
    }

    .calculator__result-field {
      background-color: #616970;
      padding: 1em;

      p {
        color: #fff;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 0;
      }
    }

    .calculator__operation {
      background-color: #eceeef;
    }

    .calculator__result {
      background-color: #eceeef;

      &-title {
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
      }

      .calculator__result-price {
        display: flex;
        width: 100%;

        span {
          background-color: #fff;
          padding: 0.5em;
          margin-right: 0.15em;
          color: #616970;
          font-weight: 500;
          font-size: 22px;
          line-height: 40px;
        }

        div:nth-of-type(1) {
          background-color: #fff;
          width: 100%;
          text-align: center;
          color: #616970;
          border-radius: 4px 0px 0px 4px;
          font-weight: 800;
          font-size: 35px;
          line-height: 60px;
        }

        div:nth-of-type(2) {
          background-color: #616970;
          padding: 1em;
        }
      }
    }
  }
}
</style>
