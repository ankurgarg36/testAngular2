import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import * as $ from 'jquery';

@Component({
    moduleId: module.id,
    selector: 'upload-component',
    templateUrl: 'upload-component.html',
})

export class UploadComponent implements AfterViewInit {
    @ViewChild('canvas') canvas: ElementRef;
    @ViewChild('img') img: ElementRef;

    private ctx: CanvasRenderingContext2D;
    private element: HTMLImageElement;

    src: string;
    width: number;
    height: number;
    text: string;
    textSize: number;
    x: number;
    y: number;
    dragok: boolean;
    textLength: number;

    constructor(canvas: ElementRef, img: ElementRef) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.text = 'hello uncel';
        this.textSize = 20;
        this.x = 20;
        this.y = 20;
        this.dragok = false;
        this.textLength = (this.text.length * this.textSize) / 2;
    }

    ngAfterViewInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.element = this.img.nativeElement;
    }

    // @HostListener('window:resize')
    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.render();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    render() {
        requestAnimationFrame(() => {
            this.render();
        });
        this.clear();
        this.ctx.font = this.textSize + 'px Arial';
        this.ctx.drawImage(this.element, 0, 0, 400, 400);
        this.textLength = this.ctx.measureText(this.text).width;
        this.ctx.fillText(this.text, this.x, this.y);
    }

    public fileChangeEvent(fileInput: any) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e: any) {
                $('#preview').attr('src', e.target.result);
            };
            reader.readAsDataURL(fileInput.target.files[0]);
            this.resize();
        }
    }

    @HostListener('mouseup', ['$event'])
    onMouseup(event: MouseEvent) {
        this.dragok = false;
        this.canvas.nativeElement.mousemove = null;
    }

    @HostListener('mousemove', ['$event'])
    onMousemove(e) {
/*        console.log(this.canvas);
        console.log('PageX : ' + e.pageX);
        console.log('this.x + this.textLength + this.canvas.nativeElement.offsetLeft');
        console.log( this.x + this.textLength + this.canvas.nativeElement.offsetLeft);

        console.log('this.x - this.textLength + this.canvas.nativeElement.offsetLeft');
        console.log(this.x - this.textLength + this.canvas.nativeElement.offsetLeft);

        console.log('this.y + this.textSize + this.canvas.nativeElement.offsetTop');
        console.log(this.y + this.textSize + this.canvas.nativeElement.offsetTop);

        console.log('this.y - this.textSize + this.canvas.nativeElement.offsetTop');
        console.log(this.y - this.textSize + this.canvas.nativeElement.offsetTop);*/

        if (e.pageX < this.x + this.textLength + this.canvas.nativeElement.offsetLeft &&
            e.pageX > this.x - this.textLength + this.canvas.nativeElement.offsetLeft &&
            e.pageY < this.y + this.textSize + this.canvas.nativeElement.offsetTop &&
            e.pageY > this.y - this.textSize + this.canvas.nativeElement.offsetTop && this.dragok) {
            this.x = e.pageX - this.canvas.nativeElement.offsetLeft - (this.textLength / 2);
            this.y = e.pageY - this.canvas.nativeElement.offsetTop + 10;
            this.dragok = true;
            this.canvas.nativeElement.mousemove = this.myMove;
            console.log(this.x + 'kk' + this.y);
        }
    }
    @HostListener('mousedown', ['$event'])
    onMousedown(event) {
        this.dragok = true;
    }

    myMove(e) {
        if (this.dragok) {
            this.x = e.pageX - this.canvas.nativeElement.offsetLeft - (this.textLength / 2);
            this.y = e.pageY - this.canvas.nativeElement.offsetTop + 10;
        }
    }
}
