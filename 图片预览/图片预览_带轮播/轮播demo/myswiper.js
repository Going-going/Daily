class MySwiper {
    constructor(options) {
        if(typeof options === 'object'){
            this.container = document.querySelector(options.container);
        }else{
            this.container = document.querySelector(options);
        }
        this.wrapper = this.container.querySelector('.slide-wrapper');
        this.slide = this.wrapper.querySelectorAll('.slide');
        this.calcSize();
    }
    calcSize() {
        this.wrapper.style.width = (this.container.offsetWidth * this.slide.length) + 'px';
        for(let i = 0; i < this.slide.length; i++){
            this.slide[i].style.width = this.container.offsetWidth + 'px';
        }
    }
}