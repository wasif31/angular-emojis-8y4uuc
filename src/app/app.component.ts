import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  message = "";
  showEmojiPicker = false;
  sets = [
    "native",
    "google",
    "twitter",
    "facebook",
    "emojione",
    "apple",
    "messenger"
  ];
  emojiMap = {
    joy: "😀",
    ":-)": "😀",
    ":)": "😀",

    shades: "😍",
    happy: "&#x1f600"
  };
  jjj = {
    "-)": "joy",
    shades: "😍",
    happy: "&#x1f600"
  };

  re = /([0-9A-Za-z'\&\-\.\/\(\)=:;]+)|((?::|;|=)(?:-)?(?:\)|D|P))/g;
  text =
    "I was like :joy: and she was like :happy: and we ware like :shades: and :-) :) ";
  set = "twitter";
  result: any;
  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    console.log(this.message);
    const { message } = this;
    console.log(message);
    console.log(`${event.emoji.native}`);
    const text = `${message}${event.emoji.native}`;

    this.message = text;
    // this.showEmojiPicker = false;
  }

  onFocus() {
    console.log("focus");
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log("onblur");
  }
  emojiIt = () => {
    console.log(this.re, this.text);
    console.log(this.emojiMap);
    // this.text = this.message;
    while ((this.result = this.re.exec(this.text))) {
      this.text = this.text.replace(
        this.result[0],
        this.emojiMap[this.result[1]]
      );
    }
  };
}
