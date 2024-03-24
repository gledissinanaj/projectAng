import { Component } from '@angular/core';
import { RecipeModel } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  
  recipies: RecipeModel[] = [
    {name: 'Pork & chilli lettuce cups', 
    description:'Take the stress out of entertaining by getting ahead on your party nibbles. <br> The filling in these pork lettuce cups can be frozen for up to two months',
    imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2021/10/Pork-and-chilli-lettuce-cups-cdc8907.jpg?quality=90&webp=true&resize=300,272'},
    {name: 'Chicken with crushed harissa chickpeas', 
    description:'Need something speedy for dinner? Try this chicken, coated in flavourful <br> zaatar and served with spiced chickpeas. It is simple, but seriously delicious',
    imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-with-crushed-harissa-chickpeas-f009cb0.jpg?quality=90&webp=true&resize=300,272'},
    {name: 'Ginger chicken & green bean noodless', 
    description:'Try this speedy one-pan ginger chicken with noodles and green beans as a quick <br> and easy midweek meal.  It is healthy, low in fat and calories, too',
    imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/ginger-chicken-green-bean-noodles-7b58cfc.jpg?quality=90&webp=true&resize=300,272'},
    {name: 'Ricotta, broccoli, & new potato frittata', 
    description:'Make this quick and healthy frittata with a bean salad in 30 minutes flat. <br> Flavoured with broccoli and ricotta, you will also have leftovers you can enjoy the next day',
    imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/ricotta-broccoli-new-potato-frittata-f920303.jpg?quality=90&webp=true&resize=300,272'},
    {name: 'Turmeric, ginger & coconut fish curry', 
    description:'Serve up this healthy fish curry, with vibrant turmeric, ginger and <br> coconut flavours, for an easy midweek meal. It takes just 30 minutes from prep to plate',
    imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Turmeric-fish-curry-f6604de.jpg?quality=90&webp=true&resize=300,272'},
  ]
}
