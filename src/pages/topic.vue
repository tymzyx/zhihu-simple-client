<template>
  <div>
    <top-bar actived="1"/>
    <div class="topic-wrapper">
      <div class="left-wrapper">
        <div class="left-top-wrapper">
          <navbar :isSingle="true" :header-left="'已关注的话题动态'" :header-right="'共关注 15 个话题'"/>
          <tab-container v-model="staticSelected">
            <tab-container-item itemId="0">
              <div class="topics">
                <div v-for="i in 15" @click="activeTopic = i" :class="{'topic-label': true, 'topic-label-active': i === activeTopic}">
                  电影
                </div>
              </div>
            </tab-container-item>
          </tab-container>
        </div>
        <div class="left-main-wrapper">
          <div class="main-header">
            <div class="main-header-left">
              <img src="../assets/img/movie.jpg"/>
              <a>电影</a>
            </div>
            <div class="main-header-right">
              <span>热门排序</span>
              &nbsp;|&nbsp;
              <span>时间排序</span>
            </div>
          </div>
          <div>
            <brief-module v-for="item in dayHots" :info="item"/>
          </div>
        </div>
      </div>
      <div class="right-wrapper">
        <div class="right-top-wrapper">
          <div>
            <my-button>进入话题广场</my-button>
          </div>
          <div>
            <span>来这里发现更多有趣话题</span>
          </div>
        </div>
        <div class="right-main-wrapper">
          <div class="right-main-top">
            <span>其他人关注的话题</span>
            <a>换一换</a>
          </div>
          <div class="right-main-item" v-for="i in 7">
              <div class="left">
                <img src="../assets/img/movie.jpg"/>
                <a>财务</a>
              </div>
              <div class="right">
                +&nbsp;<span>关注</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import TopBar from '../components/common/TopBar'
  import Navbar from '../components/common/tab/Navbar'
  import TabContainer from '../components/common/tab/TabContainer'
  import TabContainerItem from '../components/common/tab/TabContainerItem'
  import BriefModule from '../components/common/BriefModule'
  import MyButton from '../components/common/MyButton'

  export default {
    components: {TopBar, Navbar, TabContainer, TabContainerItem, BriefModule, MyButton},
    data() {
      return {
        activeTopic: 1,
        staticSelected: '0',
        dayHots: [],
        dayNum: 0,
        monthNum: 0,
      }
    },
    created() {
      this.initData();
    },
    methods: {
      initData() {
        this.updateHots('day');
      },

      updateHots(hotType) {
        let _this = this;
        let offset = hotType === 'day' ? this.dayNum : this.monthNum;
        let url = 'http://localhost:2233/api/v1/hots?offset=' + offset + '&type=' + hotType;
        this.$http.get(url).then(function (response) {
          console.log(response);
          let result =response.data;
          // console.log('result: ', result)
          if (result.code === '0') {
            console.log(result.message);
          } else {
            result.forEach(val => {
              if (hotType === 'day') {
                _this.dayHots.push(val);
              } else {
                _this.monthHots.push(val);
              }
            })
          }
        }).catch(function (error) {
          console.log('error: ', error);
        });
      }
    }
  }
</script>

<style lang="less">
  .topic-wrapper {
    position: relative;
    top: 45px;
    width: 100%;
    min-width: 1080px;
    display: flex;
    justify-content: center;

    .left-wrapper {
      width: 632px;
      margin-top: 10px;

      .topics {
        display: flex;
        flex-wrap: wrap;
        padding: 16px 0 8px;
      }
      .topic-label {
        border: 1px solid #daecf5;
        padding: 5px 12px;
        border-radius: 30px;
        font-size: 13px;
        color: #259;
        cursor: pointer;
        margin-right: 16px;
        margin-bottom: 10px;
      }
      .topic-label:hover {
        color: #fff;
        background: #259;
      }
      .topic-label-active {
        color: #fff !important;
        background: #259 !important;
      }

      .left-main-wrapper {
        padding: 14px 0;
        border-top: 1px solid #eee;
      }
      .main-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;

        .main-header-left {
          display: flex;
          align-items: center;

          img {
            width: 40px;
            height: 40px;
            border-radius: 4px;
            margin-right: 18px;
          }
          a {
            color: #555;
            cursor: pointer;
            font-weight: 700;
            font-size: 14px;
          }
          a:hover {
            text-decoration: underline;
          }
        }
        .main-header-right {
          color: #999;
          font-size: 12px;

          span {
            cursor: pointer;
          }
          span:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .right-wrapper {
      width: 270px;
      margin-left: 50px;
      margin-top: 30px;

      .right-top-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #cce1ef;
        height: 150px;
        background: #eff6fA;
        border-radius: 4px;
        text-align: center;
        margin-bottom: 22px;

        div {
          margin: 10px 0
        }
        span {
          color: #5488b4;
          font-size: 13px;
          cursor: pointer;
        }
        span:hover {
          text-decoration: underline;
        }
      }

      .right-main-wrapper {
        border-top: 1px solid #ddd;
      }
      .right-main-top {
        display: flex;
        justify-content: space-between;
        padding: 16px 0 10px;

        span {
          font-size: 14px;
          color: #666;
          font-weight: 700;
        }
        a {
          font-size: 13px;
          color: #259;
          cursor: pointer;
        }
        a:hover {
          text-decoration: underline;
        }
      }
      .right-main-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;

        .left {
          display: flex;
          align-items: center;

          img {
            width: 40px;
            height: 40px;
            border-radius: 4px;
            margin-right: 18px;
          }
          a {
            font-size: 14px;
            font-weight: bold;
            color: #259;
            cursor: pointer;
          }
          a:hover {
            text-decoration: underline;
          }
        }
        .right {
          color: #999;
          font-size: 13px;
          cursor: pointer;

          span {
            color: #698ebf
          }
          span:hover {
            text-decoration: underline;
          }

          :hover {
            color: #259;
          }
        }
      }
    }
  }
</style>
