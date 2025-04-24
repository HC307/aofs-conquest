import {Component} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {ContentComponent} from './components/content/content.component';
import {FooterComponent} from './components/footer/footer.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';

@Component({
  selector: 'app-shell',
  imports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SideNavComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
