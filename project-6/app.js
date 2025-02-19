const damageDealt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      battleLog: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0 || this.currentRound === 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const damage = damageDealt(5, 12);
      this.monsterHealth -= damage;

      this.addMessage('player', 'attack', damage);
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = damageDealt(8, 15);
      this.playerHealth -= damage;
      this.addMessage('monster', 'attack', damage);
    },
    specialAttack() {
      this.currentRound = 0;
      const damage = damageDealt(10, 25);
      this.monsterHealth -= damage;

      this.addMessage('player', 'attack', damage);

      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;

      const healDamage = damageDealt(8, 20);

      if (this.playerHealth + healDamage > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healDamage;
      }

      this.addMessage('player', 'heal', healDamage);

      this.attackPlayer();
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.battleLog = [];
    },
    surender() {
      this.winner = 'monster';
    },
    addMessage(who, what, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount('#game');
