<template>
  <div class="fllow-calc">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="fllow-wrapper text-center">
            <router-link class="p-5" to="/fllow-calc">
              <img
                alt="Fllow.pl logo"
                class="img-fluid"
                src="../assets/img/fllow.png"
              />
            </router-link>
          </div>
          <Header msg="Fllow.pl - kalkulator produktu" class="mb-5" />
        </div>
      </div>
      <div class="row calculator">
        <div class="col-xl-8 calculator__operation">
          <h2>Kalkulator</h2>
          <div class="row">
            <div class="col-xl-12">
              <p>
                <span class="calculator__before-txt">01.</span>Sposób układania
                paneli na ścianie
              </p>
              <div class="input-group w-auto">
                <div class="input-group-radio">
                  <input
                    id="fieldHorizontal"
                    checked
                    name="field"
                    type="radio"
                    aria-label="Poziomy sposób układania paneli"
                    @click="isHorizontal = false"
                  />
                  <label for="fieldHorizontal">Poziom</label>
                </div>
                <div class="input-group-radio">
                  <input
                    id="fieldVertical"
                    name="field"
                    type="radio"
                    aria-label="Pionowy sposób układania paneli"
                    @click="isHorizontal = true"
                  />
                  <label for="fieldVertical">Pion</label>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <p>
                <span class="calculator__before-txt">02.</span>Wybierz rodzaj
                tkaniny
              </p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span>Tkanina</span>
                </div>
                <select
                  id="panelProducent"
                  v-model="formResults.panelProducent"
                  class="custom-select"
                  aria-label="Wybierz rodzaj tkaniny"
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
            <div class="col-xl-6">
              <p>
                <span class="calculator__before-txt">02.</span>Wybierz kolor
                tkaniny / numer
              </p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span>Nazwa</span>
                </div>
                <select
                  id="panelName"
                  v-model="formResults.panelName"
                  class="custom-select"
                  aria-label="Wybierz kolor tkaniny / numer"
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
            <div class="col-xl-12">
              <p>
                <span class="calculator__before-txt">03.</span>Wpisz wymiary
                projektowanego pola
              </p>
              <div class="row">
                <div class="col-xl-6">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span>Wysokość</span>
                    </div>
                    <input
                      v-model="formResults.fieldHeight"
                      type="text"
                      class="form-control"
                      maxlength="10"
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
                      v-model="formResults.fieldWidth"
                      type="text"
                      class="form-control"
                      maxlength="10"
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
                <span class="calculator__before-txt">04.</span>Automatyczne
                wyliczenie ilości paneli
              </p>
              <div class="row justify-content-end">
                <div class="calculator__result-field">
                  <p>{{ quantity }} szt.</p>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <p>
                <span class="calculator__before-txt">05.</span>Automatyczne
                wyliczenie wymiarów paneli
              </p>
              <div class="row justify-content-end mb-3">
                <div class="calculator__result-field-before">
                  <span>Wysokość</span>
                </div>
                <div class="calculator__result-field">
                  <p>{{ heightResult }} cm</p>
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="calculator__result-field-before">
                  <span>Szerokość</span>
                </div>
                <div class="calculator__result-field">
                  <p>{{ widthResult }} cm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 calculator__result">
          <p class="calculator__result-title">Podsumowanie</p>
          <img
            alt="Sweter Sava"
            class="img-fluid my-5"
            :class="{ calculator__landscape: isHorizontal }"
            :src="filterImg()"
          />
          <p class="mb-3">Wybrany materiał: {{ fullName }}</p>
          <p class="mb-3">Rozmiar: 30x60</p>
          <div class="calculator__result-price">
            <span>Cena:</span>
            <div>{{ priceResult }} zł</div>
            <div>
              <img
                src="../assets/img/basket.png"
                class="img-fluid"
                alt="Ikona ceny"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <Cookies />
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import gql from 'graphql-tag'

export default {
  middleware: ['authenticated'],
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      me: {},
      isHorizontal: false,
      panels: [],
      formResults: {
        panelProducent: '',
        panelName: '',
        fieldWidth: '',
        fieldHeight: ''
      }
    }
  },
  apollo: {
    me: {
      query: gql`
        query {
          me{
            id
            email
            username
            role{
              name
            }
          }
        }
      ` 
    },
    panels: gql`
      query {
        panels {
          id
          producent
          name
          price
          img {
            url
          }
          width
          height
        }
      }
    `
  },
  computed: {
    uniqueProducent() {
      const filteredArray = []
      for (let i = 0; i < this.panels.length; i += 1) {
        if (filteredArray.indexOf(this.panels[i].producent) === -1) {
          filteredArray.push(this.panels[i].producent)
        }
      }
      return filteredArray
    },
    fullName() {
      if (!this.formResults.panelName) return 'Nazwa'
      return `${this.formResults.panelProducent} ${this.formResults.panelName}`
    },
    filterNames() {
      return this.panels.filter(
        (obj) => obj.producent === this.formResults.panelProducent
      )
    },
    filterNumbers() {
      return this.filterNames.filter(
        (obj) => obj.name === this.formResults.panelName
      )
    },
    filterPrice() {
      return this.panels
        .filter((obj) => obj.name === this.formResults.panelName)
        .map((obj) => obj.price)
    },
    filterWidth() {
      return this.panels
        .filter((obj) => obj.name === this.formResults.panelName)
        .map((obj) => obj.width)
    },
    filterHeight() {
      return this.panels
        .filter((obj) => obj.name === this.formResults.panelName)
        .map((obj) => obj.height)
    },
    quantityWidth() {
      if (this.isHorizontal) {
        const quantityWidth = parseInt(this.formResults.fieldWidth, 10) / this.filterWidth
        const roundWidth = Math.ceil(quantityWidth)

        return roundWidth
      }
      const quantityWidth = parseInt(this.formResults.fieldWidth, 10) / this.filterHeight
      const roundWidth = Math.ceil(quantityWidth)

      return roundWidth
    },
    quantityHeight() {
      if (this.isHorizontal) {
        const quantityHeight = parseInt(this.formResults.fieldHeight, 10) / this.filterHeight
        const roundHeight = Math.ceil(quantityHeight)

        return roundHeight
      }
      const quantityHeight = parseInt(this.formResults.fieldHeight, 10) / this.filterWidth
      const roundHeight = Math.ceil(quantityHeight)

      return roundHeight
    },
    quantity() {
      if (!this.formResults.fieldWidth && !this.formResults.fieldWidth)
        return ''
      return this.quantityWidth * this.quantityHeight
    },
    widthResult() {
      if (!this.formResults.fieldWidth && !this.formResults.fieldWidth)
        return '0'
      return (
        Math.round(
          (parseInt(this.formResults.fieldWidth, 10) / this.quantityWidth) * 100
        ) / 100
      )
    },
    heightResult() {
      if (!this.formResults.fieldWidth && !this.formResults.fieldWidth)
        return '0'
      return (
        Math.round(
          (parseInt(this.formResults.fieldHeight, 10) / this.quantityHeight) *
            100
        ) / 100
      )
    },
    priceResult() {
      if (!this.quantity) return '0'
      return (parseFloat(this.filterPrice) * this.quantity * ((this.filterWidth/100)*(this.filterHeight)/100))
    }
  },
  methods: {
    filterImg() {
      if (!this.formResults.panelName)
        return require('@/assets/img/default-fllow.jpg')
      const imgSrc = this.panels
        .filter((obj) => obj.name === this.formResults.panelName)
        .map((obj) => obj.img[0].url)
      return `${this.api_url}${imgSrc}`
    }
  }
}
</script>
<style lang="scss" scoped>
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
