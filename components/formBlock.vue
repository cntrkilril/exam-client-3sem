<template>
  <div class="form-block">
    <b-button variant="outline-primary" v-b-modal.modal-1>Создать отправление</b-button>
    <b-modal id="modal-1" title="Создать отправление">
      <b-form @submit="Submit" @reset="Reset" v-if="show">

        <b-form-group
          id="input-group-0"
          label="Тип отправления"
          label-for="input-0"
        >
          <b-form-select v-model="form.type" :options="options"></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Город отправления"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.departure_city"
            placeholder="Введите город отправления"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Адрес отправления"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.departure_address"
            placeholder="Введите адрес отправления"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Город отправления"
          label-for="input-1"
        >
          <b-form-input
            id="input-3"
            v-model="form.destination_city"
            placeholder="Введите город прибытия"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Адрес отправления"
          label-for="input-2"
        >
          <b-form-input
            id="input-4"
            v-model="form.destination_address"
            placeholder="Введите адрес прибытия"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Вес"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="form.weight"
            type="number"
            placeholder="Введите вес"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Объем"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="form.volume"
            type="number"
            placeholder="Введите Объем"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Отправить</b-button>
        <b-button type="reset" variant="danger">Очистить</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "formBlock",
  data() {
    return {
      comments: {
        type: Array,
        default: []
      },
      show: true,
      form: {
        type: '',
        departure_city: '',
        departure_address: '',
        destination_city: '',
        destination_address: '',
        weight: '',
        volume: ''
      },
      options: [
        { value: "truck", text: 'Фурой' },
        { value: "ship", text: 'Кораблем' },
        { value: "plane", text: 'Самолетом' },
        { value: "train" ,text: 'Поездом' },
        ]
    }
  },
  methods: {
    Submit(event) {
      event.preventDefault()
      const res = {
        type: this.form.type,
        departure_city: this.form.departure_city,
        departure_address: this.form.departure_address,
        destination_city: this.form.destination_city,
        destination_address: this.form.destination_address,
        weight: this.form.weight,
        volume: this.form.volume
      }
      this.$emit('Submit')
      this.$store.dispatch('addSales', res)
      this.form.type = ''
      this.form.departure_city = ''
      this.form.departure_address = ''
      this.form.destination_city = ''
      this.form.destination_address = ''
      this.form.weight = ''
      this.form.volume = ''
    },

    Reset(event) {
      event.preventDefault()
      this.form.type = ''
      this.form.departure_city = ''
      this.form.departure_address = ''
      this.form.destination_city = ''
      this.form.destination_address = ''
      this.form.weight = ''
      this.form.volume = ''
    }
}
}
</script>

<style scoped>
.form-block{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
