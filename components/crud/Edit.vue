<template>
  <!-- Edit Modal -->
  <div
    class="edit modal fade"
    :id="{ panelId }"
    tabindex="-1"
    aria-labelledby="edit-product"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edytuj produkt</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="panelProducent">Producent</label>
              <input
                type="text"
                class="form-control"
                id="panelProducent"
                :value="panelProducent"
                placeholder="nazwa producenta tkaniny"
              />
            </div>
            <div class="form-group">
              <label for="panelName">Nazwa</label>
              <input
                type="text"
                class="form-control"
                id="panelName"
                :value="panelName"
                placeholder="nazwa tkaniny"
              />
            </div>
            <div class="form-group">
              <label for="panelNumber">Numer</label>
              <input
                type="text"
                class="form-control"
                id="panelNumber"
                :value="panelNumber"
                placeholder="numer tkaniny"
              />
            </div>
            <div class="form-group">
              <label for="panelWidth">Szerokość</label>
              <input
                type="text"
                class="form-control"
                id="panelWidth"
                :value="panelWidth"
                placeholder="szerokość tkaniny"
              />
            </div>
            <div class="form-group">
              <label for="panelHeight">Wysokość</label>
              <input
                type="text"
                class="form-control"
                id="panelHeight"
                :value="panelHeight"
                placeholder="wysokość tkaniny"
              />
            </div>
            <div class="form-group">
              <label for="panelHeight">Cena</label>
              <input
                type="text"
                class="form-control"
                id="panelPrice"
                :value="panelPrice"
                placeholder="cena tkaniny"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlFile1">Prześlij zdjęcie</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
          <button type="button" class="btn btn-primary">Zapisz</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  props: {
    panelId: {},
    panelProducent: {},
    panelName: {},
    panelNumber: {},
    panelPrice: {},
    panelWidth: {},
    panelHeight: {},
    panelImg: {},
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
