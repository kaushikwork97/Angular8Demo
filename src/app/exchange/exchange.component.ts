import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.sass'],
 
})
export class ExchangeComponent implements OnInit {

  displayedColumns1 = ['amount', 'total', 'price'];
  dataSource1 = sell_orderbook;
  displayedColumns2 = ['price', 'total', 'amount'];
  dataSource2 = buy_orderbook;
  displayedColumns3: string[] = ['symbol', 'coin', 'lastprice', 'change', 'volume'];
  dataSource3 = market;
  displayedColumns4: string[] = ['date', 'price', 'amount'];
  dataSource4 = trade_history;
  displayedColumns5: string[] = ['date', 'pair', 'type', 'price', 'stopprice', 'amount', 'total', 'action'];
  dataSource5 = order_history;

  selected = 'limit';

  constructor() {
    // $(document).ready(function(){
    //   $('.grid-stack').gridstack();
    // });
    
    // $(document).ready(function(){
    //   var options = {
    //     cell_height: 80,
    //     vertical_margin: 10,
    //     animate: true,
    //     draggable: {
    //         handle: '.mat-card-title',
    //     }
    // };
    // this.$('.grid-stack').gridstack(options);
    // });

    $(document).ready(function(){
    $('.grid-stack').gridstack({

      // turns animation on
      animate: true,
    
      // amount of columns
      column: 12,
    
      // max number rows
      maxRow: 0,
    
      // maximum rows amount
      height: 0, 
    
      // widget class
      itemClass: 'grid-stack-item',
    
      // class for placeholder
      placeholderClass: 'grid-stack-placeholder',
    
      // text for placeholder
      placeholderText: '',
    
      // draggable handle selector
      handle: '.grid-stack-item-content',
    
      // class for handle
      handleClass: null,
    
      // one cell height
      cellHeight: 60,
    
      // vertical gap size
      verticalMargin: 20,
    
      // unit
      verticalMarginUnit: 'px',
      cellHeightUnit: 'px',
    
      // if false it tells to do not initialize existing items
      auto: true,
      
      // minimal width.
      minWidth: 768,
    
      // enable floating widgets
      float: false,
    
      // makes grid static
      staticGrid: false,
    
      // if true the resizing handles are shown even the user is not hovering over the widget
      alwaysShowResizeHandle: false,
    
      // allows to owerride jQuery UI draggable options
      draggable: {handle: '.mat-card-title', scroll: true, appendTo: 'body'},
    
      // allows to owerride jQuery UI resizable options
      resizable: {autoHide: true, handles: 'se'},
    
      // disallows dragging of widgets
      disableDrag: false,
    
      // disallows resizing of widgets
      disableResize: false,
    
      // if `true` turns grid to RTL. 
      // Possible values are `true`, `false`, `'auto'`
      rtl: 'auto',
    
      // if `true` widgets could be removed by dragging outside of the grid
      removable: false,
    
      // time in milliseconds before widget is being removed while dragging outside of the grid
      removeTimeout: 2000,
    
      // CSS class when in one column mode
      disableOneColumnMode: 'grid-stack-one-column-mode',
    
      // class that implement drag'n'drop functionallity for gridstack
      ddPlugin: null
    
    });
  });
       
   }

  ngOnInit() {
    
  }
  
}


export interface PeriodicElement1 {
  price: number;
  amount: number;
  total: number;
}
const sell_orderbook: PeriodicElement1[] = [
  {price: 10.00000005, amount: 355717278.00, total: 1.0079},
  {price: 10.00000005, amount: 355717278.00, total: 4.0026},
  {price: 10.00000005, amount: 355717278.00, total: 6.941},
  {price: 10.00000005, amount: 355717278.00, total: 9.0122},
  {price: 10.00000005, amount: 355717278.00, total: 10.811},
  {price: 10.00000005, amount: 355717278.00, total: 12.0107},
  {price: 10.00000005, amount: 355717278.00, total: 14.0067},
  {price: 10.00000005, amount: 355717278.00, total: 15.9994},
  {price: 10.00000005, amount: 355717278.00, total: 18.9984},
  {price: 10.00000005, amount: 355717278.00, total: 20.1797},
  {price: 10.00000005, amount: 355717278.00, total: 14.0067},
  {price: 10.00000005, amount: 355717278.00, total: 15.9994},
  {price: 10.00000005, amount: 355717278.00, total: 18.9984},
  {price: 10.00000005, amount: 355717278.00, total: 20.1797},
];

