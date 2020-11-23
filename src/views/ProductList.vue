<template>
  <div class="product-list">
    <div class="container">
      <div class="row w-100">
        <div class="col-xl-12 p-0">
          <div class="fllow-wrapper text-center">
            <router-link class="p-5" to="/fllow-calc">
              <img alt="Fllow.pl logo" class="img-fluid" src="../assets/img/fllow.png" />
            </router-link>
          </div>
          <Header msg="Lista produktów" class="mb-5" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12 mb-5">
          <button
            type="button"
            class="btn btn-success btn-lg"
            data-toggle="modal"
            data-target="#add-product"
          >
            Dodaj produkt
          </button>
        </div>
        <div class="col-xl-12">
          <table class="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nazwa</th>
                <th scope="col">Szerokość</th>
                <th scope="col">Wysokość</th>
                <th scope="col">Cena</th>
                <th scope="col">Zdjęcie</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="panel in panels" :key="panel.id">
                <th scope="row">{{ panel.id }}</th>
                <td>{{ panel.producent }} {{ panel.name }} {{ panel.number }}</td>
                <td>{{ panel.width }} cm</td>
                <td>{{ panel.height }} cm</td>
                <td>{{ panel.price }} zł</td>
                <td>{{ panel.img }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary mr-2"
                    data-toggle="modal"
                    :data-target="'#edit-product-' + panel.id"
                  >
                    Edytuj
                  </button>
                  <button type="button" class="btn btn-danger">Usuń</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Edit
      v-for="panel in panels"
      :key="panel.id"
      :id="'edit-product-' + panel.id"
      :panelProducent="panel.producent"
      :panelName="panel.name"
      :panelNumber="panel.number"
      :panelPrice="panel.price"
      :panelWidth="panel.width"
      :panelHeight="panel.height"
    ></Edit>
    <Add></Add>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Edit from '@/components/crud/Edit.vue';
import Add from '@/components/crud/Add.vue';

export default {
  name: 'ProductList',
  components: {
    Header,
    Edit,
    Add,
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
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-transform: uppercase;
  font-weight: 600;
}
</style>
