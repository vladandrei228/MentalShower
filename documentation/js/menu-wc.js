'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">MentalShower documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"' : 'data-target="#xs-components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"' :
                                            'id="xs-components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FirstQuestionPageModule.html" data-type="entity-link" >FirstQuestionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FirstQuestionPageModule-b56ca2a5d3232846b06552bfc6740cc0aadf2baa4b934e185c95cf09b5445c5e5e86a49618ba9766a267ed219ce19b170cba2959eab06aa16dfc2b03d1311f70"' : 'data-target="#xs-components-links-module-FirstQuestionPageModule-b56ca2a5d3232846b06552bfc6740cc0aadf2baa4b934e185c95cf09b5445c5e5e86a49618ba9766a267ed219ce19b170cba2959eab06aa16dfc2b03d1311f70"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FirstQuestionPageModule-b56ca2a5d3232846b06552bfc6740cc0aadf2baa4b934e185c95cf09b5445c5e5e86a49618ba9766a267ed219ce19b170cba2959eab06aa16dfc2b03d1311f70"' :
                                            'id="xs-components-links-module-FirstQuestionPageModule-b56ca2a5d3232846b06552bfc6740cc0aadf2baa4b934e185c95cf09b5445c5e5e86a49618ba9766a267ed219ce19b170cba2959eab06aa16dfc2b03d1311f70"' }>
                                            <li class="link">
                                                <a href="components/FirstQuestionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FirstQuestionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FirstQuestionPageRoutingModule.html" data-type="entity-link" >FirstQuestionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'data-target="#xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' :
                                            'id="xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SecondQuestionPageModule.html" data-type="entity-link" >SecondQuestionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SecondQuestionPageModule-84c4f435861c5dc9b19f59538e13b573ad02cdd8264b14d03959ccfa8d33185a1169e382afbd0d998a2a8dbd3575811a9cd1d3b0e8f1e6c2098c2ead78324c83"' : 'data-target="#xs-components-links-module-SecondQuestionPageModule-84c4f435861c5dc9b19f59538e13b573ad02cdd8264b14d03959ccfa8d33185a1169e382afbd0d998a2a8dbd3575811a9cd1d3b0e8f1e6c2098c2ead78324c83"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SecondQuestionPageModule-84c4f435861c5dc9b19f59538e13b573ad02cdd8264b14d03959ccfa8d33185a1169e382afbd0d998a2a8dbd3575811a9cd1d3b0e8f1e6c2098c2ead78324c83"' :
                                            'id="xs-components-links-module-SecondQuestionPageModule-84c4f435861c5dc9b19f59538e13b573ad02cdd8264b14d03959ccfa8d33185a1169e382afbd0d998a2a8dbd3575811a9cd1d3b0e8f1e6c2098c2ead78324c83"' }>
                                            <li class="link">
                                                <a href="components/SecondQuestionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondQuestionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SecondQuestionPageRoutingModule.html" data-type="entity-link" >SecondQuestionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/thankyouPageModule.html" data-type="entity-link" >thankyouPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-thankyouPageModule-fe4f0e1cca2447eecd16e8c15f50909ee04dcc10b1ab372e4d87a9a509c5e7875a9b9713db9fe269339059a2dd81ed1b17d30ca10efdd2c013e39f94362b14ad"' : 'data-target="#xs-components-links-module-thankyouPageModule-fe4f0e1cca2447eecd16e8c15f50909ee04dcc10b1ab372e4d87a9a509c5e7875a9b9713db9fe269339059a2dd81ed1b17d30ca10efdd2c013e39f94362b14ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-thankyouPageModule-fe4f0e1cca2447eecd16e8c15f50909ee04dcc10b1ab372e4d87a9a509c5e7875a9b9713db9fe269339059a2dd81ed1b17d30ca10efdd2c013e39f94362b14ad"' :
                                            'id="xs-components-links-module-thankyouPageModule-fe4f0e1cca2447eecd16e8c15f50909ee04dcc10b1ab372e4d87a9a509c5e7875a9b9713db9fe269339059a2dd81ed1b17d30ca10efdd2c013e39f94362b14ad"' }>
                                            <li class="link">
                                                <a href="components/thankyouPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >thankyouPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/thankyouPageRoutingModule.html" data-type="entity-link" >thankyouPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThirdQuestionPageModule.html" data-type="entity-link" >ThirdQuestionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ThirdQuestionPageModule-1703edaac553dd2415684a24e73defee90c033b9e028062bf1a8fd4d00ffc71836a7639076347c1c610a5d3cbbc33178716ef09be70d6fc907bb1a98c1aed0cb"' : 'data-target="#xs-components-links-module-ThirdQuestionPageModule-1703edaac553dd2415684a24e73defee90c033b9e028062bf1a8fd4d00ffc71836a7639076347c1c610a5d3cbbc33178716ef09be70d6fc907bb1a98c1aed0cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThirdQuestionPageModule-1703edaac553dd2415684a24e73defee90c033b9e028062bf1a8fd4d00ffc71836a7639076347c1c610a5d3cbbc33178716ef09be70d6fc907bb1a98c1aed0cb"' :
                                            'id="xs-components-links-module-ThirdQuestionPageModule-1703edaac553dd2415684a24e73defee90c033b9e028062bf1a8fd4d00ffc71836a7639076347c1c610a5d3cbbc33178716ef09be70d6fc907bb1a98c1aed0cb"' }>
                                            <li class="link">
                                                <a href="components/ThirdQuestionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThirdQuestionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThirdQuestionPageRoutingModule.html" data-type="entity-link" >ThirdQuestionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ZonePagePageModule.html" data-type="entity-link" >ZonePagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ZonePagePageModule-ce198134c744bc6821d45619ec580877b403bf9e33094f8ae9fbebbc11ad6c3f02f3d8cdeeb305cdf68e08e3807254314d8573b58e703dcbc4cd95b3f95c816e"' : 'data-target="#xs-components-links-module-ZonePagePageModule-ce198134c744bc6821d45619ec580877b403bf9e33094f8ae9fbebbc11ad6c3f02f3d8cdeeb305cdf68e08e3807254314d8573b58e703dcbc4cd95b3f95c816e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ZonePagePageModule-ce198134c744bc6821d45619ec580877b403bf9e33094f8ae9fbebbc11ad6c3f02f3d8cdeeb305cdf68e08e3807254314d8573b58e703dcbc4cd95b3f95c816e"' :
                                            'id="xs-components-links-module-ZonePagePageModule-ce198134c744bc6821d45619ec580877b403bf9e33094f8ae9fbebbc11ad6c3f02f3d8cdeeb305cdf68e08e3807254314d8573b58e703dcbc4cd95b3f95c816e"' }>
                                            <li class="link">
                                                <a href="components/ZonePagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZonePagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ZonePagePageRoutingModule.html" data-type="entity-link" >ZonePagePageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});