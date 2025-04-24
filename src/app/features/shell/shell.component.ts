import {Component} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {ContentComponent} from '../../components/content/content.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavBarComponent} from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-shell',
  imports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NavBarComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
