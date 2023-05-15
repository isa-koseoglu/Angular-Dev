import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  board: string[][]; // Sudoku oyun tahtası matrisi

  size: number = 9; // Sudoku tahtasının boyutu

  randomBoardReadonly:string[][]; // Sudoku tahtasının rastgele readonly hücreleri

  gridCreatedFull: string[][]; /* Girid Algoritmasının Akrplanı */
  // Sudoku tahtasının boş hali
  gridBoardEmpty: string[][]=[
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ];

  constructor() {
    this.board = this.gridBoardEmpty; // Oyun tahtasını oluştur
    this.randomBoardReadonly=this.CreateRandomBoardReadonly();
    this.gridCreatedFull=this.CreateRandomBoard();


  }

  GridFill(elm:any,numRow:number,numCol:number):void{
    console.log(this.board);
    this.board[numRow][numCol]=elm.value // Örnek bir sayı ekleme
  }

  /* Burada Koşul Değerimi Doğruluyorum */
  BoardReadonlyCheck(numRow:number,numCol:number):boolean{
    let result:boolean=false;
    if(this.randomBoardReadonly[numRow][0]==(numRow+1).toString() &&this.randomBoardReadonly[numRow][1]==(numCol+1).toString() ){
      result=true;
    }
    return result;
  }

  CreateRandomBoardReadonly():string[][]{
    /* random ile hangi alanlara etki ediceğimi buluyoruz */
    var gridReadonly= [
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
    ]
    for (let i = 0; i < 9; i++) {
      for (let x = 0; x < 2; x++) {
        var randomRow=(i+1)
        var randomColumn=Math.floor(Math.random() * 9)+1;
        gridReadonly[i][0]=randomRow.toString();
        gridReadonly[i][1]=randomColumn.toString();
      }
    }
    return gridReadonly.sort();
  }

  /* random şekilde Sudoku Tahstası İndrime */
  CreateRandomBoard():string[][] {

    var gridBoard= [
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
    ];
    /* Create Rnadom first 3-3-2-3-3-2-3-3   9x9 sudoku algoritması */
    let randomStart=Math.floor(Math.random() * 9)+1;
    // let boardStart=1;
    // let boardEnd=9;
    for (let i = 0; i < 9; i++) {
      for (let x = 0; x < 9; x++) {

        randomStart++;
        if(randomStart==9){
          gridBoard[i][x]=randomStart.toString();
          randomStart=0;
        }
        else if(randomStart>9){
          randomStart-=9;
          gridBoard[i][x]=randomStart.toString();
        }
        else{
          gridBoard[i][x]=randomStart.toString();
        }
      }
      if((i+1)%3==0 ){
        randomStart+=2;
      }
      else{
        randomStart+=3;
      }
    }
    return gridBoard;


  }
  // Sudoku tahtasını oluştur




  // Bir hücreye tıklandığında çalışacak işlev
  // onCellClick(i: number, j: number) {
  //   // Kullanıcının sayı girmesi beklenen bir pencere açılabilir
  //   // Kullanıcının girdiği sayı burada matrise eklenebilir
  //   this.board[i][j] = 5; // Örnek bir sayı ekleme
  // }

  // Oyun tahtasını sıfırlama
  resetBoard() {
    this.board = this.gridBoardEmpty; // Oyun tahtasını oluştur
    this.randomBoardReadonly=this.CreateRandomBoardReadonly();
    this.gridCreatedFull=this.CreateRandomBoard();
  }

  // Doğru cevapları kontrol etme
  checkAnswer() {


  }

  // İpucu verme
  showFull() {
    // İpucu vermek için rastgele bir hücreyi ve doğru sayıyı gösterebilirsiniz
    this.board = this.gridCreatedFull;
  }


}
