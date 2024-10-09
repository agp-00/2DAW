export class PortadaTag extends HTMLElement{

    static get observedAttributes(){
        return ["width"];
    }

    attributeChangedCallback(name, oldValue, newValue){
        this._generateImage();
    }

    connectedCallback(){
        this._generateImage();
    }

    _generateImage(){
        const name = this.getAttribute("name");
        const width = this.getAttribute("width") || "200px";
        this.innerHTML =`<img src="./images/${name}.jpg" style="width:${width}" />`;
    }

}

window.customElements.define("portada-tag", PortadaTag);