export interface PeriodicElement2 {
  price: number;
  amount: number;
  total: number;
}
const buy_orderbook: PeriodicElement2[] = [
  {price: 10.00000005, amount: 355717278.00, total: 1.0079},
  {price: 10.00000005, amount: 355717278.00, total: 4.0026},
  {price: 10.00000005, amount: 355717278.00, total: 6.941},
  {price: 10.00000005, amount: 355717278.00, total: 9.0122},
  {price: 10.00000005, amount: 355717278.00, total: 10.811},
  {price: 10.00000005, amount: 355717278.00, total: 12.0107},
  {price: 10.00000005, amount: 355717278.00, total: 14.0067},
  {price: 10.00000005, amount: 355717278.00, total: 15.9994},
  {price: 10.00000005, amount: 355717278.00, total: 18.9984},
  {price: 10.00000005, amount: 355717278.00, total: 20.1797},
  {price: 10.00000005, amount: 355717278.00, total: 14.0067},
  {price: 10.00000005, amount: 355717278.00, total: 15.9994},
  {price: 10.00000005, amount: 355717278.00, total: 18.9984},
  {price: 10.00000005, amount: 355717278.00, total: 20.1797},
];

export interface PeriodicElement3 {
  symbol: string;
  coin: string;
  lastprice: number;
  change: number;
  volume: number;
}
const market: PeriodicElement3[] = [
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
  {symbol: '★', coin: 'BTC', lastprice: 9864.00005690, change: 1.0079, volume: 98.98},
];


export interface PeriodicElement4 {
  date: string;
  price: number;
  amount: number;
}
const trade_history: PeriodicElement4[] = [
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
  {date: '12:15:30', price: 9864.00005690, amount: 1.0079},
];


export interface PeriodicElement5 {
  date: string;
  pair: string;
  type: string;
  price: number;
  stopprice: number;
  amount: number;
  total: number;
  action: string;
}
const order_history: PeriodicElement5[] = [
  {date: '12:15:30', pair: 'BTC-ETH', type: 'BTC', price: 1.00007988, stopprice: 98.98000099, amount: 98.98000050, total: 98.98000079, action: 'X'},
  {date: '12:15:30', pair: 'BTC-ETH', type: 'BTC', price: 1.00007988, stopprice: 98.98000099, amount: 98.98000050, total: 98.98000079, action: 'X'},
  {date: '12:15:30', pair: 'BTC-ETH', type: 'BTC', price: 1.00007988, stopprice: 98.98000099, amount: 98.98000050, total: 98.98000079, action: 'X'},
  {date: '12:15:30', pair: 'BTC-ETH', type: 'BTC', price: 1.00007988, stopprice: 98.98000099, amount: 98.98000050, total: 98.98000079, action: 'X'},
  {date: '12:15:30', pair: 'BTC-ETH', type: 'BTC', price: 1.00007988, stopprice: 98.98000099, amount: 98.98000050, total: 98.98000079, action: 'X'},
  {date: '12:15:30', pair: 'BTC-ETH', type: 'BTC', price: 1.00007988, stopprice: 98.98000099, amount: 98.98000050, total: 98.98000079, action: 'X'},
  {date: '12:15:30', pair: 'BTC-ETH', type: 'BTC', price: 1.00007988, stopprice: 98.98000099, amount: 98.98000050, total: 98.98000079, action: 'X'},
  {date: '12:15:30', pair: 'BTC-ETH', type: 'BTC', price: 1.00007988, stopprice: 98.98000099, amount: 98.98000050, total: 98.98000079, action: 'X'},
  {date: '12:15:30', pair: 'BTC-ETH', type: 'BTC', price: 1.00007988, stopprice: 98.98000099, amount: 98.98000050, total: 98.98000079, action: 'X'},
  {date: '12:15:30', pair: 'BTC-ETH', type: 'BTC', price: 1.00007988, stopprice: 98.98000099, amount: 98.98000050, total: 98.98000079, action: 'X'},
];

