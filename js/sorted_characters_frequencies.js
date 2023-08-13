class CharFreq {
  asciiMethod(message = "") {
    console.log("ASCII Method");

    let freq = new Array(127).fill(0);

    for (let i = 0; i < message.length; i++) {
      const currentCode = message[i].charCodeAt(0);
      freq[currentCode]++;
    }

    for (let i = 0; i < freq.length; i++) {
      if (freq[i] > 0) {
        let c = String.fromCharCode(i);
        console.log(c + " ", freq[i]);
      }
    }
  }

  anyCodeMethod(message = "") {
    console.log("Any Code Method");

    const freq = {};

    for (let i = 0; i < message.length; i++) {
      if (freq[message[i]] === undefined) {
        freq[message[i]] = 1;
      } else {
        freq[message[i]] = parseInt(freq[message[i]]) + 1;
      }
    }

    for (const key in freq) {
      console.log(key + " " + freq[key]);
    }
  }

  sortHash(freq = {}) {
    const freqArray = Object.entries(freq);
  }
}

const cf = new CharFreq();

let msg = "hello world";

cf.asciiMethod(msg);

cf.anyCodeMethod(msg);
