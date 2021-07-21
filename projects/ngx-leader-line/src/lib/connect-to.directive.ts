import {Directive, ElementRef, Input, OnDestroy, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import * as LeaderLine from "leader-line-new";
import {
  DashOptions,
  DropShadowOptions,
  GradientOptions,
  Options,
  PathType,
  PlugType,
  SocketType
} from "leader-line-new";


@Directive({
  selector: '[ldrConnectTo]',
  exportAs: "ldrConnector"
})
export class ConnectToDirective implements OnInit, OnDestroy {
  @Input() ldrConnectTo: ElementRef | Element | undefined;
  @Input() ldrOptions: Options | undefined;

  @Input() ldrSize?: number;
  @Input() ldrColor?: string;
  @Input() ldrPath?: PathType;
  @Input() ldrStartSocket?: SocketType;
  @Input() ldrEndSocket?: SocketType;
  @Input() ldrStartSocketGravity?: number | string | Array<string | number>;
  @Input() ldrEndSocketGravity?: number | string | Array<string | number>;
  @Input() ldrStartPlug?: PlugType;
  @Input() ldrEndPlug?: PlugType;
  @Input() ldrStartPlugColor?: string;
  @Input() ldrEndPlugColor?: string;
  @Input() ldrStartPlugSize?: number;
  @Input() ldrEndPlugSize?: number;
  @Input() ldrOutline?: boolean;
  @Input() ldrOutlineColor?: string;
  @Input() ldrOutlineSize?: number;
  @Input() ldrStartPlugOutline?: boolean;
  @Input() ldrEndPlugOutline?: boolean;
  @Input() ldrStartPlugOutlineColor?: string;
  @Input() ldrEndPlugOutlineColor?: string;
  @Input() ldrStartPlugOutlineSize?: number;
  @Input() ldrEndPlugOutlineSize?: number;
  @Input() ldrStartLabel?: string | LeaderLine.LabelAttachment;
  @Input() ldrMiddleLabel?: string | LeaderLine.LabelAttachment;
  @Input() ldrEndLabel?: string | LeaderLine.LabelAttachment;
  @Input() ldrDash?: boolean | DashOptions;
  @Input() ldrGradient?: boolean | GradientOptions;
  @Input() ldrDropShadow?: boolean | DropShadowOptions;


  private instance: LeaderLine | undefined;
  private resizeObserver: ResizeObserver | undefined;

  constructor(private elRef: ElementRef) {
  }


  private convertToSimpleKey(str: string) {
    str = str.substr(3);
    return str[0].toLowerCase() + str.substring(1);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    for (let [key, change] of Object.entries(simpleChanges)) {
      if (!change.isFirstChange() && this.instance) {
        if (key == "ldrConnectTo") {
          throw Error("cannot assign ldrConnectTo again.");
        }
        if (key == "ldrOptions") {
          this.instance?.setOptions(change.currentValue)
        } else {
          const simpleKey = this.convertToSimpleKey(key);
          (this.instance as any)[simpleKey] = change.currentValue;
        }
      }
    }
  }

  ngOnInit() {
    let dest;

    if (this.ldrConnectTo instanceof Element) {
      dest = this.ldrConnectTo;
    } else {
      dest = this.ldrConnectTo?.nativeElement ?? this.ldrConnectTo;
    }


    const initialOptions = Object.entries(this)
      .filter(([k, v]) => k.startsWith("ldr"))
      .map(([k, v]) => [this.convertToSimpleKey(k), v])
      .reduce((acc, cur) => {
        acc[cur[0]] = cur[1];
        return acc;
      }, {} as any);

    this.instance = new LeaderLine(this.elRef.nativeElement ?? this.elRef, dest, {...initialOptions, ...this.ldrOptions});

    (LeaderLine as any).positionByWindowResize = true;


    this.resizeObserver = new ResizeObserver(() => {
      this.instance?.position();
    });
    this.resizeObserver.observe(this.elRef.nativeElement ?? this.elRef);
    this.resizeObserver.observe(dest);
  }

  ngOnDestroy() {
    this.instance?.remove();
    this.resizeObserver?.disconnect();
  }

  position() {
    this.instance?.position();
  }

  hide() {
    this.instance?.hide();
  }

  show() {
    this.instance?.show();
  }

  remove() {
    this.instance?.remove();
  }


}
