export default {
  namespaced: true,
  state: {
    records: [],
    recordActive: 0,
    buffer: {}
  },
  mutations: {
    setRecords(state, records) {
      state.records.push(...records);
    },
    setActiveRecord(state, id) {
      state.recordActive = id;
    },
    addRecord(state, record) {
      state.records.push(record);
    },
    editRecord(state, { id, record }) {
      state.records.splice(id, 1, record);
    },
    deleteRecord(state, id) {
      state.records.splice(id, 1);
    },
    copyRecord(state, id) {
      state.buffer = Object.assign({}, state.records[id]);
    },
    pasteRecord(state, id) {
      state.records.splice(id, 0, state.buffer);
    },
    visibilityRecord(state, id) {
      state.records[id].visibility = !state.records[id].visibility;
    },
    moveRecord(state, { id, cmd }) {
      if (cmd == "up" && id > 0) {
        const recordMove = state.records.splice(id, 1)[0];
        state.records.splice(id - 1, 0, recordMove);
      } else if (cmd == "down" && id < state.records.length - 1) {
        const recordMove = state.records.splice(id, 1)[0];
        state.records.splice(id + 1, 0, recordMove);
      }
    },
    clearRecords(state) {
      state.records.length = 0;
      state.buffer = {};
    }
  },
  actions: {
    async setRecords({ commit }) {
      try {
        const records = await new Promise((res, rej) => {
          const data = require("@/data/records.json");
          if (!data) {
            rej("Записей не найдено");
          }
          res(data);
        });
        commit("setRecords", records);
      } catch (e) {
        console.error(e);
      }
    },
    setActiveRecord({ commit }, id) {
      commit("setActiveRecord", id);
    },
    addRecord({ commit }, record) {
      commit("addRecord", record);
    },
    editRecord({ commit }, params) {
      commit("editRecord", params);
    },
    deleteRecord({ commit }, id) {
      commit("deleteRecord", id);
    },
    copyRecord({ commit }, record) {
      commit("copyRecord", record);
    },
    pasteRecord({ commit }, id) {
      commit("pasteRecord", id);
    },
    visibilityRecord({ commit }, id) {
      commit("visibilityRecord", id);
    },
    moveRecord({ commit }, params) {
      commit("moveRecord", params);
    },
    clearRecords({ commit }) {
      commit("clearRecords");
    }
  },
  getters: {
    records: s => s.records,
    recordActive: s => s.records[s.recordActive]
  }
};
