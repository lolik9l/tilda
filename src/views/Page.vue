<template>
  <workspace-layout>
    <main class="app-page">
      <div class="workspace">
        <library-blocks :class="{ active: openLibraryBlocks }" />
        <edit-contents-record :class="{ active: openEditContentsRecord }" />
        <setting-record :class="{ active: openSettingRecord }" />
        <div
          class="workspace_overlay"
          v-show="
            openLibraryBlocks || openEditContentsRecord || openSettingRecord
          "
          @click="closeModals"
        ></div>
        <div class="workspace_records" v-if="records.length">
          <record
            v-for="(item, index) in records"
            :key="index"
            :data="item"
            :id="index"
          />
        </div>
        <div
          class="workspace_default waves-effect waves-light btn"
          @click="isOpenLibraryBlocks"
          v-else
        >
          <span class="text">Добавить запись</span>
        </div>
      </div>
    </main>
  </workspace-layout>
</template>

<script>
import LibraryBlocks from "@/components/Page/LibraryBlocks";
import EditContentsRecord from "@/components/Page/EditContentsRecord";
import SettingRecord from "@/components/Page/SettingRecord";
import Record from "@/components/Page/Record";

export default {
  components: {
    LibraryBlocks,
    EditContentsRecord,
    SettingRecord,
    Record
  },
  methods: {
    isOpenLibraryBlocks() {
      this.$store.dispatch("page/openLibraryBlocks");
    },
    isopenEditContentsRecord() {
      this.$store.dispatch("page/openEditContentsRecord");
    },
    isOpenSettingRecord() {
      this.$store.dispatch("page/openSettingRecord");
    },
    closeModals() {
      if (this.openLibraryBlocks) this.isOpenLibraryBlocks();
      if (this.openEditContentsRecord) this.isopenEditContentsRecord();
      if (this.openSettingRecord) this.isOpenSettingRecord();
    }
  },
  computed: {
    records() {
      return this.$store.getters["records/records"];
    },
    openLibraryBlocks() {
      return this.$store.getters["page/openLibraryBlocks"];
    },
    openEditContentsRecord() {
      return this.$store.getters["page/openEditContentsRecord"];
    },
    openSettingRecord() {
      return this.$store.getters["page/openSettingRecord"];
    }
  },
  async mounted() {
    await this.$store.dispatch("records/setRecords");
  },
  destroyed() {
    this.$store.dispatch("records/clearRecords");
  }
};
</script>

<style lang="scss" scoped>
.app-page {
  .workspace {
    position: relative;
    &_overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 120vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9998;
      cursor: pointer;
    }
    &_records {
    }
    &_default {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      color: #fff;
      width: 80%;
      margin: auto;
      margin-top: 5rem;
      height: 40px;
      background-color: #ff8562;
    }
  }
}
</style>
