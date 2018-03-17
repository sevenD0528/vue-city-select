<template id="cityselection">
    <el-row class="mainbody">
      <el-col :span="12">
        <label>省份：</label>
        <el-select v-model="selectedProvince" placeholder="请选择">
            <el-option
              v-for="item in provinces"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="12">
        <label>城市：</label>
        <el-select v-model="selectedCity" placeholder="请选择">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
    </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'citySelection',
  created() {
    this.getData();
  },
  data () {
    return {
      cityData: '',
      provinces: [],
      cities: [],
      value: '',
      selectedProvince: '',
      selectedCity: ''
    }
  },
  methods: {
    getData () {
      let _this = this;
      axios.get('/static/data/data.json').then((response) => {
          var result = response.data;
          if (result.status == 0) {
            _this.cityData = result.data;
            _this.getProvince();
          }
      },(response) => {
          console.log('error');
      })
    },
    getProvince () {
      let _this = this, arr = [], data = _this.cityData;
      for (let i = 0; i < data.length; i++) {
        if (arr.indexOf(data[i].province) == -1) {
          arr.push(data[i].province);
          _this.provinces.push({'value': data[i].province, 'label': data[i].province})
        } 
      }
    }
  },
  watch: {
    selectedProvince : function() {
      let _this = this, data = _this.cityData;
      _this.selectedCity = '';
      _this.cities = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].province == _this.selectedProvince) {
          _this.cities.push({'id':data[i].code, 'value': data[i].title, 'label': data[i].title})
        }
       
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mainbody {
  position: relative;
  width: 600px;
  margin: 0 auto;
}
</style>
