<template>
  <div class="panel-control panel-control">
    <div class="panel-control_setting">
      <div class="panel-control_setting_item" @click="isOpenSettingRecord">
        <i class="tiny material-icons icon">_settings</i>
        <span class="text">Настройки</span>
      </div>
      <div class="panel-control_setting_item" @click="isOpenEditContentsRecord">
        <i class="tiny material-icons icon">create</i>
        <span class="text">Контент</span>
      </div>
    </div>
    <div class="panel-control_btns">
      <div class="panel-control_btns_item" @click="copyingRecord">
        <i class="small material-icons icon">content_copy</i>
      </div>
      <div class="panel-control_btns_item" @click="deleteRecord">
        <i class="small material-icons icon">delete</i>
      </div>
      <div class="panel-control_btns_item" @click="visibilityRecord">
        <i class="small material-icons icon" v-if="visibility"
          >visibility_off</i
        >
        <i class="small material-icons icon" v-else>visibility</i>
      </div>
      <div class="panel-control_btns_item" @click="moveRecord('up')">
        <i class="small material-icons icon">arrow_drop_up</i>
      </div>
      <div class="panel-control_btns_item" @click="moveRecord('down')">
        <i class="small material-icons icon">arrow_drop_down</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["idRecord", "visibility"],
  methods: {
    async copyingRecord() {
      await this.$store.dispatch("records/copyRecord", this.idRecord);
      await this.$store.dispatch("records/pasteRecord", this.idRecord);
    },
    async deleteRecord() {
      await this.$store.dispatch("records/deleteRecord", this.idRecord);
    },
    async visibilityRecord() {
      await this.$store.dispatch("records/visibilityRecord", this.idRecord);
    },
    async moveRecord(cmd) {
      await this.$store.dispatch("records/moveRecord", {
        id: this.idRecord,
        cmd
      });
    },
    isOpenEditContentsRecord() {
      this.$store.dispatch("records/setActiveRecord", this.idRecord);
      this.$store.dispatch("page/openEditContentsRecord");
    },
    isOpenSettingRecord() {
      this.$store.dispatch("records/setActiveRecord", this.idRecord);
      this.$store.dispatch("page/openSettingRecord");
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-control {
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 99;

  &_setting {
    position: absolute;
    left: 0;
    display: flex;
    background-color: #f0f0f0;

    &_item {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      height: 35px;
      cursor: pointer;

      .text {
        font-size: 16px;
      }
      .icon {
        color: #111;
        margin-right: 0.5rem;
      }
    }
  }
  &_btns {
    position: absolute;
    right: 0;
    display: flex;
    background-color: #f0f0f0;

    &_item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border: 1px solid #ccc;
      cursor: pointer;

      .icon {
        color: #111;
      }
    }
  }
}
</style>
