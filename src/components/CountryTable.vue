<template>
  <div>
    <h5>List of countries</h5>
    <ag-grid-vue class="ag-theme-balham" style="width: 100%; height: 100vh"
                 :gridOptions="gridOptions"
                 :frameworkComponents="frameworkComponents" :modules="modules"
                 v-model="rowData" @grid-ready="onGridReady"
                 @data-model-changed="updateStore"
    >
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
import RemoveButtonRenderer from './CellRenderers/RemoveButtonRenderer';

export default {
  name: 'CountryTable',
  data() {
    return {
      gridApi: null,
      rowData: null,
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
        editable: true,
        filter: true,
      },
      {
        headerName: 'Action',
        cellRenderer: 'removeButtonRenderer',
      },
    ];

    this.frameworkComponents = {
      removeButtonRenderer: RemoveButtonRenderer,
    };

    const rowData = this.$store.state.countries;
    this.rowData = Object.freeze(
      rowData.map(row => {
        return {
          ...row,
        };
      }),
    );
  },
  computed: {
    gridOptions() {
      return {
        getRowNodeId(data) {
          return data.code;
        },
        rowSelection: 'multiple',
        columnDefs: this.columnDefs,
        context: {
          parentComponent: this,
        },
      };
    },
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
    },
    updateStore(rowData) {
      this.$store.dispatch('updateRowData', rowData);
    },
    removeByCode(code) {
      const rowNode = this.gridApi.getRowNode(code);

      this.gridApi.updateRowData({
        remove: [rowNode.data],
      });
    },
  },
  components: {
    AgGridVue,
  },
};
</script>

<style scoped>

</style>
