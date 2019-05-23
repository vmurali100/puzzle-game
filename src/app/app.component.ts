import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-puzzle";
  @ViewChild("main") main;
  defaultImagePosions = ["0", "1", "2", "3", "4", "5", "6", "7", "b"];
  randomImagePosions;
  allImg = document.getElementsByTagName("img");

  play() {
    this.randomImagePosions = [];
    let i = 0;
    this.defaultImagePosions.map(e => {
      while (this.randomImagePosions.length < 8) {
        let rNum = JSON.stringify(Math.round(Math.random() * 7));
        if (this.randomImagePosions.indexOf(rNum) == -1) {
          if (this.randomImagePosions.length < 9) {
            this.randomImagePosions.push(rNum);
          }
        }
        i++;
      }
    });
    this.randomImagePosions.push("b");
    console.log(this.randomImagePosions);
    this.imageChange(this.randomImagePosions);
  }

  imageChange(images) {
    console.log(images);
    let allImages = document.getElementsByTagName("img");
    for (let i = 0; i < allImages.length; i++) {
      console.log(allImages);
      allImages[i].src = "assets/images/" + images[i] + ".jpg";
    }
  }
  moveImage(event) {
    let defaultImagePosions = ["0", "1", "2", "3", "4", "5", "6", "7", "b"];

    let index = event.target.parentNode.id;
    if (event.target.src) {
      console.log(checkDiv[index]);
      checkDiv[index].check.map(ele => {
        console.log(ele);
        let im = this.allImg[ele].src.substring(
          this.allImg[ele].src.lastIndexOf("/") + 1,
          this.allImg[ele].src.lastIndexOf("/") + 2
        );
        if (im == "b") {
          console.log(this.allImg[ele]);
          this.allImg[ele].src = event.target.src;
          this.allImg[event.target.parentNode.id].src =
            "assets/images/" + im + ".jpg";
        }
      });
    }
    let cImages = document.getElementsByTagName("img");
    let cImageArray = [];
    for (let i = 0; i < cImages.length; i++) {
      let imNo = cImages[i].src.substring(
        cImages[i].src.lastIndexOf("/") + 1,
        cImages[i].src.lastIndexOf("/") + 2
      );
      cImageArray.push(imNo);
    }
    console.log(cImageArray);
    console.log(this.defaultImagePosions);
    if (
      cImageArray.length === defaultImagePosions.length &&
      cImageArray.every(function(value, index) {
        return value === defaultImagePosions[index];
      })
    ) {
      alert("Won");
    }
  }
}

const checkDiv = [
  { div: 0, check: [1, 3] },
  { div: 1, check: [0, 2, 4] },
  { div: 2, check: [1, 5] },
  { div: 3, check: [0, 4, 6] },
  { div: 4, check: [1, 3, 5, 7] },
  { div: 5, check: [2, 4, 8] },
  { div: 6, check: [3, 7] },
  { div: 7, check: [4, 6, 8] },
  { div: 8, check: [5, 7] }
];
