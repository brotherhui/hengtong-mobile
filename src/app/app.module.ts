import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//我们的项目
import { MuseumHomePage } from '../pages/museum-home/museum-home';
import { IntangibleCulturalHeritagePage } from '../pages/intangible-cultural-heritage/intangible-cultural-heritage';
import { CulturalForumPage } from '../pages/cultural-forum/cultural-forum';
import { ThematicActivityPage } from '../thematic-activity/thematic-activity';
import { JournalArticlesPage } from '../journal-articles/journal-articles';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntangibleCulturalHeritagePage,
    MuseumHomePage,
    CulturalForumPage,
    ThematicActivityPage,
    JournalArticlesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    HomePage,
    MuseumHomePage,
    IntangibleCulturalHeritagePage,
    CulturalForumPage,
    ThematicActivityPage,
    JournalArticlesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
