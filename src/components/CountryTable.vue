<template>
  <div>
    <h5>List of countries</h5>
    <ag-grid-vue class="ag-theme-balham" style="width: 100%; height: 100vh"
                 :columnDefs="columnDefs" :rowData="rowData"
                 :frameworkComponents="frameworkComponents" :modules="modules"
                 rowSelection="multiple" :context="context">
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
import RemoveButtonRenderer from './CellRenderers/RemoveButtonRenderer';

export default {
  name: 'CountryTable',
  data() {
    return {
      columnDefs: null,
      rowData: null,
      context: {
        parentComponent: this,
      },
      frameworkComponents: null,
      modules: AllCommunityModules,
    };
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: 'Code',
        field: 'code',
        sortable: true,
        filter: true,
        checkboxSelection: true,
      },
      {
        headerName: 'Name',
        field: 'name',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Action',
        cellRenderer: 'removeButtonRenderer',
      },
    ];

    this.rowData = countries;

    this.frameworkComponents = {
      removeButtonRenderer: RemoveButtonRenderer,
    };
  },
  methods: {
    removeRow(rowIndex) {
      console.log(rowIndex);
    },
  },
  components: {
    AgGridVue,
  },
};
</script>

<style scoped>

</style>
