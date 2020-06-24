<template>
  <div class="edit-contents-record">
    <div class="edit-contents-record_header">
      <div class="save btn" @click="save">
        <span class="text">Сохранить</span>
      </div>
      <div class="saveAndClose btn" @click="saveAndClose">
        <span class="text">Сохранить и закрыть</span>
      </div>
    </div>
    <div class="edit-contents-record_body">
      <div class="list">
        <div class="item" v-for="(title, key) in titles" :key="key">
          <div class="input-field" v-if="key == 'head'">
            <span class="helper-text left">{{ title }}</span>
            <input
              class="materialize-textarea"
              ref="textarea"
              v-model="record.content[key]"
            />
          </div>
          <div class="file-field input-field" v-else-if="key == 'img'">
            <div class="btn">
              <span>File</span>
              <input type="file" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
              <span class="helper-text left">{{ title }}</span>
            </div>
          </div>
          <div class="input-field" v-else>
            <span class="helper-text left">{{ title }}</span>
            <textarea
              class="materialize-textarea"
              v-model="record.content[key]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    save() {
      console.log("Сохранить.");
    },
    saveAndClose() {
      this.save();
      this.$store.dispatch("page/openEditContentsRecord");
    }
  },
  computed: {
    record() {
      return this.$store.getters["records/recordActive"];
      // return this.records[this.recordId];
    },
    titles() {
      return this.record?.content?.titles;
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-contents-record {
  position: fixed;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  transition: 0.5s left linear;
  background-color: #fff;
  z-index: 9999;
  overflow: auto;

  &.active {
    left: 0%;
  }
  &_header {
    display: flex;
    margin-bottom: 3rem;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 60px;
      border-radius: 0;

      .text {
      }
    }
    .save {
      background-color: #111;
    }
    .saveAndClose {
      background-color: #ff855d;
    }
  }
  &_body {
    display: flex;
    justify-content: center;

    .list {
      width: 100%;
      padding: 0 3rem;
      .item {
        margin-bottom: 2rem;

        textarea.materialize-textarea {
          max-height: 400px;
          min-height: 200px;
          overflow: initial;
        }
      }
    }
  }
}
</style>
