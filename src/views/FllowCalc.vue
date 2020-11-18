<template>
  <div class="fllow-calc">
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center h-100">
      <div class="row w-100">
        <div class="col-xl-12 p-0">
          <router-link to="/">Wróć na strone główną</router-link>
          <div class="fllow-wrapper text-center">
            <router-link class="p-5" to="/fllow-calc">
              <img alt="Fllow.pl logo" class="img-fluid" src="../assets/img/fllow.png" />
            </router-link>
          </div>
          <Calculator msg="Fllow.pl Calculator" class="my-5" />
        </div>
      </div>
      <div class="row calculator">
        <div class="col-xl-9 calculator__operation">
          <h2>Kalkulator</h2>
          <div class="row">
            <div class="col-xl-6">
              <p>
                <span class="calculator__before-txt">01.</span>Sposób układania paneli na ścianie
              </p>
              <div class="input-group w-auto">
                <div class="input-group-radio">
                  <input
                    id="calculatorPlaszczyznaPoziom"
                    checked
                    v-on:click="isRotate = false"
                    type="radio"
                    name="calculatorPlaszczyzna"
                    aria-label="Poziomy sposób układania paneli"
                  />
                  <label for="calculatorPlaszczyznaPoziom">Poziom</label>
                </div>
                <div class="input-group-radio">
                  <input
                    id="calculatorPlaszczyznaPion"
                    v-on:click="isRotate = true"
                    type="radio"
                    name="calculatorPlaszczyzna"
                    aria-label="Pionowy sposób układania paneli"
                  />
                  <label for="calculatorPlaszczyznaPion">Pion</label>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <p><span class="calculator__before-txt">02.</span>Wybierz producenta</p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span>Producent</span>
                </div>
                <select
                  class="custom-select"
                  id="calculatorPanelProducent"
                  v-model="formResults.panelProducent"
                  aria-label="Wybierz producenta"
                >
                  <option disabled selected value="">Wybierz...</option>
                  <option v-for="panel in panels" :key="panel.id" :value="panel.producent">
                    {{ panel.producent }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-xl-6">
              <p><span class="calculator__before-txt">02.</span>Wybierz nazwę</p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span>Nazwa</span>
                </div>
                <select
                  class="custom-select"
                  id="calculatorPanelName"
                  v-model="formResults.panelName"
                  aria-label="Wybierz nazwę panela"
                >
                  <option disabled selected value="">Wybierz...</option>
                  <option
                    v-for="filterName in filterNames"
                    :key="filterName.id"
                    :value="filterName.name"
                  >
                    {{ filterName.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-xl-6">
              <p><span class="calculator__before-txt">03.</span>Wybierz numer</p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span>Numer</span>
                </div>
                <select
                  class="custom-select"
                  id="calculatorPanelNumber"
                  v-model="formResults.panelNumber"
                  aria-label="Wybierz numer panela"
                >
                  <option disabled selected value="">Wybierz...</option>
                  <option
                    v-for="filterNumber in filterNumbers"
                    :key="filterNumber.id"
                    :value="filterNumber.number"
                  >
                    {{ filterNumber.number }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-xl-12">
              <p>
                <span class="calculator__before-txt">04.</span>Wpisz wymiary projektowanego pola
              </p>
              <div class="row">
                <div class="col-xl-6">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span>Wysokość</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      name="calculatorPanelHeight"
                      aria-label="Wysokość projektowanego pola"
                    />
                    <div class="input-group-append">
                      <span>cm</span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span>Szerokość</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      name="calculatorPanelWidth"
                      aria-label="Szerokość projektowanego pola"
                    />
                    <div class="input-group-append">
                      <span>cm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <p>
                <span class="calculator__before-txt">05.</span>Automatyczne wyliczenie ilości paneli
              </p>
              <div class="row justify-content-end">
                <div class="calculator__result-field">
                  <p>2120 szt.</p>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <p>
                <span class="calculator__before-txt">06.</span>Automatyczne wyliczenie wymiarów
                paneli
              </p>
              <div class="row justify-content-end mb-3">
                <div class="calculator__result-field-before">
                  <span>Wysokość </span>
                </div>
                <div class="calculator__result-field">
                  <p>2120 cm</p>
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="calculator__result-field-before">
                  <span>Szerokość </span>
                </div>
                <div class="calculator__result-field">
                  <p>2120 cm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 calculator__result">
          <p class="calculator__result-title">Wynik</p>
          <img
            alt="Sweter Sava"
            class="img-fluid my-5"
            v-bind:class="{ calculator__landscape: isRotate }"
            src="../assets/img/panel.png"
          />
          <p class="mb-3">Model: {{ fullName }}</p>
          <p class="mb-3">Rozmiar: 30x60</p>
          <div class="calculator__result-price">
            <span>Cena:</span>
            <div>23 776 zł</div>
            <div>
              <img src="../assets/img/basket.png" class="img-fluid" alt="Ikona ceny" />
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
  name: 'FllowCalc',
  components: {
    Calculator,
  },
  data() {
    return {
      isRotate: false,
      panels: [
        {
          id: '1',
          producent: 'Sava',
          number: '109',
          name: 'Sweter',
          price: '10',
          img: '../assets/img/panel.png',
          size: '30x60',
        },
        {
          id: '2',
          producent: 'Osava',
          number: '110',
          name: 'Niemake',
          price: '15',
          img: '../assets/img/panel.png',
          size: '30x60',
        },
        {
          id: '3',
          producent: 'Osava',
          number: '111',
          name: 'Make Me',
          price: '15',
          img: '../assets/img/panel.png',
          size: '30x60',
        },
        {
          id: '4',
          producent: 'Sosava',
          number: '112',
          name: 'Make',
          price: '15',
          img: '../assets/img/panel.png',
          size: '30x60',
        },
      ],
      formResults: {
        panelProducent: '',
        panelName: '',
        panelNumber: '',
      },
    };
  },
  computed: {
    fullName() {
      return Object.values(this.formResults).join(' ');
    },
    filterNames() {
      return this.panels.filter((obj) => obj.producent === this.formResults.panelProducent);
    },
    filterNumbers() {
      return this.filterNames.filter((obj) => obj.name === this.formResults.panelName);
    },
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@400;900&display=swap');
* {
  font-family: 'Encode Sans', sans-serif !important;
}
.fllow-calc {
  height: 100%;

  .calculator {
    .calculator__operation {
      padding: 2em;
      background-color: #fafafa;
      border-right: 0.5em solid #fff;

      .calculator__before-txt {
        color: #dfbad2;
        font-size: 50px;
        font-weight: bold;
        line-height: 62px;
        margin-right: 0.2em;
      }

      h2 {
        font-weight: bold;
        font-size: 34px;
        line-height: 42px;
      }

      p {
        color: #464847;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
      }

      .calculator__result-field {
        background-color: #dfbad2;
        border-radius: 4px;
        padding: 1em;

        p {
          color: #fff;
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
          margin-bottom: 0;
        }
      }

      .calculator__result-field-before {
        margin-right: 1em;
        padding: 1em;
      }

      input,
      select {
        max-height: calc(1.6em + 24px);
        height: calc(1.6em + 24px);
        border-radius: 4px;
        border: 0.75px solid #464847;
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
            content: '';
            display: inline-block;
            position: relative;
            top: 5px;
            margin: 0 5px 0 0;
            width: 20px;
            height: 20px;
            border-radius: 11px;
            border: 0.75px solid #606060;
            background-color: transparent;
          }
        }

        input[type='radio']:checked + label::after {
          border-radius: 11px;
          width: 12px;
          height: 12px;
          position: absolute;
          top: 15px;
          left: 16.2px;
          content: ' ';
          display: block;
          background: #dfbad2;
        }
      }

      .input-group-prepend,
      .input-group-append {
        span {
          display: inline-block;
          font-weight: 400;
          text-align: center;
          vertical-align: middle;
          user-select: none;
          background-color: transparent;
          border: 1px solid transparent;
          padding: 0.75rem 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
          border-radius: 0.25rem;
        }
      }

      .input-group-append {
        span {
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;
          color: #dfbad2;
        }
      }
    }
    .calculator__result {
      background-color: #fafafa;
      padding: 2em;
      border-left: 0.5em solid #fff;

      &-title {
        font-weight: 800;
        font-size: 18px;
        line-height: 22px;
      }

      .calculator__portrait {
        filter: drop-shadow(7px 7px 21px rgba(0, 0, 0, 0.23));
      }

      .calculator__landscape {
        transform: rotate(-90deg);
        padding: 20% 0;
      }

      .calculator__result-price {
        display: flex;
        width: 100%;

        span {
          background-color: #dfbad2;
          padding: 0.5em;
          margin-right: 0.15em;
          color: #fff;
          border-radius: 4px;
          font-weight: 500;
          font-size: 22px;
          line-height: 30px;
        }

        div:nth-of-type(1) {
          background-color: #dfbad2;
          width: 100%;
          text-align: center;
          color: #fff;
          border-radius: 4px 0px 0px 4px;
          font-weight: 800;
          font-size: 35px;
          line-height: 60px;
        }

        div:nth-of-type(2) {
          border: 4px solid #dfbad2;
          border-radius: 0px 4px 4px 0px;
          padding: 1em;
        }
      }
    }
  }
}
</style>
