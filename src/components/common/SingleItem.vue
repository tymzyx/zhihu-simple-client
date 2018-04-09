<template>
  <div class="single-item-wrapper">
    <div class="item-avatar" :style="{'background-image': avatarUrl}" v-if="avatarUrl">
    </div>
    <div class="item-info">
      <div>
        <p @mouseenter="showProfile($event)" @mouseleave="hiddenProfile($event)">{{itemInfo}}</p>
      </div>
      <div>
        <span>2548 人关注</span>
        <i class="iconfont icon-point"></i>
        <span>51 个问题</span>
      </div>
    </div>
    <div class="profile-wrapper" ref="profileWrapper" v-show="isShowProfile">
      <div class="cardIcon" ref="cardIcon"></div>
      <profile-card></profile-card>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import ProfileCard from './ProfileCard'

  export default {
    components: {ProfileCard},
    props: ['avatarUrl', 'itemInfo'],
    data() {
      return {
        isShowProfile: false,
        isOnProfile: false
      }
    },
    methods: {
      showProfile(ev) {
        let ele = ev.target;
        console.log('i am hover', ele.getBoundingClientRect());
        let eleCoord = ele.getBoundingClientRect();
        let coordX = eleCoord.x;
        let coordY = eleCoord.y;
        let eleHeight = eleCoord.height;
        // let eleWidth = eleCoord.width;

        this.isShowProfile = true;
        let profileRef = this.$refs.profileWrapper;
        let cardIconRef = this.$refs.cardIcon;
        let cardIcon = $(cardIconRef);
        let profile = $(profileRef);
        if (coordY > 340) {
          profile.css({
            'top': `${coordY - 270}px`,
            'left': `${coordX - 240}px`
          });
          cardIcon.css({
            'width': '16px',
            'height': '16px',
            'position': 'fixed',
            'top': `${coordY - 18}px`,
            'left': `${coordX}px`,
            'transform': 'rotate(-135deg)',
            'background': '#fff',
            'border-top': '1px solid #bbb',
            'border-left': '1px solid #bbb',
          });
        } else {
          profile.css({
            'top': `${coordY + eleHeight + 18}px`,
            'left': `${coordX - 240}px`
          });
          cardIcon.css({
            'width': '16px',
            'height': '16px',
            'position': 'fixed',
            'top': `${coordY + eleHeight + 10}px`,
            'left': `${coordX}px`,
            'transform': 'rotate(45deg)',
            'background': '#fff',
            'border-top': '1px solid #bbb',
            'border-left': '1px solid #bbb',
          });
        }

        let _this = this;
        profile.bind('mouseenter', function () {
          _this.isOnProfile = true;
          _this.isShowProfile = true;
        });
        profile.bind('mouseleave', function () {
          setTimeout(function () {
            _this.isOnProfile = false;
            _this.isShowProfile = false;
          }, 100);
        });

      },
      hiddenProfile() {
        let _this = this;

        setTimeout(function() {
          if (_this.isOnProfile) {
            return;
          }
          _this.isShowProfile = false;
        }, 500);
      }
    }
  }
</script>

<style lang="less" scoped>
  .single-item-wrapper {
    border-bottom: 1px solid #ddd;
    width: 280px;
    height: 72px;
    box-sizing: border-box;
    padding: 14px 0;
    display: flex;

    .item-avatar {
      width: 40px;
      height: 40px;
      background-size: contain;
      border-radius: 4px;
      margin-right: 12px;
    }
    .item-info p {
      margin: 0;
      font-size: 14px;
      color: #259;
      cursor: pointer;
    }
    .item-info p:hover {
      text-decoration: underline;
    }
    .item-info span {
      font-size: 12px;
      color: #aaa;
    }
    .item-info i {
      font-size: 12px;
      color: #aaa;
    }

    .profile-wrapper {
      position: fixed;
    }
  }
</style>
