<template>
  <div class="maxstone-calc">
    <div class="container">
      <div class="row w-100">
        <div class="col-xl-12 p-0">
          <div class="maxstone-wrapper text-center">
            <router-link class="p-5" to="/fllow-calc">
              <img alt="MaxStone.pl logo" class="img-fluid" src="../assets/img/maxstone.png" />
            </router-link>
          </div>
          <Header msg="MaxStone.pl - kalkulator produktu" class="mb-5" />
        </div>
      </div>
      <div class="row calculator w-100">
        <div class="col-xl-9 calculator__operation">
          <div class="row">
            <h2>Kalkulator</h2>
          </div>
          <div class="row calculator__label align-items-center">
            <span class="calculator__before-txt">1</span>Automatyczne wyliczenie wymiarów paneli
          </div>
          <div class="row">
            <div class="input-group w-auto">
              <div class="input-group-radio">
                <input
                  id="calculatorPlaszczyznaPoziom"
                  checked
                  v-on:click="isHorizontal = false"
                  type="radio"
                  name="calculatorPlaszczyzna"
                  aria-label="Poziomy sposób układania paneli"
                />
                <label for="calculatorPlaszczyznaPoziom">Poziom</label>
              </div>
              <div class="input-group-radio">
                <input
                  id="calculatorPlaszczyznaPion"
                  v-on:click="isHorizontal = true"
                  type="radio"
                  name="calculatorPlaszczyzna"
                  aria-label="Pionowy sposób układania paneli"
                />
                <label for="calculatorPlaszczyznaPion">Pion</label>
              </div>
            </div>
          </div>
          <div class="row mb-3 p-0">
            <div class="col-xl-4 pl-0">
              <div class="calculator__label d-flex align-items-center">
                <span class="calculator__before-txt">2</span>Wybierz producenta
              </div>
              <div class="input-group mt-3">
                <select
                  class="custom-select"
                  id="panelProducent"
                  v-model="formResults.panelProducent"
                  aria-label="Wybierz producenta"
                >
                  <option disabled selected value="">Wybierz...</option>
                  <option
                    v-for="producent in uniqueProducent"
                    :key="producent"
                    :value="producent"
                    v-text="producent"
                  ></option>
                </select>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="calculator__label d-flex align-items-center">
                <span class="calculator__before-txt">3</span>Wybierz nazwę
              </div>
              <div class="input-group mt-3">
                <select
                  class="custom-select"
                  id="panelName"
                  v-model="formResults.panelName"
                  aria-label="Wybierz nazwę panela"
                >
                  <option disabled selected value="">Wybierz...</option>
                  <option
                    v-for="filterName in filterNames"
                    :key="filterName.id"
                    :value="filterName.name"
                    v-text="filterName.name"
                  ></option>
                </select>
              </div>
            </div>
            <div class="col-xl-4 pr-0">
              <div class="calculator__label d-flex align-items-center">
                <span class="calculator__before-txt">4</span>Wybierz numer
              </div>
              <div class="input-group mt-3">
                <select
                  class="custom-select"
                  id="panelNumber"
                  v-model="formResults.panelNumber"
                  aria-label="Wybierz numer panela"
                >
                  <option disabled selected value="">Wybierz...</option>
                  <option
                    v-for="filterNumber in filterNumbers"
                    :key="filterNumber.id"
                    :value="filterNumber.number"
                    v-text="filterNumber.number"
                  ></option>
                </select>
              </div>
            </div>
          </div>
          <div class="row calculator__label align-items-center">
            <span class="calculator__before-txt">5</span>Wpisz wymiary projektowanego pola
          </div>
          <div class="row">
            <div class="col-xl-4">
              <div class="input-group-prepend mt-3">
                <span>Wysokość</span>
              </div>
              <div class="input-group my-3 d-flex align-items-center">
                <input
                  type="text"
                  class="form-control"
                  v-model="formResults.fieldHeight"
                  maxlength="10"
                  aria-label="Wysokość projektowanego pola"
                />
                <div class="input-group-append">
                  <span>cm</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="input-group-prepend mt-3">
                <span>Szerokość</span>
              </div>
              <div class="input-group my-3 d-flex align-items-center">
                <input
                  type="text"
                  class="form-control"
                  v-model="formResults.fieldWidth"
                  maxlength="10"
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
                <p>{{ quantity }} szt.</p>
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
                <p>{{ heightResult }} cm</p>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="calculator__result-field-before mb-3">
                <span>Szerokość</span>
              </div>
              <div class="calculator__result-field">
                <p>{{ widthResult }} cm</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 calculator__result py-4">
          <p class="calculator__result-title">Sweter Sava</p>
          <img
            alt="Sweter Sava"
            class="img-fluid my-5"
            v-bind:class="{ calculator__landscape: isHorizontal }"
            :src="require('@/assets/img/' + filterImg() + '')"
          />
          <p class="mb-3">Model: {{ fullName }}</p>
          <p class="mb-3">Rozmiar: 30x60</p>
          <div class="calculator__result-price">
            <span>Cena:</span>
            <div>{{ priceResult }} zł</div>
            <div>
              <img src="../assets/img/basket-2.png" class="img-fluid" alt="Ikona ceny" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

