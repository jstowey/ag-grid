<template>
  <div>
    <ag-grid-vue class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData"
                 :modules="modules">
    </ag-grid-vue>
  </div>
</template>

<script>
// ag-grid imports
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { AgGridVue } from '@ag-grid-community/vue';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
// app imports
import countries from '../assets/countries.json';

export default {
  name: 'CountryTable',
  beforeMount() {
    this.columnDefs = [
      { headerName: 'Code', field: 'code' },
      { headerName: 'Country', field: 'name' },
    ];

    this.rowData = countries;
  },
  data() {
    return {
      columnDefs: null,
      rowData: null,
      modules: AllCommunityModules,
    };
  },
  components: {
    AgGridVue,
  },
};
</script>

<style scoped>

</style>
