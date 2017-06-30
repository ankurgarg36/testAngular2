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

    width: number;
    height: number;
    text: string;
    textSize: number;
    x: number;
    y: number;
    dragok: boolean;
    textLength: number;
    showExportButton: boolean;

    constructor(canvas: ElementRef, img: ElementRef) {
        this.width = 400;
        this.height = 300;
        this.text = 'hello uncel';
        this.textSize = 20;
        this.x = 200;
        this.y = 200;
        this.dragok = false;
        this.textLength = (this.text.length * this.textSize) / 2;
    }

    ngAfterViewInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.element = this.img.nativeElement;
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

    fileChangeEvent(fileInput: any) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e: any) {
                $('#preview').attr('src', e.target.result);
            };
            reader.readAsDataURL(fileInput.target.files[0]);
            this.showExportButton = true;
            this.render();
        }
    }

    @HostListener('mouseup', ['$event'])
    onMouseup(event: MouseEvent) {
        this.dragok = false;
        this.canvas.nativeElement.mousemove = null;
    }

    @HostListener('mousemove', ['$event'])
    onMousemove(e) {
        if (e.pageX < this.canvas.nativeElement.width + this.canvas.nativeElement.offsetLeft &&
            e.pageX > this.canvas.nativeElement.offsetLeft &&
            e.pageY > this.canvas.nativeElement.offsetTop &&
            e.pageY < this.canvas.nativeElement.height + this.canvas.nativeElement.offsetTop && this.dragok) {
            this.x = e.pageX - this.canvas.nativeElement.offsetLeft - (this.textLength / 2);
            this.y = e.pageY - this.canvas.nativeElement.offsetTop + 10;
            this.canvas.nativeElement.mousemove = this.myMove;
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

    exportImage() {
        const win = window.open();
        win.document.write('<img src="' + this.canvas.nativeElement.toDataURL() + '" />');
        return false;
    }
}
