<template>
  <div
    class="record"
    @mouseenter="showPanelControl = 1"
    @mouseleave="showPanelControl = 0"
  >
    <panel-control
      v-show="showPanelControl"
      :idRecord="id"
      :visibility="visibility"
    />
    <component v-if="visibility" :is="componentName" :data="data"></component>
    <div class="record_default" v-else>
      <h3>Этот блок скрыт</h3>
    </div>
  </div>
</template>

<script>
import PanelControl from "@/components/Page/PanelControl";
import blockText from "@/components/Page/TypesRecords/blockText";
import blockCover from "@/components/Page/TypesRecords/blockCover";

export default {
  data: () => ({
    showPanelControl: 0
  }),
  props: ["id", "data"],
  computed: {
    componentName() {
      return this.data.componentName;
    },
    visibility() {
      return this.data.visibility;
    }
  },
  components: {
    PanelControl,
    blockText,
    blockCover
  },
  mounted() {
    // console.log(this.$parent, this.$refs);
  }
};
</script>

<style lang="scss" scoped>
.record {
  width: 100%;
  height: 100%;
}
</style>
