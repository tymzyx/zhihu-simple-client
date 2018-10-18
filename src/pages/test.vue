<template>
  <div>
    <top-bar></top-bar>
    <div style="position: absolute; left: 500px; top: 300px;">
      <el-upload
        class="upload-demo"
        action="http://localhost:2221/api/v1/upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传文件，类型不限</div>
      </el-upload>
    </div>
    <div style="position: absolute; left: 700px; top: 300px;">
      <!--<a title="点击下载" v-for="(item, index) in files" :key="index" @click.prevent="download(item)">{{item.fileName}}</a>-->
      <a title="点击跳转" v-for="(item, index) in files" :key="index" :href="item.fileUrl" target="_blank">{{item.fileName}}</a>
      <!--<el-button @click="download('qilixiang.mp3')">测试下载</el-button>-->
    </div>
    <div style="position: fixed; top: 100px; right: 100px; width: 100px;">
      <a href="#top">top</a>
      <a href="#1">1</a>
      <a href="#100">100</a>
      <a href="#500">500</a>
      <el-button @click="switchLocale">切换</el-button>
      <p>{{$t(`navbar.${test.home}`)}}</p>
      <p>{{$t('navbar.introduction')}}</p>
      <p>{{$t('navbar.contact')}}</p>
    </div>
    <!--<div id="top" style="position: absolute; top: 0; height: 100%; z-index: 10000;">-->
      <!--i am top-->
      <!--<div style="width: 400px; height: 400px; background: yellow;"></div>-->
    <!--</div>-->
    <!--<div id="0" style="position: absolute; top: 1000px; z-index: 10000;">-->
      <!--i am 0-->
      <!--<div style="width: 400px; height: 400px; background: red;"></div>-->
    <!--</div>-->
    <!--<div id="1" style="position: absolute; top: 2000px; height: 100%; z-index: 10000;">-->
      <!--i am 1-->
      <!--<div style="width: 400px; height: 400px; background: green;"></div>-->
    <!--</div>-->
    <div style="position: absolute; width: 300px; height: 600px; left: 100px; top: 200px; overflow-y: auto;">
      <div v-for="i in 1000" :id="i">
        <p>test-{{i}}</p>
      </div>
    </div>

    <div style="position: absolute; top: 100px; left: 600px;">
      <el-select
        ref="elSelect"
        v-model="value9"
        filterable
        remote
        clearable
        reserve-keyword
        :remote-method="remoteMethod"
        placeholder="请输入关键词"
        @compositionstart.native="handleComposition"
        @compositionupdate.native="handleComposition"
        @compositionend.native="handleComposition"
        :loading="loading">
        <el-option
          v-for="item in options4"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

  </div>
</template>

<script>
  import TopBar from '../components/common/TopBar'

  export default {
    components: {TopBar},
    data() {
      return {
        fileList: [],
        files: [],
        test: {
          home: 'home'
        },
        options4: [],
        value9: '',
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"]
      }
    },
    created() {
      this.getFiles();
    },
    mounted() {
      this.test = {
        home: 'contact'
      };

      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      getFiles() {
        let _this = this;
        this.$http.get('http://localhost:2221/api/v1/fileInfo').then(function (response) {
          console.log(response);
          _this.files = response.data;
        }).catch(function (error) {
          console.log('error: ', error);
        });
      },
      handleSuccess() {
        this.getFiles();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      beforeUpload(file) {
        return true;
      },
      download(file) {
        let link = document.createElement('a');
        link.href = `http://localhost:2221/api/v1/download?name=${file.fileName}&hash=${file.fileHash}`;
        link.download = 'test.txt';
        link.click();
      },
      switchLocale() {
        let locale = this.$i18n.locale
        locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
        // LangStorage.setLang(this.$i18n.locale) //后面会用做切换和将用户习惯存储到本地浏览器
      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          // this.options4 = [];
        }
      },
      handleComposition(val) {
        // if (val.type === 'compositionend') {
          console.log('----------', this.$refs.elSelect.selectedLabel);
          // this.remoteMethod(val.data)
        // }
      },
      // testInput(val) {
      //   let value = val.data ? val.data : '';
      //   console.log('.....', val.data);
      //   // this.value9 = value;
      //   this.remoteMethod(value);
      // }
    }
  }
</script>

<style>
  a {
    display: block;
    margin-bottom: 6px;
    cursor: pointer;
    color: #666;
    text-decoration: none;
  }

  a:hover {
    color: blue;
  }
</style>
