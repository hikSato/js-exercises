customElements.define(
  "inline-circle",
  class InlineCircle extends HTMLElement {
    // <inline-circle>要素がドキュメントに挿入されるときに、ブラウザが
    // このメソッドを呼び出す。disconnectedCallback()メソッドもあるが、
    // この例では必要ない。
    connectedCallback() {
      // 円の作成に必要なスタイルを設定する。
      this.style.display = "inline-block";
      this.style.borderRadius = "50%";
      this.style.borderStyle = "solid";
      this.style.borderWidth = "5px";
      this.style.transform = "translateY(10%)";

      // 大きさがまだ設定されていない場合、現在のフォントサイズをもとに
      // デフォルトの大きさを設定する。
      if (!this.style.width) {
        this.style.width = "0.8em";
        this.style.height = "0.8em";
      }
    }
    // 静的なobservedAttributesプロパティで、値が変化したときに
    // 通知してほしい属性を指定する（ここではゲッターを使っている。
    // 「static」はメソッドにしかつかえないため）。
    static get observedAttributes() {
      return ["diameter", "border-color", "color"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "diameter":
          // diameter属性が変更された場合、大きさを更新する。
          this.style.width = newValue;
          this.style.height = newValue;
          break;
        case "color":
          // color属性が変更された場合、色を変更する。
          this.style.backgroundColor = newValue;
          break;
        case "border-color":
          this.style.borderColor = newValue;
          break;
      }
    }
    // 要素の属性に対応するjavascriptプロパティを定義する。ここで
    // 定義したゲッターとセッターは、属性を読みだしたり設定したり
    // するだけ。JavaScriptのプロパティが設定されると、属性が設定される。
    // 要素のスタイルが更新される。
    get diameter() {
      return this.getAttribute("diameter");
    }
    set diameter(diameter) {
      this.setAttribute("diameter", diameter);
    }
    get color() {
      return this.getAttribute("color");
    }
    set color(color) {
      this.setAttribute("color", color);
    }
    get borderColor() {
      return this.getAttribute("border-color");
    }
    set borderColor(borderColor) {
      this.setAttribute("border-color", borderColor);
    }
  }
);
