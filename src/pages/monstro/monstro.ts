import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-monstro',
  templateUrl: 'monstro.html'
})
export class MonstroPage {

  monstro: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.monstro = this.navParams.get("monstro");
    // modificadores de habilidade
    this.monstro.str_mod = this.calcModifier(this.monstro.strength);
    this.monstro.dex_mod = this.calcModifier(this.monstro.dexterity);
    this.monstro.con_mod = this.calcModifier(this.monstro.constitution);
    this.monstro.int_mod = this.calcModifier(this.monstro.intelligence);
    this.monstro.wis_mod = this.calcModifier(this.monstro.wisdom);
    this.monstro.cha_mod = this.calcModifier(this.monstro.charisma);
    // Listando saving throws
    this.monstro.saves = [];
    if(this.monstro.strength_save) this.monstro.saves.push(`str +${this.monstro.strength_save}`);
    if(this.monstro.dexterity_save) this.monstro.saves.push(`dex +${this.monstro.dexterity_save}`);
    if(this.monstro.constitution_save) this.monstro.saves.push(`con +${this.monstro.constitution_save}`);
    if(this.monstro.intelligence_save) this.monstro.saves.push(`int +${this.monstro.intelligence_save}`);
    if(this.monstro.wisdom_save) this.monstro.saves.push(`wis +${this.monstro.wisdom_save}`);
    if(this.monstro.charisma_save) this.monstro.saves.push(`cha +${this.monstro.charisma_save}`);
    // Listando skills
    this.monstro.skills = [];
    if(this.monstro.athletics) this.monstro.skills.push(`athletics +${this.monstro.athletics}`);
    if(this.monstro.acrobatics) this.monstro.skills.push(`acrobatics +${this.monstro.acrobatics}`);
    if(this.monstro.stealth) this.monstro.skills.push(`stealth +${this.monstro.stealth}`);
    if(this.monstro.arcana) this.monstro.skills.push(`arcana +${this.monstro.arcana}`);
    if(this.monstro.history) this.monstro.skills.push(`history +${this.monstro.history}`);
    if(this.monstro.investigation) this.monstro.skills.push(`investigation +${this.monstro.investigation}`);
    if(this.monstro.nature) this.monstro.skills.push(`nature +${this.monstro.nature}`);
    if(this.monstro.religion) this.monstro.skills.push(`religion +${this.monstro.religion}`);
    if(this.monstro.insight) this.monstro.skills.push(`insight +${this.monstro.insight}`);
    if(this.monstro.medicine) this.monstro.skills.push(`medicine +${this.monstro.medicine}`);
    if(this.monstro.perception) this.monstro.skills.push(`perception +${this.monstro.perception}`);
    if(this.monstro.survival) this.monstro.skills.push(`survival +${this.monstro.survival}`);
    if(this.monstro.deception) this.monstro.skills.push(`deception +${this.monstro.deception}`);
    if(this.monstro.intimidation) this.monstro.skills.push(`intimidation +${this.monstro.intimidation}`);
    if(this.monstro.performance) this.monstro.skills.push(`performance +${this.monstro.performance}`);
    if(this.monstro.persuasion) this.monstro.skills.push(`persuasion +${this.monstro.persuasion}`);
  }

  ionViewDidLoad() {
    console.log(this.monstro);
  }

  calcModifier(value: number){
    let mod = Math.floor((value - 10) / 2);
    return (mod >= 0) ? `+${mod}`: `${mod}`;
  }

}
