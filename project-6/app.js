const damageDealt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0 || this.currentRound === 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const damage = damageDealt(5, 12);
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;

        return;
      }

      this.attackPlayer();
    },
    attackPlayer() {
      const damage = damageDealt(8, 15);
      this.playerHealth -= damage;
    },
    specialAttack() {
      this.currentRound = 0;
      const damage = damageDealt(10, 25);
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;

        return;
      }

      this.attackPlayer();
    },
    healPlayer() {
      this.playerHealth += 10;

      if (this.playerHealth >= 100) {
        this.playerHealth = 100;
      }
    },
  },
});

app.mount('#game');
