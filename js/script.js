const { createApp } = Vue;

createApp({
  data() {
    return {
      emojiObj: {},
      keyObj: [],
      emojiActive: null,
      textArea: "",
      viewPicker: true,
    }
  },
  methods: {
    getJsonEmoji(){
      axios.get('js/emojis.json')
        .then((response) => {
          // handle success
          this.emojiObj = response.data
          this.keyObj = Object.keys(this.emojiObj);
          const key = this.keyObj[0];
        })
        .catch( (error) => {
          // handle error
          console.log(error);
        })
    },
  },
  created() {
    this.getJsonEmoji();
    console.log("Montato");
  },
}).mount("#picker")
