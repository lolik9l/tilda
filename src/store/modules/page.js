export default {
  namespaced: true,
  state: {
    openLibraryBlocks: false,
    openEditContentsRecord: false,
    openSettingRecord: false
  },
  mutations: {
    openLibraryBlocks(state) {
      state.openLibraryBlocks = !state.openLibraryBlocks;
    },
    openEditContentsRecord(state) {
      state.openEditContentsRecord = !state.openEditContentsRecord;
    },
    openSettingRecord(state) {
      state.openSettingRecord = !state.openSettingRecord;
    }
  },
  actions: {
    openLibraryBlocks({ commit }) {
      commit("openLibraryBlocks");
    },
    openEditContentsRecord({ commit }) {
      commit("openEditContentsRecord");
    },
    openSettingRecord({ commit }) {
      commit("openSettingRecord");
    }
  },
  getters: {
    openLibraryBlocks: s => s.openLibraryBlocks,
    openEditContentsRecord: s => s.openEditContentsRecord,
    openSettingRecord: s => s.openSettingRecord
  }
};
