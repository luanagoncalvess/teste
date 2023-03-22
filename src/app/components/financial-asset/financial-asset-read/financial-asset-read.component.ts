import { Component, OnInit } from '@angular/core';
import { FinancialAssetService } from '../../financial-asset.service';
import { FinancialAsset } from '../financial-asset.model';


@Component({
  selector: 'app-financial-asset-read',
  templateUrl: './financial-asset-read.component.html',
  styleUrls: ['./financial-asset-read.component.scss']
})
export class FinancialAssetReadComponent implements OnInit {

  financialAsset: Array<any>;
  displayedColumns: string[] = ['day','date','value', 'variation'];

  constructor(private financialAssetService: FinancialAssetService ){}

  ngOnInit(): void {
    // this.financialAssetService.read().subscribe( financialAsset => {
    //   console.log( financialAsset);
    // })
     this.financialAssetService.read().subscribe(products => {
      console.log(products)
    })
    // this.financialAsset[0].timestamp = this.financialAsset[0].timestamp.map((element:  number ) => {
    //   return new Date(element*1000).toLocaleDateString('pt-BR');
    // });
    // console.log(this.financialAsset);
  }

  abs(numero: number): number{
    return Math.abs(numero);
  }

}
