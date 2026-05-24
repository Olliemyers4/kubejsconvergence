// Convergence v0.25 - core/bridge tags.
(() => {
  const PATHS = {
  "create": {
    "tiers": 6
  },
  "ars": {
    "tiers": 6
  },
  "ae2": {
    "tiers": 6
  },
  "energy": {
    "tiers": 7
  },
  "industry": {
    "tiers": 6
  },
  "occult": {
    "tiers": 6
  },
  "agriculture": {
    "tiers": 8
  },
  "cuisine": {
    "tiers": 4
  },
  "exploration": {
    "tiers": 4
  },
  "aero": {
    "tiers": 6
  },
  "travel": {
    "tiers": 4
  },
  "infra": {
    "tiers": 4
  }
};
  function C(path, tier) { return `kubejs:${path}_core_t${tier}`; }
  ServerEvents.tags('item', event => {
    const all = [];
    Object.entries(PATHS).forEach(([path, cfg]) => {
      const parts = [];
      for (let t = 1; t <= cfg.tiers; t++) {
        const id = C(path, t); parts.push(id); all.push(id); event.add(`kubejs:v25_core_tier_${t}`, id); if (t >= 8) event.add('kubejs:v25_core_tier_8_plus', id);
      }
      event.add(`kubejs:v25_core_${path}`, parts);
    });
    event.add('kubejs:v25_core_parts', all);
    event.add('kubejs:v25_bridge_matrices', ['kubejs:bridge_matrix_t1','kubejs:bridge_matrix_t2','kubejs:bridge_matrix_t3','kubejs:bridge_matrix_t4','kubejs:bridge_matrix_t5','kubejs:bridge_matrix_t6','kubejs:bridge_matrix_t7','kubejs:bridge_matrix_t8']);
    Object.entries(PATHS).forEach(([path, cfg]) => {
      for (let t = 1; t <= 8; t++) {
        const others = []; Object.entries(PATHS).forEach(([other, ocfg]) => { if (other !== path && ocfg.tiers >= t) others.push(C(other, t)); });
        if (others.length) event.add(`kubejs:v25_supp_${path}_tier_${t}`, others);
      }
    });
  });
})();
