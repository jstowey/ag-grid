<template>
  <div id="app">
    <country-table></country-table>
  </div>
</template>

<script>
import CountryTable from './components/CountryTable.vue';

export default {
  name: 'app',
  components: {
    CountryTable,
  },
};
</script>