export default {
  name: 'MaxstoneCalc',
  components: {
    Header,
  },
  data() {
    return {
      isHorizontal: false,
      panels: [
        {
          id: 0,
          producent: 'Sava',
          number: 'SS16',
          name: 'Sweter',
          price: 10,
          img: 'sweter.png',
          width: 60,
          height: 30,
        },
        {
          id: 1,
          producent: 'Flamingo',
          name: 'Flamingo',
          number: 'FF1',
          price: 15,
          img: 'flamingo.png',
          width: 60,
          height: 30,
        },
        {
          id: 2,
          producent: 'Mięta',
          name: 'Mięta',
          number: '1',
          price: 25,
          img: 'mieta.png',
          width: 60,
          height: 30,
        },
        {
          id: 3,
          producent: 'Musztarda',
          name: 'Musztarda',
          number: 'MM1',
          price: 35,
          img: 'musztarda.png',
          width: 60,
          height: 30,
        },
      ],
      formResults: {
        panelProducent: '',
        panelName: '',
        panelNumber: '',
        fieldWidth: '',
        fieldHeight: '',
      },
    };
  },
  methods: {
    filterImg() {
      if (!this.formResults.panelNumber) return 'default-maxstone.jpg';
      const imgSrc = this.panels
        .filter((obj) => obj.number === this.formResults.panelNumber)
        .map((obj) => obj.img);
      return `${imgSrc}`;
    },
  },
  computed: {
    uniqueProducent() {
      const filteredArray = [];
      for (let i = 0; i < this.panels.length; i += 1) {
        if (filteredArray.indexOf(this.panels[i].producent) === -1) {
          filteredArray.push(this.panels[i].producent);
        }
      }
      return filteredArray;
    },
    fullName() {
      if (!this.formResults.panelNumber) return 'Nazwa';
      return `${this.formResults.panelProducent} ${this.formResults.panelName} ${this.formResults.panelNumber}`;
    },
    filterNames() {
      return this.panels.filter((obj) => obj.producent === this.formResults.panelProducent);
    },
    filterNumbers() {
      return this.filterNames.filter((obj) => obj.name === this.formResults.panelName);
    },
    filterId() {
      return this.panels
        .filter((obj) => obj.number === this.formResults.panelNumber)
        .map((obj) => obj.id);
    },
    quantityWidth() {
      if (this.isHorizontal) {
        const quantityWidth = parseInt(this.formResults.fieldWidth, 10) / 30;
        const roundWidth = Math.ceil(quantityWidth);

        return roundWidth;
      }
      const quantityWidth = parseInt(this.formResults.fieldWidth, 10) / 60;
      const roundWidth = Math.ceil(quantityWidth);

      return roundWidth;
    },
    quantityHeight() {
      if (this.isHorizontal) {
        const quantityHeight = parseInt(this.formResults.fieldHeight, 10) / 60;
        const roundHeight = Math.ceil(quantityHeight);

        return roundHeight;
      }
      const quantityHeight = parseInt(this.formResults.fieldHeight, 10) / 30;
      const roundHeight = Math.ceil(quantityHeight);

      return roundHeight;
    },
    quantity() {
      if (!this.formResults.fieldWidth && !this.formResults.fieldWidth) return '';
      return this.quantityWidth * this.quantityHeight;
    },
    widthResult() {
      if (!this.formResults.fieldWidth && !this.formResults.fieldWidth) return '0';
      return (
        Math.round((parseInt(this.formResults.fieldWidth, 10) / this.quantityWidth) * 100) / 100
      );
    },
    heightResult() {
      if (!this.formResults.fieldWidth && !this.formResults.fieldWidth) return '0';
      return (
        Math.round((parseInt(this.formResults.fieldHeight, 10) / this.quantityHeight) * 100) / 100
      );
    },
    priceResult() {
      if (!this.quantity) return '0';
      return this.panels[this.filterId].price * this.quantity;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@400;900&display=swap');
@font-face {
  font-family: PNRegular;
  src: url('../assets/fonts/ProximaNovaReg.ttf') format('truetype'),
    url('../assets/fonts/ProximaNovaReg.woff') format('woff'),
    url('../assets/fonts/ProximaNovaReg.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: PNBold;
  src: url('../assets/fonts/ProximaNovaBold.ttf') format('truetype'),
    url('../assets/fonts/ProximaNovaBold.woff') format('woff'),
    url('../assets/fonts/ProximaNovaBold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: 'PNRegular', tahoma, Arial, sans-serif;
}

.maxstone-calc {
  height: 100%;

  h2 {
    background: linear-gradient(175.63deg, #000000 3.55%, #202426 90.34%);
    color: #fff;
    width: 100%;
    padding: 1em;
  }

  .calculator {
    input,
    select {
      max-height: calc(1.6em + 24px);
      height: calc(1.6em + 24px);
      border-radius: 0;
      border: none;
    }

    select {
      width: calc(100% - 1.2em);
    }

    .calculator__operation {
      background-color: #eceeef;
      padding: 2em;
      border-right: 0.5em solid #fff;

      .calculator__label {
        background: #e5e5e5;
        border: 1px solid #ffffff;

        .calculator__before-txt {
          font-family: 'PNBold', tahoma, Arial, sans-serif;
          color: #fff;
          background-color: #616970;
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
          font-family: 'PNBold', tahoma, Arial, sans-serif;
          font-size: 24px;
          line-height: 30px;
          margin-bottom: 0;
        }
      }
    }

    .calculator__result {
      background-color: #eceeef;
      padding: 2em;
      border-left: 0.5em solid #fff;

      &-title {
        font-family: 'PNBold', tahoma, Arial, sans-serif;
        font-size: 22px;
        line-height: 27px;
      }

      .calculator__portrait {
        filter: drop-shadow(7px 7px 21px rgba(0, 0, 0, 0.23));
      }

      .calculator__landscape {
        transform: rotate(-90deg);
        padding: 25% 0;
      }

      .calculator__result-price {
        display: flex;
        width: 100%;

        span {
          background-color: #fff;
          padding: 0.25em 0.25em 0 0.25em;
          margin-right: 0.25em;
          color: #616970;
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        div:nth-of-type(1) {
          font-family: 'PNBold', tahoma, Arial, sans-serif;
          font-size: 35px;
          background-color: #fff;
          width: 100%;
          text-align: center;
          color: #616970;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25em 0.25em 0 0.25em;
        }

        div:nth-of-type(2) {
          background-color: #616970;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 1.25em;
          padding-right: 1.25em;
        }
      }
    }
  }
}
</style>
